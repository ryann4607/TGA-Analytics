import { YearData } from '../types';

export const STATIC_DATA: Record<number, YearData> = {
  2024: {
    year: 2024,
    summary: "2024 was a battle between the charm of platformers and the scale of RPGs. Astro Bot took the crown, proving that pure fun and polish can triumph over massive open worlds, while Balatro represented a historic moment for indie solitaire games in the GOTY lineup.",
    winner: {
      name: "Astro Bot",
      developer: "Team Asobi",
      publisher: "Sony Interactive Entertainment",
      isIndie: false,
      estimatedBudgetUSD: "$40M",
      estimatedTeamSize: 65,
      description: "A joyous 3D platformer celebrating PlayStation history with inventive mechanics and polish.",
      budgetNumeric: 40,
      totalNominations: 7,
      totalWins: 4
    },
    nominees: [
      {
        name: "Balatro",
        developer: "LocalThunk",
        publisher: "Playstack",
        isIndie: true,
        estimatedBudgetUSD: "$0.5M",
        estimatedTeamSize: 1,
        description: "A hypnotic poker-themed roguelike deck-builder that became a viral sensation.",
        budgetNumeric: 0.5,
        totalNominations: 5,
        totalWins: 1
      },
      {
        name: "Final Fantasy VII Rebirth",
        developer: "Square Enix",
        publisher: "Square Enix",
        isIndie: false,
        estimatedBudgetUSD: "$180M",
        estimatedTeamSize: 350,
        description: "The massive second chapter in the FF7 remake project, expanding the world significantly.",
        budgetNumeric: 180,
        totalNominations: 7,
        totalWins: 2
      },
      {
        name: "Metaphor: ReFantazio",
        developer: "Studio Zero",
        publisher: "Atlus",
        isIndie: false,
        estimatedBudgetUSD: "$70M",
        estimatedTeamSize: 120,
        description: "A high-fantasy RPG from the creative minds behind Persona 3, 4, and 5.",
        budgetNumeric: 70,
        totalNominations: 6,
        totalWins: 1
      },
      {
        name: "Black Myth: Wukong",
        developer: "Game Science",
        publisher: "Game Science",
        isIndie: true,
        estimatedBudgetUSD: "$70M",
        estimatedTeamSize: 140,
        description: "An action RPG rooted in Chinese mythology that broke concurrent player records.",
        budgetNumeric: 70,
        totalNominations: 4,
        totalWins: 0
      },
      {
        name: "Elden Ring: Shadow of the Erdtree",
        developer: "FromSoftware",
        publisher: "Bandai Namco",
        isIndie: false,
        estimatedBudgetUSD: "$50M",
        estimatedTeamSize: 300,
        description: "A massive expansion to the 2022 GOTY winner that rivals full games in scope.",
        budgetNumeric: 50,
        totalNominations: 4,
        totalWins: 0
      }
    ],
    sourceUrls: [{ title: "The Game Awards 2024 Winners", uri: "https://thegameawards.com/nominees/game-of-the-year" }]
  },
  2023: {
    year: 2023,
    summary: "A historic year for RPGs. Larian Studios' Baldur's Gate 3 swept the awards, redefining expectations for player choice and narrative depth in the genre.",
    winner: {
      name: "Baldur's Gate 3",
      developer: "Larian Studios",
      publisher: "Larian Studios",
      isIndie: false,
      estimatedBudgetUSD: "$100M",
      estimatedTeamSize: 450,
      description: "A massive D&D RPG offering unprecedented player freedom and narrative branching.",
      budgetNumeric: 100,
      totalNominations: 8,
      totalWins: 6
    },
    nominees: [
      {
        name: "Alan Wake 2",
        developer: "Remedy Entertainment",
        publisher: "Epic Games Publishing",
        isIndie: false,
        estimatedBudgetUSD: "$75M",
        estimatedTeamSize: 130,
        description: "A survival horror masterpiece blending live-action footage with intense gameplay.",
        budgetNumeric: 75,
        totalNominations: 8,
        totalWins: 3
      },
      {
        name: "The Legend of Zelda: Tears of the Kingdom",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$100M+",
        estimatedTeamSize: 300,
        description: "The sequel to BOTW that introduced revolutionary physics-based building mechanics.",
        budgetNumeric: 100,
        totalNominations: 5,
        totalWins: 1
      },
      {
        name: "Marvel's Spider-Man 2",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$315M",
        estimatedTeamSize: 350,
        description: "A blockbuster superhero action game featuring both Peter Parker and Miles Morales.",
        budgetNumeric: 315,
        totalNominations: 7,
        totalWins: 0
      },
      {
        name: "Resident Evil 4",
        developer: "Capcom",
        publisher: "Capcom",
        isIndie: false,
        estimatedBudgetUSD: "$80M",
        estimatedTeamSize: 150,
        description: "A faithful yet modern reimagining of the survival horror classic.",
        budgetNumeric: 80,
        totalNominations: 3,
        totalWins: 0
      },
      {
        name: "Super Mario Bros. Wonder",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$50M",
        estimatedTeamSize: 100,
        description: "A psychedelic evolution of the classic 2D scrolling Mario formula.",
        budgetNumeric: 50,
        totalNominations: 5,
        totalWins: 1
      }
    ],
    sourceUrls: [{ title: "TGA 2023", uri: "https://thegameawards.com/history/year-2023" }]
  },
  2022: {
    year: 2022,
    summary: "The clash of titans between Elden Ring and God of War Ragnarök defined 2022. Elden Ring ultimately took the top prize for its revolutionary open-world design.",
    winner: {
      name: "Elden Ring",
      developer: "FromSoftware",
      publisher: "Bandai Namco",
      isIndie: false,
      estimatedBudgetUSD: "$200M",
      estimatedTeamSize: 300,
      description: "A challenging open-world RPG created in collaboration with George R.R. Martin.",
      budgetNumeric: 200,
      totalNominations: 7,
      totalWins: 4
    },
    nominees: [
      {
        name: "God of War Ragnarök",
        developer: "Santa Monica Studio",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$200M",
        estimatedTeamSize: 400,
        description: "The epic conclusion to Kratos and Atreus's Norse saga.",
        budgetNumeric: 200,
        totalNominations: 10,
        totalWins: 6
      },
      {
        name: "A Plague Tale: Requiem",
        developer: "Asobo Studio",
        publisher: "Focus Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$40M",
        estimatedTeamSize: 250,
        description: "A narrative-driven adventure set in a rat-infested medieval France.",
        budgetNumeric: 40,
        totalNominations: 5,
        totalWins: 0
      },
      {
        name: "Horizon Forbidden West",
        developer: "Guerrilla Games",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$212M",
        estimatedTeamSize: 300,
        description: "A visually stunning open-world action RPG set in a post-apocalyptic west.",
        budgetNumeric: 212,
        totalNominations: 7,
        totalWins: 0
      },
      {
        name: "Stray",
        developer: "BlueTwelve Studio",
        publisher: "Annapurna Interactive",
        isIndie: true,
        estimatedBudgetUSD: "$10M",
        estimatedTeamSize: 20,
        description: "A cyberpunk adventure played from the perspective of a cat.",
        budgetNumeric: 10,
        totalNominations: 6,
        totalWins: 2
      },
      {
        name: "Xenoblade Chronicles 3",
        developer: "Monolith Soft",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 150,
        description: "A massive JRPG with a deep story about war and the value of life.",
        budgetNumeric: 60,
        totalNominations: 3,
        totalWins: 0
      }
    ],
    sourceUrls: [{ title: "TGA 2022", uri: "https://thegameawards.com/history/year-2022" }]
  },
  2021: {
    year: 2021,
    summary: "A surprising year where a pure co-op game, It Takes Two, won the top honor, highlighting the industry's appreciation for innovative gameplay mechanics.",
    winner: {
      name: "It Takes Two",
      developer: "Hazelight Studios",
      publisher: "EA Originals",
      isIndie: false,
      estimatedBudgetUSD: "$25M",
      estimatedTeamSize: 65,
      description: "A genre-bending co-op adventure about a couple repairing their relationship.",
      budgetNumeric: 25,
      totalNominations: 5,
      totalWins: 3
    },
    nominees: [
      {
        name: "Deathloop",
        developer: "Arkane Lyon",
        publisher: "Bethesda Softworks",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 150,
        description: "A stylistic FPS involving time loops and assassination puzzles.",
        budgetNumeric: 60,
        totalNominations: 9,
        totalWins: 2
      },
      {
        name: "Metroid Dread",
        developer: "MercurySteam",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$40M",
        estimatedTeamSize: 100,
        description: "The first original 2D Metroid story in 19 years.",
        budgetNumeric: 40,
        totalNominations: 2,
        totalWins: 1
      },
      {
        name: "Psychonauts 2",
        developer: "Double Fine",
        publisher: "Xbox Game Studios",
        isIndie: false,
        estimatedBudgetUSD: "$30M",
        estimatedTeamSize: 70,
        description: "A platformer exploring the human mind with humor and heart.",
        budgetNumeric: 30,
        totalNominations: 5,
        totalWins: 0
      },
      {
        name: "Ratchet & Clank: Rift Apart",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$80M",
        estimatedTeamSize: 250,
        description: "A technical showcase for the PS5 SSD with instant dimension hopping.",
        budgetNumeric: 80,
        totalNominations: 6,
        totalWins: 0
      },
      {
        name: "Resident Evil Village",
        developer: "Capcom",
        publisher: "Capcom",
        isIndie: false,
        estimatedBudgetUSD: "$100M",
        estimatedTeamSize: 200,
        description: "A gothic horror action game continuing Ethan Winters' story.",
        budgetNumeric: 100,
        totalNominations: 5,
        totalWins: 1
      }
    ],
    sourceUrls: [{ title: "TGA 2021", uri: "https://thegameawards.com/history/year-2021" }]
  },
  2020: {
    year: 2020,
    summary: "Dominated by The Last of Us Part II, which swept the awards despite controversy, showcasing the power of high-fidelity narrative gaming.",
    winner: {
      name: "The Last of Us Part II",
      developer: "Naughty Dog",
      publisher: "Sony Interactive Entertainment",
      isIndie: false,
      estimatedBudgetUSD: "$220M",
      estimatedTeamSize: 2000,
      description: "An intense, emotional journey of revenge and redemption in a post-pandemic USA.",
      budgetNumeric: 220,
      totalNominations: 11,
      totalWins: 7
    },
    nominees: [
      {
        name: "Ghost of Tsushima",
        developer: "Sucker Punch",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 160,
        description: "A beautiful open-world samurai game honoring classic cinema.",
        budgetNumeric: 60,
        totalNominations: 7,
        totalWins: 1
      },
      {
        name: "Hades",
        developer: "Supergiant Games",
        publisher: "Supergiant Games",
        isIndie: true,
        estimatedBudgetUSD: "$10M",
        estimatedTeamSize: 20,
        description: "A roguelike dungeon crawler combining fast action with deep storytelling.",
        budgetNumeric: 10,
        totalNominations: 9,
        totalWins: 2
      },
      {
        name: "Animal Crossing: New Horizons",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$50M",
        estimatedTeamSize: 150,
        description: "A social simulation game that became a global phenomenon during lockdown.",
        budgetNumeric: 50,
        totalNominations: 3,
        totalWins: 1
      },
      {
        name: "Doom Eternal",
        developer: "id Software",
        publisher: "Bethesda Softworks",
        isIndie: false,
        estimatedBudgetUSD: "$80M",
        estimatedTeamSize: 200,
        description: "The ultimate power fantasy FPS, faster and more aggressive than ever.",
        budgetNumeric: 80,
        totalNominations: 4,
        totalWins: 0
      },
      {
        name: "Final Fantasy VII Remake",
        developer: "Square Enix",
        publisher: "Square Enix",
        isIndie: false,
        estimatedBudgetUSD: "$140M",
        estimatedTeamSize: 300,
        description: "A modern reimagining of the iconic RPG's opening act in Midgar.",
        budgetNumeric: 140,
        totalNominations: 6,
        totalWins: 2
      }
    ],
    sourceUrls: [{ title: "TGA 2020", uri: "https://thegameawards.com/history/year-2020" }]
  },
  2019: {
    year: 2019,
    summary: "A diverse year where FromSoftware's punishing Sekiro took the win over strong narrative contenders and family favorites.",
    winner: {
      name: "Sekiro: Shadows Die Twice",
      developer: "FromSoftware",
      publisher: "Activision",
      isIndie: false,
      estimatedBudgetUSD: "$40M",
      estimatedTeamSize: 100,
      description: "A precise, punishing action-adventure focused on swordsmanship.",
      budgetNumeric: 40,
      totalNominations: 5,
      totalWins: 2
    },
    nominees: [
      {
        name: "Control",
        developer: "Remedy Entertainment",
        publisher: "505 Games",
        isIndie: false,
        estimatedBudgetUSD: "$33M",
        estimatedTeamSize: 80,
        description: "A supernatural third-person shooter set in a shifting brutalist building.",
        budgetNumeric: 33,
        totalNominations: 8,
        totalWins: 1
      },
      {
        name: "Death Stranding",
        developer: "Kojima Productions",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$80M",
        estimatedTeamSize: 100,
        description: "A polarizing 'strand game' about reconnecting a fractured society.",
        budgetNumeric: 80,
        totalNominations: 9,
        totalWins: 3
      },
      {
        name: "Resident Evil 2",
        developer: "Capcom",
        publisher: "Capcom",
        isIndie: false,
        estimatedBudgetUSD: "$70M",
        estimatedTeamSize: 800,
        description: "A masterful remake of the survival horror classic.",
        budgetNumeric: 70,
        totalNominations: 4,
        totalWins: 0
      },
      {
        name: "Super Smash Bros. Ultimate",
        developer: "Bandai Namco / Sora Ltd.",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 200,
        description: "The biggest crossover fighting game in history.",
        budgetNumeric: 60,
        totalNominations: 3,
        totalWins: 1
      },
      {
        name: "The Outer Worlds",
        developer: "Obsidian Entertainment",
        publisher: "Private Division",
        isIndie: false,
        estimatedBudgetUSD: "$30M",
        estimatedTeamSize: 70,
        description: "A satirical sci-fi RPG from the original creators of Fallout.",
        budgetNumeric: 30,
        totalNominations: 4,
        totalWins: 0
      }
    ],
    sourceUrls: [{ title: "TGA 2019", uri: "https://thegameawards.com/history/year-2019" }]
  },
  2018: {
    year: 2018,
    summary: "A heavy-hitter year with God of War and Red Dead Redemption 2 trading blows across all major categories.",
    winner: {
      name: "God of War",
      developer: "Santa Monica Studio",
      publisher: "Sony Interactive Entertainment",
      isIndie: false,
      estimatedBudgetUSD: "$100M",
      estimatedTeamSize: 300,
      description: "A bold reimagining of the franchise, focusing on fatherhood and Norse mythology.",
      budgetNumeric: 100,
      totalNominations: 8,
      totalWins: 3
    },
    nominees: [
      {
        name: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        isIndie: false,
        estimatedBudgetUSD: "$300M",
        estimatedTeamSize: 1600,
        description: "A sprawling, detailed open-world western outlaw epic.",
        budgetNumeric: 300,
        totalNominations: 8,
        totalWins: 4
      },
      {
        name: "Marvel's Spider-Man",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$100M",
        estimatedTeamSize: 250,
        description: "An exhilarating superhero game with perfect web-swinging mechanics.",
        budgetNumeric: 100,
        totalNominations: 7,
        totalWins: 0
      },
      {
        name: "Celeste",
        developer: "Maddy Makes Games",
        publisher: "Maddy Makes Games",
        isIndie: true,
        estimatedBudgetUSD: "$0.5M",
        estimatedTeamSize: 4,
        description: "A tight 2D platformer about climbing a mountain and overcoming anxiety.",
        budgetNumeric: 0.5,
        totalNominations: 4,
        totalWins: 2
      },
      {
        name: "Assassin's Creed Odyssey",
        developer: "Ubisoft Quebec",
        publisher: "Ubisoft",
        isIndie: false,
        estimatedBudgetUSD: "$100M+",
        estimatedTeamSize: 800,
        description: "A massive RPG taking the series to Ancient Greece.",
        budgetNumeric: 100,
        totalNominations: 4,
        totalWins: 0
      },
      {
        name: "Monster Hunter: World",
        developer: "Capcom",
        publisher: "Capcom",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 300,
        description: "The game that successfully brought the complex hunting series to a global audience.",
        budgetNumeric: 60,
        totalNominations: 3,
        totalWins: 1
      }
    ],
    sourceUrls: [{ title: "TGA 2018", uri: "https://thegameawards.com/history/year-2018" }]
  },
  2017: {
    year: 2017,
    summary: "Marked by the launch of the Nintendo Switch, with Breath of the Wild setting a new standard for open-world freedom.",
    winner: {
      name: "The Legend of Zelda: Breath of the Wild",
      developer: "Nintendo EPD",
      publisher: "Nintendo",
      isIndie: false,
      estimatedBudgetUSD: "$100M",
      estimatedTeamSize: 300,
      description: "A masterpiece that redefined open-world exploration with systemic physics.",
      budgetNumeric: 100,
      totalNominations: 6,
      totalWins: 3
    },
    nominees: [
      {
        name: "Super Mario Odyssey",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 150,
        description: "A globe-trotting 3D platformer full of charm and invention.",
        budgetNumeric: 60,
        totalNominations: 6,
        totalWins: 1
      },
      {
        name: "Horizon Zero Dawn",
        developer: "Guerrilla Games",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$47M",
        estimatedTeamSize: 250,
        description: "An original sci-fi RPG where humans hunt robot dinosaurs.",
        budgetNumeric: 47,
        totalNominations: 6,
        totalWins: 0
      },
      {
        name: "Persona 5",
        developer: "P-Studio",
        publisher: "Atlus",
        isIndie: false,
        estimatedBudgetUSD: "$30M",
        estimatedTeamSize: 70,
        description: "A stylish JRPG about high school phantom thieves.",
        budgetNumeric: 30,
        totalNominations: 4,
        totalWins: 1
      },
      {
        name: "PlayerUnknown's Battlegrounds",
        developer: "PUBG Corp",
        publisher: "Krafton",
        isIndie: false,
        estimatedBudgetUSD: "$15M",
        estimatedTeamSize: 30,
        description: "The battle royale shooter that exploded into a cultural phenomenon.",
        budgetNumeric: 15,
        totalNominations: 3,
        totalWins: 0
      }
    ],
    sourceUrls: [{ title: "TGA 2017", uri: "https://thegameawards.com/history/year-2017" }]
  },
  2016: {
    year: 2016,
    summary: "Blizzard's hero shooter Overwatch took the world by storm, signaling the rise of live-service multiplayer games.",
    winner: {
      name: "Overwatch",
      developer: "Blizzard Entertainment",
      publisher: "Blizzard",
      isIndie: false,
      estimatedBudgetUSD: "$50M",
      estimatedTeamSize: 100,
      description: "A polished, character-driven team shooter that defined a genre.",
      budgetNumeric: 50,
      totalNominations: 6,
      totalWins: 4
    },
    nominees: [
      {
        name: "Uncharted 4: A Thief's End",
        developer: "Naughty Dog",
        publisher: "Sony Interactive Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$100M+",
        estimatedTeamSize: 300,
        description: "The cinematic conclusion to Nathan Drake's treasure hunting saga.",
        budgetNumeric: 100,
        totalNominations: 8,
        totalWins: 2
      },
      {
        name: "Doom",
        developer: "id Software",
        publisher: "Bethesda Softworks",
        isIndie: false,
        estimatedBudgetUSD: "$40M",
        estimatedTeamSize: 150,
        description: "A fast, brutal reboot that returned the FPS king to its throne.",
        budgetNumeric: 40,
        totalNominations: 4,
        totalWins: 2
      },
      {
        name: "Inside",
        developer: "Playdead",
        publisher: "Playdead",
        isIndie: true,
        estimatedBudgetUSD: "$5M",
        estimatedTeamSize: 25,
        description: "A haunting, atmospheric puzzle-platformer from the creators of Limbo.",
        budgetNumeric: 5,
        totalNominations: 5,
        totalWins: 2
      },
      {
        name: "Titanfall 2",
        developer: "Respawn Entertainment",
        publisher: "EA",
        isIndie: false,
        estimatedBudgetUSD: "$60M",
        estimatedTeamSize: 90,
        description: "Featuring one of the best FPS campaigns in recent memory alongside great multiplayer.",
        budgetNumeric: 60,
        totalNominations: 4,
        totalWins: 0
      }
    ],
    sourceUrls: [{ title: "TGA 2016", uri: "https://thegameawards.com/history/year-2016" }]
  },
  2015: {
    year: 2015,
    summary: "The Witcher 3 set a new bar for open-world storytelling, solidifying CD Projekt Red as a top-tier studio.",
    winner: {
      name: "The Witcher 3: Wild Hunt",
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      isIndie: false,
      estimatedBudgetUSD: "$81M",
      estimatedTeamSize: 240,
      description: "A massive dark fantasy RPG with unparalleled writing and world-building.",
      budgetNumeric: 81,
      totalNominations: 6,
      totalWins: 2
    },
    nominees: [
      {
        name: "Bloodborne",
        developer: "FromSoftware",
        publisher: "Sony Computer Entertainment",
        isIndie: false,
        estimatedBudgetUSD: "$30M",
        estimatedTeamSize: 100,
        description: "A Lovecraftian action RPG known for its aggressive combat and atmosphere.",
        budgetNumeric: 30,
        totalNominations: 2,
        totalWins: 0
      },
      {
        name: "Fallout 4",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        isIndie: false,
        estimatedBudgetUSD: "$150M",
        estimatedTeamSize: 100,
        description: "An addictive open-world post-apocalyptic RPG.",
        budgetNumeric: 150,
        totalNominations: 3,
        totalWins: 0
      },
      {
        name: "Metal Gear Solid V: The Phantom Pain",
        developer: "Kojima Productions",
        publisher: "Konami",
        isIndie: false,
        estimatedBudgetUSD: "$80M",
        estimatedTeamSize: 200,
        description: "Hideo Kojima's final MGS game, featuring incredible stealth sandbox gameplay.",
        budgetNumeric: 80,
        totalNominations: 4,
        totalWins: 2
      },
      {
        name: "Super Mario Maker",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$20M",
        estimatedTeamSize: 50,
        description: "A delightful toolset allowing players to create and share their own Mario levels.",
        budgetNumeric: 20,
        totalNominations: 2,
        totalWins: 1
      }
    ],
    sourceUrls: [{ title: "TGA 2015", uri: "https://thegameawards.com/history/year-2015" }]
  },
  2014: {
    year: 2014,
    summary: "The inaugural year of The Game Awards. Dragon Age: Inquisition won in a relatively quiet year for the industry.",
    winner: {
      name: "Dragon Age: Inquisition",
      developer: "BioWare",
      publisher: "EA",
      isIndie: false,
      estimatedBudgetUSD: "$80M",
      estimatedTeamSize: 250,
      description: "A grand fantasy RPG where players lead an inquisition to save the world.",
      budgetNumeric: 80,
      totalNominations: 2,
      totalWins: 2
    },
    nominees: [
      {
        name: "Bayonetta 2",
        developer: "PlatinumGames",
        publisher: "Nintendo",
        isIndie: false,
        estimatedBudgetUSD: "$30M",
        estimatedTeamSize: 100,
        description: "A high-octane action game with spectacular set pieces.",
        budgetNumeric: 30,
        totalNominations: 2,
        totalWins: 0
      },
      {
        name: "Dark Souls II",
        developer: "FromSoftware",
        publisher: "Bandai Namco",
        isIndie: false,
        estimatedBudgetUSD: "$20M",
        estimatedTeamSize: 80,
        description: "The sequel to the genre-defining action RPG.",
        budgetNumeric: 20,
        totalNominations: 2,
        totalWins: 0
      },
      {
        name: "Hearthstone",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard",
        isIndie: false,
        estimatedBudgetUSD: "$10M",
        estimatedTeamSize: 15,
        description: "The digital card game that became a massive esports success.",
        budgetNumeric: 10,
        totalNominations: 3,
        totalWins: 0
      },
      {
        name: "Middle-earth: Shadow of Mordor",
        developer: "Monolith Productions",
        publisher: "Warner Bros.",
        isIndie: false,
        estimatedBudgetUSD: "$50M",
        estimatedTeamSize: 120,
        description: "An open-world action game introducing the innovative Nemesis System.",
        budgetNumeric: 50,
        totalNominations: 2,
        totalWins: 1
      }
    ],
    sourceUrls: [{ title: "TGA 2014", uri: "https://thegameawards.com/history/year-2014" }]
  }
};