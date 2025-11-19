import { GoogleGenAI, Type, Schema } from "@google/genai";
import { YearData, GameInfo } from "../types";
import { STATIC_DATA } from "../data/staticData";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Define the schema for the structured output
const gameSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Name of the game" },
    developer: { type: Type.STRING, description: "Main developer studio" },
    publisher: { type: Type.STRING, description: "Publisher" },
    isIndie: { type: Type.BOOLEAN, description: "Whether it is considered an indie game" },
    estimatedBudgetUSD: { type: Type.STRING, description: "Estimated development budget in USD formatted string (e.g. '$50M'). If unknown, estimate based on similar titles." },
    estimatedTeamSize: { type: Type.INTEGER, description: "Estimated peak team size during development." },
    description: { type: Type.STRING, description: "A short 1-sentence pitch of the game." },
    budgetNumeric: { type: Type.NUMBER, description: "Estimated budget in Millions of USD (number only) for charting purposes. e.g. 50 for $50M." },
    totalNominations: { type: Type.INTEGER, description: "Total number of categories this game was nominated for in this year's awards." },
    totalWins: { type: Type.INTEGER, description: "Total number of categories this game won in this year's awards." }
  },
  required: ["name", "developer", "isIndie", "estimatedBudgetUSD", "estimatedTeamSize", "description", "budgetNumeric", "totalNominations", "totalWins"]
};

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    year: { type: Type.INTEGER },
    summary: { type: Type.STRING, description: "A brief analysis of the trends for this specific year in gaming." },
    winner: gameSchema,
    nominees: {
      type: Type.ARRAY,
      items: gameSchema,
      description: "All other games nominated for the 'Game of the Year' category (excluding the winner)."
    }
  },
  required: ["year", "winner", "nominees", "summary"]
};

export const fetchYearData = async (year: number, bypassStatic = false): Promise<YearData> => {
  // Step 0: Check Prefetched/Static Data first
  // This ensures instant loading and accurate historical data without hallucinations
  if (!bypassStatic && STATIC_DATA[year]) {
    console.log(`Serving static data for ${year}`);
    // Return a copy to prevent mutation
    return JSON.parse(JSON.stringify(STATIC_DATA[year]));
  }

  try {
    // Step 1: Perform Google Search to get accurate, up-to-date data
    // This solves the hallucination issue for recent years (2024) and future predictions (2025)
    const searchPrompt = `Find detailed information about The Game Awards ${year}.

    ${year === 2025 ? 'IMPORTANT: Specifically check the Wikipedia page "https://en.wikipedia.org/wiki/The_Game_Awards_2025" for the official list of nominees and winners if available.' : ''}

    1. Identify the Game of the Year WINNER (or predicted frontrunner if ${year} is in the future).
    2. Identify ALL other nominees for the "Game of the Year" category. (There are usually 5 or 6 total games in this category).
    3. For each of these games (Winner + GOTY Nominees), find:
       - Developer and Publisher
       - Whether it's Indie or AAA
       - Estimated Development Budget and Team Size (look for specific articles, industry reports, or Wikipedia entries).
       - The EXACT number of Nominations received across ALL categories.
       - The EXACT number of Wins received.
    
    If the awards for ${year} have not happened yet, explicitly search for "The Game Awards ${year} Game of the Year predictions" to find the most discussed contenders.
    `;

    const searchResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: searchPrompt,
      config: {
        tools: [{ googleSearch: {} }],
        // Note: We cannot use responseSchema or responseMimeType with googleSearch
      },
    });

    const searchContext = searchResponse.text;
    
    // Extract grounding chunks (sources)
    const sources = searchResponse.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map(chunk => chunk.web)
      .filter(web => web !== undefined && web !== null)
      .map(web => ({ title: web.title || "Source", uri: web.uri || "#" }))
      // Deduplicate based on URI
      .filter((v, i, a) => a.findIndex(t => t.uri === v.uri) === i) || [];

    // Step 2: Extract structured data from the search results
    const extractResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a data extraction expert. Based ONLY on the following text provided from a search result, extract the data into the required JSON format.
      
      SEARCH CONTEXT:
      ${searchContext}
      
      Requirements:
      - Ensure 'year' is ${year}.
      - Include the Winner and ALL other Game of the Year nominees found in the text.
      - If exact budget/team size numbers are missing in the text, provide a realistic estimate based on the studio size and game scope mentioned.
      - Ensure 'totalNominations' and 'totalWins' are numbers extracted from the text.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.1, // High precision for extraction
      },
    });

    if (!extractResponse.text) {
      throw new Error("No structured data received from Gemini");
    }

    const data = JSON.parse(extractResponse.text) as YearData;
    
    // Attach the sources from Step 1 to the final data object
    data.sourceUrls = sources;
    
    return data;
  } catch (error) {
    console.error("Error fetching data from Gemini:", error);
    throw error;
  }
};