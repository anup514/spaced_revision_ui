export const courseDetailData = {
    101: {
        title: "UPSC GS Foundation: Comprehensive 2026",
        totalMastery: 72,
        purchaseDate: "2024-01-15", // Format: YYYY-MM-DD
        expiryDate: "2026-12-31", // Format: YYYY-MM-DD
        nextEMIDueDate: "2025-02-15", // Format: YYYY-MM-DD (optional, only for EMI purchases)
        emiDetails: { // EMI information (optional, only for EMI purchases)
            totalInstallments: 12,
            paidInstallments: 3,
            emiAmount: 2500,
            firstPaymentDate: "2024-02-15" // Format: YYYY-MM-DD
        },
        sections: [
            // GS-I: History
            {
                id: "ancient-history",
                title: "Ancient Indian History",
                gsPaper: "GS-I",
                lessons: [
                    { id: 101, title: "Indus Valley Civilization", duration: "42:15", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 102, title: "Vedic Period", duration: "38:20", mastery: 0, status: 'locked', flashcards: 15, mcqs: 10 },
                    { id: 103, title: "Mahajanapadas & Rise of Magadha", duration: "45:30", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 104, title: "Mauryan Empire", duration: "50:10", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 105, title: "Post-Mauryan Period", duration: "40:25", mastery: 0, status: 'locked', flashcards: 16, mcqs: 11 },
                    { id: 106, title: "Gupta Empire", duration: "48:45", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 107, title: "South Indian Kingdoms", duration: "44:30", mastery: 0, status: 'locked', flashcards: 17, mcqs: 12 },
                ]
            },
            {
                id: "medieval-history",
                title: "Medieval Indian History",
                gsPaper: "GS-I",
                lessons: [
                    { id: 201, title: "Early Medieval Period (750-1200 AD)", duration: "46:20", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 202, title: "Delhi Sultanate", duration: "52:15", mastery: 0, status: 'locked', flashcards: 24, mcqs: 16 },
                    { id: 203, title: "Mughal Empire - Babur to Akbar", duration: "55:30", mastery: 0, status: 'locked', flashcards: 26, mcqs: 18 },
                    { id: 204, title: "Mughal Empire - Jahangir to Aurangzeb", duration: "50:45", mastery: 0, status: 'locked', flashcards: 23, mcqs: 15 },
                    { id: 205, title: "Decline of Mughals & Regional Powers", duration: "48:10", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 206, title: "Vijayanagara & Bahmani Kingdoms", duration: "42:30", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                ]
            },
            {
                id: "modern-history",
                title: "Modern Indian History",
                gsPaper: "GS-I",
                lessons: [
                    { id: 301, title: "Advent of Europeans", duration: "48:30", mastery: 30, status: 'fading', flashcards: 20, mcqs: 12 },
                    { id: 302, title: "British Expansion in India", duration: "52:20", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 303, title: "The Revolt of 1857", duration: "55:00", mastery: 0, status: 'locked', flashcards: 25, mcqs: 15 },
                    { id: 304, title: "Socio-Religious Reform Movements", duration: "46:15", mastery: 0, status: 'locked', flashcards: 20, mcqs: 13 },
                    { id: 305, title: "Rise of Nationalism (1885-1905)", duration: "50:30", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 306, title: "Moderate & Extremist Phase", duration: "44:45", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 307, title: "Revolutionary Movements", duration: "42:20", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 308, title: "Gandhi Era (1915-1947)", duration: "58:30", mastery: 0, status: 'locked', flashcards: 28, mcqs: 19 },
                    { id: 309, title: "Partition & Independence", duration: "51:15", mastery: 0, status: 'locked', flashcards: 24, mcqs: 17 },
                ]
            },
            // GS-I: Geography
            {
                id: "physical-geography",
                title: "Physical Geography",
                gsPaper: "GS-I",
                lessons: [
                    { id: 401, title: "Earth's Structure & Interior", duration: "42:15", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 402, title: "Geomorphology - Landforms", duration: "48:30", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 403, title: "Climatology - Atmosphere", duration: "50:20", mastery: 0, status: 'locked', flashcards: 24, mcqs: 16 },
                    { id: 404, title: "Oceanography", duration: "46:45", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 405, title: "Biogeography & Soils", duration: "44:10", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                ]
            },
            {
                id: "indian-geography",
                title: "Indian Geography",
                gsPaper: "GS-I",
                lessons: [
                    { id: 501, title: "Physical Features of India", duration: "52:30", mastery: 0, status: 'locked', flashcards: 25, mcqs: 17 },
                    { id: 502, title: "Drainage System", duration: "48:15", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 503, title: "Climate of India", duration: "46:20", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 504, title: "Natural Vegetation & Wildlife", duration: "44:45", mastery: 0, status: 'locked', flashcards: 20, mcqs: 13 },
                    { id: 505, title: "Agriculture & Irrigation", duration: "50:30", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 506, title: "Mineral & Energy Resources", duration: "47:10", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                ]
            },
            {
                id: "human-geography",
                title: "Human Geography",
                gsPaper: "GS-I",
                lessons: [
                    { id: 601, title: "Population Distribution & Growth", duration: "42:30", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 602, title: "Migration & Urbanization", duration: "40:15", mastery: 0, status: 'locked', flashcards: 17, mcqs: 11 },
                    { id: 603, title: "Settlement Patterns", duration: "38:45", mastery: 0, status: 'locked', flashcards: 16, mcqs: 10 },
                ]
            },
            // GS-I: Society
            {
                id: "indian-society",
                title: "Indian Society",
                gsPaper: "GS-I",
                lessons: [
                    { id: 701, title: "Salient Features of Indian Society", duration: "44:20", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 702, title: "Diversity of India", duration: "46:30", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 703, title: "Role of Women & Women's Organization", duration: "42:15", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 704, title: "Population & Associated Issues", duration: "48:45", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 705, title: "Poverty & Developmental Issues", duration: "45:30", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 706, title: "Urbanization & Its Challenges", duration: "43:20", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                ]
            },
            // GS-II: Polity
            {
                id: "polity",
                title: "Indian Polity & Constitution",
                gsPaper: "GS-II",
                lessons: [
                    { id: 801, title: "Historical Background", duration: "45:20", mastery: 95, status: 'mastered', flashcards: 12, mcqs: 8 },
                    { id: 802, title: "Preamble & Salient Features", duration: "38:15", mastery: 40, status: 'fading', flashcards: 8, mcqs: 5 },
                    { id: 803, title: "Fundamental Rights (Part I)", duration: "52:10", mastery: 85, status: 'healthy', flashcards: 15, mcqs: 10 },
                    { id: 804, title: "Fundamental Rights (Part II)", duration: "48:30", mastery: 0, status: 'locked', flashcards: 14, mcqs: 9 },
                    { id: 805, title: "Directive Principles of State Policy", duration: "50:45", mastery: 0, status: 'locked', flashcards: 16, mcqs: 11 },
                    { id: 806, title: "Fundamental Duties", duration: "35:20", mastery: 0, status: 'locked', flashcards: 10, mcqs: 7 },
                    { id: 807, title: "Union Executive - President", duration: "46:15", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 808, title: "Union Executive - Prime Minister & Council", duration: "44:30", mastery: 0, status: 'locked', flashcards: 17, mcqs: 11 },
                    { id: 809, title: "Parliament - Structure & Functions", duration: "52:20", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 810, title: "Parliamentary Procedures", duration: "48:45", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 811, title: "Judiciary - Supreme Court", duration: "50:30", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 812, title: "Judiciary - High Courts & Subordinate", duration: "46:10", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 813, title: "State Executive - Governor", duration: "42:25", mastery: 0, status: 'locked', flashcards: 16, mcqs: 11 },
                    { id: 814, title: "State Executive - CM & Council", duration: "40:15", mastery: 0, status: 'locked', flashcards: 15, mcqs: 10 },
                    { id: 815, title: "State Legislature", duration: "44:30", mastery: 0, status: 'locked', flashcards: 17, mcqs: 12 },
                    { id: 816, title: "Local Government - Panchayati Raj", duration: "46:45", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 817, title: "Local Government - Municipalities", duration: "42:20", mastery: 0, status: 'locked', flashcards: 17, mcqs: 11 },
                    { id: 818, title: "Constitutional Bodies - CAG, EC, UPSC", duration: "50:10", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 819, title: "Non-Constitutional Bodies", duration: "45:30", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 820, title: "Constitutional Amendments", duration: "48:20", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                ]
            },
            {
                id: "governance",
                title: "Governance",
                gsPaper: "GS-II",
                lessons: [
                    { id: 901, title: "Governance - Concepts & Theories", duration: "44:15", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 902, title: "E-Governance & Digital India", duration: "46:30", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 903, title: "Citizen's Charters & RTI", duration: "42:45", mastery: 0, status: 'locked', flashcards: 17, mcqs: 11 },
                    { id: 904, title: "Transparency & Accountability", duration: "40:20", mastery: 0, status: 'locked', flashcards: 16, mcqs: 10 },
                    { id: 905, title: "Role of Civil Services", duration: "48:10", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 906, title: "Administrative Reforms", duration: "45:30", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                ]
            },
            {
                id: "social-justice",
                title: "Social Justice",
                gsPaper: "GS-II",
                lessons: [
                    { id: 1001, title: "Welfare Schemes for Vulnerable Sections", duration: "52:20", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 1002, title: "Issues Relating to Development", duration: "48:45", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1003, title: "Health, Education & Human Resources", duration: "50:30", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1004, title: "Poverty & Hunger", duration: "46:15", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                ]
            },
            {
                id: "international-relations",
                title: "International Relations",
                gsPaper: "GS-II",
                lessons: [
                    { id: 1101, title: "India's Foreign Policy - Evolution", duration: "50:45", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1102, title: "India & Neighbours - Pakistan", duration: "48:30", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1103, title: "India & Neighbours - China", duration: "52:15", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 1104, title: "India & Neighbours - Other Countries", duration: "46:20", mastery: 0, status: 'locked', flashcards: 20, mcqs: 13 },
                    { id: 1105, title: "India & West Asia", duration: "44:45", mastery: 0, status: 'locked', flashcards: 19, mcqs: 12 },
                    { id: 1106, title: "India & Central Asia", duration: "42:30", mastery: 0, status: 'locked', flashcards: 18, mcqs: 11 },
                    { id: 1107, title: "India & Southeast Asia", duration: "48:10", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1108, title: "India & Africa", duration: "45:25", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 1109, title: "India & USA", duration: "50:15", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1110, title: "India & Russia", duration: "44:30", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 1111, title: "Regional & Global Groupings", duration: "52:40", mastery: 0, status: 'locked', flashcards: 24, mcqs: 17 },
                    { id: 1112, title: "International Organizations - UN", duration: "50:20", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1113, title: "International Organizations - Others", duration: "48:45", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                ]
            },
            // GS-III: Economy
            {
                id: "indian-economy",
                title: "Indian Economy",
                gsPaper: "GS-III",
                lessons: [
                    { id: 1201, title: "National Income & Accounting", duration: "50:30", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1202, title: "Economic Growth & Development", duration: "48:15", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 1203, title: "Planning in India", duration: "52:45", mastery: 0, status: 'locked', flashcards: 24, mcqs: 17 },
                    { id: 1204, title: "Mobilization of Resources", duration: "46:20", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 1205, title: "Banking & Financial Institutions", duration: "54:30", mastery: 0, status: 'locked', flashcards: 25, mcqs: 18 },
                    { id: 1206, title: "Monetary Policy & RBI", duration: "50:15", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1207, title: "Fiscal Policy & Budget", duration: "52:20", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 1208, title: "Public Finance", duration: "48:45", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1209, title: "Agriculture & Food Security", duration: "55:10", mastery: 0, status: 'locked', flashcards: 26, mcqs: 19 },
                    { id: 1210, title: "Industry & Infrastructure", duration: "52:30", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 1211, title: "Services Sector", duration: "46:15", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 1212, title: "Investment Models", duration: "44:40", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 1213, title: "Land Reforms & Agriculture", duration: "48:20", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 1214, title: "Liberalization & Globalization", duration: "50:45", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                ]
            },
            {
                id: "science-technology",
                title: "Science & Technology",
                gsPaper: "GS-III",
                lessons: [
                    { id: 1301, title: "Science & Technology - Policy", duration: "44:30", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 1302, title: "Space Technology", duration: "48:15", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1303, title: "Nuclear Technology", duration: "46:45", mastery: 0, status: 'locked', flashcards: 20, mcqs: 13 },
                    { id: 1304, title: "Biotechnology", duration: "50:20", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1305, title: "IT & Communication Technology", duration: "52:30", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 1306, title: "Nanotechnology", duration: "42:15", mastery: 0, status: 'locked', flashcards: 17, mcqs: 11 },
                    { id: 1307, title: "Robotics & AI", duration: "48:45", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1308, title: "Defense Technology", duration: "46:20", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                ]
            },
            {
                id: "environment",
                title: "Environment & Ecology",
                gsPaper: "GS-III",
                lessons: [
                    { id: 1401, title: "Ecosystems & Biodiversity", duration: "52:15", mastery: 0, status: 'locked', flashcards: 23, mcqs: 16 },
                    { id: 1402, title: "Climate Change", duration: "54:30", mastery: 0, status: 'locked', flashcards: 25, mcqs: 18 },
                    { id: 1403, title: "Environmental Pollution", duration: "50:45", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1404, title: "Conservation & Protected Areas", duration: "48:20", mastery: 0, status: 'locked', flashcards: 20, mcqs: 14 },
                    { id: 1405, title: "Environmental Laws & Policies", duration: "46:15", mastery: 0, status: 'locked', flashcards: 19, mcqs: 13 },
                    { id: 1406, title: "Disaster Management", duration: "50:30", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                ]
            },
            {
                id: "security",
                title: "Security",
                gsPaper: "GS-III",
                lessons: [
                    { id: 1501, title: "Internal Security - Challenges", duration: "52:40", mastery: 0, status: 'locked', flashcards: 24, mcqs: 17 },
                    { id: 1502, title: "Terrorism & Extremism", duration: "50:15", mastery: 0, status: 'locked', flashcards: 22, mcqs: 15 },
                    { id: 1503, title: "Naxalism & Left Wing Extremism", duration: "48:30", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1504, title: "Insurgency in Northeast", duration: "46:45", mastery: 0, status: 'locked', flashcards: 20, mcqs: 13 },
                    { id: 1505, title: "Border Management", duration: "44:20", mastery: 0, status: 'locked', flashcards: 18, mcqs: 12 },
                    { id: 1506, title: "Cyber Security", duration: "50:10", mastery: 0, status: 'locked', flashcards: 21, mcqs: 14 },
                    { id: 1507, title: "Money Laundering", duration: "42:30", mastery: 0, status: 'locked', flashcards: 17, mcqs: 11 },
                    { id: 1508, title: "Security Forces & Agencies", duration: "48:15", mastery: 0, status: 'locked', flashcards: 20, mcqs: 13 },
                ]
            },
        ]
    },
    102: {
        title: "Comprehensive Geography for UPSC 2025",
        totalMastery: 58,
        purchaseDate: "2024-06-01", // Format: YYYY-MM-DD
        expiryDate: "2025-12-31", // Format: YYYY-MM-DD
        sections: [
            {
                id: "physical-geo",
                title: "Physical Geography",
                gsPaper: "GS-I",
                lessons: [
                    { id: 1, title: "Earth's Structure", duration: "42:15", mastery: 75, status: 'healthy', flashcards: 18, mcqs: 12 },
                    { id: 2, title: "Climate Systems", duration: "50:20", mastery: 45, status: 'fading', flashcards: 22, mcqs: 15 },
                ]
            },
            {
                id: "human-geo",
                title: "Human Geography",
                gsPaper: "GS-I",
                lessons: [
                    { id: 3, title: "Population Distribution", duration: "38:00", mastery: 0, status: 'locked', flashcards: 15, mcqs: 10 },
                ]
            }
        ]
    }
};


export const repository = {
    flashcards: [
        { id: 1, sid: 'polity', tid: 1, source: 'educator', q: "Which act first introduced the 'Dual System' of control in India?", a: "Pitt's India Act of 1784. It distinguished between the commercial and political functions of the Company." },
        { id: 2, sid: 'polity', tid: 1, source: 'educator', q: "Creation of Governor-General of Bengal?", a: "Regulating Act of 1773. Warren Hastings became the first Governor-General." },
        { id: 3, sid: 'polity', tid: 2, source: 'educator', q: "What is the significance of the Preamble?", a: "The Preamble is the horoscope of our sovereign democratic republic, outlining the basic philosophy and fundamental values of the Constitution." },
        { id: 4, sid: 'polity', tid: 3, source: 'educator', q: "Which article deals with Right to Equality?", a: "Article 14-18. Article 14 provides equality before law and equal protection of laws." },
        { id: 5, sid: 'history', tid: 5, source: 'educator', q: "When did Vasco da Gama reach Calicut?", a: "May 20, 1498. He was welcomed by Zamorin." },
        { id: 6, sid: 'history', tid: 5, source: 'educator', q: "Which European power established the first factory in India?", a: "Portuguese. They established a factory at Cochin in 1503." },
        { id: 7, sid: 'eco', tid: 10, source: 'educator', q: "Who is considered the pioneer of National Income accounting in India?", a: "Dadabhai Naoroji (Drain of Wealth theory)." },
        { id: 8, sid: 'physical-geo', tid: 1, source: 'educator', q: "What is the Mohorovičić discontinuity?", a: "The boundary between the Earth's crust and mantle, located at an average depth of 35 km." },
        { id: 9, sid: 'physical-geo', tid: 2, source: 'educator', q: "What causes the Coriolis effect?", a: "The rotation of the Earth causes moving objects to be deflected to the right in the Northern Hemisphere and to the left in the Southern Hemisphere." },
        // Ancient Indian History - Indus Valley Civilization (tid: 101)
        { id: 10, sid: 'ancient-history', tid: 101, source: 'educator', q: "What are the two major cities of the Indus Valley Civilization?", a: "Harappa and Mohenjo-daro. Harappa was discovered first in 1921, and Mohenjo-daro (Mound of the Dead) was discovered in 1922. Both cities show remarkable urban planning with grid layouts.", dueDate: "2024-12-20" },
        { id: 11, sid: 'ancient-history', tid: 101, source: 'educator', q: "What is the Great Bath of Mohenjo-daro?", a: "The Great Bath is a large, watertight tank measuring 12m x 7m x 2.4m, considered the earliest public water tank in the ancient world. It was likely used for ritual bathing and religious ceremonies.", dueDate: "2024-12-18" },
        { id: 12, sid: 'ancient-history', tid: 101, source: 'educator', q: "What script did the Indus Valley people use?", a: "The Indus script, which remains undeciphered. It consists of about 400-500 signs, mostly found on seals. The script is written from right to left, as evidenced by overlapping signs.", dueDate: "2024-12-22" },
        // Ancient Indian History - Vedic Period (tid: 102)
        { id: 13, sid: 'ancient-history', tid: 102, source: 'educator', q: "What is the difference between Early Vedic and Later Vedic periods?", a: "Early Vedic (1500-1000 BCE) was pastoral and tribal, with Rig Veda as main text. Later Vedic (1000-600 BCE) saw agriculture, iron use, emergence of kingdoms, and composition of Yajur, Sama, and Atharva Vedas.", dueDate: "2024-12-23" },
        { id: 14, sid: 'ancient-history', tid: 102, source: 'educator', q: "What were the four varnas in Vedic society?", a: "Brahmins (priests), Kshatriyas (warriors/rulers), Vaishyas (traders/farmers), and Shudras (servants). The varna system evolved during the Later Vedic period and became more rigid over time.", dueDate: "2024-12-24" },
        { id: 15, sid: 'ancient-history', tid: 102, source: 'educator', q: "What is the significance of the Battle of Ten Kings (Dasarajna)?", a: "Described in Rig Veda, it was fought between King Sudas of Bharata tribe and a confederacy of ten tribes. Sudas won with the help of Vishwamitra, establishing Bharata supremacy in the region." },
        // Ancient Indian History - Mahajanapadas & Rise of Magadha (tid: 103)
        { id: 16, sid: 'ancient-history', tid: 103, source: 'educator', q: "What were the sixteen Mahajanapadas?", a: "Sixteen major kingdoms/republics that emerged in 6th century BCE: Kasi, Kosala, Anga, Magadha, Vajji, Malla, Chedi, Vatsa, Kuru, Panchala, Matsya, Surasena, Assaka, Avanti, Gandhara, and Kamboja." },
        { id: 17, sid: 'ancient-history', tid: 103, source: 'educator', q: "Why did Magadha become the most powerful Mahajanapada?", a: "Magadha had strategic location, rich iron deposits, fertile land, strong rulers (Bimbisara, Ajatashatru), control of trade routes, and powerful military. Its capital Rajagriha was naturally fortified." },
        { id: 18, sid: 'ancient-history', tid: 103, source: 'educator', q: "Who was Bimbisara and what were his achievements?", a: "Bimbisara (544-492 BCE) was the first important king of Magadha. He expanded through matrimonial alliances, conquered Anga, established Pataliputra as capital, and was a contemporary of both Buddha and Mahavira." },
        // Ancient Indian History - Mauryan Empire (tid: 104)
        { id: 19, sid: 'ancient-history', tid: 104, source: 'educator', q: "Who founded the Mauryan Empire and when?", a: "Chandragupta Maurya founded the Mauryan Empire in 322 BCE with the help of his mentor Chanakya (Kautilya). He overthrew the Nanda dynasty and established the first pan-Indian empire." },
        { id: 20, sid: 'ancient-history', tid: 104, source: 'educator', q: "What is the significance of Ashoka's Kalinga War?", a: "Fought in 261 BCE, it was the bloodiest war in Ashoka's reign. The massive destruction and loss of life led to Ashoka's conversion to Buddhism and adoption of Dhamma (righteousness) policy, renouncing war forever." },
        { id: 21, sid: 'ancient-history', tid: 104, source: 'educator', q: "What were the main features of Mauryan administration?", a: "Centralized administration with provinces, efficient bureaucracy, espionage system, standardized weights and measures, extensive road network, and welfare measures. The empire was divided into provinces ruled by royal princes." },
        // Ancient Indian History - Post-Mauryan Period (tid: 105)
        { id: 22, sid: 'ancient-history', tid: 105, source: 'educator', q: "Which foreign dynasties ruled parts of India after the Mauryas?", a: "Indo-Greeks (Bactrian Greeks), Scythians (Sakas), Parthians (Pahlavas), and Kushanas. The most significant were the Indo-Greeks who introduced Hellenistic art and the Kushanas who controlled the Silk Route." },
        { id: 23, sid: 'ancient-history', tid: 105, source: 'educator', q: "Who was Kanishka and why is he important?", a: "Kanishka (78-101 CE) was the greatest Kushana ruler. He started the Saka era (78 CE), patronized Buddhism (4th Buddhist Council), and his empire extended from Central Asia to Mathura. He made Peshawar his capital." },
        { id: 24, sid: 'ancient-history', tid: 105, source: 'educator', q: "What was the Satavahana dynasty known for?", a: "The Satavahanas (1st century BCE - 2nd century CE) ruled the Deccan and revived Vedic traditions. They issued coins with bilingual inscriptions (Prakrit and Brahmi), built Buddhist stupas, and had trade relations with Rome." },
        // Ancient Indian History - Gupta Empire (tid: 106)
        { id: 25, sid: 'ancient-history', tid: 106, source: 'educator', q: "Why is the Gupta period called the 'Golden Age of India'?", a: "The Gupta period (320-550 CE) saw remarkable achievements in literature (Kalidasa), mathematics (Aryabhata, concept of zero), astronomy, art (Ajanta caves), and science. It was a period of peace, prosperity, and cultural efflorescence." },
        { id: 26, sid: 'ancient-history', tid: 106, source: 'educator', q: "Who was Samudragupta and what were his achievements?", a: "Samudragupta (335-375 CE) was called the 'Napoleon of India' by V.A. Smith. He conducted the Digvijaya (conquest of the four quarters), issued gold coins, was a patron of arts, and his achievements are recorded in the Allahabad Pillar inscription." },
        { id: 27, sid: 'ancient-history', tid: 106, source: 'educator', q: "What were the main contributions of the Gupta period to science?", a: "Aryabhata wrote Aryabhatiya (mathematics and astronomy), concept of zero and decimal system developed, Sushruta Samhita (surgery), and advances in metallurgy (Iron Pillar of Delhi). The period also saw development of Indian numerals." },
        // Ancient Indian History - South Indian Kingdoms (tid: 107)
        { id: 28, sid: 'ancient-history', tid: 107, source: 'educator', q: "What were the three major South Indian kingdoms during the Sangam Age?", a: "The Cheras (Kerala), Cholas (Tamil Nadu), and Pandyas (Tamil Nadu). These three kingdoms are frequently mentioned in Sangam literature and were known as the 'Three Crowned Kings' (Muventar)." },
        { id: 29, sid: 'ancient-history', tid: 107, source: 'educator', q: "What is Sangam literature?", a: "Sangam literature consists of Tamil poems composed between 300 BCE and 300 CE. It includes Tolkappiyam (grammar), Ettutogai (eight anthologies), and Pattuppattu (ten songs), providing valuable information about early South Indian society, economy, and culture." },
        { id: 30, sid: 'ancient-history', tid: 107, source: 'educator', q: "What was the significance of the Chola naval expeditions?", a: "The Cholas, especially under Rajaraja I and Rajendra I, conducted naval expeditions to Sri Lanka, Maldives, and Southeast Asia (Srivijaya). They established trade networks and cultural influence, making the Chola Empire one of the most powerful maritime empires." },
    ],
    mcqs: [
        {
            id: 1, sid: 'polity', tid: 1, source: 'educator',
            question: "The 'System of Diarchy' was first introduced at the provincial level by which of the following acts?",
            options: [
                { text: "Indian Councils Act, 1909", exp: "Incorrect. Morley-Minto focused on communal representation." },
                { text: "Government of India Act, 1919", exp: "Correct! Also known as Montagu-Chelmsford Reforms, it introduced diarchy in provinces.", correct: true },
                { text: "Government of India Act, 1935", exp: "Incorrect. 1935 abolished provincial diarchy and proposed it for the Centre." },
                { text: "Indian Independence Act, 1947", exp: "Incorrect. This was purely for partition." }
            ]
        },
        {
            id: 2, sid: 'polity', tid: 2, source: 'educator',
            question: "The Preamble to the Indian Constitution was inspired by which country's constitution?",
            options: [
                { text: "United States", exp: "Partially correct, but not the primary inspiration.", correct: false },
                { text: "Ireland", exp: "Correct! The Preamble's language and structure were largely inspired by the Irish Constitution.", correct: true },
                { text: "United Kingdom", exp: "Incorrect. UK doesn't have a written constitution." },
                { text: "France", exp: "Incorrect. While some concepts are similar, the structure is different." }
            ]
        },
        {
            id: 3, sid: 'history', tid: 5, source: 'educator',
            question: "Which European power was the last to leave India?",
            options: [
                { text: "British", exp: "Incorrect. Left in 1947." },
                { text: "French", exp: "Incorrect. Left in 1954." },
                { text: "Portuguese", exp: "Correct! They left Goa only in 1961 after Operation Vijay.", correct: true },
                { text: "Dutch", exp: "Incorrect. Left much earlier after Treaty of London 1824." }
            ]
        },
        {
            id: 4, sid: 'physical-geo', tid: 1, source: 'educator',
            question: "What is the approximate thickness of the Earth's crust?",
            options: [
                { text: "5-10 km", exp: "Incorrect. This is too thin." },
                { text: "30-50 km", exp: "Correct! Continental crust averages 30-50 km, oceanic crust is 5-10 km.", correct: true },
                { text: "100-200 km", exp: "Incorrect. This is too thick." },
                { text: "500-1000 km", exp: "Incorrect. This is the mantle thickness." }
            ]
        },
        // Ancient Indian History - Indus Valley Civilization (tid: 101)
        {
            id: 5, sid: 'ancient-history', tid: 101, source: 'educator',
            question: "Which of the following is NOT a feature of Indus Valley Civilization?",
            options: [
                { text: "Grid-based town planning", exp: "Incorrect. Both Harappa and Mohenjo-daro had well-planned grid layouts.", correct: false },
                { text: "Underground drainage system", exp: "Incorrect. The cities had sophisticated drainage systems with covered drains.", correct: false },
                { text: "Horse-drawn chariots", exp: "Correct! There is no evidence of horses in the mature Harappan phase. Horses appear only in later periods.", correct: true },
                { text: "Standardized weights and measures", exp: "Incorrect. The civilization used standardized weights in a ratio of 16:1." }
            ],
            dueDate: "2024-12-19"
        },
        {
            id: 6, sid: 'ancient-history', tid: 101, source: 'educator',
            question: "The famous 'Dancing Girl' statue was found at which Harappan site?",
            options: [
                { text: "Harappa", exp: "Incorrect. The Dancing Girl was not found at Harappa." },
                { text: "Mohenjo-daro", exp: "Correct! The bronze Dancing Girl statue, about 4,500 years old, was discovered at Mohenjo-daro in 1926.", correct: true },
                { text: "Lothal", exp: "Incorrect. Lothal is known for its dockyard, not the Dancing Girl." },
                { text: "Kalibangan", exp: "Incorrect. Kalibangan is known for fire altars and ploughed fields." }
            ],
            dueDate: "2024-12-17"
        },
        {
            id: 7, sid: 'ancient-history', tid: 101, source: 'educator',
            question: "What was the main reason for the decline of the Indus Valley Civilization?",
            options: [
                { text: "Aryan invasion", exp: "Incorrect. The Aryan invasion theory is now largely discredited by modern scholars." },
                { text: "Climate change and environmental factors", exp: "Correct! Evidence suggests climate change, drying up of rivers (Ghaggar-Hakra), and environmental degradation led to the decline.", correct: true },
                { text: "Foreign conquest", exp: "Incorrect. There is no archaeological evidence of large-scale warfare or conquest." },
                { text: "Economic collapse", exp: "Incorrect. While trade declined, it was likely a consequence rather than the primary cause." }
            ],
            dueDate: "2024-12-21"
        },
        // Ancient Indian History - Vedic Period (tid: 102)
        {
            id: 8, sid: 'ancient-history', tid: 102, source: 'educator',
            question: "Which Veda is the oldest and contains 1028 hymns?",
            options: [
                { text: "Rig Veda", exp: "Correct! Rig Veda is the oldest of the four Vedas, composed around 1500-1000 BCE, containing 1028 hymns divided into 10 mandalas.", correct: true },
                { text: "Sama Veda", exp: "Incorrect. Sama Veda is derived from Rig Veda and is meant for chanting." },
                { text: "Yajur Veda", exp: "Incorrect. Yajur Veda contains prose formulas for rituals." },
                { text: "Atharva Veda", exp: "Incorrect. Atharva Veda contains spells and charms, composed later." }
            ]
        },
        {
            id: 9, sid: 'ancient-history', tid: 102, source: 'educator',
            question: "What was the main occupation of the Early Vedic people?",
            options: [
                { text: "Agriculture", exp: "Incorrect. Agriculture became important in the Later Vedic period." },
                { text: "Pastoralism", exp: "Correct! Early Vedic people were primarily pastoral, with cattle being the main form of wealth. They practiced limited agriculture.", correct: true },
                { text: "Trade", exp: "Incorrect. Trade developed later in the Vedic period." },
                { text: "Craftsmanship", exp: "Incorrect. While crafts existed, they were not the main occupation." }
            ]
        },
        {
            id: 10, sid: 'ancient-history', tid: 102, source: 'educator',
            question: "Which river is most frequently mentioned in the Rig Veda?",
            options: [
                { text: "Ganges", exp: "Incorrect. Ganges is mentioned but not as frequently." },
                { text: "Saraswati", exp: "Correct! The Saraswati (or Sarasvati) river is mentioned most frequently in Rig Veda. It was considered sacred and is now believed to be the Ghaggar-Hakra river system.", correct: true },
                { text: "Yamuna", exp: "Incorrect. Yamuna is mentioned but less frequently than Saraswati." },
                { text: "Indus", exp: "Incorrect. While important, it's not mentioned as frequently as Saraswati." }
            ]
        },
        // Ancient Indian History - Mahajanapadas & Rise of Magadha (tid: 103)
        {
            id: 11, sid: 'ancient-history', tid: 103, source: 'educator',
            question: "Which Mahajanapada was a republic (gana-sangha) rather than a monarchy?",
            options: [
                { text: "Magadha", exp: "Incorrect. Magadha was a monarchy under Bimbisara and Ajatashatru." },
                { text: "Vajji", exp: "Correct! Vajji (or Vrijji) was a confederacy of eight clans, including the Lichchhavis, and was a republic. It was one of the most powerful republics.", correct: true },
                { text: "Kosala", exp: "Incorrect. Kosala was a monarchy ruled by kings like Prasenajit." },
                { text: "Avanti", exp: "Incorrect. Avanti was a monarchy with its capital at Ujjain." }
            ]
        },
        {
            id: 12, sid: 'ancient-history', tid: 103, source: 'educator',
            question: "Who was the founder of the Haryanka dynasty of Magadha?",
            options: [
                { text: "Bimbisara", exp: "Incorrect. Bimbisara was the most famous ruler but not the founder." },
                { text: "Ajatashatru", exp: "Incorrect. Ajatashatru was Bimbisara's son who killed his father." },
                { text: "Brihadratha", exp: "Correct! Brihadratha is considered the founder of the Haryanka dynasty, though Bimbisara was its most prominent ruler.", correct: true },
                { text: "Udayin", exp: "Incorrect. Udayin was a later ruler who shifted the capital to Pataliputra." }
            ]
        },
        {
            id: 13, sid: 'ancient-history', tid: 103, source: 'educator',
            question: "Which city served as the first capital of Magadha?",
            options: [
                { text: "Pataliputra", exp: "Incorrect. Pataliputra became the capital later under Udayin." },
                { text: "Rajagriha", exp: "Correct! Rajagriha (modern Rajgir) was the first capital of Magadha, naturally fortified by hills. It was later shifted to Pataliputra.", correct: true },
                { text: "Vaishali", exp: "Incorrect. Vaishali was the capital of the Vajji republic, not Magadha." },
                { text: "Kaushambi", exp: "Incorrect. Kaushambi was the capital of Vatsa Mahajanapada." }
            ]
        },
        // Ancient Indian History - Mauryan Empire (tid: 104)
        {
            id: 14, sid: 'ancient-history', tid: 104, source: 'educator',
            question: "Which Greek ambassador visited the Mauryan court during Chandragupta's reign?",
            options: [
                { text: "Megasthenes", exp: "Correct! Megasthenes was sent by Seleucus Nicator and stayed at Chandragupta's court. He wrote 'Indica', providing valuable information about Mauryan India.", correct: true },
                { text: "Deimachus", exp: "Incorrect. Deimachus visited during Bindusara's reign." },
                { text: "Dionysius", exp: "Incorrect. Dionysius also visited during Bindusara's time." },
                { text: "Strabo", exp: "Incorrect. Strabo was a later Greek geographer who wrote about India based on earlier accounts." }
            ]
        },
        {
            id: 15, sid: 'ancient-history', tid: 104, source: 'educator',
            question: "What was the main administrative unit of the Mauryan Empire called?",
            options: [
                { text: "Janapada", exp: "Incorrect. Janapada was a term used in earlier periods." },
                { text: "Province", exp: "Correct! The Mauryan Empire was divided into provinces (like Uttarapatha, Dakshinapatha, etc.) ruled by royal princes called Kumaras or governors.", correct: true },
                { text: "District", exp: "Incorrect. Districts were smaller administrative units within provinces." },
                { text: "Village", exp: "Incorrect. Villages were the smallest administrative units." }
            ]
        },
        {
            id: 16, sid: 'ancient-history', tid: 104, source: 'educator',
            question: "Which Mauryan ruler is known for his policy of Dhamma?",
            options: [
                { text: "Chandragupta Maurya", exp: "Incorrect. Chandragupta is known for establishing the empire and his association with Chanakya." },
                { text: "Bindusara", exp: "Incorrect. Bindusara maintained the empire but didn't introduce Dhamma." },
                { text: "Ashoka", exp: "Correct! Ashoka adopted Dhamma (righteousness) after the Kalinga War, promoting moral and ethical principles through his edicts and rock inscriptions.", correct: true },
                { text: "Brihadratha", exp: "Incorrect. Brihadratha was the last Mauryan ruler." }
            ]
        },
        // Ancient Indian History - Post-Mauryan Period (tid: 105)
        {
            id: 17, sid: 'ancient-history', tid: 105, source: 'educator',
            question: "Which Kushana ruler started the Saka era in 78 CE?",
            options: [
                { text: "Kadphises I", exp: "Incorrect. Kadphises I was an earlier Kushana ruler." },
                { text: "Kadphises II", exp: "Incorrect. Kadphises II succeeded Kadphises I." },
                { text: "Kanishka", exp: "Correct! Kanishka started the Saka era in 78 CE, which is still used in the Indian national calendar. He was the greatest Kushana ruler.", correct: true },
                { text: "Huvishka", exp: "Incorrect. Huvishka was a later Kushana ruler." }
            ]
        },
        {
            id: 18, sid: 'ancient-history', tid: 105, source: 'educator',
            question: "The famous Gandhara school of art developed under which dynasty?",
            options: [
                { text: "Mauryas", exp: "Incorrect. Mauryan art was different in style." },
                { text: "Guptas", exp: "Incorrect. Gupta period had its own art style (Mathura and Sarnath schools)." },
                { text: "Kushanas", exp: "Correct! The Gandhara school of art, known for Greco-Buddhist style with Greek influence, flourished under the Kushanas, especially Kanishka.", correct: true },
                { text: "Satavahanas", exp: "Incorrect. Satavahanas had their own art style in the Deccan." }
            ]
        },
        {
            id: 19, sid: 'ancient-history', tid: 105, source: 'educator',
            question: "Which Satavahana ruler is known for his naval expeditions?",
            options: [
                { text: "Simuka", exp: "Incorrect. Simuka was the founder of the Satavahana dynasty." },
                { text: "Satakarni I", exp: "Incorrect. Satakarni I expanded the empire but is not specifically known for naval expeditions." },
                { text: "Gautamiputra Satakarni", exp: "Incorrect. He is known for military conquests, not specifically naval." },
                { text: "Yajna Sri Satakarni", exp: "Correct! Yajna Sri Satakarni (2nd century CE) is known for his naval expeditions and trade relations, as evidenced by coins and inscriptions.", correct: true }
            ]
        },
        // Ancient Indian History - Gupta Empire (tid: 106)
        {
            id: 20, sid: 'ancient-history', tid: 106, source: 'educator',
            question: "Who wrote the famous play 'Abhijnanasakuntalam'?",
            options: [
                { text: "Bhasa", exp: "Incorrect. Bhasa was an earlier playwright." },
                { text: "Kalidasa", exp: "Correct! Kalidasa, the greatest Sanskrit poet and dramatist, wrote 'Abhijnanasakuntalam' (Recognition of Shakuntala) during the Gupta period. He also wrote 'Meghaduta' and 'Raghuvamsa'.", correct: true },
                { text: "Bhavabhuti", exp: "Incorrect. Bhavabhuti was a later playwright." },
                { text: "Shudraka", exp: "Incorrect. Shudraka wrote 'Mrichchhakatika'." }
            ]
        },
        {
            id: 21, sid: 'ancient-history', tid: 106, source: 'educator',
            question: "Which Gupta ruler issued the largest number of gold coins?",
            options: [
                { text: "Chandragupta I", exp: "Incorrect. He started the Gupta era but didn't issue as many coins." },
                { text: "Samudragupta", exp: "Correct! Samudragupta issued the largest number of gold coins, including types showing him playing the veena, performing Ashvamedha, and as a conqueror.", correct: true },
                { text: "Chandragupta II", exp: "Incorrect. While he issued coins, not as many as Samudragupta." },
                { text: "Skandagupta", exp: "Incorrect. Skandagupta faced Hun invasions and issued fewer coins." }
            ]
        },
        {
            id: 22, sid: 'ancient-history', tid: 106, source: 'educator',
            question: "What was the main reason for the decline of the Gupta Empire?",
            options: [
                { text: "Internal revolts", exp: "Incorrect. While there were some revolts, they weren't the primary cause." },
                { text: "Hun invasions", exp: "Correct! The Hun invasions, especially under Toramana and Mihirakula, weakened the Gupta Empire significantly. Skandagupta initially repelled them, but later rulers couldn't.", correct: true },
                { text: "Economic collapse", exp: "Incorrect. The economy was relatively stable." },
                { text: "Religious conflicts", exp: "Incorrect. The period was known for religious tolerance." }
            ]
        },
        // Ancient Indian History - South Indian Kingdoms (tid: 107)
        {
            id: 23, sid: 'ancient-history', tid: 107, source: 'educator',
            question: "Which Chola ruler built the famous Brihadeshwara Temple at Thanjavur?",
            options: [
                { text: "Rajaraja I", exp: "Correct! Rajaraja I (985-1014 CE) built the Brihadeshwara Temple (also called Rajarajeshwara) dedicated to Shiva. It's a UNESCO World Heritage Site and an example of Dravidian architecture.", correct: true },
                { text: "Rajendra I", exp: "Incorrect. Rajendra I built the Gangaikonda Cholapuram temple." },
                { text: "Kulottunga I", exp: "Incorrect. He was a later Chola ruler." },
                { text: "Vijayalaya", exp: "Incorrect. Vijayalaya was the founder of the medieval Chola dynasty." }
            ]
        },
        {
            id: 24, sid: 'ancient-history', tid: 107, source: 'educator',
            question: "What was the main source of information about the Sangam Age?",
            options: [
                { text: "Archaeological excavations", exp: "Incorrect. While archaeology provides evidence, literature is the primary source." },
                { text: "Sangam literature", exp: "Correct! Sangam literature, consisting of Tamil poems composed between 300 BCE and 300 CE, is the main source of information about the Sangam Age, providing details about society, economy, and culture.", correct: true },
                { text: "Foreign accounts", exp: "Incorrect. Foreign accounts are limited for this period." },
                { text: "Inscriptions", exp: "Incorrect. While inscriptions exist, literature is more comprehensive." }
            ]
        },
        {
            id: 25, sid: 'ancient-history', tid: 107, source: 'educator',
            question: "Which South Indian kingdom was known for its pearl fisheries?",
            options: [
                { text: "Cheras", exp: "Incorrect. Cheras were known for spice trade." },
                { text: "Cholas", exp: "Incorrect. Cholas were known for naval power." },
                { text: "Pandyas", exp: "Correct! The Pandyas were known for their pearl fisheries along the coast. They had extensive trade in pearls, which were highly valued in ancient times.", correct: true },
                { text: "Pallavas", exp: "Incorrect. Pallavas were known for their architecture." }
            ]
        }
    ],
    mainsQuestions: [
        { id: 1, sid: 'polity', tid: 1, gs: 'GS-II', sub: 'Polity', q: "Examine the role of the 73rd and 74th Constitutional Amendment Acts in decentralizing power.", w: 250, t: 15 },
        { id: 2, sid: 'polity', tid: 2, gs: 'GS-II', sub: 'Polity', q: "The Preamble is the horoscope of our sovereign democratic republic. Discuss.", w: 150, t: 9 },
        { id: 3, sid: 'history', tid: 5, gs: 'GS-I', sub: 'History', q: "Explain how the Battle of Plassey laid the foundation of British Empire.", w: 250, t: 15 },
        { id: 4, sid: 'physical-geo', tid: 1, gs: 'GS-I', sub: 'Geography', q: "Discuss the significance of plate tectonics in understanding Earth's geological processes.", w: 200, t: 12 }
    ],
    notes: [
        { id: 1, sid: 'polity', tid: 1, source: 'educator', title: "Historical Background - Key Points", content: "• Regulating Act of 1773: First step by British Parliament to regulate East India Company\n• Pitt's India Act 1784: Introduced Dual System of Control\n• Charter Act of 1833: Made Governor-General of Bengal as Governor-General of India\n• Government of India Act 1858: Transferred power from Company to Crown\n• Indian Councils Act 1861: Introduced representative institutions\n• Morley-Minto Reforms 1909: Introduced separate electorates\n• Montagu-Chelmsford Reforms 1919: Introduced Diarchy\n• Government of India Act 1935: Most comprehensive act before independence" },
        { id: 2, sid: 'polity', tid: 2, source: 'educator', title: "Preamble - Important Concepts", content: "• Preamble is the horoscope of our Constitution\n• It declares India as Sovereign, Socialist, Secular, Democratic, Republic\n• Justice: Social, Economic, and Political\n• Liberty: Thought, Expression, Belief, Faith, Worship\n• Equality: Status and Opportunity\n• Fraternity: Dignity and Unity\n• Added by 42nd Amendment: Socialist, Secular, Integrity" },
        { id: 3, sid: 'polity', tid: 3, source: 'educator', title: "Fundamental Rights - Overview", content: "• Part III: Articles 12-35\n• Justiciable rights (can be enforced in court)\n• Six categories:\n  1. Right to Equality (14-18)\n  2. Right to Freedom (19-22)\n  3. Right against Exploitation (23-24)\n  4. Right to Freedom of Religion (25-28)\n  5. Cultural and Educational Rights (29-30)\n  6. Right to Constitutional Remedies (32)\n• Article 32: Heart and Soul of Constitution" },
        { id: 4, sid: 'history', tid: 5, source: 'educator', title: "Advent of Europeans - Timeline", content: "• 1498: Vasco da Gama reaches Calicut\n• 1503: Portuguese establish first factory at Cochin\n• 1600: English East India Company established\n• 1602: Dutch East India Company established\n• 1616: Danish East India Company established\n• 1664: French East India Company established\n• Portuguese: First to arrive, last to leave (1961)\n• British: Established trading posts, gradually expanded control" },
        { id: 5, sid: 'physical-geo', tid: 1, source: 'educator', title: "Earth's Structure - Layers", content: "• Crust: 5-70 km thick\n  - Continental: 30-50 km (granite)\n  - Oceanic: 5-10 km (basalt)\n• Mantle: 2900 km thick\n  - Upper mantle: Asthenosphere (plastic)\n  - Lower mantle: Solid\n• Core: 3470 km radius\n  - Outer core: Liquid (iron-nickel)\n  - Inner core: Solid (iron-nickel)\n• Mohorovičić Discontinuity: Crust-Mantle boundary\n• Gutenberg Discontinuity: Mantle-Core boundary" },
        // Ancient Indian History - Indus Valley Civilization (tid: 101)
        { id: 6, sid: 'ancient-history', tid: 101, source: 'educator', title: "Indus Valley Civilization - Key Features", content: "• Period: 2600-1900 BCE (Mature Harappan)\n• Major Cities: Harappa, Mohenjo-daro, Lothal, Kalibangan, Dholavira\n• Town Planning: Grid system, citadel and lower town, well-planned streets\n• Great Bath: Largest public water tank (12m x 7m x 2.4m)\n• Drainage: Sophisticated underground drainage system\n• Economy: Agriculture (wheat, barley), trade (seals), crafts (pottery, beads)\n• Script: Undeciphered, about 400-500 signs, written right to left\n• Religion: Mother Goddess, Pashupati seal, tree worship, phallic symbols\n• Decline: Climate change, drying of rivers, environmental degradation" },
        { id: 7, sid: 'ancient-history', tid: 101, source: 'educator', title: "Indus Valley - Important Sites", content: "• Harappa (Punjab, Pakistan): First discovered site (1921), granaries, cemetery\n• Mohenjo-daro (Sindh, Pakistan): 'Mound of the Dead', Great Bath, Great Granary\n• Lothal (Gujarat): Dockyard, bead-making factory, fire altars\n• Kalibangan (Rajasthan): Ploughed fields, fire altars, no citadel\n• Dholavira (Gujarat): Water management system, large reservoirs\n• Rakhigarhi (Haryana): Largest Harappan site in India\n• Banawali (Haryana): Pre-Harappan and Harappan phases\n• Surkotada (Gujarat): Horse bones (controversial)" },
        { id: 8, sid: 'ancient-history', tid: 101, source: 'educator', title: "Indus Valley - Art & Culture", content: "• Seals: Steatite seals with animal motifs (unicorn, bull, elephant), script\n• Pottery: Red and black ware, painted designs, wheel-made\n• Terracotta: Human and animal figurines, toys, carts\n• Bronze: Dancing Girl (Mohenjo-daro), Bull (Kalibangan), lost-wax technique\n• Beads: Carnelian, lapis lazuli, gold, shell, faience\n• Weights: Standardized in ratio of 16:1, made of chert\n• Trade: Extensive trade with Mesopotamia, Central Asia, Afghanistan\n• Script: Pictographic, about 400-500 signs, remains undeciphered" },
        // Ancient Indian History - Vedic Period (tid: 102)
        { id: 9, sid: 'ancient-history', tid: 102, source: 'educator', title: "Early Vedic Period (1500-1000 BCE)", content: "• Source: Rig Veda (1028 hymns, 10 mandalas)\n• Geography: Sapta Sindhu region (Punjab, Haryana)\n• Polity: Tribal, rajan (king), sabha and samiti (assemblies)\n• Society: Egalitarian, varna system not rigid, women had high status\n• Economy: Pastoral (cattle = wealth), limited agriculture, no private property\n• Religion: Nature worship (Indra, Agni, Varuna), yajnas (sacrifices)\n• Warfare: Frequent inter-tribal wars, cattle raids\n• Battle of Ten Kings: Sudas vs. confederacy of 10 tribes" },
        { id: 10, sid: 'ancient-history', tid: 102, source: 'educator', title: "Later Vedic Period (1000-600 BCE)", content: "• Sources: Yajur, Sama, Atharva Vedas, Brahmanas, Aranyakas, Upanishads\n• Geography: Expansion to Ganga-Yamuna doab, eastern regions\n• Polity: Emergence of kingdoms (janapadas), stronger monarchy\n• Society: Varna system rigidified, women's status declined, gotra system\n• Economy: Agriculture primary, iron use, trade, private property\n• Religion: Rituals complex, philosophy (Upanishads), concept of karma\n• Education: Gurukula system, oral tradition\n• Social divisions: Four varnas (Brahmins, Kshatriyas, Vaishyas, Shudras)" },
        { id: 11, sid: 'ancient-history', tid: 102, source: 'educator', title: "Vedic Literature - Overview", content: "• Four Vedas:\n  - Rig Veda: Oldest, 1028 hymns, 10 mandalas\n  - Sama Veda: Derived from Rig Veda, for chanting\n  - Yajur Veda: Prose formulas for rituals (Shukla & Krishna)\n  - Atharva Veda: Spells, charms, medicine\n• Brahmanas: Ritualistic texts, explain Vedic ceremonies\n• Aranyakas: 'Forest texts', philosophical, transition to Upanishads\n• Upanishads: Philosophical texts, concept of Brahman, Atman, Moksha\n• Vedangas: Six auxiliary sciences (Shiksha, Kalpa, Vyakarana, etc.)\n• Epics: Mahabharata and Ramayana (later additions)" },
        // Ancient Indian History - Mahajanapadas & Rise of Magadha (tid: 103)
        { id: 12, sid: 'ancient-history', tid: 103, source: 'educator', title: "Sixteen Mahajanapadas", content: "• Emerged in 6th century BCE, mentioned in Buddhist and Jain texts\n• Northern: Kasi, Kosala, Anga, Magadha, Vajji, Malla, Chedi, Vatsa, Kuru, Panchala, Matsya, Surasena\n• Western: Assaka, Avanti, Gandhara, Kamboja\n• Most powerful: Magadha, Kosala, Vatsa, Avanti\n• Republics (Gana-Sanghas): Vajji (Lichchhavis), Malla, Kamboja\n• Monarchies: Rest were kingdoms\n• Causes of rise: Iron use, agriculture, trade, urbanization, strong rulers\n• Magadha emerged as most powerful due to strategic advantages" },
        { id: 13, sid: 'ancient-history', tid: 103, source: 'educator', title: "Rise of Magadha - Factors", content: "• Strategic location: Surrounded by rivers, natural fortification\n• Rich resources: Iron deposits, fertile land, elephants\n• Strong rulers:\n  - Bimbisara (544-492 BCE): Matrimonial alliances, conquered Anga\n  - Ajatashatru (492-460 BCE): Killed father, expanded empire\n  - Udayin: Shifted capital to Pataliputra\n• Control of trade routes: Connected north and east India\n• Military strength: Large army, war elephants\n• Administrative efficiency: Well-organized bureaucracy\n• Capital: Rajagriha (naturally fortified), later Pataliputra" },
        { id: 14, sid: 'ancient-history', tid: 103, source: 'educator', title: "Bimbisara & Ajatashatru", content: "• Bimbisara (544-492 BCE):\n  - Founder of Haryanka dynasty's prominence\n  - Matrimonial alliances (Kosala, Vaishali, Madra)\n  - Conquered Anga, established Pataliputra\n  - Contemporary of Buddha and Mahavira\n  - Patronized both Buddhism and Jainism\n• Ajatashatru (492-460 BCE):\n  - Killed father Bimbisara to become king\n  - War with Kosala, defeated Vajji confederacy\n  - Used new weapons (rathamusala, mahashilakantaka)\n  - Patronized Buddhism (First Buddhist Council)\n  - Expanded Magadha significantly" },
        // Ancient Indian History - Mauryan Empire (tid: 104)
        { id: 15, sid: 'ancient-history', tid: 104, source: 'educator', title: "Mauryan Empire - Foundation", content: "• Founder: Chandragupta Maurya (322-298 BCE)\n• Mentor: Chanakya (Kautilya), author of Arthashastra\n• Overthrew: Nanda dynasty (Dhanananda)\n• Extent: From Afghanistan to Bengal, first pan-Indian empire\n• Sources: Arthashastra, Indica (Megasthenes), Mudrarakshasa\n• Administration: Centralized, divided into provinces\n• Capital: Pataliputra (modern Patna)\n• Foreign relations: Defeated Seleucus Nicator, received 500 elephants\n• End: Chandragupta became Jain, abdicated in favor of Bindusara" },
        { id: 16, sid: 'ancient-history', tid: 104, source: 'educator', title: "Ashoka the Great (268-232 BCE)", content: "• Accession: Killed 99 brothers (according to Buddhist texts)\n• Kalinga War (261 BCE): Bloodiest war, massive destruction\n• Conversion: Adopted Buddhism after Kalinga, became Dharmashoka\n• Dhamma: Policy of righteousness, moral principles\n• Edicts: Rock Edicts (14), Pillar Edicts (7), Minor Rock Edicts\n• Spread of Buddhism: Sent missionaries to Sri Lanka, Central Asia, etc.\n• Welfare: Hospitals for humans and animals, roads, rest houses\n• Tolerance: Respected all religions, promoted ethical conduct\n• Legacy: Greatest Mauryan ruler, model of ideal kingship" },
        { id: 17, sid: 'ancient-history', tid: 104, source: 'educator', title: "Mauryan Administration", content: "• Centralized administration with strong bureaucracy\n• Provinces: Ruled by Kumaras (royal princes) or governors\n• Districts: Headed by Pradeshikas (district officers)\n• Villages: Headed by Gramikas (village headmen)\n• Espionage: Large spy network (gudhapurushas)\n• Revenue: Land tax (1/6th of produce), trade taxes\n• Army: Large standing army, war elephants, chariots\n• Law: Based on Dharmashastras, severe punishments\n• Public works: Roads, irrigation, hospitals\n• Standardization: Weights, measures, currency" },
        // Ancient Indian History - Post-Mauryan Period (tid: 105)
        { id: 18, sid: 'ancient-history', tid: 105, source: 'educator', title: "Foreign Invasions - Indo-Greeks to Kushanas", content: "• Indo-Greeks (Bactrian Greeks, 2nd-1st century BCE):\n  - Menander (Milinda), capital Sakala\n  - Introduced Hellenistic art, coins with bilingual inscriptions\n• Scythians/Sakas (1st century BCE-1st century CE):\n  - Rudradaman (Junagadh inscription), ruled western India\n• Parthians/Pahlavas (1st century CE):\n  - Gondophares, limited rule in northwest\n• Kushanas (1st-3rd century CE):\n  - Kanishka (78-101 CE), greatest ruler\n  - Started Saka era (78 CE), patronized Buddhism\n  - Controlled Silk Route, capital Peshawar\n  - Gandhara art flourished" },
        { id: 19, sid: 'ancient-history', tid: 105, source: 'educator', title: "Satavahana Dynasty (1st century BCE-2nd century CE)", content: "• Region: Deccan (Maharashtra, Andhra, Karnataka)\n• Founder: Simuka\n• Capitals: Pratishthana (Paithan), Amaravati\n• Important rulers:\n  - Satakarni I: Expanded empire\n  - Gautamiputra Satakarni: Greatest ruler, defeated Sakas\n  - Yajna Sri Satakarni: Naval expeditions, trade\n• Administration: Feudal system, granted land to officials\n• Economy: Agriculture, trade (Roman trade), coinage\n• Religion: Vedic traditions, also patronized Buddhism\n• Art: Amaravati school of art, Buddhist stupas\n• Language: Prakrit (official), Sanskrit (literature)" },
        { id: 20, sid: 'ancient-history', tid: 105, source: 'educator', title: "Post-Mauryan - Cultural Developments", content: "• Art:\n  - Gandhara School: Greco-Buddhist style, Greek influence\n  - Mathura School: Indigenous style, red sandstone\n  - Amaravati School: Narrative reliefs, white marble\n• Literature:\n  - Milindapanho (Buddhist text, Menander)\n  - Gathasattasai (Prakrit poetry, Hala)\n• Trade: Extensive trade with Rome (pepper, spices, gems)\n• Coins: Gold, silver, copper coins, bilingual inscriptions\n• Religion: Buddhism spread, Mahayana developed, Jainism flourished\n• Architecture: Stupas (Sanchi, Bharhut), chaityas, viharas\n• Science: Advances in medicine, astronomy, mathematics" },
        // Ancient Indian History - Gupta Empire (tid: 106)
        { id: 21, sid: 'ancient-history', tid: 106, source: 'educator', title: "Gupta Empire - Political History", content: "• Founder: Sri Gupta (c. 240-280 CE)\n• Chandragupta I (320-335 CE): Started Gupta era (320 CE), married Lichchhavi princess\n• Samudragupta (335-375 CE): 'Napoleon of India', Digvijaya, Allahabad Pillar inscription\n• Chandragupta II (375-415 CE): Vikramaditya, golden age, Fa-Hien visited\n• Kumaragupta I (415-455 CE): Nalanda University, Hun threat began\n• Skandagupta (455-467 CE): Repelled Huns initially, last great ruler\n• Decline: Hun invasions (Toramana, Mihirakula), weak successors\n• Extent: Northern and central India, parts of Deccan\n• Administration: Decentralized, feudal elements" },
        { id: 22, sid: 'ancient-history', tid: 106, source: 'educator', title: "Gupta Period - Golden Age", content: "• Literature:\n  - Kalidasa: Abhijnanasakuntalam, Meghaduta, Raghuvamsa\n  - Vishakhadatta: Mudrarakshasa\n  - Shudraka: Mrichchhakatika\n  - Panchatantra, Hitopadesha\n• Science:\n  - Aryabhata: Aryabhatiya (mathematics, astronomy), concept of zero\n  - Varahamihira: Brihat Samhita, Pancha Siddhantika\n  - Brahmagupta: Brahma Sphuta Siddhanta\n• Art: Ajanta caves (paintings), Ellora (sculpture), Mathura and Sarnath schools\n• Architecture: Temples (Dashavatara, Deogarh), stupas\n• Metallurgy: Iron Pillar of Delhi (rust-resistant)\n• Trade: Extensive trade, gold coins (dinara)" },
        { id: 23, sid: 'ancient-history', tid: 106, source: 'educator', title: "Gupta Administration & Society", content: "• Administration:\n  - Decentralized, provinces (Bhuktis), districts (Vishayas)\n  - Feudal elements: Land grants to Brahmins, officials\n  - Village autonomy: Grama (village) assemblies\n• Society:\n  - Varna system: Brahmins dominant, Kshatriyas (rulers)\n  - Position of women: Declined, child marriage, sati (limited)\n  - Caste system: More rigid, untouchability increased\n• Economy:\n  - Agriculture: Advanced, irrigation, multiple crops\n  - Trade: Internal and external, guilds (shrenis)\n  - Currency: Gold coins (dinara), silver, copper\n• Religion:\n  - Hinduism: Revival, Vaishnavism, Shaivism\n  - Buddhism: Still patronized, Nalanda University\n  - Jainism: Continued, cave temples" },
        // Ancient Indian History - South Indian Kingdoms (tid: 107)
        { id: 24, sid: 'ancient-history', tid: 107, source: 'educator', title: "Sangam Age - Three Kingdoms", content: "• Period: 300 BCE - 300 CE\n• Three Crowned Kings (Muventar):\n  - Cheras: Kerala, capital Vanji, spice trade\n  - Cholas: Tamil Nadu (Kaveri delta), capital Uraiyur/Puhar\n  - Pandyas: Tamil Nadu (south), capital Madurai, pearl fisheries\n• Sangam Literature:\n  - Tolkappiyam: Tamil grammar\n  - Ettutogai: Eight anthologies\n  - Pattuppattu: Ten songs\n  - Provides information about society, economy, culture\n• Society: Five tinais (ecological zones), love and war themes\n• Economy: Agriculture, trade (Roman trade), crafts\n• Religion: Worship of Murugan, Kotravai, nature worship" },
        { id: 25, sid: 'ancient-history', tid: 107, source: 'educator', title: "Medieval Cholas (9th-13th century CE)", content: "• Founder: Vijayalaya (850 CE), captured Thanjavur\n• Aditya I: Expanded, defeated Pandyas and Pallavas\n• Parantaka I: Conquered Sri Lanka, title 'Maduraikonda'\n• Rajaraja I (985-1014 CE):\n  - Greatest Chola ruler, expanded empire\n  - Built Brihadeshwara Temple (Thanjavur)\n  - Naval expeditions to Sri Lanka, Maldives\n• Rajendra I (1014-1044 CE):\n  - Conquered Sri Lanka, defeated Pala king\n  - Built Gangaikonda Cholapuram\n  - Naval expedition to Srivijaya (Southeast Asia)\n• Administration: Well-organized, local self-government (sabhas)\n• Art: Dravidian architecture, bronze sculptures\n• Decline: Weak successors, rise of Pandyas, Hoysalas" },
        { id: 26, sid: 'ancient-history', tid: 107, source: 'educator', title: "South Indian Kingdoms - Culture", content: "• Architecture:\n  - Dravidian style: Gopurams, vimanas, mandapas\n  - Brihadeshwara Temple (Thanjavur): UNESCO World Heritage\n  - Meenakshi Temple (Madurai), Shore Temple (Mamallapuram)\n• Literature:\n  - Sangam literature (Tamil)\n  - Tevaram (Shaiva hymns), Divya Prabandham (Vaishnava)\n  - Kamban's Ramayana (Tamil)\n• Art: Bronze sculptures (Nataraja), stone sculptures\n• Trade: Extensive maritime trade, Southeast Asia, China\n• Administration: Local assemblies (sabhas, ur), inscriptions\n• Religion: Shaivism, Vaishnavism, Jainism, Buddhism\n• Society: Caste system, position of women varied" }
    ]
};
