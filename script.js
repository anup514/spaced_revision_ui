// Application State
const state = {
    isDark: false,
    stats: {
        mcqsDue: 42,
        flashcardsDue: 85,
        flashcardsDone: 1280,
        mcqsDone: 450,
        streak: 12,
        nextMilestone: 15
    },
    likedCourses: new Set(),
    myCourses: [
        {
            id: 101,
            title: "UPSC GS: Indian Polity Masterclass",
            instructor: "Dr. Arvind Sharma",
            progress: 65,
            nextDue: "12 Flashcards",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 102,
            title: "Comprehensive Geography for UPSC 2025",
            instructor: "Saira Banu",
            progress: 42,
            nextDue: "8 MCQs",
            image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80"
        }
    ],
    communityCourses: [
        {
            id: 1,
            title: "2025 Complete Economics for UPSC Civil Services Exam",
            instructor: { 
                name: "Vimal Singh, Senior Faculty", 
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vimal",
                bio: "Vimal Singh is a renowned Economics faculty with over 15 years of experience in teaching UPSC aspirants. He has mentored thousands of successful candidates and is known for his clear explanations of complex economic concepts. His expertise includes Indian Economy, Public Finance, and International Economics."
            },
            price: "12,999",
            originalPrice: "24,999",
            rating: 4.8,
            reviews: "12,450",
            ratingBreakdown: {
                content: 4.5,
                notes: 4.7,
                testSeries: 4.9
            },
            guestRatings: 125,
            category: "UPSC",
            isBestseller: true,
            students: "18.2k+",
            validity: "Till Exam",
            emi: "1,300",
            emiDuration: "10m",
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
            description: "Master Economics for UPSC with this comprehensive course covering all aspects of Indian Economy, Economic Development, and Public Finance. This course is designed to help you understand complex economic concepts through real-world examples and case studies. Perfect for both beginners and advanced learners preparing for the Civil Services Examination.",
            curriculum: [
                { module: "Introduction to Indian Economy", topics: ["Basic Concepts", "Economic Growth vs Development", "Planning in India"] },
                { module: "National Income Accounting", topics: ["GDP, GNP, NNP", "Methods of Calculation", "Recent Trends"] },
                { module: "Public Finance", topics: ["Budget Process", "Fiscal Policy", "Taxation System"] },
                { module: "Banking and Monetary Policy", topics: ["RBI Functions", "Monetary Policy Tools", "Banking Sector Reforms"] },
                { module: "International Economics", topics: ["Balance of Payments", "Foreign Trade", "WTO and Trade Agreements"] },
                { module: "Economic Development", topics: ["Poverty and Inequality", "Employment", "Sustainable Development"] }
            ],
            courseReviews: [
                {
                    id: 1,
                    reviewerName: "Priyadarshini Nirola",
                    reviewerInitials: "PN",
                    isVerified: true,
                    location: "India",
                    date: "Jan 7, 2026",
                    rating: 4,
                    text: "This is a good course. The prelims material is very structured, although I felt the test series could have more detailed explanations. Overall worth the investment for serious aspirants.",
                    helpfulCount: 12,
                    notHelpfulCount: 2
                },
                {
                    id: 2,
                    reviewerName: "Rahul Sharma",
                    reviewerInitials: "RS",
                    isVerified: true,
                    location: "Delhi, India",
                    date: "Dec 28, 2025",
                    rating: 5,
                    text: "Excellent course! The instructor explains complex economic concepts in a very clear manner. The notes are comprehensive and the test series is challenging yet fair.",
                    helpfulCount: 25,
                    notHelpfulCount: 1
                },
                {
                    id: 3,
                    reviewerName: "Anjali Patel",
                    reviewerInitials: "AP",
                    isVerified: false,
                    location: "Mumbai, India",
                    date: "Dec 15, 2025",
                    rating: 4,
                    text: "Good value for money. The content is well-organized and covers all important topics. Would recommend to fellow aspirants.",
                    helpfulCount: 8,
                    notHelpfulCount: 0
                }
            ]
        },
        {
            id: 2,
            title: "Logical Reasoning & Data Interpretation for CAT/Banking",
            instructor: { 
                name: "Sahil Khanna", 
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahil",
                bio: "Sahil Khanna is an expert in Quantitative Aptitude and Logical Reasoning with 12+ years of teaching experience. He has helped over 50,000 students crack CAT, Banking, and other competitive exams. His unique problem-solving techniques make complex topics easy to understand."
            },
            price: "9,450",
            originalPrice: "16,500",
            rating: 4.7,
            reviews: "8,210",
            ratingBreakdown: {
                content: 4.6,
                notes: 4.5,
                testSeries: 4.8
            },
            guestRatings: 89,
            category: "SSC/BANKING",
            isBestseller: false,
            students: "12k+",
            validity: "18 Months",
            emi: "1,050",
            emiDuration: "9m",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
            description: "Excel in Logical Reasoning and Data Interpretation with this comprehensive course designed for CAT, Banking, and SSC exams. Learn shortcut techniques, master data interpretation, and develop strong analytical skills. Includes practice questions, mock tests, and detailed solutions.",
            curriculum: [
                { module: "Logical Reasoning Basics", topics: ["Syllogisms", "Blood Relations", "Direction Sense", "Seating Arrangements"] },
                { module: "Advanced Logical Reasoning", topics: ["Puzzles", "Logical Sequences", "Statement-Conclusion", "Critical Reasoning"] },
                { module: "Data Interpretation Fundamentals", topics: ["Tables", "Bar Graphs", "Line Graphs", "Pie Charts"] },
                { module: "Advanced Data Interpretation", topics: ["Caselets", "Mixed Graphs", "Data Sufficiency", "Complex Calculations"] },
                { module: "Practice and Strategy", topics: ["Time Management", "Shortcut Techniques", "Mock Tests", "Previous Year Papers"] }
            ]
        },
        {
            id: 3,
            title: "Ancient & Medieval Indian History: Detailed Analysis",
            instructor: { 
                name: "Priya Deshmukh", 
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
                bio: "Dr. Priya Deshmukh is a distinguished History professor with a Ph.D. in Ancient Indian History. With 18 years of teaching experience, she specializes in making history engaging and memorable. Her teaching methodology focuses on connecting historical events with contemporary relevance."
            },
            price: "10,800",
            originalPrice: "21,000",
            rating: 4.9,
            reviews: "3,105",
            ratingBreakdown: {
                content: 4.8,
                notes: 5.0,
                testSeries: 4.9
            },
            guestRatings: 67,
            category: "UPSC",
            isBestseller: true,
            students: "5.4k+",
            validity: "Till Exam",
            emi: "900",
            emiDuration: "12m",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
            description: "Comprehensive coverage of Ancient and Medieval Indian History for UPSC preparation. This course provides in-depth analysis of major dynasties, cultural developments, and historical events. Learn through visual timelines, maps, and engaging narratives that make history come alive.",
            curriculum: [
                { module: "Prehistoric India", topics: ["Stone Age", "Indus Valley Civilization", "Vedic Period"] },
                { module: "Ancient Kingdoms", topics: ["Mauryan Empire", "Gupta Period", "Post-Gupta Kingdoms"] },
                { module: "Medieval India - Early Period", topics: ["Delhi Sultanate", "Mughal Empire - Early", "Regional Kingdoms"] },
                { module: "Medieval India - Later Period", topics: ["Mughal Empire - Later", "Maratha Empire", "Decline of Mughals"] },
                { module: "Cultural and Social History", topics: ["Art and Architecture", "Literature", "Religious Movements", "Social Structure"] }
            ]
        },
        {
            id: 4,
            title: "Modern Physics for JEE Advanced 2024",
            instructor: { 
                name: "Prof. Amit Verma", 
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                bio: "Prof. Amit Verma is a renowned Physics educator with 20+ years of experience. He has been a faculty at prestigious coaching institutes and has mentored numerous JEE toppers. His expertise in Modern Physics, Quantum Mechanics, and Nuclear Physics makes complex topics accessible to students."
            },
            price: "11,500",
            originalPrice: "18,999",
            rating: 4.9,
            reviews: "5,620",
            ratingBreakdown: {
                content: 4.9,
                notes: 4.8,
                testSeries: 5.0
            },
            guestRatings: 142,
            category: "JEE MAINS",
            isBestseller: true,
            students: "9k+",
            validity: "2 Years",
            emi: "1,150",
            emiDuration: "10m",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
            description: "Master Modern Physics concepts for JEE Advanced with this comprehensive course. Covering Quantum Mechanics, Nuclear Physics, and Atomic Structure, this course provides deep conceptual understanding along with extensive problem-solving practice. Perfect for JEE Advanced and other engineering entrance exams.",
            curriculum: [
                { module: "Dual Nature of Matter and Radiation", topics: ["Photoelectric Effect", "De Broglie Wavelength", "Compton Effect", "X-rays"] },
                { module: "Atoms and Nuclei", topics: ["Atomic Models", "Nuclear Reactions", "Radioactivity", "Nuclear Energy"] },
                { module: "Electronic Devices", topics: ["Semiconductors", "Diodes", "Transistors", "Logic Gates"] },
                { module: "Communication Systems", topics: ["Amplitude Modulation", "Frequency Modulation", "Digital Communication"] },
                { module: "Advanced Problem Solving", topics: ["Previous Year JEE Questions", "Conceptual Problems", "Numerical Practice"] }
            ]
        }
    ],
    currentPage: 'courses',
    testState: null,
    currentChatCourse: null,
    chats: {},
    chatReadStates: {}, // Track read messages: { courseId: Set of messageIds }
    notifications: [],
    // Course Detail State
    currentCourseId: null,
    currentCommunityCourseId: null,
    currentCourseView: 'global-recall',
    currentLessonId: 1,
    currentLessonTab: 'flashcards',
    revisionMode: null, // 'flashcards' or 'mcqs'
    revisionStep: 'mode', // 'mode', 'session', or 'completion'
    revisionQueueMode: 'flashcards', // 'flashcards' or 'mcqs' for revision queue
    revisionSession: null, // { dueCards: [], currentIndex: 0, completedCount: 0, cardType: 'flashcards'|'mcqs' }
    revealStates: {}, // Tracking which flashcard is revealed
    quizAnswers: {}, // Tracking selected answers in MCQs
    collapsedSections: new Set(), // Track which sections are collapsed
    courseDetailFilters: {
        gsPaper: 'All Papers',
        subject: 'All Subjects',
        topic: 'All Topics'
    },
    userContent: {
        flashcards: [],
        mcqs: [],
        notes: []
    },
    contentFilter: {
        notes: 'all',
        flashcards: 'all',
        mcqs: 'all'
    },
    lifetimeStats: {
        totalMastered: { flashcards: 0, mcqs: 0 },
        overallAccuracy: 0,
        streakHistory: [],
        activityData: {}, // Date-based activity
        milestones: [],
        progressTimeline: [],
        longestStreak: 0,
        currentStreak: 0
    },
    lifetimeAnalyticsPeriod: 'all-time' // 'all-time', 'last-year', 'last-6-months', 'last-month'
};

// Course Detail Data Repository
const courseDetailData = {
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

// Repository for flashcards, MCQs, and mains questions
const repository = {
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

// User Content Storage Functions
function loadUserContent() {
    try {
        const flashcards = localStorage.getItem('userFlashcards');
        const mcqs = localStorage.getItem('userMcqs');
        const notes = localStorage.getItem('userNotes');
        
        if (flashcards) {
            state.userContent.flashcards = JSON.parse(flashcards);
        }
        if (mcqs) {
            state.userContent.mcqs = JSON.parse(mcqs);
        }
        if (notes) {
            state.userContent.notes = JSON.parse(notes);
        }
    } catch (error) {
        console.warn('Error loading user content:', error);
    }
}

function saveUserContent(type) {
    try {
        const key = `user${type.charAt(0).toUpperCase() + type.slice(1)}`;
        const content = state.userContent[type];
        localStorage.setItem(key, JSON.stringify(content));
    } catch (error) {
        console.warn(`Error saving user ${type}:`, error);
    }
}

function addUserContent(type, item) {
    // Ensure item has source field
    if (!item.source) {
        item.source = 'user';
    }
    
    // Generate unique ID if not provided (use timestamp + random)
    if (!item.id) {
        item.id = Date.now() + Math.floor(Math.random() * 1000);
    }
    
    // Add to state
    state.userContent[type].push(item);
    
    // Save to localStorage
    saveUserContent(type);
    
    return item;
}

// Helper function to format video time (global)
function formatVideoTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// Helper function to format course validity (remaining time)
function formatCourseValidity(expiryDate) {
    if (!expiryDate) return '';
    
    const now = new Date();
    const expiry = new Date(expiryDate);
    expiry.setHours(23, 59, 59, 999); // Set to end of day
    
    const diffTime = expiry - now;
    
    if (diffTime < 0) {
        return 'Expired';
    }
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Expires today';
    } else if (diffDays < 7) {
        return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} remaining`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} remaining`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'} remaining`;
    } else {
        const years = Math.floor(diffDays / 365);
        const remainingDays = diffDays % 365;
        if (remainingDays >= 30) {
            const months = Math.floor(remainingDays / 30);
            return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'} remaining`;
        }
        return `${years} ${years === 1 ? 'year' : 'years'} remaining`;
    }
}

// Helper function to format EMI due date
function formatEMIDueDate(emiDueDate) {
    if (!emiDueDate) return '';
    
    const now = new Date();
    const dueDate = new Date(emiDueDate);
    dueDate.setHours(23, 59, 59, 999); // Set to end of day
    
    const diffTime = dueDate - now;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
        return 'Overdue';
    } else if (diffDays === 0) {
        return 'Due today';
    } else if (diffDays === 1) {
        return 'Due tomorrow';
    } else if (diffDays < 7) {
        return `Due in ${diffDays} days`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `Due in ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else {
        const months = Math.floor(diffDays / 30);
        return `Due in ${months} ${months === 1 ? 'month' : 'months'}`;
    }
}

// Helper function to get lesson info by ID
function getLessonInfo(lessonId) {
    const courseData = courseDetailData[state.currentCourseId];
    if (!courseData) return null;
    
    for (const section of courseData.sections) {
        const lesson = section.lessons.find(l => l.id === lessonId);
        if (lesson) {
            return { lesson, section };
        }
    }
    return null;
}

// Helper function to format date for display
function formatDateForDisplay(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Course Validity Modal Functions
function openCourseValidityModal(purchaseDate, expiryDate, nextEMIDueDate, emiDetails) {
    const modal = document.getElementById('course-validity-modal');
    const modalBody = document.getElementById('course-validity-modal-body');
    
    if (!modal || !modalBody) return;
    
    const purchaseDateFormatted = formatDateForDisplay(purchaseDate);
    const expiryDateFormatted = formatDateForDisplay(expiryDate);
    
    let modalHTML = `
        <div class="course-validity-info-item">
            <div class="course-validity-info-header">
                <i data-lucide="calendar-days"></i>
                <div class="course-validity-info-label">Purchase Date</div>
            </div>
            <div class="course-validity-info-value">${purchaseDateFormatted}</div>
        </div>
        <div class="course-validity-info-item">
            <div class="course-validity-info-header">
                <i data-lucide="calendar-check"></i>
                <div class="course-validity-info-label">Expiry Date</div>
            </div>
            <div class="course-validity-info-value">${expiryDateFormatted}</div>
        </div>
    `;
    
    // Add detailed EMI information if available
    if (emiDetails && nextEMIDueDate) {
        const emiDateFormatted = formatDateForDisplay(nextEMIDueDate);
        const remainingInstallments = emiDetails.totalInstallments - emiDetails.paidInstallments;
        const firstPaymentDateFormatted = emiDetails.firstPaymentDate ? formatDateForDisplay(emiDetails.firstPaymentDate) : 'N/A';
        const paymentProgress = (emiDetails.paidInstallments / emiDetails.totalInstallments) * 100;
        
        modalHTML += `
            <div class="course-validity-info-item course-emi-section">
                <div class="course-validity-info-header">
                    <i data-lucide="credit-card"></i>
                    <div class="course-validity-info-label">EMI Details</div>
                </div>
                <div class="course-emi-details-card">
                    <div class="course-emi-summary">
                        <div class="course-emi-summary-item">
                            <div class="course-emi-summary-label">
                                <i data-lucide="indian-rupee"></i>
                                EMI Amount
                            </div>
                            <div class="course-emi-summary-value">₹${emiDetails.emiAmount.toLocaleString('en-IN')}</div>
                        </div>
                        <div class="course-emi-progress-container">
                            <div class="course-emi-progress-header">
                                <span class="course-emi-progress-label">Payment Progress</span>
                                <span class="course-emi-progress-percentage">${Math.round(paymentProgress)}%</span>
                            </div>
                            <div class="course-emi-progress-bar">
                                <div class="course-emi-progress-fill" style="width: ${paymentProgress}%"></div>
                            </div>
                            <div class="course-emi-progress-stats">
                                <span class="course-emi-stat-item">
                                    <i data-lucide="check-circle-2"></i>
                                    ${emiDetails.paidInstallments} Paid
                                </span>
                                <span class="course-emi-stat-item">
                                    <i data-lucide="clock"></i>
                                    ${remainingInstallments} Remaining
                                </span>
                                <span class="course-emi-stat-item">
                                    <i data-lucide="layers"></i>
                                    ${emiDetails.totalInstallments} Total
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="course-emi-next-payment-card">
                        <div class="course-emi-next-payment-header">
                            <i data-lucide="arrow-right-circle"></i>
                            <div class="course-emi-next-payment-title">Next Payment</div>
                        </div>
                        <div class="course-emi-next-payment-details">
                            <div class="course-emi-next-payment-item">
                                <i data-lucide="calendar"></i>
                                <div>
                                    <div class="course-emi-next-payment-label">Date</div>
                                    <div class="course-emi-next-payment-value">${emiDateFormatted}</div>
                                </div>
                            </div>
                            <div class="course-emi-next-payment-item">
                                <i data-lucide="indian-rupee"></i>
                                <div>
                                    <div class="course-emi-next-payment-label">Amount</div>
                                    <div class="course-emi-next-payment-value">₹${emiDetails.emiAmount.toLocaleString('en-IN')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ${emiDetails.firstPaymentDate ? `
                    <div class="course-emi-first-payment">
                        <i data-lucide="calendar-days"></i>
                        <span>First Payment: ${firstPaymentDateFormatted}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    } else if (nextEMIDueDate) {
        // Fallback to simple EMI info if details not available
        const emiDateFormatted = formatDateForDisplay(nextEMIDueDate);
        modalHTML += `
            <div class="course-validity-info-item">
                <div class="course-validity-info-header">
                    <i data-lucide="credit-card"></i>
                    <div class="course-validity-info-label">Next EMI Payment Date</div>
                </div>
                <div class="course-validity-info-value">${emiDateFormatted}</div>
            </div>
        `;
    }
    
    modalBody.innerHTML = modalHTML;
    
    modal.classList.remove('hidden');
    lucide.createIcons();
}

function closeCourseValidityModal() {
    const modal = document.getElementById('course-validity-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function initCourseValidityModal() {
    const modal = document.getElementById('course-validity-modal');
    const closeBtn = document.getElementById('course-validity-modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCourseValidityModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCourseValidityModal();
            }
        });
    }
}

// Function to navigate to lesson video at timestamp
function navigateToVideoAtTimestamp(lessonId, timestamp) {
    state.currentLessonId = lessonId;
    state.currentLessonTab = 'flashcards';
    switchCourseView('lesson');
    
    // Wait for video to load and then seek to timestamp
    setTimeout(() => {
        const video = document.getElementById('course-video-player');
        if (video) {
            if (video.readyState >= 2) {
                // Video metadata loaded
                video.currentTime = timestamp;
            } else {
                // Wait for metadata
                video.addEventListener('loadedmetadata', () => {
                    video.currentTime = timestamp;
                }, { once: true });
            }
        }
    }, 100);
}

// Helper function to generate video source HTML for user-created content
function getVideoSourceHTML(item) {
    if (item.source !== 'user' || !item.time || item.time === undefined) {
        return '';
    }
    
    const lessonInfo = getLessonInfo(item.tid);
    if (!lessonInfo) return '';
    
    return `<div class="course-detail-video-source">
        <i data-lucide="video"></i>
        <span>From: <a href="#" class="course-detail-video-source-link" data-lesson-id="${item.tid}" data-timestamp="${item.time}">${lessonInfo.lesson.title}</a> at ${formatVideoTime(item.time)}</span>
    </div>`;
}

// Helper function to get difficulty level for MCQ
function getMCQDifficulty(mcq) {
    return mcq.difficulty || 'Basic';
}

// Helper function to format due date for MCQ
function formatMCQDueDate(mcq) {
    if (mcq.dueDate) {
        const now = new Date();
        const due = new Date(mcq.dueDate);
        const diffTime = due - now;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (diffDays < 0) {
            return 'Overdue';
        } else if (diffDays < 30) {
            const days = Math.round(diffDays);
            return `Due in ${days} ${days === 1 ? 'day' : 'days'}`;
        } else if (diffDays < 365) {
            const months = (diffDays / 30).toFixed(1);
            return `Due in ${months} months`;
        } else {
            const years = (diffDays / 365).toFixed(1);
            return `Due in ${years} ${years === '1.0' ? 'year' : 'years'}`;
        }
    }
    // Default: 2.6 months from now
    const defaultDue = new Date();
    defaultDue.setMonth(defaultDue.getMonth() + 2.6);
    return 'Due in 2.6 months';
}

// Report Modal Functions
let currentReportItemId = null;
let currentReportItemType = null; // 'mcq' or 'flashcard'

function openReportModal(itemId, itemType = 'mcq') {
    currentReportItemId = itemId;
    currentReportItemType = itemType;
    const modal = document.getElementById('report-mcq-modal');
    const modalBody = document.getElementById('report-mcq-modal-body');
    const modalTitle = document.querySelector('.report-mcq-modal-header h3');
    const otherInput = document.getElementById('report-mcq-other-input');
    const otherText = document.getElementById('report-mcq-other-text');
    const submitBtn = document.getElementById('report-mcq-submit-btn');
    
    // Update modal title
    if (modalTitle) {
        modalTitle.textContent = itemType === 'flashcard' ? 'Report Flashcard' : 'Report Question';
    }
    
    // Generate options based on item type
    let options = [];
    if (itemType === 'flashcard') {
        options = [
            { id: 'report-wrong-category', value: 'wrong-category', label: 'Wrong category' },
            { id: 'report-answer-incorrect', value: 'answer-incorrect', label: 'Answer is incorrect' },
            { id: 'report-incomplete-question', value: 'incomplete-question', label: 'Incomplete question' },
            { id: 'report-incomplete-answer', value: 'incomplete-answer', label: 'Incomplete answer' },
            { id: 'report-mistake-question', value: 'mistake-question', label: 'Mistake in question' },
            { id: 'report-mistake-answer', value: 'mistake-answer', label: 'Mistake in answer' },
            { id: 'report-poorly-formatted-question', value: 'poorly-formatted-question', label: 'Poorly formatted question' },
            { id: 'report-poorly-formatted-answer', value: 'poorly-formatted-answer', label: 'Poorly formatted answer' },
            { id: 'report-other', value: 'other', label: 'Other' }
        ];
    } else {
        // MCQ options
        options = [
            { id: 'report-wrong-category', value: 'wrong-category', label: 'Wrong category' },
            { id: 'report-answer-incorrect', value: 'answer-incorrect', label: 'Answer is incorrect' },
            { id: 'report-incomplete-question', value: 'incomplete-question', label: 'Incomplete question' },
            { id: 'report-mistake-question', value: 'mistake-question', label: 'Mistake in question' },
            { id: 'report-mistake-options', value: 'mistake-options', label: 'Mistake in options' },
            { id: 'report-poorly-formatted-question', value: 'poorly-formatted-question', label: 'Poorly formatted question' },
            { id: 'report-poorly-formatted-options', value: 'poorly-formatted-options', label: 'Poorly formatted options' },
            { id: 'report-other', value: 'other', label: 'Other' }
        ];
    }
    
    // Generate HTML for options
    const optionsHTML = options.map(opt => `
        <div class="report-mcq-option">
            <input type="radio" id="${opt.id}" name="report-reason" value="${opt.value}">
            <label for="${opt.id}">${opt.label}</label>
        </div>
    `).join('');
    
    // Update modal body
    if (modalBody) {
        modalBody.innerHTML = optionsHTML + `
            <div class="report-mcq-other-input hidden" id="report-mcq-other-input">
                <textarea id="report-mcq-other-text" placeholder="Please describe the issue..." rows="3"></textarea>
            </div>
        `;
    }
    
    // Reset form - get fresh references after HTML update
    const freshOtherText = document.getElementById('report-mcq-other-text');
    const freshOtherInput = document.getElementById('report-mcq-other-input');
    
    if (freshOtherText) {
        freshOtherText.value = '';
    }
    if (freshOtherInput) {
        freshOtherInput.classList.add('hidden');
    }
    if (submitBtn) {
        submitBtn.disabled = true;
    }
    
    // Re-initialize event listeners for the new radio buttons
    if (modal) {
        modal.classList.remove('hidden');
        initReportModalListeners();
        lucide.createIcons();
    }
}

function closeReportModal() {
    const modal = document.getElementById('report-mcq-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    currentReportItemId = null;
    currentReportItemType = null;
}

function initReportModalListeners() {
    const submitBtn = document.getElementById('report-mcq-submit-btn');
    const otherInput = document.getElementById('report-mcq-other-input');
    const otherText = document.getElementById('report-mcq-other-text');
    const radioButtons = document.querySelectorAll('input[name="report-reason"]');
    
    // Remove existing listeners by cloning and replacing (to avoid duplicates)
    radioButtons.forEach(radio => {
        const newRadio = radio.cloneNode(true);
        radio.parentNode.replaceChild(newRadio, radio);
    });
    
    // Handle radio button changes
    document.querySelectorAll('input[name="report-reason"]').forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                // Enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                }
                
                // Show/hide other input
                if (otherInput && otherText) {
                    if (radio.value === 'other') {
                        otherInput.classList.remove('hidden');
                        otherText.required = true;
                    } else {
                        otherInput.classList.add('hidden');
                        otherText.required = false;
                        otherText.value = '';
                    }
                }
            }
        });
    });
}

function initReportModal() {
    const modal = document.getElementById('report-mcq-modal');
    const closeBtn = document.getElementById('report-mcq-modal-close');
    const submitBtn = document.getElementById('report-mcq-submit-btn');
    const otherText = document.getElementById('report-mcq-other-text');
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeReportModal);
    }
    
    // Close on background click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeReportModal();
            }
        });
    }
    
    // Initialize listeners for initial content
    initReportModalListeners();
    
    // Submit button
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (submitBtn.disabled) return;
            
            const selectedRadio = document.querySelector('input[name="report-reason"]:checked');
            if (!selectedRadio) return;
            
            let reportData = {
                itemId: currentReportItemId,
                itemType: currentReportItemType,
                reason: selectedRadio.value
            };
            
            if (selectedRadio.value === 'other' && otherText) {
                reportData.otherText = otherText.value.trim();
                if (!reportData.otherText) {
                    alert('Please provide details for "Other" option');
                    return;
                }
            }
            
            // Here you would typically send the report to a server
            console.log('Report submitted:', reportData);
            
            // Show success message
            alert('Thank you for your feedback! Your report has been submitted.');
            
            closeReportModal();
        });
    }
}

// Video Player State
const videoPlayerState = {
    currentTime: 0,
    duration: 0,
    isPlaying: false,
    showControls: true,
    addMenuOpen: false,
    modalOpen: false,
    modalType: null,
    capturedTime: 0,
    fromSection: false, // Track if modal was opened from section (not video)
    volume: 1,
    isMuted: false,
    playbackRate: 1,
    isFullscreen: false,
    controlsTimeout: null
};

// Global function to open content modal from sections
function openContentModalFromSection(type) {
    videoPlayerState.modalOpen = true;
    videoPlayerState.modalType = type;
    videoPlayerState.capturedTime = null;
    videoPlayerState.fromSection = true;
    
    const modal = document.getElementById('video-content-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modalTitle) {
        const typeName = type === 'mcq' ? 'MCQ' : type.charAt(0).toUpperCase() + type.slice(1);
        modalTitle.textContent = `Add ${typeName}`;
    }
    
    if (modalBody) {
        if (type === 'note') {
            modalBody.innerHTML = `
                <textarea id="note-content-input" class="video-modal-textarea" placeholder="Type your note here..." rows="6"></textarea>
            `;
        } else if (type === 'flashcard') {
            modalBody.innerHTML = `
                <div class="video-modal-input-group">
                    <label>Question/Front</label>
                    <input type="text" id="flashcard-front-input" class="video-modal-input" placeholder="Enter question or term">
                </div>
                <div class="video-modal-input-group">
                    <label>Answer/Back</label>
                    <textarea id="flashcard-back-input" class="video-modal-textarea" placeholder="Enter answer or explanation" rows="4"></textarea>
                </div>
            `;
        } else if (type === 'mcq') {
            modalBody.innerHTML = `
                <div class="video-modal-input-group">
                    <label>Question</label>
                    <textarea id="mcq-question-input" class="video-modal-textarea" placeholder="Enter question" rows="3"></textarea>
                </div>
                <div class="video-modal-input-group">
                    <label>Options (one per line, mark correct answer with *)</label>
                    <textarea id="mcq-options-input" class="video-modal-textarea" placeholder="Option 1\n*Option 2 (correct)\nOption 3\nOption 4" rows="6"></textarea>
                </div>
            `;
        }
    }
    
    if (modal) {
        modal.classList.remove('hidden');
    }
    lucide.createIcons();
}

// Initialize Video Player
function initVideoPlayer() {
    const video = document.getElementById('course-video-player');
    const container = document.getElementById('video-player-container');
    if (!video || !container) {
        // Video player not in current view, skip initialization
        return;
    }
    
    // Reset video if needed
    video.load();

    const playPauseBtn = document.getElementById('video-play-pause');
    const playPauseIcon = document.getElementById('play-pause-icon');
    const addBtn = document.getElementById('video-add-btn');
    const addMenu = document.getElementById('video-add-menu');
    const modal = document.getElementById('video-content-modal');
    const modalClose = document.getElementById('modal-close');
    const modalCancel = document.getElementById('modal-cancel');
    const modalSave = document.getElementById('modal-save');
    const progressFill = document.getElementById('video-progress-fill');
    const seekInput = document.getElementById('video-seek');
    const timeDisplay = document.getElementById('video-time');
    const markersContainer = document.getElementById('video-markers');
    const muteBtn = document.getElementById('video-mute-btn');
    const volumeIcon = document.getElementById('volume-icon');
    const volumeSlider = document.getElementById('video-volume');
    const volumeGroup = document.querySelector('.video-volume-group');
    const speedBtn = document.getElementById('video-speed-btn');
    const speedText = document.getElementById('video-speed-text');
    const skipBackBtn = document.getElementById('video-skip-back');
    const skipForwardBtn = document.getElementById('video-skip-forward');
    const fullscreenBtn = document.getElementById('video-fullscreen-btn');
    const fullscreenIcon = document.getElementById('fullscreen-icon');
    const controlsOverlay = document.getElementById('video-player-controls');

    // Update video state
    function updateVideoState() {
        videoPlayerState.currentTime = video.currentTime;
        videoPlayerState.duration = video.duration || 0;
        videoPlayerState.isPlaying = !video.paused;

        // Update progress bar
        if (videoPlayerState.duration > 0) {
            const percent = (videoPlayerState.currentTime / videoPlayerState.duration) * 100;
            if (progressFill) progressFill.style.width = percent + '%';
            if (seekInput) seekInput.value = percent;
        }

        // Update time display
        if (timeDisplay) {
            timeDisplay.textContent = formatVideoTime(videoPlayerState.currentTime) + ' / ' + formatVideoTime(videoPlayerState.duration);
        }

        // Update play/pause icon
        if (playPauseIcon) {
            const iconName = videoPlayerState.isPlaying ? 'pause' : 'play';
            playPauseIcon.setAttribute('data-lucide', iconName);
            // Force icon update with slight delay to ensure DOM is ready
            setTimeout(() => {
                lucide.createIcons();
            }, 0);
        }

        // Update volume icon
        if (volumeIcon) {
            if (videoPlayerState.isMuted || videoPlayerState.volume === 0) {
                volumeIcon.setAttribute('data-lucide', 'volume-x');
            } else if (videoPlayerState.volume < 0.5) {
                volumeIcon.setAttribute('data-lucide', 'volume-1');
            } else {
                volumeIcon.setAttribute('data-lucide', 'volume-2');
            }
            lucide.createIcons();
        }

        // Update markers
        updateVideoMarkers();
    }
    
    function showControls() {
        if (controlsOverlay) {
            controlsOverlay.style.opacity = '1';
            videoPlayerState.showControls = true;
        }
        clearControlsTimeout();
        if (videoPlayerState.isPlaying && !videoPlayerState.addMenuOpen && !videoPlayerState.modalOpen) {
            videoPlayerState.controlsTimeout = setTimeout(() => {
                if (videoPlayerState.isPlaying) {
                    if (controlsOverlay) controlsOverlay.style.opacity = '0';
                    videoPlayerState.showControls = false;
                }
            }, 3000);
        }
    }
    
    function clearControlsTimeout() {
        if (videoPlayerState.controlsTimeout) {
            clearTimeout(videoPlayerState.controlsTimeout);
            videoPlayerState.controlsTimeout = null;
        }
    }

    function formatVideoTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function updateVideoMarkers() {
        if (!markersContainer || !videoPlayerState.duration) return;
        
        // Get current lesson
        const courseData = courseDetailData[state.currentCourseId];
        if (!courseData) return;
        
        let currentLesson = null;
        for (const section of courseData.sections) {
            currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
            if (currentLesson) break;
        }
        if (!currentLesson) return;

        // Get all user content for this lesson
        const allContent = [
            ...state.userContent.flashcards.filter(f => {
                for (const section of courseData.sections) {
                    if (section.lessons.some(l => l.id === currentLesson.id && section.id === f.sid)) {
                        return f.tid === currentLesson.id;
                    }
                }
                return false;
            }),
            ...state.userContent.mcqs.filter(m => {
                for (const section of courseData.sections) {
                    if (section.lessons.some(l => l.id === currentLesson.id && section.id === m.sid)) {
                        return m.tid === currentLesson.id;
                    }
                }
                return false;
            }),
            ...state.userContent.notes.filter(n => {
                for (const section of courseData.sections) {
                    if (section.lessons.some(l => l.id === currentLesson.id && section.id === n.sid)) {
                        return n.tid === currentLesson.id;
                    }
                }
                return false;
            })
        ];

        markersContainer.innerHTML = allContent.map(item => {
            const percent = (item.time / videoPlayerState.duration) * 100;
            const type = item.type || (item.q ? 'flashcard' : item.question ? 'mcq' : 'note');
            const color = type === 'flashcard' ? '#f59e0b' : type === 'mcq' ? '#6366f1' : '#3b82f6';
            return `<div class="video-marker" style="left: ${percent}%;" data-time="${item.time}" title="${type}">
                <div class="video-marker-dot" style="background-color: ${color}; border-color: ${color};"></div>
                <div class="video-marker-triangle" style="border-top-color: ${color};"></div>
            </div>`;
        }).join('');
        
        // Add click handlers to markers
        markersContainer.querySelectorAll('.video-marker').forEach(marker => {
            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                const time = parseFloat(marker.getAttribute('data-time'));
                video.currentTime = time;
            });
        });
    }

    // Play/Pause toggle
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasPlaying = videoPlayerState.isPlaying;
            if (wasPlaying) {
                video.pause();
            } else {
                video.play();
            }
            // Update icon immediately (before video events fire)
            if (playPauseIcon) {
                // Show pause icon when playing, play icon when paused
                playPauseIcon.setAttribute('data-lucide', wasPlaying ? 'play' : 'pause');
                const parent = playPauseIcon.parentElement;
                if (parent) {
                    lucide.createIcons(parent);
                } else {
                    lucide.createIcons();
                }
            }
            showControls();
        });
    }
    
    // Skip backward (10 seconds)
    if (skipBackBtn) {
        skipBackBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.currentTime = Math.max(0, video.currentTime - 10);
            showControls();
        });
    }
    
    // Skip forward (10 seconds)
    if (skipForwardBtn) {
        skipForwardBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.currentTime = Math.min(videoPlayerState.duration, video.currentTime + 10);
            showControls();
        });
    }
    
    // Volume controls
    if (muteBtn) {
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            videoPlayerState.isMuted = !videoPlayerState.isMuted;
            video.muted = videoPlayerState.isMuted;
            if (volumeSlider) {
                volumeSlider.value = videoPlayerState.isMuted ? 0 : videoPlayerState.volume;
            }
            updateVideoState();
            showControls();
        });
    }
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            videoPlayerState.volume = vol;
            videoPlayerState.isMuted = vol === 0;
            video.volume = vol;
            video.muted = vol === 0;
            updateVideoState();
            showControls();
        });
        
        // Show volume slider on hover
        if (volumeGroup) {
            volumeGroup.addEventListener('mouseenter', () => {
                const sliderContainer = volumeGroup.querySelector('.video-volume-slider-container');
                if (sliderContainer) sliderContainer.classList.add('show');
            });
            
            volumeGroup.addEventListener('mouseleave', () => {
                const sliderContainer = volumeGroup.querySelector('.video-volume-slider-container');
                if (sliderContainer) sliderContainer.classList.remove('show');
            });
        }
    }
    
    // Playback speed
    const speeds = [0.5, 1, 1.5, 2];
    if (speedBtn) {
        speedBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentIndex = speeds.indexOf(videoPlayerState.playbackRate);
            const nextIndex = (currentIndex + 1) % speeds.length;
            videoPlayerState.playbackRate = speeds[nextIndex];
            video.playbackRate = videoPlayerState.playbackRate;
            if (speedText) speedText.textContent = videoPlayerState.playbackRate + 'x';
            showControls();
        });
    }
    
    // Fullscreen
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) {
                container.requestFullscreen().then(() => {
                    videoPlayerState.isFullscreen = true;
                    if (fullscreenIcon) {
                        fullscreenIcon.setAttribute('data-lucide', 'minimize');
                        lucide.createIcons();
                    }
                }).catch(err => console.log('Fullscreen error:', err));
            } else {
                document.exitFullscreen().then(() => {
                    videoPlayerState.isFullscreen = false;
                    if (fullscreenIcon) {
                        fullscreenIcon.setAttribute('data-lucide', 'maximize');
                        lucide.createIcons();
                    }
                });
            }
            showControls();
        });
    }
    
    // Fullscreen change listener
    document.addEventListener('fullscreenchange', () => {
        videoPlayerState.isFullscreen = !!document.fullscreenElement;
        if (fullscreenIcon) {
            fullscreenIcon.setAttribute('data-lucide', videoPlayerState.isFullscreen ? 'minimize' : 'maximize');
            lucide.createIcons();
        }
    });

    // Video click to play/pause
    video.addEventListener('click', () => {
        if (videoPlayerState.isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        showControls();
    });
    
    // Mouse move to show controls
    if (container) {
        container.addEventListener('mousemove', () => {
            showControls();
        });
        
        container.addEventListener('mouseleave', () => {
            if (videoPlayerState.isPlaying && !videoPlayerState.addMenuOpen && !videoPlayerState.modalOpen) {
                clearControlsTimeout();
                videoPlayerState.controlsTimeout = setTimeout(() => {
                    if (controlsOverlay) controlsOverlay.style.opacity = '0';
                    videoPlayerState.showControls = false;
                }, 1000);
            }
        });
    }

    // Seek functionality
    if (seekInput) {
        seekInput.addEventListener('input', (e) => {
            const percent = parseFloat(e.target.value);
            if (videoPlayerState.duration) {
                video.currentTime = (percent / 100) * videoPlayerState.duration;
            }
            showControls();
        });
    }

    // Video events
    video.addEventListener('loadedmetadata', () => {
        video.volume = videoPlayerState.volume;
        video.playbackRate = videoPlayerState.playbackRate;
        updateVideoState();
    });

    video.addEventListener('timeupdate', () => {
        updateVideoState();
    });

    video.addEventListener('play', () => {
        videoPlayerState.isPlaying = true;
        // Update icon
        if (playPauseIcon) {
            playPauseIcon.setAttribute('data-lucide', 'pause');
            const parent = playPauseIcon.parentElement;
            if (parent) {
                lucide.createIcons(parent);
            } else {
                lucide.createIcons();
            }
        }
        updateVideoState();
        showControls();
    });

    video.addEventListener('pause', () => {
        videoPlayerState.isPlaying = false;
        // Update icon
        if (playPauseIcon) {
            playPauseIcon.setAttribute('data-lucide', 'play');
            const parent = playPauseIcon.parentElement;
            if (parent) {
                lucide.createIcons(parent);
            } else {
                lucide.createIcons();
            }
        }
        updateVideoState();
        showControls();
    });

    // Add button click
    if (addBtn) {
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            videoPlayerState.addMenuOpen = !videoPlayerState.addMenuOpen;
            if (addMenu) {
                addMenu.classList.toggle('hidden', !videoPlayerState.addMenuOpen);
            }
            if (videoPlayerState.addMenuOpen) {
                video.pause();
                showControls();
            }
            clearControlsTimeout();
        });
    }

    // Add menu item clicks
    if (addMenu) {
        addMenu.querySelectorAll('.video-add-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = item.getAttribute('data-type');
                openContentModal(type);
            });
        });
    }

    function openContentModal(type) {
        videoPlayerState.modalOpen = true;
        videoPlayerState.modalType = type;
        videoPlayerState.capturedTime = videoPlayerState.currentTime;
        videoPlayerState.fromSection = false;
        videoPlayerState.addMenuOpen = false;
        if (addMenu) addMenu.classList.add('hidden');

        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        if (modalTitle) {
            modalTitle.textContent = `Add ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        }

        if (modalBody) {
            if (type === 'note') {
                modalBody.innerHTML = `
                    <div class="video-modal-time">At ${formatVideoTime(videoPlayerState.capturedTime)}</div>
                    <textarea id="note-content-input" class="video-modal-textarea" placeholder="Type your note here..." rows="6"></textarea>
                `;
            } else if (type === 'flashcard') {
                modalBody.innerHTML = `
                    <div class="video-modal-time">At ${formatVideoTime(videoPlayerState.capturedTime)}</div>
                    <div class="video-modal-input-group">
                        <label>Question/Front</label>
                        <input type="text" id="flashcard-front-input" class="video-modal-input" placeholder="Enter question or term">
                    </div>
                    <div class="video-modal-input-group">
                        <label>Answer/Back</label>
                        <textarea id="flashcard-back-input" class="video-modal-textarea" placeholder="Enter answer or explanation" rows="4"></textarea>
                    </div>
                `;
            } else if (type === 'mcq') {
                modalBody.innerHTML = `
                    <div class="video-modal-time">At ${formatVideoTime(videoPlayerState.capturedTime)}</div>
                    <div class="video-modal-input-group">
                        <label>Question</label>
                        <textarea id="mcq-question-input" class="video-modal-textarea" placeholder="Enter question" rows="3"></textarea>
                    </div>
                    <div class="video-modal-input-group">
                        <label>Options (one per line, mark correct answer with *)</label>
                        <textarea id="mcq-options-input" class="video-modal-textarea" placeholder="Option 1\n*Option 2 (correct)\nOption 3\nOption 4" rows="6"></textarea>
                    </div>
                `;
            }
        }

        if (modal) {
            modal.classList.remove('hidden');
            initModalDrag();
        }
        lucide.createIcons();
    }

    let modalDragState = {
        isDragging: false,
        currentX: 0,
        currentY: 0,
        initialX: 0,
        initialY: 0,
        xOffset: 0,
        yOffset: 0,
        initialized: false
    };

    function initModalDrag() {
        const modalContent = document.querySelector('.video-content-modal-content');
        if (!modalContent) return;

        const modalHeader = modalContent.querySelector('.video-content-modal-header');
        if (!modalHeader) return;

        // Only initialize once
        if (modalDragState.initialized) return;
        modalDragState.initialized = true;

        const dragStartHandler = (e) => {
            if (e.target.closest('.video-modal-close')) return;
            
            modalDragState.initialX = e.clientX - modalDragState.xOffset;
            modalDragState.initialY = e.clientY - modalDragState.yOffset;

            if (e.target === modalHeader || modalHeader.contains(e.target)) {
                modalDragState.isDragging = true;
                modalContent.style.transition = 'none';
            }
        };

        const dragHandler = (e) => {
            if (modalDragState.isDragging) {
                e.preventDefault();
                modalDragState.currentX = e.clientX - modalDragState.initialX;
                modalDragState.currentY = e.clientY - modalDragState.initialY;

                modalDragState.xOffset = modalDragState.currentX;
                modalDragState.yOffset = modalDragState.currentY;

                modalContent.style.transform = `translate(${modalDragState.currentX}px, ${modalDragState.currentY}px)`;
            }
        };

        const dragEndHandler = () => {
            if (modalDragState.isDragging) {
                modalDragState.initialX = modalDragState.currentX;
                modalDragState.initialY = modalDragState.currentY;
                modalDragState.isDragging = false;
                modalContent.style.transition = '';
            }
        };

        modalHeader.addEventListener('mousedown', dragStartHandler);
        document.addEventListener('mousemove', dragHandler);
        document.addEventListener('mouseup', dragEndHandler);

        // Reset position when modal is closed
        const observer = new MutationObserver(() => {
            if (modal && modal.classList.contains('hidden')) {
                modalContent.style.transform = 'translate(0, 0)';
                modalDragState.xOffset = 0;
                modalDragState.yOffset = 0;
                modalDragState.currentX = 0;
                modalDragState.currentY = 0;
                modalDragState.initialized = false;
            }
        });
        if (modal) {
            observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
        }
    }

    function closeModal() {
        videoPlayerState.modalOpen = false;
        videoPlayerState.modalType = null;
        videoPlayerState.fromSection = false;
        if (modal) modal.classList.add('hidden');
    }

    function saveContent() {
        const courseData = courseDetailData[state.currentCourseId];
        if (!courseData) return;

        let currentLesson = null;
        let currentSection = null;
        for (const section of courseData.sections) {
            currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
            if (currentLesson) {
                currentSection = section;
                break;
            }
        }
        if (!currentLesson || !currentSection) return;

        const type = videoPlayerState.modalType;
        const time = videoPlayerState.capturedTime;
        const fromSection = videoPlayerState.fromSection;

        if (type === 'note') {
            const contentInput = document.getElementById('note-content-input');
            if (contentInput && contentInput.value.trim()) {
                const noteData = {
                    sid: currentSection.id,
                    tid: currentLesson.id,
                    content: contentInput.value.trim()
                };
                if (fromSection) {
                    // Use first line of content as title, or empty string
                    const firstLine = contentInput.value.trim().split('\n')[0];
                    noteData.title = firstLine || '';
                } else {
                    noteData.title = `Note at ${formatVideoTime(time)}`;
                    noteData.time = time;
                }
                addUserContent('notes', noteData);
                closeModal();
                renderLessonView();
            }
        } else if (type === 'flashcard') {
            const frontInput = document.getElementById('flashcard-front-input');
            const backInput = document.getElementById('flashcard-back-input');
            if (frontInput && backInput && (frontInput.value.trim() || backInput.value.trim())) {
                const flashcardData = {
                    sid: currentSection.id,
                    tid: currentLesson.id,
                    q: frontInput.value.trim() || 'Question',
                    a: backInput.value.trim() || 'Answer'
                };
                if (!fromSection) {
                    flashcardData.time = time;
                }
                addUserContent('flashcards', flashcardData);
                closeModal();
                renderLessonView();
            }
        } else if (type === 'mcq') {
            const questionInput = document.getElementById('mcq-question-input');
            const optionsInput = document.getElementById('mcq-options-input');
            if (questionInput && optionsInput && questionInput.value.trim() && optionsInput.value.trim()) {
                const options = optionsInput.value.split('\n').filter(opt => opt.trim()).map((opt, index) => {
                    const isCorrect = opt.trim().startsWith('*');
                    const text = opt.trim().replace(/^\*/, '').trim();
                    return {
                        text: text || `Option ${index + 1}`,
                        correct: isCorrect,
                        exp: isCorrect ? 'Correct answer.' : 'Incorrect.'
                    };
                });
                
                // Ensure at least one correct answer
                if (!options.some(opt => opt.correct)) {
                    options[0].correct = true;
                    options[0].exp = 'Correct answer.';
                }

                const mcqData = {
                    sid: currentSection.id,
                    tid: currentLesson.id,
                    question: questionInput.value.trim(),
                    options: options
                };
                if (!fromSection) {
                    mcqData.time = time;
                }
                addUserContent('mcqs', mcqData);
                closeModal();
                renderLessonView();
            }
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalCancel) modalCancel.addEventListener('click', closeModal);
    if (modalSave) modalSave.addEventListener('click', saveContent);

    // Click outside to close menu
    container.addEventListener('click', (e) => {
        if (e.target === container || e.target === video) {
            if (addMenu && !addMenu.contains(e.target) && !addBtn.contains(e.target)) {
                videoPlayerState.addMenuOpen = false;
                addMenu.classList.add('hidden');
            }
        }
    });

    // Initial state update
    updateVideoState();
    showControls();
    
    // Initialize icons
    lucide.createIcons();
}

// Initialize application
function init() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:100',message:'init() called',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        state.isDark = true;
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        state.isDark = false;
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }

    // Load saved liked courses
    const savedLikes = localStorage.getItem('likedCourses');
    if (savedLikes) {
        state.likedCourses = new Set(JSON.parse(savedLikes));
    }

    // Load user-created content
    loadUserContent();

    // Initialize demo data
    initializeDemoData();

    // Setup event listeners
    setupEventListeners();

    // Initialize writing session
    initWritingSession();
    
    // Initialize report modal
    initReportModal();
    
    // Initialize course validity modal
    initCourseValidityModal();

    // Initialize routing
    initRouting();

    // Render initial content
    updateStats();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:124',message:'Before renderMyCourses()',data:{stateMyCoursesLength:state.myCourses.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
    // #endregion
    renderMyCourses();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:126',message:'Before renderCommunityCourses()',data:{stateCommunityCoursesLength:state.communityCourses.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
    // #endregion
    renderCommunityCourses();
    updateThemeIcon();
    updateStreakProgress();
    
    // Update notification badge
    const unreadCount = state.notifications.filter(n => !n.read).length;
    updateNotificationBadge(unreadCount);
    
    // Update chat badge
    updateChatBadge();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:128',message:'init() completed',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
}

// Initialize demo data
function initializeDemoData() {
    // Initialize demo chat messages
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;

    state.chats = {
        101: [
            {
                id: 1,
                sender: 'instructor',
                name: 'Dr. Arvind Sharma',
                message: 'Welcome to the Indian Polity Masterclass! Feel free to ask any questions.',
                timestamp: now - 2 * oneDay
            },
            {
                id: 2,
                sender: 'student',
                name: 'Rahul Kumar',
                message: 'Thank you! I have a question about the Fundamental Rights chapter.',
                timestamp: now - 2 * oneDay + oneHour
            },
            {
                id: 3,
                sender: 'instructor',
                name: 'Dr. Arvind Sharma',
                message: 'Sure! What specifically would you like to know about Fundamental Rights?',
                timestamp: now - 2 * oneDay + 2 * oneHour
            },
            {
                id: 4,
                sender: 'student',
                name: 'Priya Singh',
                message: 'Can someone explain the difference between Article 19 and Article 21?',
                timestamp: now - oneDay
            },
            {
                id: 5,
                sender: 'instructor',
                name: 'Dr. Arvind Sharma',
                message: 'Great question! Article 19 deals with six freedoms (speech, assembly, etc.) while Article 21 is about the right to life and personal liberty. Article 21 is more fundamental and cannot be suspended even during emergencies.',
                timestamp: now - oneDay + 30 * 60 * 1000
            },
            {
                id: 6,
                sender: 'student',
                name: 'You',
                message: 'That makes sense. Thank you for the clarification!',
                timestamp: now - 12 * 60 * 60 * 1000
            }
        ],
        102: [
            {
                id: 1,
                sender: 'instructor',
                name: 'Saira Banu',
                message: 'Hello everyone! Welcome to the Geography course. Let\'s make learning fun!',
                timestamp: now - 3 * oneDay
            },
            {
                id: 2,
                sender: 'student',
                name: 'Amit Patel',
                message: 'Hi! I\'m struggling with the climate zones. Any tips?',
                timestamp: now - 2 * oneDay
            },
            {
                id: 3,
                sender: 'instructor',
                name: 'Saira Banu',
                message: 'Absolutely! I recommend focusing on the temperature and precipitation patterns. The flashcards in this course will help you memorize them effectively.',
                timestamp: now - 2 * oneDay + oneHour
            },
            {
                id: 4,
                sender: 'student',
                name: 'You',
                message: 'The flashcards are really helpful! I\'ve improved my retention significantly.',
                timestamp: now - oneDay
            }
        ]
    };

    // Initialize demo notifications
    state.notifications = [
        {
            id: 1,
            type: 'class',
            title: 'Upcoming Live Session',
            description: 'Indian Polity Masterclass - Live Q&A session tomorrow at 6:00 PM',
            timestamp: now - 2 * oneHour,
            read: false
        },
        {
            id: 2,
            type: 'content',
            title: 'New MCQs Added',
            description: '15 new MCQs have been added to "Comprehensive Geography for UPSC 2025"',
            timestamp: now - 5 * oneHour,
            read: false
        },
        {
            id: 3,
            type: 'content',
            title: 'New Flashcards Available',
            description: '20 new flashcards on "Fundamental Rights" are now available in Indian Polity course',
            timestamp: now - oneDay,
            read: false
        },
        {
            id: 4,
            type: 'update',
            title: 'Course Update',
            description: 'New video lecture "Constitutional Amendments" has been added to your course',
            timestamp: now - oneDay - 2 * oneHour,
            read: true
        },
        {
            id: 5,
            type: 'class',
            title: 'Reminder: Live Session',
            description: 'Geography Masterclass live session starts in 2 hours',
            timestamp: now - 3 * oneDay,
            read: true
        },
        {
            id: 6,
            type: 'content',
            title: 'New Video Added',
            description: 'Watch the new video: "Climate Patterns and Weather Systems" in Geography course',
            timestamp: now - 3 * oneDay - oneHour,
            read: false
        },
        {
            id: 7,
            type: 'announcement',
            title: 'System Maintenance',
            description: 'Scheduled maintenance on Sunday, 2:00 AM - 4:00 AM. Services may be temporarily unavailable.',
            timestamp: now - 4 * oneDay,
            read: true
        },
        {
            id: 8,
            type: 'content',
            title: 'New Practice Set',
            description: 'Practice set with 50 MCQs on "Medieval Indian History" is now available',
            timestamp: now - 5 * oneDay,
            read: false
        }
    ];

    // Load from localStorage if available
    const savedChats = localStorage.getItem('chats');
    if (savedChats) {
        try {
            const parsed = JSON.parse(savedChats);
            Object.keys(parsed).forEach(courseId => {
                if (state.chats[courseId]) {
                    state.chats[courseId] = [...state.chats[courseId], ...parsed[courseId]];
                } else {
                    state.chats[courseId] = parsed[courseId];
                }
            });
        } catch (e) {
            console.error('Error loading chats:', e);
        }
    }
    
    // Load read states from localStorage
    const savedReadStates = localStorage.getItem('chatReadStates');
    if (savedReadStates) {
        try {
            const parsed = JSON.parse(savedReadStates);
            Object.keys(parsed).forEach(courseId => {
                state.chatReadStates[courseId] = new Set(parsed[courseId]);
            });
        } catch (e) {
            console.error('Error loading chat read states:', e);
        }
    }

    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
        try {
            state.notifications = JSON.parse(savedNotifications);
        } catch (e) {
            console.error('Error loading notifications:', e);
        }
    }
}

// Routing functions
function initRouting() {
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
        });
    });

    // Show initial page
    showPage(state.currentPage);
}

function showPage(pageName) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.add('hidden');
    });

    // Show selected page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    // Update nav active state
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    state.currentPage = pageName;

    // Render page-specific content
    switch (pageName) {
        case 'chat':
            renderChatPage();
            break;
        case 'feedback':
            renderFeedbackPage();
            break;
        case 'notifications':
            renderNotificationsPage();
            break;
        case 'courses':
            // Courses page is already rendered
            break;
        case 'course-detail':
            if (state.currentCourseId) {
                renderCourseDetail(state.currentCourseId);
            }
            break;
        case 'community-course-detail':
            if (state.currentCommunityCourseId) {
                renderCommunityCourseDetail(state.currentCommunityCourseId);
            }
            // Scroll to top when showing course detail page
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            break;
        case 'revision-queue':
            renderRevisionQueueCourseSelection();
            break;
        case 'lifetime-analytics':
            renderLifetimeAnalytics();
            break;
    }

    // Update icons
    lucide.createIcons();
}

// Setup event listeners
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Community course detail back button
    const communityCourseDetailBackBtn = document.getElementById('community-course-detail-back-btn');
    if (communityCourseDetailBackBtn) {
        communityCourseDetailBackBtn.addEventListener('click', () => {
            showPage('courses');
        });
    }

    // Logo/Title click - navigate to Courses
    const logoText = document.querySelector('.logo-text');
    const navLeft = document.querySelector('.nav-left');
    if (logoText) {
        logoText.style.cursor = 'pointer';
        logoText.addEventListener('click', () => {
            showPage('courses');
        });
    }
    // Also make the entire nav-left area clickable
    if (navLeft) {
        navLeft.style.cursor = 'pointer';
        navLeft.addEventListener('click', (e) => {
            // Only navigate if clicking on the logo area, not on other elements
            if (e.target.closest('.logo-icon-gradient') || e.target.closest('.logo-text') || e.target === navLeft) {
                showPage('courses');
            }
        });
    }

    // Start Revision button - start revision session with due cards and MCQs
    const startRevisionBtn = document.querySelector('.start-revision-btn');
    if (startRevisionBtn) {
        startRevisionBtn.addEventListener('click', () => {
            startRevisionSession();
        });
    }

    // Streak card click - open lifetime analytics
    const streakCard = document.querySelector('.streak-card');
    if (streakCard) {
        streakCard.addEventListener('click', () => {
            showPage('lifetime-analytics');
        });
    }

    // Lifetime achievements modal close button
    const lifetimeAchievementsModalClose = document.getElementById('lifetime-achievements-modal-close');
    if (lifetimeAchievementsModalClose) {
        lifetimeAchievementsModalClose.addEventListener('click', () => {
            const modal = document.getElementById('lifetime-achievements-modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Close modal when clicking overlay
    const lifetimeAchievementsModal = document.getElementById('lifetime-achievements-modal');
    if (lifetimeAchievementsModal) {
        const overlay = lifetimeAchievementsModal.querySelector('.lifetime-achievements-modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                lifetimeAchievementsModal.classList.add('hidden');
            });
        }
    }

    // Lifetime analytics back button
    const lifetimeAnalyticsBackBtn = document.getElementById('lifetime-analytics-back-btn');
    if (lifetimeAnalyticsBackBtn) {
        lifetimeAnalyticsBackBtn.addEventListener('click', () => {
            showPage('courses');
        });
    }


    // User profile dropdown
    setupUserProfileDropdown();
}

// Setup user profile dropdown
function setupUserProfileDropdown() {
    const userAvatar = document.getElementById('user-avatar');
    const dropdown = document.getElementById('user-profile-dropdown');
    
    if (!userAvatar || !dropdown) return;

    // Toggle dropdown on avatar click
    userAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
        if (!dropdown.classList.contains('hidden')) {
            updateLikedCoursesCount();
            lucide.createIcons();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userAvatar.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    });

    // Handle menu item clicks
    const menuItems = dropdown.querySelectorAll('.user-profile-dropdown-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const action = item.getAttribute('data-action');
            handleProfileMenuAction(action);
            dropdown.classList.add('hidden');
        });
    });
}

// Handle profile menu actions
function handleProfileMenuAction(action) {
    switch (action) {
        case 'profile':
            alert('Profile page coming soon!');
            break;
        case 'liked-courses':
            showLikedCourses();
            break;
        case 'settings':
            alert('Settings page coming soon!');
            break;
        case 'help':
            alert('Help & Support page coming soon!');
            break;
        case 'logout':
            if (confirm('Are you sure you want to log out?')) {
                alert('Logged out successfully!');
                // In a real app, you would handle logout here
            }
            break;
    }
}

// Show liked courses
function showLikedCourses() {
    const likedCourseIds = Array.from(state.likedCourses);
    if (likedCourseIds.length === 0) {
        alert('You haven\'t liked any courses yet.');
        return;
    }
    
    const likedCourses = state.communityCourses.filter(course => 
        state.likedCourses.has(course.id)
    );
    
    // For now, just show an alert. In a real app, you'd navigate to a liked courses page
    alert(`You have ${likedCourses.length} liked course(s):\n\n${likedCourses.map(c => c.title).join('\n')}`);
}

// Update liked courses count in dropdown
function updateLikedCoursesCount() {
    const countBadge = document.getElementById('liked-courses-count');
    if (countBadge) {
        const count = state.likedCourses.size;
        countBadge.textContent = count;
        if (count === 0) {
            countBadge.style.display = 'none';
        } else {
            countBadge.style.display = 'inline-block';
        }
    }
}

// Toggle dark/light theme
function toggleTheme() {
    state.isDark = !state.isDark;
    
    if (state.isDark) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    
    updateThemeIcon();
    lucide.createIcons();
}

// Update theme icon
function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', state.isDark ? 'sun' : 'moon');
        lucide.createIcons();
    }
    // Also update course detail theme icon
    const courseDetailThemeIcon = document.querySelector('.course-detail-theme-icon');
    if (courseDetailThemeIcon) {
        courseDetailThemeIcon.setAttribute('data-lucide', state.isDark ? 'sun' : 'moon');
        lucide.createIcons();
    }
}

// Update stats display
function updateStats() {
    const flashcardsDueEl = document.getElementById('flashcards-due'); if (flashcardsDueEl) flashcardsDueEl.textContent = state.stats.flashcardsDue;
    const mcqsDueEl = document.getElementById('mcqs-due'); if (mcqsDueEl) mcqsDueEl.textContent = state.stats.mcqsDue;
    const flashcardsDoneEl = document.getElementById('flashcards-done'); if (flashcardsDoneEl) flashcardsDoneEl.textContent = state.stats.flashcardsDone;
    const streakCountEl = document.getElementById('streak-count'); if (streakCountEl) streakCountEl.textContent = state.stats.streak;
    const streakDisplayEl = document.getElementById('streak-display'); if (streakDisplayEl) streakDisplayEl.textContent = state.stats.streak;
    const nextMilestoneEl = document.getElementById('next-milestone'); if (nextMilestoneEl) nextMilestoneEl.textContent = state.stats.nextMilestone;
}

// Update streak progress bar
function updateStreakProgress() {
    const progressFill = document.getElementById('streak-progress-fill');
    if (progressFill) {
        const progress = (state.stats.streak / state.stats.nextMilestone) * 100;
        progressFill.style.width = `${Math.min(progress, 100)}%`;
    }
}

// Aggregate lifetime statistics from course data
function aggregateLifetimeStats() {
    // Calculate total mastered items
    let totalFlashcards = 0;
    let totalMCQs = 0;
    
    state.myCourses.forEach(course => {
        // Estimate mastered items based on progress percentage
        // Assuming average course has ~200 flashcards and ~100 MCQs
        const estimatedFlashcards = 200;
        const estimatedMCQs = 100;
        totalFlashcards += Math.floor(estimatedFlashcards * (course.progress / 100));
        totalMCQs += Math.floor(estimatedMCQs * (course.progress / 100));
    });
    
    // Add stats from state
    totalFlashcards += state.stats.flashcardsDone || 0;
    totalMCQs += state.stats.mcqsDone || 0;
    
    state.lifetimeStats.totalMastered = {
        flashcards: totalFlashcards,
        mcqs: totalMCQs
    };
    
    // Calculate overall accuracy (weighted average from courses)
    let totalAccuracy = 0;
    let courseCount = 0;
    state.myCourses.forEach(course => {
        // Estimate accuracy based on progress (higher progress = higher accuracy)
        const estimatedAccuracy = 70 + (course.progress / 100) * 25; // Range: 70-95%
        totalAccuracy += estimatedAccuracy;
        courseCount++;
    });
    
    state.lifetimeStats.overallAccuracy = courseCount > 0 
        ? Math.round(totalAccuracy / courseCount) 
        : 92; // Default accuracy
    
    // Set streak data
    state.lifetimeStats.currentStreak = state.stats.streak;
    state.lifetimeStats.longestStreak = Math.max(state.lifetimeStats.longestStreak || 0, state.stats.streak);
    
    // Generate streak history (last 90 days)
    const streakHistory = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dayStreak = i >= (90 - state.stats.streak) ? state.stats.streak - (90 - i) : 0;
        streakHistory.push({
            date: date.toISOString().split('T')[0],
            streak: dayStreak > 0 ? dayStreak : 0,
            active: dayStreak > 0
        });
    }
    state.lifetimeStats.streakHistory = streakHistory;
    
    // Generate activity data (last 365 days)
    const activityData = {};
    for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        // Simulate activity - more active on days with streak
        const isActiveDay = i < state.stats.streak;
        activityData[dateStr] = {
            studyTime: isActiveDay ? Math.floor(Math.random() * 120 + 30) : Math.floor(Math.random() * 60),
            itemsCompleted: isActiveDay ? Math.floor(Math.random() * 20 + 5) : Math.floor(Math.random() * 5)
        };
    }
    state.lifetimeStats.activityData = activityData;
    
    // Generate progress timeline (monthly data for last 12 months)
    const progressTimeline = [];
    for (let i = 11; i >= 0; i--) {
        const date = new Date(today);
        date.setMonth(date.getMonth() - i);
        const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
        const monthStr = monthStart.toISOString().split('T')[0];
        
        // Simulate growth over time
        const baseMastered = totalFlashcards + totalMCQs;
        const growthFactor = 1 - (i / 12) * 0.3; // 30% growth over 12 months
        progressTimeline.push({
            date: monthStr,
            mastered: Math.floor(baseMastered * growthFactor),
            accuracy: Math.max(70, state.lifetimeStats.overallAccuracy - (11 - i) * 2),
            studyTime: Math.floor((Math.random() * 50 + 20) * 30) // Hours per month
        });
    }
    state.lifetimeStats.progressTimeline = progressTimeline;
    
    // Generate milestones
    const milestones = [];
    const totalItems = totalFlashcards + totalMCQs;
    
    // Streak milestones
    if (state.lifetimeStats.currentStreak >= 7) milestones.push({ type: 'streak', name: 'Week Warrior', description: '7 day streak', date: new Date().toISOString().split('T')[0], icon: 'flame', unlocked: true });
    if (state.lifetimeStats.currentStreak >= 30) milestones.push({ type: 'streak', name: 'Monthly Master', description: '30 day streak', date: new Date().toISOString().split('T')[0], icon: 'calendar', unlocked: true });
    if (state.lifetimeStats.longestStreak >= 50) milestones.push({ type: 'streak', name: 'Streak Champion', description: '50+ day streak', date: new Date().toISOString().split('T')[0], icon: 'trophy', unlocked: true });
    
    // Mastery milestones
    if (totalItems >= 100) milestones.push({ type: 'mastery', name: 'Centurion', description: '100 items mastered', date: new Date().toISOString().split('T')[0], icon: 'award', unlocked: true });
    if (totalItems >= 500) milestones.push({ type: 'mastery', name: 'Half Grand', description: '500 items mastered', date: new Date().toISOString().split('T')[0], icon: 'star', unlocked: true });
    if (totalItems >= 1000) milestones.push({ type: 'mastery', name: 'Grand Master', description: '1000 items mastered', date: new Date().toISOString().split('T')[0], icon: 'crown', unlocked: true });
    
    // Accuracy milestones
    if (state.lifetimeStats.overallAccuracy >= 85) milestones.push({ type: 'accuracy', name: 'Sharp Shooter', description: '85%+ accuracy', date: new Date().toISOString().split('T')[0], icon: 'target', unlocked: true });
    if (state.lifetimeStats.overallAccuracy >= 90) milestones.push({ type: 'accuracy', name: 'Perfectionist', description: '90%+ accuracy', date: new Date().toISOString().split('T')[0], icon: 'check-circle', unlocked: true });
    
    state.lifetimeStats.milestones = milestones;
}

// Generate all achievements (unlocked and locked)
function generateAllAchievements() {
    const stats = state.lifetimeStats;
    const totalItems = stats.totalMastered.flashcards + stats.totalMastered.mcqs;
    const unlockedIds = new Set(stats.milestones.map(m => `${m.type}-${m.name}`));
    
    const allAchievements = [
        // Streak achievements
        { type: 'streak', name: 'Week Warrior', description: '7 day streak', requirement: 'Maintain a 7-day study streak', icon: 'flame', unlocked: stats.currentStreak >= 7 },
        { type: 'streak', name: 'Monthly Master', description: '30 day streak', requirement: 'Maintain a 30-day study streak', icon: 'calendar', unlocked: stats.currentStreak >= 30 },
        { type: 'streak', name: 'Streak Champion', description: '50+ day streak', requirement: 'Maintain a 50+ day study streak', icon: 'trophy', unlocked: stats.longestStreak >= 50 },
        { type: 'streak', name: 'Century Streak', description: '100 day streak', requirement: 'Maintain a 100-day study streak', icon: 'flame', unlocked: stats.longestStreak >= 100 },
        
        // Mastery achievements
        { type: 'mastery', name: 'Centurion', description: '100 items mastered', requirement: 'Master 100 flashcards or MCQs', icon: 'award', unlocked: totalItems >= 100 },
        { type: 'mastery', name: 'Half Grand', description: '500 items mastered', requirement: 'Master 500 flashcards or MCQs', icon: 'star', unlocked: totalItems >= 500 },
        { type: 'mastery', name: 'Grand Master', description: '1000 items mastered', requirement: 'Master 1000 flashcards or MCQs', icon: 'crown', unlocked: totalItems >= 1000 },
        { type: 'mastery', name: 'Master Scholar', description: '2500 items mastered', requirement: 'Master 2500 flashcards or MCQs', icon: 'graduation-cap', unlocked: totalItems >= 2500 },
        { type: 'mastery', name: 'Legendary Learner', description: '5000 items mastered', requirement: 'Master 5000 flashcards or MCQs', icon: 'medal', unlocked: totalItems >= 5000 },
        
        // Accuracy achievements
        { type: 'accuracy', name: 'Sharp Shooter', description: '85%+ accuracy', requirement: 'Achieve 85% accuracy across all courses', icon: 'target', unlocked: stats.overallAccuracy >= 85 },
        { type: 'accuracy', name: 'Perfectionist', description: '90%+ accuracy', requirement: 'Achieve 90% accuracy across all courses', icon: 'check-circle', unlocked: stats.overallAccuracy >= 90 },
        { type: 'accuracy', name: 'Flawless', description: '95%+ accuracy', requirement: 'Achieve 95% accuracy across all courses', icon: 'award', unlocked: stats.overallAccuracy >= 95 },
        
        // Study time achievements
        { type: 'study', name: 'Early Bird', description: '100 hours studied', requirement: 'Study for 100 hours total', icon: 'sun', unlocked: false },
        { type: 'study', name: 'Dedicated Learner', description: '500 hours studied', requirement: 'Study for 500 hours total', icon: 'clock', unlocked: false },
        { type: 'study', name: 'Study Master', description: '1000 hours studied', requirement: 'Study for 1000 hours total', icon: 'book-open', unlocked: false },
    ];
    
    return allAchievements;
}

// Render my courses
function renderMyCourses() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:187',message:'renderMyCourses() entry',data:{stateMyCoursesLength:state.myCourses?.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    const container = document.getElementById('my-courses-container');
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:190',message:'Container lookup result',data:{containerFound:!!container,containerId:container?.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    if (!container) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:193',message:'Container not found, returning early',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        return;
    }

    container.innerHTML = state.myCourses.map(course => `
        <div class="my-course-card" data-course-id="${course.id}">
            <div class="my-course-image-wrapper">
                <img src="${course.image}" alt="${course.title}" class="my-course-image">
                <div class="my-course-overlay">
                    <i data-lucide="play-circle"></i>
                </div>
            </div>
            <div class="my-course-content">
                <div>
                    <h4 class="my-course-title">${course.title}</h4>
                    <p class="my-course-instructor">By ${course.instructor}</p>
                    <div class="my-course-badge">
                        <i data-lucide="zap"></i>
                        ${course.nextDue} DUE TODAY
                    </div>
                </div>
                <div>
                    <div class="my-course-progress-header">
                        <span class="my-course-progress-label">Mastery</span>
                        <span class="my-course-progress-value">${course.progress}%</span>
                    </div>
                    <div class="my-course-progress-bar">
                        <div class="my-course-progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers to course cards
    container.querySelectorAll('.my-course-card').forEach(card => {
        card.addEventListener('click', () => {
            const courseId = parseInt(card.getAttribute('data-course-id'));
            showCourseDetail(courseId);
        });
    });
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:221',message:'After setting innerHTML, before lucide',data:{innerHTMLLength:container.innerHTML.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    // #endregion

    try {
        lucide.createIcons();
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:225',message:'lucide.createIcons() succeeded',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
        // #endregion
    } catch (e) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:228',message:'lucide.createIcons() failed',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
        // #endregion
    }
    // #region agent log
    const firstCard = container.querySelector('.my-course-card');
    const section = container.closest('.my-learning-section');
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:231',message:'renderMyCourses() exit',data:{containerDisplay:window.getComputedStyle(container).display,containerVisibility:window.getComputedStyle(container).visibility,containerHeight:window.getComputedStyle(container).height,containerOpacity:window.getComputedStyle(container).opacity,firstCardDisplay:firstCard?window.getComputedStyle(firstCard).display:'none',firstCardOpacity:firstCard?window.getComputedStyle(firstCard).opacity:'0',sectionDisplay:section?window.getComputedStyle(section).display:'none',sectionVisibility:section?window.getComputedStyle(section).visibility:'hidden'},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
}

// Render community courses
function renderCommunityCourses() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:227',message:'renderCommunityCourses() entry',data:{stateCommunityCoursesLength:state.communityCourses?.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    const container = document.getElementById('community-courses-container');
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:230',message:'Container lookup result',data:{containerFound:!!container,containerId:container?.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    if (!container) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:233',message:'Container not found, returning early',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        return;
    }

    container.innerHTML = state.communityCourses.map(course => {
        const isLiked = state.likedCourses.has(course.id);
        return `
            <div class="community-course-card" data-course-id="${course.id}">
                <div class="community-course-image-wrapper">
                    <img src="${course.image}" alt="${course.title}" class="community-course-image">
                    <div class="community-course-image-overlay"></div>
                    <div class="community-course-badges">
                        ${course.isBestseller ? '<span class="community-course-bestseller">Bestseller</span>' : ''}
                        <span class="community-course-new-batch">New Batch</span>
                    </div>
                    <div class="community-course-students">
                        <i data-lucide="users"></i>
                        ${course.students}
                    </div>
                    <button class="community-course-like-btn ${isLiked ? 'liked' : ''}" data-course-id="${course.id}">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="community-course-content">
                    <div class="community-course-header">
                        <span class="community-course-category">${course.category}</span>
                        <div class="community-course-rating">
                            <span class="community-course-rating-value">${course.rating}</span>
                            <span class="community-course-reviews">(${course.reviews})</span>
                        </div>
                    </div>
                    <h3 class="community-course-title">${course.title}</h3>
                    <div class="community-course-instructor">
                        <div class="community-course-instructor-avatar">
                            <img src="${course.instructor.avatar}" alt="${course.instructor.name}">
                        </div>
                        <span class="community-course-instructor-name">By ${course.instructor.name}</span>
                    </div>
                    <div class="community-course-stats">
                        <div class="community-course-stat-item">
                            <i data-lucide="zap" class="community-course-stat-icon"></i>
                            <span class="community-course-stat-label">Top Rated</span>
                        </div>
                        <div class="community-course-stat-item">
                            <i data-lucide="calendar" class="community-course-stat-icon"></i>
                            <span class="community-course-stat-label">${course.validity}</span>
                        </div>
                    </div>
                    <div class="community-course-pricing">
                        <div class="community-course-price-row">
                            <div class="community-course-price-header">
                                <div class="community-course-price">
                                    <span class="community-course-price-value">₹${course.price}</span>
                                    <span class="community-course-price-original">₹${course.originalPrice}</span>
                                </div>
                            </div>
                            <div class="community-course-emi">
                                <i data-lucide="credit-card"></i>
                                <span class="community-course-emi-text">EMI: <span>₹${course.emi} × ${course.emiDuration}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers to course cards
    container.querySelectorAll('.community-course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on like button
            if (e.target.closest('.community-course-like-btn')) {
                return;
            }
            const courseId = parseInt(card.getAttribute('data-course-id'));
            showCommunityCourseDetail(courseId);
        });
    });

    // Setup like button event listeners
    setupLikeButtons();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:296',message:'After setting innerHTML, before lucide',data:{innerHTMLLength:container.innerHTML.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    // #endregion
    try {
        lucide.createIcons();
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:300',message:'lucide.createIcons() succeeded',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
        // #endregion
    } catch (e) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:303',message:'lucide.createIcons() failed',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
        // #endregion
    }
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:306',message:'renderCommunityCourses() exit',data:{containerDisplay:window.getComputedStyle(container).display,containerVisibility:window.getComputedStyle(container).visibility},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
}

// Show community course detail page
function showCommunityCourseDetail(courseId) {
    state.currentCommunityCourseId = courseId;
    showPage('community-course-detail');
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render community course detail
function renderCommunityCourseDetail(courseId) {
    const course = state.communityCourses.find(c => c.id === courseId);
    if (!course) {
        console.error('Course not found:', courseId);
        return;
    }

    const page = document.getElementById('page-community-course-detail');
    if (!page) return;

    // Render course detail content
    const container = page.querySelector('.community-course-detail-content');
    if (!container) return;

    // Generate stars for rating
    const fullStars = Math.floor(course.rating);
    const hasHalfStar = course.rating % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<i data-lucide="star" class="star-filled"></i>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<i data-lucide="star-half" class="star-half"></i>';
        } else {
            starsHTML += '<i data-lucide="star" class="star-empty"></i>';
        }
    }

    // Generate curriculum HTML with collapsible sections
    const curriculumHTML = course.curriculum.map((module, index) => `
        <div class="community-course-detail-curriculum-module" data-module-index="${index}">
            <button class="community-course-detail-curriculum-module-header" data-module-index="${index}">
                <div class="community-course-detail-curriculum-module-header-left">
                    <div class="community-course-detail-curriculum-module-icon">
                        <i data-lucide="book-open"></i>
                    </div>
                    <div class="community-course-detail-curriculum-module-info">
                        <h4 class="community-course-detail-curriculum-module-title">${module.module}</h4>
                        <span class="community-course-detail-curriculum-module-count">${module.topics.length} topics</span>
                    </div>
                </div>
                <i data-lucide="chevron-down" class="community-course-detail-curriculum-module-chevron"></i>
            </button>
            <div class="community-course-detail-curriculum-module-content">
                <ul class="community-course-detail-curriculum-topics">
                    ${module.topics.map(topic => `<li><i data-lucide="check"></i><span>${topic}</span></li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    const isLiked = state.likedCourses.has(course.id);
    
    container.innerHTML = `
        <div class="community-course-detail-hero">
            <div class="community-course-detail-image-wrapper">
                <img src="${course.image}" alt="${course.title}" class="community-course-detail-image">
                ${course.isBestseller ? '<span class="community-course-detail-bestseller">Bestseller</span>' : ''}
                <button class="community-course-detail-like-btn ${isLiked ? 'liked' : ''}" data-course-id="${course.id}">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            <div class="community-course-detail-hero-content">
                <div class="community-course-detail-header">
                    <span class="community-course-detail-category">${course.category}</span>
                    <div class="community-course-detail-rating-display">
                        <div class="community-course-detail-stars">${starsHTML}</div>
                        <span class="community-course-detail-rating-value">${course.rating}</span>
                        <span class="community-course-detail-reviews-count">(${course.reviews} reviews)</span>
                    </div>
                </div>
                <h1 class="community-course-detail-title">${course.title}</h1>
                <div class="community-course-detail-meta">
                    <div class="community-course-detail-meta-item">
                        <i data-lucide="users"></i>
                        <span>${course.students} students enrolled</span>
                    </div>
                    <div class="community-course-detail-meta-item">
                        <i data-lucide="calendar"></i>
                        <span>Valid till: ${course.validity}</span>
                    </div>
                </div>
                <div class="community-course-detail-purchase-section">
                    <div class="community-course-detail-pricing">
                        <div class="community-course-detail-price">
                            <span class="community-course-detail-price-value">₹${course.price}</span>
                            <span class="community-course-detail-price-original">₹${course.originalPrice}</span>
                        </div>
                        <div class="community-course-detail-emi">
                            <i data-lucide="credit-card"></i>
                            <span>EMI: ₹${course.emi} × ${course.emiDuration}</span>
                        </div>
                    </div>
                    <button class="community-course-detail-purchase-btn" data-course-id="${course.id}">
                        <i data-lucide="shopping-cart"></i>
                        Purchase Course
                    </button>
                </div>
            </div>
        </div>

        <div class="community-course-detail-sections">
            <section class="community-course-detail-section">
                <h2 class="community-course-detail-section-title">
                    <i data-lucide="file-text"></i>
                    Description
                </h2>
                <p class="community-course-detail-description">${course.description}</p>
            </section>

            <section class="community-course-detail-section">
                <h2 class="community-course-detail-section-title">
                    <i data-lucide="book-open"></i>
                    Course Curriculum
                </h2>
                <div class="community-course-detail-curriculum">
                    ${curriculumHTML}
                </div>
            </section>

            <section class="community-course-detail-section">
                <div class="community-course-detail-instructor-rating-grid">
                    <div class="community-course-detail-instructor-card">
                        <h2 class="community-course-detail-section-title">
                            <i data-lucide="user"></i>
                            About the Instructor
                        </h2>
                        <div class="community-course-detail-instructor">
                            <div class="community-course-detail-instructor-avatar">
                                <img src="${course.instructor.avatar}" alt="${course.instructor.name}">
                            </div>
                            <div class="community-course-detail-instructor-info">
                                <h3 class="community-course-detail-instructor-name">${course.instructor.name}</h3>
                                <p class="community-course-detail-instructor-bio">${course.instructor.bio}</p>
                            </div>
                        </div>
                    </div>

                    <div class="community-course-detail-rating-card">
                        <h2 class="community-course-detail-section-title">
                            <i data-lucide="star"></i>
                            Course Rating
                        </h2>
                        <div class="community-course-detail-rating-section">
                            <div class="community-course-detail-rating-overview">
                                <div class="community-course-detail-rating-left">
                                    <div class="community-course-detail-rating-number">${course.rating}</div>
                                    <div class="community-course-detail-stars-large">${starsHTML}</div>
                                    <div class="community-course-detail-rating-count">${course.guestRatings || course.reviews} RATINGS</div>
                                </div>
                                <div class="community-course-detail-rating-breakdown">
                                    ${course.ratingBreakdown ? Object.entries(course.ratingBreakdown).map(([category, rating]) => `
                                        <div class="community-course-detail-rating-category">
                                            <div class="community-course-detail-rating-category-header">
                                                <span class="community-course-detail-rating-category-name">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                                <span class="community-course-detail-rating-category-value">${rating}</span>
                                            </div>
                                            <div class="community-course-detail-rating-progress-bar">
                                                <div class="community-course-detail-rating-progress-fill" style="width: ${(rating / 5) * 100}%"></div>
                                            </div>
                                        </div>
                                    `).join('') : ''}
                                    ${course.guestRatings ? `<div class="community-course-detail-guest-ratings-note">Based on ${course.guestRatings} guest ratings</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            ${course.courseReviews && course.courseReviews.length > 0 ? `
            <section class="community-course-detail-section">
                <div class="community-course-detail-reviews-header">
                    <h2 class="community-course-detail-section-title">
                        <i data-lucide="message-square"></i>
                        Reviews (${course.courseReviews.length})
                    </h2>
                    <select class="community-course-detail-reviews-sort">
                        <option>Most Recent</option>
                        <option>Highest Rated</option>
                        <option>Lowest Rated</option>
                        <option>Most Helpful</option>
                    </select>
                </div>
                <div class="community-course-detail-reviews-list">
                    ${course.courseReviews.map(review => {
                        const reviewStars = Array.from({ length: 5 }, (_, i) => 
                            i < review.rating ? '<i data-lucide="star" class="review-star-filled"></i>' : '<i data-lucide="star" class="review-star-empty"></i>'
                        ).join('');
                        return `
                        <div class="community-course-detail-review-card">
                            <div class="community-course-detail-review-header">
                                <div class="community-course-detail-review-author">
                                    <div class="community-course-detail-review-avatar">${review.reviewerInitials}</div>
                                    <div class="community-course-detail-review-author-info">
                                        <div class="community-course-detail-review-author-name">${review.reviewerName}</div>
                                        <div class="community-course-detail-review-meta">
                                            ${review.isVerified ? '<span class="community-course-detail-review-verified"><i data-lucide="check-circle"></i> VERIFIED BUYER</span>' : ''}
                                            ${review.location ? `<span class="community-course-detail-review-location">${review.location}</span>` : ''}
                                        </div>
                                    </div>
                                </div>
                                <div class="community-course-detail-review-date">${review.date}</div>
                            </div>
                            <div class="community-course-detail-review-rating">${reviewStars}</div>
                            <div class="community-course-detail-review-text">${review.text}</div>
                            <div class="community-course-detail-review-footer">
                                <div class="community-course-detail-review-helpful">
                                    <span class="community-course-detail-review-helpful-text">Was this helpful?</span>
                                    <button class="community-course-detail-review-helpful-btn" data-review-id="${review.id}" data-type="helpful">
                                        <i data-lucide="thumbs-up"></i>
                                        <span>${review.helpfulCount || 0}</span>
                                    </button>
                                    <button class="community-course-detail-review-helpful-btn" data-review-id="${review.id}" data-type="not-helpful">
                                        <i data-lucide="thumbs-down"></i>
                                        <span>${review.notHelpfulCount || 0}</span>
                                    </button>
                                </div>
                                <button class="community-course-detail-review-report">REPORT</button>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
                <button class="community-course-detail-load-more-reviews">Load More Reviews</button>
            </section>
            ` : ''}
        </div>
    `;

    // Add purchase button event listener
    const purchaseBtn = container.querySelector('.community-course-detail-purchase-btn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', () => {
            const courseId = parseInt(purchaseBtn.getAttribute('data-course-id'));
            handlePurchaseCourse(courseId);
        });
    }

    // Setup collapsible curriculum modules
    setupCurriculumModules();

    // Setup review helpful buttons
    setupReviewHelpfulButtons();

    // Setup like button for detail page
    const detailLikeBtn = container.querySelector('.community-course-detail-like-btn');
    if (detailLikeBtn) {
        detailLikeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const courseId = parseInt(detailLikeBtn.getAttribute('data-course-id'));
            toggleLike(courseId);
            // Update the button state
            if (state.likedCourses.has(courseId)) {
                detailLikeBtn.classList.add('liked');
            } else {
                detailLikeBtn.classList.remove('liked');
            }
            lucide.createIcons();
        });
    }

    // Update icons
    lucide.createIcons();
}

// Setup collapsible curriculum modules
function setupCurriculumModules() {
    const moduleHeaders = document.querySelectorAll('.community-course-detail-curriculum-module-header');
    moduleHeaders.forEach((header, index) => {
        // Expand first module by default
        if (index === 0) {
            const module = header.closest('.community-course-detail-curriculum-module');
            const content = module.querySelector('.community-course-detail-curriculum-module-content');
            const chevron = header.querySelector('.community-course-detail-curriculum-module-chevron');
            if (module && content && chevron) {
                module.classList.add('expanded');
                // Use setTimeout to ensure content is rendered before calculating scrollHeight
                setTimeout(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }, 10);
                chevron.setAttribute('data-lucide', 'chevron-up');
            }
        }
        
        header.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const moduleIndex = header.getAttribute('data-module-index');
            const module = document.querySelector(`.community-course-detail-curriculum-module[data-module-index="${moduleIndex}"]`);
            if (!module) return;
            
            const content = module.querySelector('.community-course-detail-curriculum-module-content');
            const chevron = header.querySelector('.community-course-detail-curriculum-module-chevron');
            
            if (!content || !chevron) return;
            
            module.classList.toggle('expanded');
            if (module.classList.contains('expanded')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                chevron.setAttribute('data-lucide', 'chevron-up');
            } else {
                content.style.maxHeight = '0';
                chevron.setAttribute('data-lucide', 'chevron-down');
            }
            lucide.createIcons();
        });
    });
}

// Setup review helpful buttons
function setupReviewHelpfulButtons() {
    const helpfulButtons = document.querySelectorAll('.community-course-detail-review-helpful-btn');
    helpfulButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reviewId = button.getAttribute('data-review-id');
            const type = button.getAttribute('data-type');
            // Handle helpful/not helpful action
            console.log(`Marked review ${reviewId} as ${type}`);
        });
    });
}

// Handle purchase course
function handlePurchaseCourse(courseId) {
    const course = state.communityCourses.find(c => c.id === courseId);
    if (!course) return;

    // Show confirmation or redirect to payment
    alert(`Redirecting to purchase: ${course.title}\nPrice: ₹${course.price}`);
    // In a real application, you would redirect to a payment page or open a payment modal
}

// Setup like button event listeners
function setupLikeButtons() {
    const likeButtons = document.querySelectorAll('.community-course-like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const courseId = parseInt(button.getAttribute('data-course-id'));
            toggleLike(courseId);
        });
    });
}

// Toggle like status
function toggleLike(courseId) {
    if (state.likedCourses.has(courseId)) {
        state.likedCourses.delete(courseId);
    } else {
        state.likedCourses.add(courseId);
    }

    // Save to localStorage
    localStorage.setItem('likedCourses', JSON.stringify(Array.from(state.likedCourses)));

    // Update UI
    const buttons = document.querySelectorAll(`.community-course-like-btn[data-course-id="${courseId}"], .community-course-detail-like-btn[data-course-id="${courseId}"]`);
    buttons.forEach(button => {
        if (state.likedCourses.has(courseId)) {
            button.classList.add('liked');
        } else {
            button.classList.remove('liked');
        }
    });
    
    // Update dropdown count
    updateLikedCoursesCount();
    
    lucide.createIcons();
}

// ==================== COURSE DETAIL PAGE FUNCTIONS ====================

// Start revision session with due cards and MCQs
function startRevisionSession() {
    // Show revision queue page with course selection
    showPage('revision-queue');
    renderRevisionQueueCourseSelection();
}

// Render course selection for revision queue
function renderRevisionQueueCourseSelection() {
    const selectionView = document.getElementById('revision-queue-course-selection');
    const sessionView = document.getElementById('revision-queue-session');
    const coursesGrid = document.getElementById('revision-queue-courses-grid');
    
    if (!selectionView || !coursesGrid) return;
    
    // Show selection view, hide session view
    selectionView.classList.remove('hidden');
    if (sessionView) sessionView.classList.add('hidden');
    
    // Setup back button listener
    const backBtn = document.getElementById('revision-queue-back-btn');
    if (backBtn) {
        backBtn.onclick = () => showPage('courses');
    }
    
    // Render course cards
    if (state.myCourses && state.myCourses.length > 0) {
        coursesGrid.innerHTML = state.myCourses.map(course => {
            const courseData = courseDetailData[course.id];
            // Count flashcards and MCQs for this course
            const flashcards = getCourseFlashcards(course.id);
            const mcqs = getCourseMCQs(course.id);
            
            return `
                <div class="revision-queue-course-card" data-course-id="${course.id}">
                    <div class="revision-queue-course-image">
                        <img src="${course.image}" alt="${course.title}">
                    </div>
                    <div class="revision-queue-course-info">
                        <h3 class="revision-queue-course-title">${course.title}</h3>
                        <p class="revision-queue-course-instructor">${course.instructor}</p>
                        <div class="revision-queue-course-stats">
                            <div class="revision-queue-course-stat">
                                <i data-lucide="brain"></i>
                                <span>${flashcards.length} Flashcards</span>
                            </div>
                            <div class="revision-queue-course-stat">
                                <i data-lucide="zap"></i>
                                <span>${mcqs.length} MCQs</span>
                            </div>
                        </div>
                    </div>
                    <button class="revision-queue-course-select-btn">
                        Start Revision
                        <i data-lucide="chevron-right"></i>
                    </button>
                </div>
            `;
        }).join('');
        
        // Add click listeners
        coursesGrid.querySelectorAll('.revision-queue-course-card').forEach(card => {
            const courseId = parseInt(card.getAttribute('data-course-id'));
            const selectBtn = card.querySelector('.revision-queue-course-select-btn');
            
            if (selectBtn) {
                selectBtn.addEventListener('click', () => {
                    startRevisionSessionForCourse(courseId);
                });
            }
        });
    } else {
        coursesGrid.innerHTML = '<p class="revision-queue-empty">No courses available for revision.</p>';
    }
    
    lucide.createIcons();
}

// Get flashcards for a specific course
function getCourseFlashcards(courseId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return [];
    
    const sectionIds = courseData.sections.map(s => s.id);
    const lessonIds = new Set();
    courseData.sections.forEach(section => {
        section.lessons.forEach(lesson => {
            lessonIds.add(lesson.id);
        });
    });
    
    // Get educator flashcards
    const educatorFlashcards = repository.flashcards.filter(f => 
        sectionIds.includes(f.sid) && lessonIds.has(f.tid)
    );
    
    // Get user flashcards
    const userFlashcards = state.userContent.flashcards.filter(f => 
        sectionIds.includes(f.sid) && lessonIds.has(f.tid)
    );
    
    return [...educatorFlashcards, ...userFlashcards];
}

// Get MCQs for a specific course
function getCourseMCQs(courseId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return [];
    
    const sectionIds = courseData.sections.map(s => s.id);
    const lessonIds = new Set();
    courseData.sections.forEach(section => {
        section.lessons.forEach(lesson => {
            lessonIds.add(lesson.id);
        });
    });
    
    // Get educator MCQs
    const educatorMcqs = repository.mcqs.filter(m => 
        sectionIds.includes(m.sid) && lessonIds.has(m.tid)
    );
    
    // Get user MCQs
    const userMcqs = state.userContent.mcqs.filter(m => 
        sectionIds.includes(m.sid) && lessonIds.has(m.tid)
    );
    
    return [...educatorMcqs, ...userMcqs];
}

// ==================== Spaced Repetition (SM-2 Algorithm) ====================

// Initialize spaced repetition properties for a card
function initializeCardSpacedRepetition(card) {
    if (!card.easeFactor) card.easeFactor = 2.5; // SM-2 default
    if (card.interval === undefined) card.interval = 0; // New card
    if (card.repetitions === undefined) card.repetitions = 0;
    if (!card.lastReviewDate) {
        // If card has dueDate, it's been reviewed before
        if (card.dueDate) {
            card.lastReviewDate = new Date(card.dueDate).toISOString().split('T')[0];
        } else {
            // New card - set due for today
            card.dueDate = new Date().toISOString().split('T')[0];
            card.lastReviewDate = null;
        }
    }
    return card;
}

// Calculate next review date using SM-2 algorithm
// Quality: 0=Again, 1=Hard, 2=Good, 3=Easy
function calculateNextReview(card, quality) {
    // Initialize if needed
    initializeCardSpacedRepetition(card);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (quality < 3) {
        // Again or Hard - reset
        card.interval = 1;
        card.repetitions = 0;
        if (quality === 0) {
            // Again - reduce ease factor
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
        } else {
            // Hard - slight reduction
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.15);
        }
    } else {
        // Good or Easy
        if (card.repetitions === 0) {
            card.interval = 1;
        } else if (card.repetitions === 1) {
            card.interval = 6;
        } else {
            card.interval = Math.round(card.interval * card.easeFactor);
        }
        
        card.repetitions += 1;
        
        if (quality === 3) {
            // Easy - increase ease factor
            card.easeFactor += 0.15;
        }
    }
    
    // Update last review date
    card.lastReviewDate = today.toISOString().split('T')[0];
    
    // Calculate next due date
    const nextDueDate = new Date(today);
    nextDueDate.setDate(nextDueDate.getDate() + card.interval);
    card.dueDate = nextDueDate.toISOString().split('T')[0];
    
    return card;
}

// Get cards that are due for review
function getDueCards(cards) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return cards.filter(card => {
        // Initialize if needed
        initializeCardSpacedRepetition(card);
        
        // If no dueDate, it's a new card - due immediately
        if (!card.dueDate) {
            card.dueDate = today.toISOString().split('T')[0];
            return true;
        }
        
        // Check if due date is today or in the past
        const dueDate = new Date(card.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        return dueDate <= today;
    });
}

// Handle card difficulty rating
function handleCardDifficulty(card, difficulty, cardType) {
    // Map difficulty to quality: Again=0, Hard=1, Good=2, Easy=3
    const qualityMap = {
        'again': 0,
        'hard': 1,
        'good': 2,
        'easy': 3
    };
    
    const quality = qualityMap[difficulty.toLowerCase()] || 2;
    
    // Update card using SM-2 algorithm
    calculateNextReview(card, quality);
    
    // Save updated card back to repository or userContent
    // Note: In a real app, this would be saved to a database
    // For now, the card object is updated in place
    
    return card;
}

// Get flashcards for a specific section within a course
function getSectionFlashcards(courseId, sectionId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return [];
    
    // Find the section
    const section = courseData.sections.find(s => s.id === sectionId);
    if (!section) return [];
    
    // Get lesson IDs for this section
    const lessonIds = new Set(section.lessons.map(lesson => lesson.id));
    
    // Get educator flashcards for this section
    const educatorFlashcards = repository.flashcards.filter(f => 
        f.sid === sectionId && lessonIds.has(f.tid)
    );
    
    // Get user flashcards for this section
    const userFlashcards = state.userContent.flashcards.filter(f => 
        f.sid === sectionId && lessonIds.has(f.tid)
    );
    
    return [...educatorFlashcards, ...userFlashcards];
}

// Get MCQs for a specific section within a course
function getSectionMCQs(courseId, sectionId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return [];
    
    // Find the section
    const section = courseData.sections.find(s => s.id === sectionId);
    if (!section) return [];
    
    // Get lesson IDs for this section
    const lessonIds = new Set(section.lessons.map(lesson => lesson.id));
    
    // Get educator MCQs for this section
    const educatorMcqs = repository.mcqs.filter(m => 
        m.sid === sectionId && lessonIds.has(m.tid)
    );
    
    // Get user MCQs for this section
    const userMcqs = state.userContent.mcqs.filter(m => 
        m.sid === sectionId && lessonIds.has(m.tid)
    );
    
    return [...educatorMcqs, ...userMcqs];
}

// Check if user has done any content (flashcards, notes, or MCQs) for a lesson
function hasUserDoneContentForLesson(courseId, lessonId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return false;
    
    // Check if user has created flashcards for this lesson
    const hasUserFlashcards = state.userContent.flashcards.some(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === f.sid)) {
                return f.tid === lessonId;
            }
        }
        return false;
    });
    
    // Check if user has created notes for this lesson
    const hasUserNotes = state.userContent.notes.some(n => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === n.sid)) {
                return n.tid === lessonId;
            }
        }
        return false;
    });
    
    // Check if user has created MCQs for this lesson
    const hasUserMCQs = state.userContent.mcqs.some(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === m.sid)) {
                return m.tid === lessonId;
            }
        }
        return false;
    });
    
    // Check if there are any educator flashcards or MCQs that have been reviewed (have dueDate)
    const hasReviewedEducatorFlashcards = repository.flashcards.some(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === f.sid)) {
                return f.tid === lessonId && f.dueDate;
            }
        }
        return false;
    });
    
    const hasReviewedEducatorMCQs = repository.mcqs.some(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === m.sid)) {
                return m.tid === lessonId && m.dueDate;
            }
        }
        return false;
    });
    
    return hasUserFlashcards || hasUserNotes || hasUserMCQs || hasReviewedEducatorFlashcards || hasReviewedEducatorMCQs;
}

// Get due flashcards for a specific lesson
function getDueFlashcardsForLesson(courseId, lessonId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return [];
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    // Get educator flashcards
    const educatorFlashcards = repository.flashcards.filter(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === f.sid)) {
                return f.tid === lessonId;
            }
        }
        return false;
    });
    
    // Get user flashcards
    const userFlashcards = state.userContent.flashcards.filter(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === f.sid)) {
                return f.tid === lessonId;
            }
        }
        return false;
    });
    
    // Filter for due items (items with dueDate that is today or in the past)
    const dueFlashcards = [...educatorFlashcards, ...userFlashcards].filter(f => {
        if (f.dueDate) {
            const dueDate = new Date(f.dueDate);
            dueDate.setHours(0, 0, 0, 0);
            return dueDate <= now;
        }
        return false;
    });
    
    return dueFlashcards;
}

// Get due MCQs for a specific lesson
function getDueMCQsForLesson(courseId, lessonId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return [];
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    // Get educator MCQs
    const educatorMcqs = repository.mcqs.filter(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === m.sid)) {
                return m.tid === lessonId;
            }
        }
        return false;
    });
    
    // Get user MCQs
    const userMcqs = state.userContent.mcqs.filter(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === lessonId && section.id === m.sid)) {
                return m.tid === lessonId;
            }
        }
        return false;
    });
    
    // Filter for due items (items with dueDate that is today or in the past)
    const dueMCQs = [...educatorMcqs, ...userMcqs].filter(m => {
        if (m.dueDate) {
            const dueDate = new Date(m.dueDate);
            dueDate.setHours(0, 0, 0, 0);
            return dueDate <= now;
        }
        return false;
    });
    
    return dueMCQs;
}

// Start revision session for a specific course
function startRevisionSessionForCourse(courseId) {
    state.currentCourseId = courseId;
    state.revisionQueueMode = 'flashcards'; // Start with flashcards
    
    const selectionView = document.getElementById('revision-queue-course-selection');
    const sessionView = document.getElementById('revision-queue-session');
    
    if (selectionView) selectionView.classList.add('hidden');
    if (sessionView) sessionView.classList.remove('hidden');
    
    renderRevisionQueueSession();
}

// Render revision session content
function renderRevisionQueueSession() {
    const courseData = courseDetailData[state.currentCourseId];
    if (!courseData) return;
    
    // Update session title
    const titleEl = document.getElementById('revision-queue-session-title');
    const courseEl = document.getElementById('revision-queue-session-course');
    if (titleEl) {
        titleEl.textContent = state.revisionQueueMode === 'flashcards' ? 'Flashcards' : 'MCQs';
    }
    if (courseEl) {
        courseEl.textContent = courseData.title;
    }
    
    // Update mode buttons and setup listeners
    const flashcardsBtn = document.getElementById('revision-queue-mode-flashcards');
    const mcqsBtn = document.getElementById('revision-queue-mode-mcqs');
    if (flashcardsBtn) {
        flashcardsBtn.classList.toggle('active', state.revisionQueueMode === 'flashcards');
        flashcardsBtn.onclick = () => {
            state.revisionQueueMode = 'flashcards';
            renderRevisionQueueSession();
        };
    }
    if (mcqsBtn) {
        mcqsBtn.classList.toggle('active', state.revisionQueueMode === 'mcqs');
        mcqsBtn.onclick = () => {
            state.revisionQueueMode = 'mcqs';
            renderRevisionQueueSession();
        };
    }
    
    // Setup back button listener
    const sessionBackBtn = document.getElementById('revision-queue-session-back-btn');
    if (sessionBackBtn) {
        sessionBackBtn.onclick = () => renderRevisionQueueCourseSelection();
    }
    
    // Get content for current course
    const flashcards = getCourseFlashcards(state.currentCourseId);
    const mcqs = getCourseMCQs(state.currentCourseId);
    
    // Update counts
    const flashcardsCountEl = document.getElementById('revision-queue-flashcards-count');
    const mcqsCountEl = document.getElementById('revision-queue-mcqs-count');
    if (flashcardsCountEl) flashcardsCountEl.textContent = flashcards.length;
    if (mcqsCountEl) mcqsCountEl.textContent = mcqs.length;
    
    // Render content
    const contentEl = document.getElementById('revision-queue-content');
    if (!contentEl) return;
    
    if (state.revisionQueueMode === 'flashcards') {
        renderRevisionQueueFlashcards(contentEl, flashcards);
    } else {
        renderRevisionQueueMCQs(contentEl, mcqs);
    }
    
    lucide.createIcons();
}

// Render flashcards in revision queue
function renderRevisionQueueFlashcards(container, flashcards) {
    if (flashcards.length === 0) {
        container.innerHTML = '<p class="course-detail-empty">No flashcards available for this course.</p>';
        return;
    }
    
    // Use the same HTML structure as course detail page
    container.innerHTML = flashcards.map(card => `
        <div class="course-detail-flashcard-wrapper">
            <div class="course-detail-flashcard-card ${state.revealStates[card.id] ? 'flipped' : ''} ${card.source === 'user' ? 'user-created' : ''}">
                <div class="course-detail-flashcard-inner">
                    <div class="course-detail-flashcard-front">
                        ${card.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                        ${getVideoSourceHTML(card)}
                        <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                        <div class="course-detail-flashcard-content">
                            ${card.q}
                        </div>
                        <div class="course-detail-flashcard-actions">
                            <button class="course-detail-reveal-btn" data-card-id="${card.id}">Reveal Answer</button>
                            ${card.source !== 'user' ? `
                            <button class="course-detail-flashcard-report-btn" data-card-id="${card.id}">
                                <i data-lucide="flag"></i>
                                <span>Report</span>
                            </button>
                            ` : ''}
                        </div>
                    </div>
                    <div class="course-detail-flashcard-back">
                        ${getVideoSourceHTML(card)}
                        <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                        <div class="course-detail-flashcard-content">
                            ${card.a}
                        </div>
                        <div class="course-detail-difficulty-buttons">
                            <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-card-id="${card.id}">Again</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-card-id="${card.id}">Hard</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-card-id="${card.id}">Good</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-card-id="${card.id}">Easy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for report buttons
    container.querySelectorAll('.course-detail-flashcard-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            openReportModal(cardId, 'flashcard');
        });
    });

    // Add event listeners for reveal button
    container.querySelectorAll('.course-detail-reveal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            const cardElement = btn.closest('.course-detail-flashcard-card');
            if (cardElement) {
                cardElement.classList.add('flipped');
            }
            state.revealStates[cardId] = true;
        });
    });

    // Add event listeners for difficulty buttons
    container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            const cardElement = btn.closest('.course-detail-flashcard-card');
            if (cardElement) {
                cardElement.classList.remove('flipped');
                // Update state after animation completes
                setTimeout(() => {
                    delete state.revealStates[cardId];
                }, 600);
            } else {
                delete state.revealStates[cardId];
            }
        });
    });

    // Add event listeners for video source links
    container.querySelectorAll('.course-detail-video-source-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lessonId = parseInt(link.getAttribute('data-lesson-id'));
            const timestamp = parseFloat(link.getAttribute('data-timestamp'));
            navigateToVideoAtTimestamp(lessonId, timestamp);
        });
    });
    
    lucide.createIcons();
}

// Render MCQs in revision queue
function renderRevisionQueueMCQs(container, mcqs) {
    if (mcqs.length === 0) {
        container.innerHTML = '<p class="course-detail-empty">No MCQs available for this course.</p>';
        return;
    }
    
    // Use the same HTML structure as course detail page
    container.innerHTML = mcqs.map(mcq => `
        <div class="course-detail-mcq-card ${mcq.source === 'user' ? 'user-created' : ''}">
            <div class="course-detail-mcq-header">
                <div class="course-detail-mcq-header-left">
                    <span class="course-detail-mcq-difficulty-badge">Difficulty: ${getMCQDifficulty(mcq)}</span>
                </div>
                ${mcq.source !== 'user' ? `
                <div class="course-detail-mcq-header-right">
                    <button class="course-detail-mcq-report-btn" data-mcq-id="${mcq.id}">
                        <i data-lucide="flag"></i>
                        <span>Report</span>
                    </button>
                </div>
                ` : ''}
            </div>
            ${mcq.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
            ${getVideoSourceHTML(mcq)}
            <h3 class="course-detail-mcq-question">${mcq.question}</h3>
            <div class="course-detail-mcq-options">
                ${mcq.options.map((opt, i) => `
                    <div class="course-detail-mcq-option-container ${state.quizAnswers[mcq.id] === i ? 'expanded' : ''}">
                        <button class="course-detail-mcq-option ${state.quizAnswers[mcq.id] === i ? (opt.correct ? 'correct' : 'incorrect') : ''}" 
                            data-mcq-id="${mcq.id}" data-option-index="${i}">
                            <div class="course-detail-mcq-option-content">
                                <div class="course-detail-mcq-option-radio">
                                    ${state.quizAnswers[mcq.id] === i ? '<div class="course-detail-mcq-option-radio-fill"></div>' : ''}
                                </div>
                                <span>${opt.text}</span>
                            </div>
                        </button>
                        ${state.quizAnswers[mcq.id] === i ? `
                            <div class="course-detail-mcq-explanation ${opt.correct ? 'correct' : 'incorrect'}">
                                <div class="course-detail-mcq-explanation-label">${opt.correct ? 'Context' : 'Clarification'}</div>
                                ${opt.exp}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            ${state.quizAnswers[mcq.id] !== undefined ? `
                <div class="course-detail-difficulty-buttons">
                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcq.id}">Again</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcq.id}">Hard</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcq.id}">Good</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcq.id}">Easy</button>
                </div>
            ` : ''}
        </div>
    `).join('');

    // Helper function to find MCQ data
    const findMCQ = (id) => mcqs.find(m => m.id === id);

    // Add event listeners for report buttons
    container.querySelectorAll('.course-detail-mcq-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
            openReportModal(mcqId, 'mcq');
        });
    });

    // Add event listeners for MCQ options
    container.querySelectorAll('.course-detail-mcq-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
            const optionIndex = parseInt(btn.getAttribute('data-option-index'));
            state.quizAnswers[mcqId] = optionIndex;
            
            // Update DOM directly instead of re-rendering
            const mcqCard = btn.closest('.course-detail-mcq-card');
            const mcq = findMCQ(mcqId);
            if (!mcqCard || !mcq) return;
            
            const optionsContainer = mcqCard.querySelector('.course-detail-mcq-options');
            const allOptionContainers = optionsContainer.querySelectorAll('.course-detail-mcq-option-container');
            
            // Update all options
            allOptionContainers.forEach((optContainer, i) => {
                const optButton = optContainer.querySelector('.course-detail-mcq-option');
                const radio = optContainer.querySelector('.course-detail-mcq-option-radio');
                const existingExplanation = optContainer.querySelector('.course-detail-mcq-explanation');
                
                if (i === optionIndex) {
                    // Selected option
                    optContainer.classList.add('expanded');
                    optButton.classList.add(mcq.options[i].correct ? 'correct' : 'incorrect');
                    if (!radio.querySelector('.course-detail-mcq-option-radio-fill')) {
                        radio.innerHTML = '<div class="course-detail-mcq-option-radio-fill"></div>';
                    }
                    
                    // Add explanation if not exists
                    if (!existingExplanation) {
                        const explanation = document.createElement('div');
                        explanation.className = `course-detail-mcq-explanation ${mcq.options[i].correct ? 'correct' : 'incorrect'}`;
                        explanation.innerHTML = `
                            <div class="course-detail-mcq-explanation-label">${mcq.options[i].correct ? 'Context' : 'Clarification'}</div>
                            ${mcq.options[i].exp}
                        `;
                        optContainer.appendChild(explanation);
                    }
                } else {
                    // Other options
                    optContainer.classList.remove('expanded');
                    optButton.classList.remove('correct', 'incorrect');
                    radio.innerHTML = '';
                    if (existingExplanation) {
                        existingExplanation.remove();
                    }
                }
            });
            
            // Show difficulty buttons if not already shown
            let difficultyButtons = mcqCard.querySelector('.course-detail-difficulty-buttons');
            if (!difficultyButtons) {
                difficultyButtons = document.createElement('div');
                difficultyButtons.className = 'course-detail-difficulty-buttons';
                difficultyButtons.innerHTML = `
                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcqId}">Again</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcqId}">Hard</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcqId}">Good</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcqId}">Easy</button>
                `;
                mcqCard.appendChild(difficultyButtons);
                
                // Add event listeners for difficulty buttons
                difficultyButtons.querySelectorAll('.course-detail-difficulty-btn').forEach(diffBtn => {
                    diffBtn.addEventListener('click', () => {
                        // Handle difficulty rating (can be used for spaced repetition)
                        const diffMcqId = parseInt(diffBtn.getAttribute('data-mcq-id'));
                        // You can add logic here to handle the difficulty rating
                    });
                });
            }
        });
    });

    // Add event listeners for video source links
    container.querySelectorAll('.course-detail-video-source-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lessonId = parseInt(link.getAttribute('data-lesson-id'));
            const timestamp = parseFloat(link.getAttribute('data-timestamp'));
            navigateToVideoAtTimestamp(lessonId, timestamp);
        });
    });
    
    lucide.createIcons();
}

function showCourseDetail(courseId) {
    state.currentCourseId = courseId;
    showPage('course-detail');
}

function renderCourseDetail(courseId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) {
        console.error('Course data not found for ID:', courseId);
        return;
    }

    // Update navigation
    const titleEl = document.getElementById('course-detail-title');
    const subtitleEl = document.getElementById('course-detail-subtitle');
    if (titleEl) titleEl.textContent = courseData.title;
    
    // Calculate total course counts
    const totalFlashcards = getCourseFlashcards(courseId).length;
    const totalMCQs = getCourseMCQs(courseId).length;
    
    // Build subtitle with mastery and validity badge (counts moved to sidebar)
    if (subtitleEl) {
        let subtitleHTML = `Aggregate Mastery: ${courseData.totalMastery}%`;
        if (courseData.expiryDate) {
            const validityText = formatCourseValidity(courseData.expiryDate);
            if (validityText) {
                let badgeContent = validityText;
                let badgeClasses = 'course-detail-validity-badge';
                
                // Include EMI due info in the validity badge if available
                if (courseData.nextEMIDueDate) {
                    const emiText = formatEMIDueDate(courseData.nextEMIDueDate);
                    badgeContent += ` • ${emiText}`;
                }
                
                // Check if badge content contains "overdue" or "remaining" (case insensitive)
                const badgeContentLower = badgeContent.toLowerCase();
                if (badgeContentLower.includes('overdue') || badgeContentLower.includes('remaining')) {
                    badgeClasses += ' badge-overdue badge-remaining';
                }
                
                subtitleHTML += ` <span class="${badgeClasses}" id="course-validity-badge">${badgeContent}</span>`;
            }
        }
        
        subtitleEl.innerHTML = subtitleHTML;
        
        // Add click event listener to validity badge
        const validityBadge = document.getElementById('course-validity-badge');
        if (validityBadge && courseData.purchaseDate && courseData.expiryDate) {
            validityBadge.addEventListener('click', () => {
                openCourseValidityModal(courseData.purchaseDate, courseData.expiryDate, courseData.nextEMIDueDate, courseData.emiDetails);
            });
        }
    }

    // Render sidebar lessons
    renderCourseDetailLessons(courseData);
    
    // Update total counts below "Lesson Modules" heading
    updateLessonModulesCounts(courseId);

    // Render current view
    switchCourseView(state.currentCourseView);

    // Setup event listeners
    setupCourseDetailEventListeners();

    // Update theme icon
    updateThemeIcon();

    // Update icons
    lucide.createIcons();
}

function renderCourseDetailLessons(courseData) {
    const container = document.getElementById('course-detail-lessons-list');
    if (!container) return;

    // Initialize collapsed state if not exists
    if (!state.collapsedSections) {
        state.collapsedSections = new Set();
    }

    let html = '';
    courseData.sections.forEach((section, index) => {
        const sectionId = `section-${index}`;
        const isCollapsed = state.collapsedSections.has(sectionId);
        
        // Calculate counts for this section
        const sectionFlashcards = getSectionFlashcards(state.currentCourseId, section.id).length;
        const sectionMCQs = getSectionMCQs(state.currentCourseId, section.id).length;
        
        html += `<div class="course-detail-section-group">
            <div class="course-detail-section-header-wrapper">
                <button class="course-detail-section-header" data-section-id="${sectionId}">
                    <span class="course-detail-section-title">${section.title}</span>
                    <i data-lucide="chevron-down" class="course-detail-section-chevron ${isCollapsed ? 'collapsed' : ''}"></i>
                </button>
                <div class="course-detail-section-counts">
                    <span class="course-detail-section-count-badge" title="${sectionFlashcards} Flashcards">
                        <i data-lucide="brain" class="course-detail-section-count-icon"></i>
                        <span class="course-detail-section-count-number">${sectionFlashcards}</span>
                    </span>
                    <span class="course-detail-section-count-badge" title="${sectionMCQs} MCQs">
                        <i data-lucide="zap" class="course-detail-section-count-icon"></i>
                        <span class="course-detail-section-count-number">${sectionMCQs}</span>
                    </span>
                </div>
            </div>
            <div class="course-detail-lessons-group ${isCollapsed ? 'hidden' : ''}">`;
        
        section.lessons.forEach(lesson => {
            const isActive = state.currentCourseView === 'lesson' && state.currentLessonId === lesson.id;
            const lessonId = lesson.id;
            
            // Check if user has done content for this lesson
            const hasDoneContent = hasUserDoneContentForLesson(state.currentCourseId, lessonId);
            
            // Get due counts if user has done content
            let dueFlashcardsCount = 0;
            let dueMCQsCount = 0;
            if (hasDoneContent) {
                const dueFlashcards = getDueFlashcardsForLesson(state.currentCourseId, lessonId);
                const dueMCQs = getDueMCQsForLesson(state.currentCourseId, lessonId);
                dueFlashcardsCount = dueFlashcards.length;
                dueMCQsCount = dueMCQs.length;
            }
            
            const hasDueItems = dueFlashcardsCount > 0 || dueMCQsCount > 0;
            const lessonWrapperId = `lesson-wrapper-${lessonId}`;
            
            html += `<div class="course-detail-lesson-wrapper" id="${lessonWrapperId}" data-lesson-id="${lessonId}">
                <button class="course-detail-lesson-item ${isActive ? 'active' : ''}" data-lesson-id="${lessonId}">
                    <div class="course-detail-lesson-progress">
                        <svg class="course-detail-lesson-progress-svg" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="transparent" class="course-detail-lesson-progress-bg" />
                            <circle cx="8" cy="8" r="6" stroke="${getLessonStatusColor(lesson.status)}" stroke-width="2" fill="transparent" 
                                stroke-dasharray="${2 * Math.PI * 6}" 
                                stroke-dashoffset="${2 * Math.PI * 6 * (1 - lesson.mastery / 100)}" 
                                stroke-linecap="round" />
                        </svg>
                    </div>
                    <span class="course-detail-lesson-title">${lesson.title}</span>
                </button>`;
            
            // Add due section if user has done content - always show when there are due items
            if (hasDoneContent && hasDueItems) {
                html += `<div class="course-detail-lesson-due-section">
                    <div class="course-detail-lesson-due-counts">
                        ${dueFlashcardsCount > 0 ? `
                            <span class="course-detail-lesson-due-badge course-detail-lesson-due-badge-flashcards" data-lesson-id="${lessonId}" data-type="flashcards">
                                <i data-lucide="brain" class="course-detail-lesson-due-icon"></i>
                                <span class="course-detail-lesson-due-number">${dueFlashcardsCount}</span>
                                <span class="course-detail-lesson-due-label">Due</span>
                            </span>
                        ` : ''}
                        ${dueMCQsCount > 0 ? `
                            <span class="course-detail-lesson-due-badge course-detail-lesson-due-badge-mcqs" data-lesson-id="${lessonId}" data-type="mcqs">
                                <i data-lucide="zap" class="course-detail-lesson-due-icon"></i>
                                <span class="course-detail-lesson-due-number">${dueMCQsCount}</span>
                                <span class="course-detail-lesson-due-label">Due</span>
                            </span>
                        ` : ''}
                    </div>
                </div>`;
            } else if (hasDoneContent && !hasDueItems) {
                // Show "all caught up" when user has done content but no due items
                html += `<div class="course-detail-lesson-due-section">
                    <div class="course-detail-lesson-due-counts">
                        <span class="course-detail-lesson-due-badge course-detail-lesson-due-badge-none">
                            <i data-lucide="check-circle" class="course-detail-lesson-due-icon"></i>
                            <span class="course-detail-lesson-due-label">All caught up!</span>
                        </span>
                    </div>
                </div>`;
            }
            
            html += `</div>`;
        });
        
        html += `</div></div>`;
    });

    container.innerHTML = html;

    // Add click handlers for section headers (collapse/expand)
    container.querySelectorAll('.course-detail-section-header').forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.getAttribute('data-section-id');
            const headerWrapper = header.closest('.course-detail-section-header-wrapper');
            const lessonsGroup = headerWrapper ? headerWrapper.nextElementSibling : header.nextElementSibling;
            const chevron = header.querySelector('.course-detail-section-chevron');
            
            if (state.collapsedSections.has(sectionId)) {
                state.collapsedSections.delete(sectionId);
                lessonsGroup.classList.remove('hidden');
                chevron.classList.remove('collapsed');
            } else {
                state.collapsedSections.add(sectionId);
                lessonsGroup.classList.add('hidden');
                chevron.classList.add('collapsed');
            }
            
            lucide.createIcons();
        });
    });

    // Add click handlers for lesson items
    container.querySelectorAll('.course-detail-lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const lessonId = parseInt(item.getAttribute('data-lesson-id'));
            state.currentLessonId = lessonId;
            
            // Update active state on all lesson items
            container.querySelectorAll('.course-detail-lesson-item').forEach(li => {
                li.classList.remove('active');
            });
            item.classList.add('active');
            
            switchCourseView('lesson');
        });
    });
    
    // Add click handlers for due badges to navigate to lesson
    container.querySelectorAll('.course-detail-lesson-due-badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the lesson item click
            const lessonId = parseInt(badge.getAttribute('data-lesson-id'));
            const type = badge.getAttribute('data-type');
            
            if (lessonId) {
                state.currentLessonId = lessonId;
                
                // Update active state
                container.querySelectorAll('.course-detail-lesson-item').forEach(li => {
                    li.classList.remove('active');
                });
                const lessonItem = container.querySelector(`.course-detail-lesson-item[data-lesson-id="${lessonId}"]`);
                if (lessonItem) lessonItem.classList.add('active');
                
                // Determine which tab to show based on badge type
                if (type === 'flashcards') {
                    state.currentLessonTab = 'flashcards';
                } else if (type === 'mcqs') {
                    state.currentLessonTab = 'quiz';
                }
                
                switchCourseView('lesson');
            }
        });
    });

    lucide.createIcons();
}

function updateLessonModulesCounts(courseId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) return;
    
    // Calculate total course counts
    const totalFlashcards = getCourseFlashcards(courseId).length;
    const totalMCQs = getCourseMCQs(courseId).length;
    
    // Find or create the counts container below "Lesson Modules" heading
    const lessonsSection = document.querySelector('.course-detail-lessons-section');
    if (!lessonsSection) return;
    
    let countsContainer = document.getElementById('lesson-modules-counts');
    if (!countsContainer) {
        // Create the counts container
        const heading = lessonsSection.querySelector('.course-detail-sidebar-title');
        if (heading) {
            countsContainer = document.createElement('div');
            countsContainer.id = 'lesson-modules-counts';
            countsContainer.className = 'lesson-modules-counts';
            heading.insertAdjacentElement('afterend', countsContainer);
        }
    }
    
    if (countsContainer) {
        countsContainer.innerHTML = `
            <div class="lesson-modules-count-item">
                <i data-lucide="brain" class="lesson-modules-count-icon"></i>
                <span class="lesson-modules-count-number">${totalFlashcards}</span>
                <span class="lesson-modules-count-label">Flashcards</span>
            </div>
            <div class="lesson-modules-count-item">
                <i data-lucide="zap" class="lesson-modules-count-icon"></i>
                <span class="lesson-modules-count-number">${totalMCQs}</span>
                <span class="lesson-modules-count-label">MCQs</span>
            </div>
        `;
        lucide.createIcons();
    }
}

function getLessonStatusColor(status) {
    if (status === 'fading') return '#eab308';
    if (status === 'mastered') return '#10b981';
    return '#cbd5e1';
}

function switchCourseView(mode) {
    state.currentCourseView = mode;

    // Hide all views
    document.querySelectorAll('.course-detail-view').forEach(view => {
        view.classList.add('hidden');
    });

    // Update hub buttons
    document.querySelectorAll('.course-detail-hub-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-view') === mode) {
            btn.classList.add('active');
        }
    });

    // Update lesson items active state
    const container = document.getElementById('course-detail-lessons-list');
    if (container) {
        container.querySelectorAll('.course-detail-lesson-item').forEach(item => {
            item.classList.remove('active');
            // Only add active class if we're switching to lesson view and this is the current lesson
            if (mode === 'lesson') {
                const lessonId = parseInt(item.getAttribute('data-lesson-id'));
                if (lessonId === state.currentLessonId) {
                    item.classList.add('active');
                }
            }
        });
    }

    // Show selected view
    const viewEl = document.getElementById(`course-detail-view-${mode}`);
    if (viewEl) {
        viewEl.classList.remove('hidden');
    }

    // Render view content
    switch (mode) {
        case 'lesson':
            renderLessonView();
            break;
        case 'global-recall':
            renderSmartRevisionView();
            break;
        case 'writing':
            renderWritingView();
            break;
        case 'analytics':
            renderAnalyticsView();
            break;
        case 'test-series':
            renderTestSeriesView();
            break;
    }

    lucide.createIcons();
}

function renderLessonView() {
    const courseData = courseDetailData[state.currentCourseId];
    if (!courseData) return;

    // Find current lesson
    let currentLesson = null;
    for (const section of courseData.sections) {
        currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
        if (currentLesson) break;
    }

    if (!currentLesson) {
        // Default to first lesson
        const firstSection = courseData.sections[0];
        if (firstSection && firstSection.lessons.length > 0) {
            currentLesson = firstSection.lessons[0];
            state.currentLessonId = currentLesson.id;
        }
    }

    if (!currentLesson) return;

    // Update tab counts (include user content)
    const flashcardsCountEl = document.getElementById('lesson-flashcards-count');
    const mcqsCountEl = document.getElementById('lesson-mcqs-count');
    
    // Count educator flashcards
    const educatorFlashcards = repository.flashcards.filter(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === f.sid)) {
                return f.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    // Count user flashcards
    const userFlashcards = state.userContent.flashcards.filter(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === f.sid)) {
                return f.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    // Count educator MCQs
    const educatorMcqs = repository.mcqs.filter(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === m.sid)) {
                return m.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    // Count user MCQs
    const userMcqs = state.userContent.mcqs.filter(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === m.sid)) {
                return m.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    if (flashcardsCountEl) flashcardsCountEl.textContent = educatorFlashcards.length + userFlashcards.length;
    if (mcqsCountEl) mcqsCountEl.textContent = educatorMcqs.length + userMcqs.length;

    // Update video badge with lesson title
    const videoBadgeText = document.getElementById('video-title-badge-text');
    if (videoBadgeText) {
        videoBadgeText.textContent = currentLesson.title;
    }

    // Update video title and description below video
    const videoTitleEl = document.getElementById('course-detail-video-title');
    const videoDescriptionEl = document.getElementById('course-detail-video-description');
    if (videoTitleEl) {
        videoTitleEl.textContent = currentLesson.title;
    }
    if (videoDescriptionEl) {
        videoDescriptionEl.textContent = 'High-relevance UPSC concept. Study carefully.';
    }

    // Initialize video player
    setTimeout(() => {
        initVideoPlayer();
    }, 100);

    // Set default tab to flashcards if current tab is video
    if (state.currentLessonTab === 'video') {
        state.currentLessonTab = 'flashcards';
    }

    // Render tab content
    renderLessonTabContent(currentLesson);

    // Scroll main content area to top to show video
    setTimeout(() => {
        const mainContent = document.querySelector('.course-detail-main');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 150);
}

function renderLessonTabContent(lesson) {
    const container = document.getElementById('course-detail-tab-content');
    if (!container) return;

    const tab = state.currentLessonTab || 'flashcards';

    if (tab === 'flashcards') {
        // Get educator flashcards
        const educatorFlashcards = repository.flashcards.filter(f => {
            const courseData = courseDetailData[state.currentCourseId];
            if (!courseData) return false;
            for (const section of courseData.sections) {
                if (section.lessons.some(l => l.id === lesson.id && section.id === f.sid)) {
                    return f.tid === lesson.id;
                }
            }
            return false;
        });

        // Get user flashcards for this lesson
        const userFlashcards = state.userContent.flashcards.filter(f => {
            const courseData = courseDetailData[state.currentCourseId];
            if (!courseData) return false;
            for (const section of courseData.sections) {
                if (section.lessons.some(l => l.id === lesson.id && section.id === f.sid)) {
                    return f.tid === lesson.id;
                }
            }
            return false;
        });

        // Merge and filter
        let allFlashcards = [...educatorFlashcards, ...userFlashcards];
        const filter = state.contentFilter.flashcards || 'all';
        if (filter === 'educator') {
            allFlashcards = educatorFlashcards;
        } else if (filter === 'user') {
            allFlashcards = userFlashcards;
        }

        // Render filter buttons and Add button
        const filterButtons = `
            <div class="course-detail-content-filter">
                <button class="course-detail-content-filter-btn ${filter === 'all' ? 'active' : ''}" data-filter="all" data-tab="flashcards">All</button>
                <button class="course-detail-content-filter-btn ${filter === 'educator' ? 'active' : ''}" data-filter="educator" data-tab="flashcards">Educator</button>
                <button class="course-detail-content-filter-btn ${filter === 'user' ? 'active' : ''}" data-filter="user" data-tab="flashcards">User</button>
            </div>
            <div class="course-detail-section-add-container">
                <button class="course-detail-section-add-btn" data-content-type="flashcard">
                    <i data-lucide="plus"></i>
                    <span>Add</span>
                </button>
            </div>
        `;

        if (allFlashcards.length === 0) {
            const emptyMsg = filter === 'all' ? 'No flashcards available for this lesson.' : 
                           filter === 'educator' ? 'No educator-created flashcards available.' : 
                           'No user-created flashcards available.';
            container.innerHTML = filterButtons + `<p class="course-detail-empty">${emptyMsg}</p>`;
        } else {
            container.innerHTML = filterButtons + allFlashcards.map(card => `
                <div class="course-detail-flashcard-wrapper">
                    <div class="course-detail-flashcard-card ${state.revealStates[card.id] ? 'flipped' : ''} ${card.source === 'user' ? 'user-created' : ''}">
                        <div class="course-detail-flashcard-inner">
                            <div class="course-detail-flashcard-front">
                                ${card.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                                ${getVideoSourceHTML(card)}
                                <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                                <div class="course-detail-flashcard-content">
                                    ${card.q}
                                </div>
                                <div class="course-detail-flashcard-actions">
                                    <button class="course-detail-reveal-btn" data-card-id="${card.id}">Reveal Answer</button>
                                    ${card.source !== 'user' ? `
                                    <button class="course-detail-flashcard-report-btn" data-card-id="${card.id}">
                                        <i data-lucide="flag"></i>
                                        <span>Report</span>
                                    </button>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="course-detail-flashcard-back">
                                ${getVideoSourceHTML(card)}
                                <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                                <div class="course-detail-flashcard-content">
                                    ${card.a}
                                </div>
                                <div class="course-detail-difficulty-buttons">
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-card-id="${card.id}">Again</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-card-id="${card.id}">Hard</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-card-id="${card.id}">Good</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-card-id="${card.id}">Easy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Add event listeners for filter buttons
        container.querySelectorAll('.course-detail-content-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                state.contentFilter.flashcards = filterValue;
                renderLessonTabContent(lesson);
            });
        });

        // Add event listeners for report buttons
        container.querySelectorAll('.course-detail-flashcard-report-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cardId = parseInt(btn.getAttribute('data-card-id'));
                openReportModal(cardId, 'flashcard');
            });
        });

        // Add event listeners for reveal buttons
        container.querySelectorAll('.course-detail-reveal-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cardId = parseInt(btn.getAttribute('data-card-id'));
                const cardElement = btn.closest('.course-detail-flashcard-card');
                if (cardElement) {
                    cardElement.classList.add('flipped');
                }
                state.revealStates[cardId] = true;
            });
        });

        // Add event listeners for difficulty buttons
        container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cardId = parseInt(btn.getAttribute('data-card-id'));
                const cardElement = btn.closest('.course-detail-flashcard-card');
                if (cardElement) {
                    cardElement.classList.remove('flipped');
                    // Update state after animation completes, but don't re-render
                    setTimeout(() => {
                        delete state.revealStates[cardId];
                    }, 600);
                } else {
                    delete state.revealStates[cardId];
                }
            });
        });

        // Add event listeners for video source links
        container.querySelectorAll('.course-detail-video-source-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lessonId = parseInt(link.getAttribute('data-lesson-id'));
                const timestamp = parseFloat(link.getAttribute('data-timestamp'));
                navigateToVideoAtTimestamp(lessonId, timestamp);
            });
        });

        // Add event listener for Add button
        const addBtnFlashcard = container.querySelector('.course-detail-section-add-btn');
        if (addBtnFlashcard) {
            addBtnFlashcard.addEventListener('click', () => {
                const contentType = addBtnFlashcard.getAttribute('data-content-type');
                openContentModalFromSection(contentType);
            });
        }
        
        lucide.createIcons();
    } else if (tab === 'quiz') {
        // Get educator MCQs
        const educatorMcqs = repository.mcqs.filter(m => {
            const courseData = courseDetailData[state.currentCourseId];
            if (!courseData) return false;
            for (const section of courseData.sections) {
                if (section.lessons.some(l => l.id === lesson.id && section.id === m.sid)) {
                    return m.tid === lesson.id;
                }
            }
            return false;
        });

        // Get user MCQs for this lesson
        const userMcqs = state.userContent.mcqs.filter(m => {
            const courseData = courseDetailData[state.currentCourseId];
            if (!courseData) return false;
            for (const section of courseData.sections) {
                if (section.lessons.some(l => l.id === lesson.id && section.id === m.sid)) {
                    return m.tid === lesson.id;
                }
            }
            return false;
        });

        // Merge and filter
        let allMcqs = [...educatorMcqs, ...userMcqs];
        const filter = state.contentFilter.mcqs || 'all';
        if (filter === 'educator') {
            allMcqs = educatorMcqs;
        } else if (filter === 'user') {
            allMcqs = userMcqs;
        }

        // Render filter buttons and Add button
        const filterButtons = `
            <div class="course-detail-content-filter">
                <button class="course-detail-content-filter-btn ${filter === 'all' ? 'active' : ''}" data-filter="all" data-tab="mcqs">All</button>
                <button class="course-detail-content-filter-btn ${filter === 'educator' ? 'active' : ''}" data-filter="educator" data-tab="mcqs">Educator</button>
                <button class="course-detail-content-filter-btn ${filter === 'user' ? 'active' : ''}" data-filter="user" data-tab="mcqs">User</button>
            </div>
            <div class="course-detail-section-add-container">
                <button class="course-detail-section-add-btn" data-content-type="mcq">
                    <i data-lucide="plus"></i>
                    <span>Add</span>
                </button>
            </div>
        `;

        if (allMcqs.length === 0) {
            const emptyMsg = filter === 'all' ? 'No MCQs available for this lesson.' : 
                           filter === 'educator' ? 'No educator-created MCQs available.' : 
                           'No user-created MCQs available.';
            container.innerHTML = filterButtons + `<p class="course-detail-empty">${emptyMsg}</p>`;
        } else {
            container.innerHTML = filterButtons + allMcqs.map(mcq => `
                <div class="course-detail-mcq-card ${mcq.source === 'user' ? 'user-created' : ''}">
                    <div class="course-detail-mcq-header">
                        <div class="course-detail-mcq-header-left">
                            <span class="course-detail-mcq-difficulty-badge">Difficulty: ${getMCQDifficulty(mcq)}</span>
                        </div>
                        ${mcq.source !== 'user' ? `
                        <div class="course-detail-mcq-header-right">
                            <button class="course-detail-mcq-report-btn" data-mcq-id="${mcq.id}">
                                <i data-lucide="flag"></i>
                                <span>Report</span>
                            </button>
                        </div>
                        ` : ''}
                    </div>
                    ${mcq.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                    ${getVideoSourceHTML(mcq)}
                    <h3 class="course-detail-mcq-question">${mcq.question}</h3>
                    <div class="course-detail-mcq-options">
                        ${mcq.options.map((opt, i) => `
                            <div class="course-detail-mcq-option-container ${state.quizAnswers[mcq.id] === i ? 'expanded' : ''}">
                                <button class="course-detail-mcq-option ${state.quizAnswers[mcq.id] === i ? (opt.correct ? 'correct' : 'incorrect') : ''}" 
                                    data-mcq-id="${mcq.id}" data-option-index="${i}">
                                    <div class="course-detail-mcq-option-content">
                                        <div class="course-detail-mcq-option-radio">
                                            ${state.quizAnswers[mcq.id] === i ? '<div class="course-detail-mcq-option-radio-fill"></div>' : ''}
                                        </div>
                                        <span>${opt.text}</span>
                                    </div>
                                </button>
                                ${state.quizAnswers[mcq.id] === i ? `
                                    <div class="course-detail-mcq-explanation ${opt.correct ? 'correct' : 'incorrect'}">
                                        <div class="course-detail-mcq-explanation-label">${opt.correct ? 'Context' : 'Clarification'}</div>
                                        ${opt.exp}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ${state.quizAnswers[mcq.id] !== undefined ? `
                        <div class="course-detail-difficulty-buttons">
                            <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcq.id}">Again</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcq.id}">Hard</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcq.id}">Good</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcq.id}">Easy</button>
                        </div>
            ` : ''}
        </div>
    `).join('');
        }

        // Add event listeners for filter buttons
        container.querySelectorAll('.course-detail-content-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                state.contentFilter.mcqs = filterValue;
                renderLessonTabContent(lesson);
            });
        });

        // Helper function to find MCQ data
        const findMCQ = (id) => allMcqs.find(m => m.id === id);

        // Add event listeners for MCQ options
        container.querySelectorAll('.course-detail-mcq-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                const optionIndex = parseInt(btn.getAttribute('data-option-index'));
                state.quizAnswers[mcqId] = optionIndex;
                
                // Update DOM directly instead of re-rendering
                const mcqCard = btn.closest('.course-detail-mcq-card');
                const mcq = findMCQ(mcqId);
                if (!mcqCard || !mcq) return;
                
                const optionsContainer = mcqCard.querySelector('.course-detail-mcq-options');
                const allOptionContainers = optionsContainer.querySelectorAll('.course-detail-mcq-option-container');
                
                // Update all options
                allOptionContainers.forEach((optContainer, i) => {
                    const optButton = optContainer.querySelector('.course-detail-mcq-option');
                    const radio = optContainer.querySelector('.course-detail-mcq-option-radio');
                    const existingExplanation = optContainer.querySelector('.course-detail-mcq-explanation');
                    
                    if (i === optionIndex) {
                        // Selected option
                        optContainer.classList.add('expanded');
                        optButton.classList.add(mcq.options[i].correct ? 'correct' : 'incorrect');
                        if (!radio.querySelector('.course-detail-mcq-option-radio-fill')) {
                            const fill = document.createElement('div');
                            fill.className = 'course-detail-mcq-option-radio-fill';
                            radio.appendChild(fill);
                        }
                        
                        // Add explanation if it doesn't exist
                        if (!existingExplanation) {
                            const explanation = document.createElement('div');
                            explanation.className = `course-detail-mcq-explanation ${mcq.options[i].correct ? 'correct' : 'incorrect'}`;
                            explanation.innerHTML = `
                                <div class="course-detail-mcq-explanation-label">${mcq.options[i].correct ? 'Context' : 'Clarification'}</div>
                                ${mcq.options[i].exp}
                            `;
                            optContainer.appendChild(explanation);
                        }
                    } else {
                        // Other options
                        optContainer.classList.remove('expanded');
                        optButton.classList.remove('correct', 'incorrect');
                        const fill = radio.querySelector('.course-detail-mcq-option-radio-fill');
                        if (fill) fill.remove();
                        if (existingExplanation) existingExplanation.remove();
                    }
                });
                
                // Show difficulty buttons if they don't exist
                let difficultyButtons = mcqCard.querySelector('.course-detail-difficulty-buttons');
                if (!difficultyButtons) {
                    difficultyButtons = document.createElement('div');
                    difficultyButtons.className = 'course-detail-difficulty-buttons';
                    difficultyButtons.innerHTML = `
                        <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcqId}">Again</button>
                        <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcqId}">Hard</button>
                        <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcqId}">Good</button>
                        <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcqId}">Easy</button>
                    `;
                    optionsContainer.parentElement.appendChild(difficultyButtons);
                    
                    // Add event listener to the new difficulty buttons
                    difficultyButtons.querySelectorAll('.course-detail-difficulty-btn[data-mcq-id]').forEach(diffBtn => {
                        diffBtn.addEventListener('click', () => {
                            const id = parseInt(diffBtn.getAttribute('data-mcq-id'));
                            delete state.quizAnswers[id];
                            
                            // Update DOM directly
                            const card = diffBtn.closest('.course-detail-mcq-card');
                            if (!card) return;
                            const optsContainer = card.querySelector('.course-detail-mcq-options');
                            const optContainers = optsContainer.querySelectorAll('.course-detail-mcq-option-container');
                            
                            optContainers.forEach(optContainer => {
                                optContainer.classList.remove('expanded');
                                const optButton = optContainer.querySelector('.course-detail-mcq-option');
                                optButton.classList.remove('correct', 'incorrect');
                                const fill = optContainer.querySelector('.course-detail-mcq-option-radio-fill');
                                if (fill) fill.remove();
                                const explanation = optContainer.querySelector('.course-detail-mcq-explanation');
                                if (explanation) explanation.remove();
                            });
                            
                            difficultyButtons.remove();
                        });
                    });
                }
            });
        });

        // Add event listeners for difficulty buttons
        container.querySelectorAll('.course-detail-difficulty-btn[data-mcq-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                delete state.quizAnswers[mcqId];
                
                // Update DOM directly instead of re-rendering
                const mcqCard = btn.closest('.course-detail-mcq-card');
                if (!mcqCard) return;
                const optionsContainer = mcqCard.querySelector('.course-detail-mcq-options');
                const allOptionContainers = optionsContainer.querySelectorAll('.course-detail-mcq-option-container');
                
                allOptionContainers.forEach(optContainer => {
                    optContainer.classList.remove('expanded');
                    const optButton = optContainer.querySelector('.course-detail-mcq-option');
                    optButton.classList.remove('correct', 'incorrect');
                    const fill = optContainer.querySelector('.course-detail-mcq-option-radio-fill');
                    if (fill) fill.remove();
                    const explanation = optContainer.querySelector('.course-detail-mcq-explanation');
                    if (explanation) explanation.remove();
                });
                
                const difficultyButtons = mcqCard.querySelector('.course-detail-difficulty-buttons');
                if (difficultyButtons) difficultyButtons.remove();
            });
        });

        // Add event listeners for report buttons
        container.querySelectorAll('.course-detail-mcq-report-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                openReportModal(mcqId, 'mcq');
            });
        });

        // Add event listeners for video source links
        container.querySelectorAll('.course-detail-video-source-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lessonId = parseInt(link.getAttribute('data-lesson-id'));
                const timestamp = parseFloat(link.getAttribute('data-timestamp'));
                navigateToVideoAtTimestamp(lessonId, timestamp);
            });
        });

        // Add event listener for Add button
        const addBtnQuiz = container.querySelector('.course-detail-section-add-btn');
        if (addBtnQuiz) {
            addBtnQuiz.addEventListener('click', () => {
                const contentType = addBtnQuiz.getAttribute('data-content-type');
                openContentModalFromSection(contentType);
            });
        }
        
        lucide.createIcons();
    } else if (tab === 'notes') {
        // Get educator notes
        const educatorNotes = repository.notes.filter(n => {
            const courseData = courseDetailData[state.currentCourseId];
            if (!courseData) return false;
            for (const section of courseData.sections) {
                if (section.lessons.some(l => l.id === lesson.id && section.id === n.sid)) {
                    return n.tid === lesson.id;
                }
            }
            return false;
        });

        // Get user notes for this lesson
        const userNotes = state.userContent.notes.filter(n => {
            const courseData = courseDetailData[state.currentCourseId];
            if (!courseData) return false;
            for (const section of courseData.sections) {
                if (section.lessons.some(l => l.id === lesson.id && section.id === n.sid)) {
                    return n.tid === lesson.id;
                }
            }
            return false;
        });

        // Merge and filter
        let allNotes = [...educatorNotes, ...userNotes];
        const filter = state.contentFilter.notes || 'all';
        if (filter === 'educator') {
            allNotes = educatorNotes;
        } else if (filter === 'user') {
            allNotes = userNotes;
        }

        // Render filter buttons and Add button
        const filterButtons = `
            <div class="course-detail-content-filter">
                <button class="course-detail-content-filter-btn ${filter === 'all' ? 'active' : ''}" data-filter="all" data-tab="notes">All</button>
                <button class="course-detail-content-filter-btn ${filter === 'educator' ? 'active' : ''}" data-filter="educator" data-tab="notes">Educator</button>
                <button class="course-detail-content-filter-btn ${filter === 'user' ? 'active' : ''}" data-filter="user" data-tab="notes">User</button>
            </div>
            <div class="course-detail-section-add-container">
                <button class="course-detail-section-add-btn" data-content-type="note">
                    <i data-lucide="plus"></i>
                    <span>Add</span>
                </button>
            </div>
        `;

        if (allNotes.length === 0) {
            const emptyMsg = filter === 'all' ? 'No notes available for this lesson.' : 
                           filter === 'educator' ? 'No educator-created notes available.' : 
                           'No user-created notes available.';
            container.innerHTML = filterButtons + `<p class="course-detail-empty">${emptyMsg}</p>`;
        } else {
            container.innerHTML = filterButtons + allNotes.map(note => `
                <div class="course-detail-note-card ${note.source === 'user' ? 'user-created' : ''}">
                    ${note.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                    ${getVideoSourceHTML(note)}
                    <h3 class="course-detail-note-title">${note.title}</h3>
                    <div class="course-detail-note-content">${note.content.split('\n').map(line => `<p>${line}</p>`).join('')}</div>
                </div>
            `).join('');
        }

        // Add event listeners for filter buttons
        container.querySelectorAll('.course-detail-content-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                state.contentFilter.notes = filterValue;
                renderLessonTabContent(lesson);
            });
        });

        // Add event listener for Add button
        const addBtnNotes = container.querySelector('.course-detail-section-add-btn');
        if (addBtnNotes) {
            addBtnNotes.addEventListener('click', () => {
                const contentType = addBtnNotes.getAttribute('data-content-type');
                openContentModalFromSection(contentType);
            });
        }

        lucide.createIcons();
    }
}

function renderSmartRevisionView() {
    if (state.revisionStep === 'mode') {
        renderRevisionModeSelector();
    } else if (state.revisionStep === 'completion') {
        renderRevisionCompletion();
    } else {
        renderRevisionSession();
    }
}

function renderRevisionModeSelector() {
    const container = document.getElementById('course-detail-revision-mode-selector');
    const sessionContainer = document.getElementById('course-detail-revision-session');
    if (!container) return;

    if (sessionContainer) sessionContainer.classList.add('hidden');
    container.classList.remove('hidden');

    container.innerHTML = `
        <div class="course-detail-revision-modes">
            <button class="course-detail-revision-mode-card" data-mode="flashcards">
                <div class="course-detail-revision-mode-icon">
                    <i data-lucide="brain"></i>
                </div>
                <h3 class="course-detail-revision-mode-title">Flashcards</h3>
                <p class="course-detail-revision-mode-desc">Mental recall for terminology and facts.</p>
            </button>
            <button class="course-detail-revision-mode-card" data-mode="mcqs">
                <div class="course-detail-revision-mode-icon">
                    <i data-lucide="zap"></i>
                </div>
                <h3 class="course-detail-revision-mode-title">MCQs</h3>
                <p class="course-detail-revision-mode-desc">Conceptual application and elimination logic.</p>
            </button>
            <button class="course-detail-revision-mode-card" data-mode="notes">
                <div class="course-detail-revision-mode-icon">
                    <i data-lucide="file-text"></i>
                </div>
                <h3 class="course-detail-revision-mode-title">Notes</h3>
                <p class="course-detail-revision-mode-desc">Review your study notes and key concepts.</p>
            </button>
        </div>
    `;

    container.querySelectorAll('.course-detail-revision-mode-card').forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.getAttribute('data-mode');
            state.revisionMode = mode;
            
            // For flashcards and MCQs, check for due cards and start single-card session
            if (mode === 'flashcards' || mode === 'mcqs') {
                const allCards = mode === 'flashcards' 
                    ? getCourseFlashcards(state.currentCourseId)
                    : getCourseMCQs(state.currentCourseId);
                
                const dueCards = getDueCards(allCards);
                
                if (dueCards.length > 0) {
                    // Start single-card session with due cards
                    state.revisionSession = {
                        dueCards: dueCards,
                        currentIndex: 0,
                        completedCount: 0,
                        cardType: mode
                    };
                    state.revisionStep = 'session';
                    renderRevisionSession();
                } else {
                    // No due cards - show message with option to view all
                    const contentContainer = document.getElementById('course-detail-revision-content');
                    if (contentContainer) {
                        contentContainer.innerHTML = `
                            <div class="revision-no-due-cards">
                                <div class="revision-no-due-icon">
                                    <i data-lucide="check-circle"></i>
                                </div>
                                <h3>No cards due for review</h3>
                                <p>Great job! You're all caught up. Would you like to review all cards?</p>
                                <button class="revision-view-all-btn" id="revision-view-all-btn">View All ${mode === 'flashcards' ? 'Flashcards' : 'MCQs'}</button>
                            </div>
                        `;
                        
                        const viewAllBtn = document.getElementById('revision-view-all-btn');
                        if (viewAllBtn) {
                            viewAllBtn.addEventListener('click', () => {
                                state.revisionStep = 'session';
                                state.revisionSession = null; // Clear session to show all cards
                                renderRevisionSession();
                            });
                        }
                        
                        lucide.createIcons();
                    }
                    state.revisionStep = 'session';
                    const sessionContainer = document.getElementById('course-detail-revision-session');
                    if (sessionContainer) sessionContainer.classList.remove('hidden');
                }
            } else {
                // Notes mode - show all notes
                state.revisionStep = 'session';
                renderRevisionSession();
            }
        });
    });

    lucide.createIcons();
}

function renderRevisionSession() {
    const selectorContainer = document.getElementById('course-detail-revision-mode-selector');
    const sessionContainer = document.getElementById('course-detail-revision-session');
    if (!sessionContainer) return;

    if (selectorContainer) selectorContainer.classList.add('hidden');
    sessionContainer.classList.remove('hidden');

    // Check if we're in single-card session mode
    if (state.revisionSession && state.revisionSession.dueCards.length > 0) {
        // Check if all cards are completed
        if (state.revisionSession.currentIndex >= state.revisionSession.dueCards.length) {
            renderRevisionCompletion();
            return;
        }
        
        // Show single card session
        renderSingleCardSession();
        return;
    }

    // Show all cards mode (existing behavior)
    const titleEl = document.getElementById('course-detail-revision-session-title');
    if (titleEl) {
        if (state.revisionMode === 'flashcards') {
            titleEl.textContent = 'All Flashcards';
        } else if (state.revisionMode === 'mcqs') {
            titleEl.textContent = 'All Practice Questions';
        } else if (state.revisionMode === 'notes') {
            titleEl.textContent = 'All Notes';
        }
    }

    // Attach event handler for back button
    const revisionBackBtn = document.getElementById('course-detail-revision-back-btn');
    if (revisionBackBtn) {
        revisionBackBtn.onclick = () => {
            state.revisionStep = 'mode';
            state.revisionSession = null;
            renderSmartRevisionView();
        };
    }

    // Attach event handler for Change Mode button
    const changeModeBtn = document.getElementById('course-detail-change-mode-btn');
    if (changeModeBtn) {
        changeModeBtn.onclick = () => {
            state.revisionStep = 'mode';
            state.revisionSession = null;
            renderSmartRevisionView();
        };
    }

    // Render filter bar with capsule buttons
    const filterType = state.revisionMode === 'flashcards' ? 'flashcards' : 
                      state.revisionMode === 'mcqs' ? 'mcqs' : 'notes';
    const filter = state.contentFilter[filterType] || 'all';
    renderFilterBar('course-detail-filter-bar', false, filterType, filter);

    // Render content
    const contentContainer = document.getElementById('course-detail-revision-content');
    if (!contentContainer) return;

    if (state.revisionMode === 'flashcards') {
        renderFilteredFlashcards(contentContainer);
    } else if (state.revisionMode === 'mcqs') {
        renderFilteredMCQs(contentContainer);
    } else if (state.revisionMode === 'notes') {
        renderFilteredNotes(contentContainer);
    }

    // Initialize icons for the back button
    lucide.createIcons();
}

// Render single card session (one card at a time)
function renderSingleCardSession() {
    if (!state.revisionSession || state.revisionSession.dueCards.length === 0) return;
    
    const session = state.revisionSession;
    const currentCard = session.dueCards[session.currentIndex];
    const cardType = session.cardType;
    const totalCards = session.dueCards.length;
    const currentNumber = session.currentIndex + 1;
    
    // Update title
    const titleEl = document.getElementById('course-detail-revision-session-title');
    if (titleEl) {
        titleEl.textContent = cardType === 'flashcards' ? 'Flashcards' : 'MCQs';
    }
    
    // Hide filter bar
    const filterBar = document.getElementById('course-detail-filter-bar');
    if (filterBar) filterBar.innerHTML = '';
    
    // Hide change mode button during session
    const changeModeBtn = document.getElementById('course-detail-change-mode-btn');
    if (changeModeBtn) changeModeBtn.style.display = 'none';
    
    // Ensure back button is set up
    const revisionBackBtn = document.getElementById('course-detail-revision-back-btn');
    if (revisionBackBtn) {
        revisionBackBtn.onclick = () => {
            // Cancel session
            state.revisionSession = null;
            state.revisionStep = 'mode';
            renderSmartRevisionView();
        };
    }
    
    // Render content
    const contentContainer = document.getElementById('course-detail-revision-content');
    if (!contentContainer) return;
    
    if (cardType === 'flashcards') {
        renderSingleFlashcard(contentContainer, currentCard, currentNumber, totalCards);
    } else if (cardType === 'mcqs') {
        renderSingleMCQ(contentContainer, currentCard, currentNumber, totalCards);
    }
    
    lucide.createIcons();
}

// Render single flashcard in revision session
function renderSingleFlashcard(container, card, currentNumber, totalCards) {
    const isRevealed = state.revealStates[card.id] || false;
    
    container.innerHTML = `
        <div class="revision-single-card-container">
            <div class="revision-progress-indicator">
                Card ${currentNumber} of ${totalCards}
            </div>
            <div class="revision-single-card-wrapper">
                <div class="course-detail-flashcard-wrapper revision-flashcard-square">
                    <div class="course-detail-flashcard-card ${isRevealed ? 'flipped' : ''} ${card.source === 'user' ? 'user-created' : ''}">
                        <div class="course-detail-flashcard-inner">
                            <div class="course-detail-flashcard-front">
                                ${card.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                                ${getVideoSourceHTML(card)}
                                <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                                <div class="course-detail-flashcard-content">
                                    ${card.q}
                                </div>
                                <div class="course-detail-flashcard-actions">
                                    <button class="course-detail-reveal-btn" data-card-id="${card.id}">Reveal Answer</button>
                                    ${card.source !== 'user' ? `
                                    <button class="course-detail-flashcard-report-btn" data-card-id="${card.id}">
                                        <i data-lucide="flag"></i>
                                        <span>Report</span>
                                    </button>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="course-detail-flashcard-back">
                                ${getVideoSourceHTML(card)}
                                <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                                <div class="course-detail-flashcard-content">
                                    ${card.a}
                                </div>
                                <div class="course-detail-difficulty-buttons">
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-card-id="${card.id}" data-difficulty="again">Again</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-card-id="${card.id}" data-difficulty="hard">Hard</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-card-id="${card.id}" data-difficulty="good">Good</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-card-id="${card.id}" data-difficulty="easy">Easy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    const revealBtn = container.querySelector('.course-detail-reveal-btn');
    if (revealBtn) {
        revealBtn.addEventListener('click', () => {
            const cardId = parseInt(revealBtn.getAttribute('data-card-id'));
            const cardElement = container.querySelector('.course-detail-flashcard-card');
            if (cardElement) {
                cardElement.classList.add('flipped');
            }
            state.revealStates[cardId] = true;
        });
    }
    
    // Difficulty button handlers
    container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            const difficulty = btn.getAttribute('data-difficulty');
            
            // Handle difficulty rating
            handleCardDifficulty(card, difficulty, 'flashcard');
            
            // Remove reveal state
            delete state.revealStates[cardId];
            
            // Move to next card
            state.revisionSession.currentIndex++;
            state.revisionSession.completedCount++;
            
            // Render next card or completion screen
            renderRevisionSession();
        });
    });
    
    // Report button
    const reportBtn = container.querySelector('.course-detail-flashcard-report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            const cardId = parseInt(reportBtn.getAttribute('data-card-id'));
            openReportModal(cardId, 'flashcard');
        });
    }
}

// Render single MCQ in revision session
function renderSingleMCQ(container, mcq, currentNumber, totalCards) {
    const selectedAnswer = state.quizAnswers[mcq.id];
    const isAnswered = selectedAnswer !== undefined;
    
    container.innerHTML = `
        <div class="revision-single-card-container">
            <div class="revision-progress-indicator">
                Question ${currentNumber} of ${totalCards}
            </div>
            <div class="revision-single-card-wrapper">
                <div class="course-detail-mcq-card ${mcq.source === 'user' ? 'user-created' : ''} revision-mcq-square">
                    <div class="course-detail-mcq-header">
                        <div class="course-detail-mcq-header-left">
                            <span class="course-detail-mcq-difficulty-badge">Difficulty: ${getMCQDifficulty(mcq)}</span>
                        </div>
                        ${mcq.source !== 'user' ? `
                        <div class="course-detail-mcq-header-right">
                            <button class="course-detail-mcq-report-btn" data-mcq-id="${mcq.id}">
                                <i data-lucide="flag"></i>
                                <span>Report</span>
                            </button>
                        </div>
                        ` : ''}
                    </div>
                    ${getVideoSourceHTML(mcq)}
                    <div class="course-detail-mcq-id">Question ID: #${mcq.id}</div>
                    <div class="course-detail-mcq-question">${mcq.question}</div>
                    <div class="course-detail-mcq-options">
                        ${mcq.options.map((opt, i) => {
                            const optionId = `mcq-${mcq.id}-opt-${i}`;
                            const isSelected = selectedAnswer === i;
                            const isCorrect = opt.correct;
                            const showResult = isAnswered && isSelected;
                            
                            return `
                                <div class="course-detail-mcq-option-container ${showResult ? 'expanded' : ''}">
                                    <button class="course-detail-mcq-option ${isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}" 
                                            data-mcq-id="${mcq.id}" 
                                            data-option-index="${i}"
                                            ${isAnswered ? 'disabled' : ''}>
                                        <div class="course-detail-mcq-option-radio">
                                            <div class="course-detail-mcq-option-radio-fill ${isSelected ? 'selected' : ''}"></div>
                                        </div>
                                        <span>${opt.text}</span>
                                    </button>
                                    ${showResult ? `
                                        <div class="course-detail-mcq-explanation">${opt.exp}</div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                    ${isAnswered ? `
                        <div class="course-detail-difficulty-buttons">
                            <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcq.id}" data-difficulty="again">Again</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcq.id}" data-difficulty="hard">Hard</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcq.id}" data-difficulty="good">Good</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcq.id}" data-difficulty="easy">Easy</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for options
    if (!isAnswered) {
        container.querySelectorAll('.course-detail-mcq-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                const optionIndex = parseInt(btn.getAttribute('data-option-index'));
                
                state.quizAnswers[mcqId] = optionIndex;
                
                // Re-render to show result
                renderSingleMCQ(container, mcq, currentNumber, totalCards);
            });
        });
    }
    
    // Difficulty button handlers
    if (isAnswered) {
        container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                const difficulty = btn.getAttribute('data-difficulty');
                
                // Handle difficulty rating
                handleCardDifficulty(mcq, difficulty, 'mcq');
                
                // Remove answer state
                delete state.quizAnswers[mcqId];
                
                // Move to next card
                state.revisionSession.currentIndex++;
                state.revisionSession.completedCount++;
                
                // Render next card or completion screen
                renderRevisionSession();
            });
        });
    }
    
    // Report button
    const reportBtn = container.querySelector('.course-detail-mcq-report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            const mcqId = parseInt(reportBtn.getAttribute('data-mcq-id'));
            openReportModal(mcqId, 'mcq');
        });
    }
}

// Render completion screen after all due cards are done
function renderRevisionCompletion() {
    const session = state.revisionSession;
    const completedCount = session.completedCount;
    const cardType = session.cardType === 'flashcards' ? 'flashcards' : 'MCQs';
    
    // Hide filter bar
    const filterBar = document.getElementById('course-detail-filter-bar');
    if (filterBar) filterBar.innerHTML = '';
    
    // Show change mode button
    const changeModeBtn = document.getElementById('course-detail-change-mode-btn');
    if (changeModeBtn) changeModeBtn.style.display = 'block';
    
    // Render completion screen
    const contentContainer = document.getElementById('course-detail-revision-content');
    if (!contentContainer) return;
    
    contentContainer.innerHTML = `
        <div class="revision-completion-screen">
            <div class="revision-completion-icon">
                <i data-lucide="check-circle"></i>
            </div>
            <h2 class="revision-completion-title">Great job!</h2>
            <p class="revision-completion-message">You've completed all ${completedCount} due ${cardType} for this session.</p>
            <div class="revision-completion-actions">
                <button class="revision-completion-btn revision-completion-btn-primary" id="revision-view-all-cards-btn">
                    View All ${cardType === 'flashcards' ? 'Flashcards' : 'MCQs'}
                </button>
                <button class="revision-completion-btn revision-completion-btn-secondary" id="revision-back-to-revision-btn">
                    Back to Smart Revision
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const viewAllBtn = document.getElementById('revision-view-all-cards-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            // Clear session to show all cards
            state.revisionSession = null;
            renderRevisionSession();
        });
    }
    
    const backBtn = document.getElementById('revision-back-to-revision-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Go back to mode selector
            state.revisionStep = 'mode';
            state.revisionSession = null;
            renderSmartRevisionView();
        });
    }
    
    lucide.createIcons();
}

function renderFilteredFlashcards(container) {
    const educatorFiltered = filterBySelection(repository.flashcards);
    const userFiltered = filterBySelection(state.userContent.flashcards);
    
    // Merge and filter by source
    let allFiltered = [...educatorFiltered, ...userFiltered];
    const filter = state.contentFilter.flashcards || 'all';
    if (filter === 'educator') {
        allFiltered = educatorFiltered;
    } else if (filter === 'user') {
        allFiltered = userFiltered;
    }
    
    if (allFiltered.length === 0) {
        const emptyMsg = filter === 'all' ? 'No flashcards match the selected filters.' : 
                       filter === 'educator' ? 'No educator-created flashcards match the selected filters.' : 
                       'No user-created flashcards match the selected filters.';
        container.innerHTML = '<p class="course-detail-empty">' + emptyMsg + '</p>';
        return;
    }

    container.innerHTML = allFiltered.map(card => `
        <div class="course-detail-flashcard-wrapper">
            <div class="course-detail-flashcard-card ${state.revealStates[card.id] ? 'flipped' : ''} ${card.source === 'user' ? 'user-created' : ''}">
                <div class="course-detail-flashcard-inner">
                    <div class="course-detail-flashcard-front">
                        ${card.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                        ${getVideoSourceHTML(card)}
                        <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                        <div class="course-detail-flashcard-content">
                            ${card.q}
                        </div>
                        <div class="course-detail-flashcard-actions">
                            <button class="course-detail-reveal-btn" data-card-id="${card.id}">Reveal Answer</button>
                            ${card.source !== 'user' ? `
                            <button class="course-detail-flashcard-report-btn" data-card-id="${card.id}">
                                <i data-lucide="flag"></i>
                                <span>Report</span>
                            </button>
                            ` : ''}
                        </div>
                    </div>
                    <div class="course-detail-flashcard-back">
                        ${getVideoSourceHTML(card)}
                        <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                        <div class="course-detail-flashcard-content">
                            ${card.a}
                        </div>
                        <div class="course-detail-difficulty-buttons">
                            <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-card-id="${card.id}">Again</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-card-id="${card.id}">Hard</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-card-id="${card.id}">Good</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-card-id="${card.id}">Easy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners for report buttons
    container.querySelectorAll('.course-detail-flashcard-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            openReportModal(cardId, 'flashcard');
        });
    });

    // Add event listeners
    container.querySelectorAll('.course-detail-reveal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            const cardElement = btn.closest('.course-detail-flashcard-card');
            if (cardElement) {
                cardElement.classList.add('flipped');
            }
            state.revealStates[cardId] = true;
        });
    });

    container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            const cardElement = btn.closest('.course-detail-flashcard-card');
            if (cardElement) {
                cardElement.classList.remove('flipped');
                // Update state after animation completes, but don't re-render
                setTimeout(() => {
                    delete state.revealStates[cardId];
                }, 600);
            } else {
                delete state.revealStates[cardId];
            }
        });
    });

    // Add event listeners for video source links
    container.querySelectorAll('.course-detail-video-source-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lessonId = parseInt(link.getAttribute('data-lesson-id'));
            const timestamp = parseFloat(link.getAttribute('data-timestamp'));
            navigateToVideoAtTimestamp(lessonId, timestamp);
        });
    });
    
    lucide.createIcons();
}

function renderFilteredMCQs(container) {
    const educatorFiltered = filterBySelection(repository.mcqs);
    const userFiltered = filterBySelection(state.userContent.mcqs);
    
    // Merge and filter by source
    let allFiltered = [...educatorFiltered, ...userFiltered];
    const filter = state.contentFilter.mcqs || 'all';
    if (filter === 'educator') {
        allFiltered = educatorFiltered;
    } else if (filter === 'user') {
        allFiltered = userFiltered;
    }
    
    if (allFiltered.length === 0) {
        const emptyMsg = filter === 'all' ? 'No MCQs match the selected filters.' : 
                       filter === 'educator' ? 'No educator-created MCQs match the selected filters.' : 
                       'No user-created MCQs match the selected filters.';
        container.innerHTML = '<p class="course-detail-empty">' + emptyMsg + '</p>';
        return;
    }

    container.innerHTML = allFiltered.map(mcq => `
        <div class="course-detail-mcq-card ${mcq.source === 'user' ? 'user-created' : ''}">
            <div class="course-detail-mcq-header">
                <div class="course-detail-mcq-header-left">
                    <span class="course-detail-mcq-difficulty-badge">Difficulty: ${getMCQDifficulty(mcq)}</span>
                </div>
                ${mcq.source !== 'user' ? `
                <div class="course-detail-mcq-header-right">
                    <button class="course-detail-mcq-report-btn" data-mcq-id="${mcq.id}">
                        <i data-lucide="flag"></i>
                        <span>Report</span>
                    </button>
                </div>
                ` : ''}
            </div>
            ${mcq.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
            ${getVideoSourceHTML(mcq)}
            <h3 class="course-detail-mcq-question">${mcq.question}</h3>
            <div class="course-detail-mcq-options">
                ${mcq.options.map((opt, i) => `
                    <div class="course-detail-mcq-option-container ${state.quizAnswers[mcq.id] === i ? 'expanded' : ''}">
                        <button class="course-detail-mcq-option ${state.quizAnswers[mcq.id] === i ? (opt.correct ? 'correct' : 'incorrect') : ''}" 
                            data-mcq-id="${mcq.id}" data-option-index="${i}">
                            <div class="course-detail-mcq-option-content">
                                <div class="course-detail-mcq-option-radio">
                                    ${state.quizAnswers[mcq.id] === i ? '<div class="course-detail-mcq-option-radio-fill"></div>' : ''}
                                </div>
                                <span>${opt.text}</span>
                            </div>
                        </button>
                        ${state.quizAnswers[mcq.id] === i ? `
                            <div class="course-detail-mcq-explanation ${opt.correct ? 'correct' : 'incorrect'}">
                                <div class="course-detail-mcq-explanation-label">${opt.correct ? 'Context' : 'Clarification'}</div>
                                ${opt.exp}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            ${state.quizAnswers[mcq.id] !== undefined ? `
                <div class="course-detail-difficulty-buttons">
                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcq.id}">Again</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcq.id}">Hard</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcq.id}">Good</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcq.id}">Easy</button>
                </div>
            ` : ''}
        </div>
    `).join('');

    // Helper function to find MCQ data
    const findMCQ = (id) => allFiltered.find(m => m.id === id);

    // Add event listeners
    container.querySelectorAll('.course-detail-mcq-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
            const optionIndex = parseInt(btn.getAttribute('data-option-index'));
            state.quizAnswers[mcqId] = optionIndex;
            
            // Update DOM directly instead of re-rendering
            const mcqCard = btn.closest('.course-detail-mcq-card');
            const mcq = findMCQ(mcqId);
            if (!mcqCard || !mcq) return;
            
            const optionsContainer = mcqCard.querySelector('.course-detail-mcq-options');
            const allOptionContainers = optionsContainer.querySelectorAll('.course-detail-mcq-option-container');
            
            // Update all options
            allOptionContainers.forEach((optContainer, i) => {
                const optButton = optContainer.querySelector('.course-detail-mcq-option');
                const radio = optContainer.querySelector('.course-detail-mcq-option-radio');
                const existingExplanation = optContainer.querySelector('.course-detail-mcq-explanation');
                
                if (i === optionIndex) {
                    // Selected option
                    optContainer.classList.add('expanded');
                    optButton.classList.add(mcq.options[i].correct ? 'correct' : 'incorrect');
                    if (!radio.querySelector('.course-detail-mcq-option-radio-fill')) {
                        const fill = document.createElement('div');
                        fill.className = 'course-detail-mcq-option-radio-fill';
                        radio.appendChild(fill);
                    }
                    
                    // Add explanation if it doesn't exist
                    if (!existingExplanation) {
                        const explanation = document.createElement('div');
                        explanation.className = `course-detail-mcq-explanation ${mcq.options[i].correct ? 'correct' : 'incorrect'}`;
                        explanation.innerHTML = `
                            <div class="course-detail-mcq-explanation-label">${mcq.options[i].correct ? 'Context' : 'Clarification'}</div>
                            ${mcq.options[i].exp}
                        `;
                        optContainer.appendChild(explanation);
                    }
                } else {
                    // Other options
                    optContainer.classList.remove('expanded');
                    optButton.classList.remove('correct', 'incorrect');
                    const fill = radio.querySelector('.course-detail-mcq-option-radio-fill');
                    if (fill) fill.remove();
                    if (existingExplanation) existingExplanation.remove();
                }
            });
            
            // Show difficulty buttons if they don't exist
            let difficultyButtons = mcqCard.querySelector('.course-detail-difficulty-buttons');
            if (!difficultyButtons) {
                difficultyButtons = document.createElement('div');
                difficultyButtons.className = 'course-detail-difficulty-buttons';
                difficultyButtons.innerHTML = `
                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcqId}">Again</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcqId}">Hard</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcqId}">Good</button>
                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcqId}">Easy</button>
                `;
                optionsContainer.parentElement.appendChild(difficultyButtons);
                
                // Add event listener to the new difficulty buttons
                difficultyButtons.querySelectorAll('.course-detail-difficulty-btn[data-mcq-id]').forEach(diffBtn => {
                    diffBtn.addEventListener('click', () => {
                        const id = parseInt(diffBtn.getAttribute('data-mcq-id'));
                        delete state.quizAnswers[id];
                        
                        // Update DOM directly
                        const card = diffBtn.closest('.course-detail-mcq-card');
                        if (!card) return;
                        const optsContainer = card.querySelector('.course-detail-mcq-options');
                        const optContainers = optsContainer.querySelectorAll('.course-detail-mcq-option-container');
                        
                        optContainers.forEach(optContainer => {
                            optContainer.classList.remove('expanded');
                            const optButton = optContainer.querySelector('.course-detail-mcq-option');
                            optButton.classList.remove('correct', 'incorrect');
                            const fill = optContainer.querySelector('.course-detail-mcq-option-radio-fill');
                            if (fill) fill.remove();
                            const explanation = optContainer.querySelector('.course-detail-mcq-explanation');
                            if (explanation) explanation.remove();
                        });
                        
                        difficultyButtons.remove();
                    });
                });
            }
        });
    });

    container.querySelectorAll('.course-detail-difficulty-btn[data-mcq-id]').forEach(btn => {
        btn.addEventListener('click', () => {
            const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
            delete state.quizAnswers[mcqId];
            
            // Update DOM directly instead of re-rendering
            const mcqCard = btn.closest('.course-detail-mcq-card');
            if (!mcqCard) return;
            const optionsContainer = mcqCard.querySelector('.course-detail-mcq-options');
            const allOptionContainers = optionsContainer.querySelectorAll('.course-detail-mcq-option-container');
            
            allOptionContainers.forEach(optContainer => {
                optContainer.classList.remove('expanded');
                const optButton = optContainer.querySelector('.course-detail-mcq-option');
                optButton.classList.remove('correct', 'incorrect');
                const fill = optContainer.querySelector('.course-detail-mcq-option-radio-fill');
                if (fill) fill.remove();
                const explanation = optContainer.querySelector('.course-detail-mcq-explanation');
                if (explanation) explanation.remove();
            });
            
            const difficultyButtons = mcqCard.querySelector('.course-detail-difficulty-buttons');
            if (difficultyButtons) difficultyButtons.remove();
        });
    });

    // Add event listeners for report buttons
    container.querySelectorAll('.course-detail-mcq-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
            openReportModal(mcqId);
        });
    });

    lucide.createIcons();
}

function renderFilteredNotes(container) {
    const educatorFiltered = filterBySelection(repository.notes);
    const userFiltered = filterBySelection(state.userContent.notes);
    
    // Merge and filter by source
    let allFiltered = [...educatorFiltered, ...userFiltered];
    const filter = state.contentFilter.notes || 'all';
    if (filter === 'educator') {
        allFiltered = educatorFiltered;
    } else if (filter === 'user') {
        allFiltered = userFiltered;
    }
    
    if (allFiltered.length === 0) {
        const emptyMsg = filter === 'all' ? 'No notes match the selected filters.' : 
                       filter === 'educator' ? 'No educator-created notes match the selected filters.' : 
                       'No user-created notes match the selected filters.';
        container.innerHTML = '<p class="course-detail-empty">' + emptyMsg + '</p>';
        return;
    }

    container.innerHTML = allFiltered.map(note => `
        <div class="course-detail-note-card ${note.source === 'user' ? 'user-created' : ''}">
            ${note.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
            ${getVideoSourceHTML(note)}
            <h3 class="course-detail-note-title">${note.title}</h3>
            <div class="course-detail-note-content">${note.content.split('\n').map(line => `<p>${line}</p>`).join('')}</div>
        </div>
    `).join('');
    
    // Add event listeners for video source links
    container.querySelectorAll('.course-detail-video-source-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lessonId = parseInt(link.getAttribute('data-lesson-id'));
            const timestamp = parseFloat(link.getAttribute('data-timestamp'));
            navigateToVideoAtTimestamp(lessonId, timestamp);
        });
    });

    lucide.createIcons();
}

function renderWritingView() {
    renderFilterBar('course-detail-writing-filter-bar', true);
    const container = document.getElementById('course-detail-writing-content');
    if (!container) return;

    const filteredQuestions = filterBySelection(repository.mainsQuestions);
    
    let html = '';
    
    // Render writing questions
    if (filteredQuestions.length > 0) {
        html += filteredQuestions.map((q, index) => `
            <div class="course-detail-writing-card">
                <div class="course-detail-writing-badges">
                    <span class="course-detail-writing-badge course-detail-writing-badge-gs">${q.gs}</span>
                    <span class="course-detail-writing-badge course-detail-writing-badge-sub">${q.sub}</span>
                    <span class="course-detail-writing-badge course-detail-writing-badge-time">${q.t} Mins</span>
                </div>
                <h3 class="course-detail-writing-question">"${q.q}"</h3>
                <button class="course-detail-writing-start-btn" 
                        data-question-index="${index}"
                        data-question-id="${q.id || index}"
                        data-time="${q.t}"
                        data-words="${q.w}">Start Writing (${q.w} Words)</button>
            </div>
        `).join('');
    }
    
    if (html === '') {
        container.innerHTML = '<p class="course-detail-empty">No content matches the selected filters.</p>';
    } else {
        container.innerHTML = html;
        
        // Add event listeners to Start Writing buttons
        const startButtons = container.querySelectorAll('.course-detail-writing-start-btn');
        startButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const questionIndex = parseInt(btn.getAttribute('data-question-index'));
                const question = filteredQuestions[questionIndex];
                if (question) {
                    openWritingSession(question);
                }
            });
        });
    }
}

// Writing Session State
let writingSessionState = {
    timerInterval: null,
    timeRemaining: 0, // in seconds
    question: null
};

function openWritingSession(question) {
    const modal = document.getElementById('writing-session-modal');
    const questionElement = document.getElementById('writing-session-question');
    const badgesContainer = document.getElementById('writing-session-badges');
    const input = document.getElementById('writing-session-input');
    const wordCount = document.getElementById('writing-session-word-count');
    const timerElement = document.getElementById('writing-session-timer');
    
    if (!modal || !questionElement || !badgesContainer || !input) return;
    
    // Clear any existing timer first
    if (writingSessionState.timerInterval) {
        clearInterval(writingSessionState.timerInterval);
        writingSessionState.timerInterval = null;
    }
    
    // Remove timer warning classes
    if (timerElement) {
        timerElement.classList.remove('timer-warning', 'timer-expired');
    }
    
    // Store question
    writingSessionState.question = question;
    
    // Set question content
    questionElement.textContent = `"${question.q}"`;
    
    // Set badges
    badgesContainer.innerHTML = `
        <span class="writing-session-badge writing-session-badge-gs">${question.gs}</span>
        <span class="writing-session-badge writing-session-badge-sub">${question.sub}</span>
        <span class="writing-session-badge writing-session-badge-time">${question.t} Mins</span>
    `;
    
    // Reset input
    input.value = '';
    input.disabled = false;
    input.placeholder = 'Start writing your answer here...';
    wordCount.textContent = '0 words';
    
    // Reset and start timer (convert minutes to seconds)
    const timeInSeconds = question.t * 60;
    writingSessionState.timeRemaining = timeInSeconds;
    startWritingTimer();
    
    // Show modal first
    modal.classList.remove('hidden');
    
    // Reset textarea height after modal is shown (to calculate available space)
    setTimeout(() => {
        input.style.height = 'auto';
        autoResizeTextarea(input);
        input.focus();
    }, 100);
    
    // Initialize icons
    lucide.createIcons();
}

function startWritingTimer() {
    const timerElement = document.getElementById('writing-session-timer');
    if (!timerElement) return;
    
    // Clear any existing timer
    if (writingSessionState.timerInterval) {
        clearInterval(writingSessionState.timerInterval);
    }
    
    // Update timer display immediately
    updateTimerDisplay();
    
    // Update timer every second
    writingSessionState.timerInterval = setInterval(() => {
        if (writingSessionState.timeRemaining > 0) {
            writingSessionState.timeRemaining--;
            updateTimerDisplay();
        } else {
            // Time's up
            clearInterval(writingSessionState.timerInterval);
            timerElement.textContent = '00:00';
            timerElement.classList.add('timer-expired');
            // Optionally show an alert or disable input
            const input = document.getElementById('writing-session-input');
            if (input) {
                input.disabled = true;
                input.placeholder = 'Time is up!';
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('writing-session-timer');
    if (!timerElement) return;
    
    const minutes = Math.floor(writingSessionState.timeRemaining / 60);
    const seconds = writingSessionState.timeRemaining % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Add warning class when less than 1 minute remaining
    if (writingSessionState.timeRemaining <= 60 && writingSessionState.timeRemaining > 0) {
        timerElement.classList.add('timer-warning');
    } else {
        timerElement.classList.remove('timer-warning');
    }
}

function updateWordCount() {
    const input = document.getElementById('writing-session-input');
    const wordCount = document.getElementById('writing-session-word-count');
    if (!input || !wordCount) return;
    
    const text = input.value.trim();
    const words = text === '' ? 0 : text.split(/\s+/).length;
    wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;
}

function closeWritingSession() {
    const modal = document.getElementById('writing-session-modal');
    if (!modal) return;
    
    // Clear timer
    if (writingSessionState.timerInterval) {
        clearInterval(writingSessionState.timerInterval);
        writingSessionState.timerInterval = null;
    }
    
    // Reset state
    writingSessionState.timeRemaining = 0;
    writingSessionState.question = null;
    
    // Hide modal
    modal.classList.add('hidden');
    
    // Remove timer warning classes
    const timerElement = document.getElementById('writing-session-timer');
    if (timerElement) {
        timerElement.classList.remove('timer-warning', 'timer-expired');
    }
    
    // Re-enable input if it was disabled
    const input = document.getElementById('writing-session-input');
    if (input) {
        input.disabled = false;
        input.placeholder = 'Start writing your answer here...';
    }
}

// Initialize writing session event listeners
function initWritingSession() {
    const closeBtn = document.getElementById('writing-session-close');
    const cancelBtn = document.getElementById('writing-session-cancel');
    const submitBtn = document.getElementById('writing-session-submit');
    const modal = document.getElementById('writing-session-modal');
    const input = document.getElementById('writing-session-input');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeWritingSession);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to cancel? Your progress will be lost.')) {
                closeWritingSession();
            }
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const input = document.getElementById('writing-session-input');
            if (input && input.value.trim()) {
                // Here you can add logic to save the answer
                alert('Answer submitted! (This is a placeholder - implement save functionality)');
                closeWritingSession();
            } else {
                alert('Please write an answer before submitting.');
            }
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (confirm('Are you sure you want to close? Your progress will be lost.')) {
                    closeWritingSession();
                }
            }
        });
    }
    
    // Update word count on input and auto-resize
    if (input) {
        input.addEventListener('input', () => {
            updateWordCount();
            autoResizeTextarea(input);
        });
    }
}

// Auto-resize textarea to fit content
function autoResizeTextarea(textarea) {
    if (!textarea) return;
    
    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate available space in modal body
    const modalBody = textarea.closest('.writing-session-modal-body');
    if (modalBody) {
        const modalContent = modalBody.closest('.writing-session-modal-content');
        const modalHeader = modalContent?.querySelector('.writing-session-modal-header');
        const modalFooter = modalContent?.querySelector('.writing-session-modal-footer');
        const questionCard = modalBody.querySelector('.writing-session-question-card');
        const wordCount = modalBody.querySelector('.writing-session-word-count');
        
        // Calculate used space
        const headerHeight = modalHeader?.offsetHeight || 0;
        const footerHeight = modalFooter?.offsetHeight || 0;
        const questionCardHeight = questionCard?.offsetHeight || 0;
        const wordCountHeight = wordCount?.offsetHeight || 0;
        const gaps = 2 * 16; // 2rem gap between elements
        const padding = 2 * 32; // 2rem padding top and bottom
        
        // Available height for textarea
        const availableHeight = window.innerHeight * 0.9 - headerHeight - footerHeight - questionCardHeight - wordCountHeight - gaps - padding - 20; // 20px buffer
        
        // Set height based on content or available space, whichever is smaller
        const contentHeight = textarea.scrollHeight;
        const minHeight = 200; // Minimum height
        const maxHeight = Math.max(availableHeight, minHeight);
        
        textarea.style.height = Math.min(contentHeight, maxHeight) + 'px';
        textarea.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
    } else {
        // Fallback: just fit content
        textarea.style.height = Math.max(textarea.scrollHeight, 200) + 'px';
    }
}

function renderAnalyticsView() {
    renderFilterBar('course-detail-analytics-filter-bar', false);
    const container = document.getElementById('course-detail-analytics-grid');
    if (!container) return;

    container.innerHTML = `
        <div class="course-detail-analytics-card course-detail-analytics-card-large">
            <div class="course-detail-analytics-card-header">
                <div>
                    <div class="course-detail-analytics-value">78%</div>
                    <div class="course-detail-analytics-label">Retention Rate</div>
                </div>
                <div class="course-detail-analytics-trend">
                    <i data-lucide="trending-up"></i>
                    <span>+5.2%</span>
                </div>
            </div>
            <div class="course-detail-analytics-chart">
                <svg class="course-detail-line-chart" viewBox="0 0 300 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="retentionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    <path class="course-detail-chart-area" d="M 0,100 Q 50,80 100,70 T 200,30 T 300,22 L 300,120 L 0,120 Z" fill="url(#retentionGradient)"/>
                    <path class="course-detail-chart-line" d="M 0,100 Q 50,80 100,70 T 200,30 T 300,22" stroke="var(--primary-color)" stroke-width="3" fill="none"/>
                    <circle class="course-detail-chart-point" cx="300" cy="22" r="4" fill="var(--primary-color)"/>
                </svg>
            </div>
            <div class="course-detail-analytics-period">Last 30 days</div>
        </div>
        
        <div class="course-detail-analytics-card">
            <div class="course-detail-analytics-card-header">
                <div>
                    <div class="course-detail-analytics-value">92%</div>
                    <div class="course-detail-analytics-label">Accuracy</div>
                </div>
                <div class="course-detail-analytics-trend course-detail-analytics-trend-up">
                    <i data-lucide="trending-up"></i>
                    <span>+2.1%</span>
                </div>
            </div>
            <div class="course-detail-analytics-progress-ring">
                <svg viewBox="0 0 100 100" class="course-detail-ring-svg">
                    <circle cx="50" cy="50" r="40" stroke="var(--border-light)" stroke-width="8" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="#10b981" stroke-width="8" fill="none"
                        stroke-dasharray="${2 * Math.PI * 40}" 
                        stroke-dashoffset="${2 * Math.PI * 40 * (1 - 0.92)}" 
                        stroke-linecap="round" transform="rotate(-90 50 50)"/>
                </svg>
                <div class="course-detail-ring-value">92%</div>
            </div>
            <div class="course-detail-analytics-subtitle">Last 500 MCQs</div>
        </div>
        
        <div class="course-detail-analytics-card">
            <div class="course-detail-analytics-card-header">
                <div>
                    <div class="course-detail-analytics-value">85</div>
                    <div class="course-detail-analytics-label">Due Items</div>
                </div>
            </div>
            <div class="course-detail-analytics-breakdown">
                <div class="course-detail-breakdown-item">
                    <div class="course-detail-breakdown-bar">
                        <div class="course-detail-breakdown-fill" style="width: 65%; background: #ef4444;"></div>
                    </div>
                    <div class="course-detail-breakdown-label">
                        <span>Flashcards</span>
                        <span class="course-detail-breakdown-value">55</span>
                    </div>
                </div>
                <div class="course-detail-breakdown-item">
                    <div class="course-detail-breakdown-bar">
                        <div class="course-detail-breakdown-fill" style="width: 35%; background: #f97316;"></div>
                    </div>
                    <div class="course-detail-breakdown-label">
                        <span>MCQs</span>
                        <span class="course-detail-breakdown-value">30</span>
                    </div>
                </div>
            </div>
            <div class="course-detail-analytics-subtitle">Awaiting Recall</div>
        </div>
        
        <div class="course-detail-analytics-card course-detail-analytics-card-wide">
            <div class="course-detail-analytics-card-header">
                <div>
                    <div class="course-detail-analytics-label">Study Streak</div>
                    <div class="course-detail-analytics-value-small">12 Days</div>
                </div>
            </div>
            <div class="course-detail-streak-chart">
                <svg class="course-detail-bar-chart" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <rect x="0" y="80" width="30" height="40" fill="var(--primary-color)" opacity="0.6" rx="4"/>
                    <rect x="40" y="70" width="30" height="50" fill="var(--primary-color)" opacity="0.7" rx="4"/>
                    <rect x="80" y="60" width="30" height="60" fill="var(--primary-color)" opacity="0.8" rx="4"/>
                    <rect x="120" y="50" width="30" height="70" fill="var(--primary-color)" opacity="0.9" rx="4"/>
                    <rect x="160" y="45" width="30" height="75" fill="var(--primary-color)" opacity="1" rx="4"/>
                    <rect x="200" y="40" width="30" height="80" fill="var(--primary-color)" opacity="1" rx="4"/>
                    <rect x="240" y="35" width="30" height="85" fill="var(--primary-color)" opacity="1" rx="4"/>
                    <rect x="280" y="30" width="30" height="90" fill="var(--primary-color)" opacity="1" rx="4"/>
                    <rect x="320" y="25" width="30" height="95" fill="var(--primary-color)" opacity="1" rx="4"/>
                    <rect x="360" y="20" width="30" height="100" fill="var(--primary-color)" opacity="1" rx="4"/>
                </svg>
            </div>
            <div class="course-detail-analytics-subtitle">Last 10 days activity</div>
        </div>
        
        <div class="course-detail-analytics-card">
            <div class="course-detail-analytics-card-header">
                <div>
                    <div class="course-detail-analytics-value">1,280</div>
                    <div class="course-detail-analytics-label">Total Mastered</div>
                </div>
            </div>
            <div class="course-detail-pie-chart">
                <svg viewBox="0 0 120 120" class="course-detail-pie-svg">
                    <circle cx="60" cy="60" r="50" stroke="var(--border-light)" stroke-width="8" fill="none"/>
                    <path d="M 60,10 A 50,50 0 0,1 110,60 L 60,60 Z" fill="#10b981" opacity="0.8"/>
                    <path d="M 110,60 A 50,50 0 0,1 60,110 L 60,60 Z" fill="#6366f1" opacity="0.8"/>
                    <path d="M 60,110 A 50,50 0 0,1 10,60 L 60,60 Z" fill="#f97316" opacity="0.8"/>
                    <path d="M 10,60 A 50,50 0 0,1 60,10 L 60,60 Z" fill="#ef4444" opacity="0.8"/>
                </svg>
            </div>
            <div class="course-detail-pie-legend">
                <div class="course-detail-legend-item">
                    <span class="course-detail-legend-color" style="background: #10b981;"></span>
                    <span>Mastered</span>
                </div>
                <div class="course-detail-legend-item">
                    <span class="course-detail-legend-color" style="background: #6366f1;"></span>
                    <span>Learning</span>
                </div>
            </div>
        </div>
        
        <div class="course-detail-analytics-card">
            <div class="course-detail-analytics-card-header">
                <div>
                    <div class="course-detail-analytics-value">4.2h</div>
                    <div class="course-detail-analytics-label">Avg Daily</div>
                </div>
            </div>
            <div class="course-detail-heatmap">
                <div class="course-detail-heatmap-grid">
                    ${Array.from({length: 28}, (_, i) => {
                        const intensity = Math.random() * 0.8 + 0.2;
                        return `<div class="course-detail-heatmap-cell" style="opacity: ${intensity}; background: var(--primary-color);"></div>`;
                    }).join('')}
                </div>
            </div>
            <div class="course-detail-analytics-subtitle">Study heatmap (4 weeks)</div>
        </div>
    `;
    
    // Render leaderboard separately outside the grid
    const leaderboardContainer = document.getElementById('course-detail-leaderboard-container');
    if (leaderboardContainer) {
        leaderboardContainer.innerHTML = `
            <div class="course-detail-analytics-card course-detail-leaderboard-card">
                <div class="course-detail-analytics-card-header">
                    <div>
                        <div class="course-detail-analytics-label">Leaderboard</div>
                        <div class="course-detail-analytics-value-small">Compare Your Progress</div>
                    </div>
                    <div class="course-detail-leaderboard-tabs">
                        <button class="course-detail-leaderboard-tab active" data-metric="retention">Retention</button>
                        <button class="course-detail-leaderboard-tab" data-metric="accuracy">Accuracy</button>
                        <button class="course-detail-leaderboard-tab" data-metric="streak">Streak</button>
                        <button class="course-detail-leaderboard-tab" data-metric="mastered">Mastered</button>
                    </div>
                </div>
                <div class="course-detail-leaderboard-content" id="course-detail-leaderboard-content">
                    ${renderLeaderboard('retention')}
                </div>
            </div>
        `;
        
        // Add event listeners for leaderboard tabs
        setTimeout(() => {
            const tabs = document.querySelectorAll('.course-detail-leaderboard-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    const metric = tab.getAttribute('data-metric');
                    const content = document.getElementById('course-detail-leaderboard-content');
                    if (content) {
                        content.innerHTML = renderLeaderboard(metric);
                        lucide.createIcons();
                    }
                });
            });
        }, 100);
    }
    
    lucide.createIcons();
}

// Badge tier system for lifetime analytics
const badgeTiers = [
    { name: 'Bronze', days: 7, color: '#cd7f32', icon: 'award' },
    { name: 'Silver', days: 15, color: '#c0c0c0', icon: 'medal' },
    { name: 'Gold', days: 30, color: '#ffd700', icon: 'trophy' },
    { name: 'Platinum', days: 60, color: '#e5e4e2', icon: 'gem' },
    { name: 'Diamond', days: 100, color: '#b9f2ff', icon: 'sparkles' },
    { name: 'Master', days: 180, color: '#9d4edd', icon: 'crown' },
    { name: 'Legend', days: 365, color: '#ff006e', icon: 'star' }
];

// Get current badge and next badge
function getCurrentBadge(streak) {
    let currentBadge = null;
    let nextBadge = badgeTiers[0];
    
    for (let i = badgeTiers.length - 1; i >= 0; i--) {
        if (streak >= badgeTiers[i].days) {
            currentBadge = badgeTiers[i];
            if (i < badgeTiers.length - 1) {
                nextBadge = badgeTiers[i + 1];
            } else {
                nextBadge = null; // Already at highest tier
            }
            break;
        }
    }
    
    return { currentBadge, nextBadge };
}

// Render lifetime analytics page
function renderLifetimeAnalytics() {
    // Aggregate stats first
    aggregateLifetimeStats();
    
    const stats = state.lifetimeStats;
    const { currentBadge, nextBadge } = getCurrentBadge(stats.currentStreak);
    
    // Render badge levels section
    const badgesSection = document.getElementById('lifetime-streak-badges-section');
    if (badgesSection) {
        badgesSection.innerHTML = `
            <div class="lifetime-streak-badges-container">
                <div class="lifetime-streak-badges-title">Badge Levels</div>
                <div class="lifetime-streak-badges-grid">
                    ${badgeTiers.map((badge, index) => {
                        const isUnlocked = stats.currentStreak >= badge.days;
                        const isCurrent = currentBadge && currentBadge.name === badge.name;
                        const isNext = nextBadge && nextBadge.name === badge.name;
                        const progress = Math.min((stats.currentStreak / badge.days) * 100, 100);
                        
                        return `
                            <div class="lifetime-streak-badge-item ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''} ${isNext ? 'next' : ''}" 
                                 title="${badge.name} Badge - ${badge.days} days">
                                <div class="lifetime-streak-badge-icon-wrapper">
                                    <div class="lifetime-streak-badge-icon" style="color: ${isUnlocked ? badge.color : '#64748b'};">
                                        <i data-lucide="${badge.icon}"></i>
                                    </div>
                                    ${isUnlocked ? '<div class="lifetime-streak-badge-check"><i data-lucide="check"></i></div>' : ''}
                                </div>
                                <div class="lifetime-streak-badge-name">${badge.name}</div>
                                <div class="lifetime-streak-badge-days">${badge.days} days</div>
                                ${!isUnlocked ? `
                                    <div class="lifetime-streak-badge-progress">
                                        <div class="lifetime-streak-badge-progress-bar">
                                            <div class="lifetime-streak-badge-progress-fill" style="width: ${progress}%; background: ${badge.color};"></div>
                                        </div>
                                        <div class="lifetime-streak-badge-progress-text">${Math.max(0, badge.days - stats.currentStreak)} days left</div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        lucide.createIcons();
    }
    
    // Render filter bar
    const filterBar = document.getElementById('lifetime-analytics-filter-bar');
    if (filterBar) {
        const periods = [
            { value: 'all-time', label: 'All Time' },
            { value: 'last-year', label: 'Last Year' },
            { value: 'last-6-months', label: 'Last 6 Months' },
            { value: 'last-month', label: 'Last Month' }
        ];
        
        filterBar.innerHTML = periods.map(period => `
            <button class="lifetime-analytics-filter-btn ${state.lifetimeAnalyticsPeriod === period.value ? 'active' : ''}" 
                    data-period="${period.value}">
                ${period.label}
            </button>
        `).join('');
        
        // Add event listeners
        filterBar.querySelectorAll('.lifetime-analytics-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.lifetimeAnalyticsPeriod = btn.getAttribute('data-period');
                renderLifetimeAnalytics(); // Re-render with new period
            });
        });
    }
    
    const container = document.getElementById('lifetime-analytics-grid');
    if (!container) return;
    const totalMastered = stats.totalMastered.flashcards + stats.totalMastered.mcqs;
    const flashcardsPercent = totalMastered > 0 ? Math.round((stats.totalMastered.flashcards / totalMastered) * 100) : 0;
    const mcqsPercent = totalMastered > 0 ? Math.round((stats.totalMastered.mcqs / totalMastered) * 100) : 0;
    
    // Filter streak history based on period
    let filteredStreakHistory = stats.streakHistory;
    const today = new Date();
    if (state.lifetimeAnalyticsPeriod === 'last-year') {
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        filteredStreakHistory = stats.streakHistory.filter(item => new Date(item.date) >= oneYearAgo);
    } else if (state.lifetimeAnalyticsPeriod === 'last-6-months') {
        const sixMonthsAgo = new Date(today);
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        filteredStreakHistory = stats.streakHistory.filter(item => new Date(item.date) >= sixMonthsAgo);
    } else if (state.lifetimeAnalyticsPeriod === 'last-month') {
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        filteredStreakHistory = stats.streakHistory.filter(item => new Date(item.date) >= oneMonthAgo);
    }
    
    // Generate streak chart visualization
    const streakChartData = filteredStreakHistory.slice(-30); // Last 30 days for chart
    const maxStreak = Math.max(...streakChartData.map(d => d.streak), stats.currentStreak, 1);
    const chartWidth = 500;
    const chartHeight = 120;
    const padding = 20;
    const barWidth = Math.max(2, (chartWidth - 2 * padding) / streakChartData.length - 1);
    
    // Generate bars
    let streakBars = '';
    let linePath = '';
    streakChartData.forEach((data, index) => {
        const x = padding + index * (barWidth + 1);
        const barHeight = maxStreak > 0 ? Math.max(2, (data.streak / maxStreak) * (chartHeight - 2 * padding)) : 2;
        const y = chartHeight - padding - barHeight;
        const opacity = data.active ? 1 : 0.4;
        const color = data.active ? '#f97316' : '#64748b';
        streakBars += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${color}" opacity="${opacity}" rx="2"/>`;
        
        // Build line path
        const lineY = chartHeight - padding - barHeight;
        if (index === 0) {
            linePath = `M ${x + barWidth / 2} ${lineY}`;
        } else {
            linePath += ` L ${x + barWidth / 2} ${lineY}`;
        }
    });
    
    // Create area path for gradient fill
    const areaPath = linePath + ` L ${padding + (streakChartData.length - 1) * (barWidth + 1) + barWidth / 2} ${chartHeight - padding} L ${padding + barWidth / 2} ${chartHeight - padding} Z`;
    
    // Generate progress timeline chart
    const timelineData = stats.progressTimeline.slice(-12);
    const maxMastered = Math.max(...timelineData.map(d => d.mastered), 1);
    const timelineWidth = 500;
    const timelineHeight = 120;
    const timelinePadding = 20;
    
    let timelinePath = '';
    let timelineArea = '';
    timelineData.forEach((data, index) => {
        const x = timelinePadding + (index / (timelineData.length - 1 || 1)) * (timelineWidth - 2 * timelinePadding);
        const y = timelineHeight - timelinePadding - (data.mastered / maxMastered) * (timelineHeight - 2 * timelinePadding);
        if (index === 0) {
            timelinePath = `M ${x} ${y}`;
            timelineArea = `M ${x} ${timelineHeight - timelinePadding}`;
        } else {
            timelinePath += ` L ${x} ${y}`;
            timelineArea += ` L ${x} ${y}`;
        }
    });
    timelineArea += ` L ${timelinePadding + ((timelineData.length - 1) / (timelineData.length - 1 || 1)) * (timelineWidth - 2 * timelinePadding)} ${timelineHeight - timelinePadding} Z`;
    
    // Generate activity heatmap (last 365 days, grouped by weeks)
    // Organize data by weeks (columns) and days of week (rows)
    const weeks = 53; // 53 weeks to cover full year
    const daysPerWeek = 7;
    const heatmapData = [];
    const monthLabels = [];
    const dayLabels = ['Mon', 'Wed', 'Fri'];
    
    // Get start date (365 days ago)
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);
    
    // Adjust start date to Monday
    const dayOfWeek = startDate.getDay();
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(startDate.getDate() - daysToMonday);
    
    // Track months for labels
    let currentMonth = -1;
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Organize data by week columns
    for (let week = 0; week < weeks; week++) {
        const weekData = [];
        let weekStartDate = new Date(startDate);
        weekStartDate.setDate(weekStartDate.getDate() + week * 7);
        
        // Check if this week starts a new month
        const weekMonth = weekStartDate.getMonth();
        if (weekMonth !== currentMonth) {
            currentMonth = weekMonth;
            monthLabels.push({ week: week, label: monthNames[weekMonth] });
        }
        
        // Get data for each day of the week
        for (let day = 0; day < daysPerWeek; day++) {
            const date = new Date(weekStartDate);
            date.setDate(date.getDate() + day);
            const dateStr = date.toISOString().split('T')[0];
            const activity = stats.activityData[dateStr] || { studyTime: 0, itemsCompleted: 0 };
            const intensity = Math.min(activity.studyTime / 120, 1); // Normalize to 0-1
            weekData.push({ intensity, date: dateStr, studyTime: activity.studyTime });
        }
        heatmapData.push(weekData);
    }
    
    container.innerHTML = `
        <!-- Streak History Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-large">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Streak History</div>
                    <div class="lifetime-analytics-value-small">Current: ${stats.currentStreak} days | Longest: ${stats.longestStreak} days</div>
                </div>
            </div>
            <div class="lifetime-analytics-chart">
                <svg class="lifetime-bar-chart" viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="streakGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:#f97316;stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:#f97316;stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    ${areaPath ? `<path d="${areaPath}" fill="url(#streakGradient)" opacity="0.6"/>` : ''}
                    ${linePath ? `<path d="${linePath}" stroke="#f97316" stroke-width="2" fill="none" stroke-linecap="round"/>` : ''}
                    ${streakBars}
                    ${streakChartData.map((data, index) => {
                        const x = padding + index * (barWidth + 1);
                        const barHeight = maxStreak > 0 ? Math.max(2, (data.streak / maxStreak) * (chartHeight - 2 * padding)) : 2;
                        const lineY = chartHeight - padding - barHeight;
                        return `<circle cx="${x + barWidth / 2}" cy="${lineY}" r="3" fill="#f97316" opacity="${data.active ? 1 : 0.6}"/>`;
                    }).join('')}
                </svg>
            </div>
            <div class="lifetime-analytics-subtitle">Last ${streakChartData.length} days</div>
        </div>
        
        <!-- Total Mastered Card -->
        <div class="lifetime-analytics-card">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-value">${totalMastered.toLocaleString()}</div>
                    <div class="lifetime-analytics-label">Total Mastered</div>
                </div>
            </div>
            <div class="lifetime-analytics-breakdown">
                <div class="lifetime-breakdown-item">
                    <div class="lifetime-breakdown-bar">
                        <div class="lifetime-breakdown-fill" style="width: ${flashcardsPercent}%; background: #ef4444;"></div>
                    </div>
                    <div class="lifetime-breakdown-label">
                        <span>Flashcards</span>
                        <span class="lifetime-breakdown-value">${stats.totalMastered.flashcards.toLocaleString()}</span>
                    </div>
                </div>
                <div class="lifetime-breakdown-item">
                    <div class="lifetime-breakdown-bar">
                        <div class="lifetime-breakdown-fill" style="width: ${mcqsPercent}%; background: #f97316;"></div>
                    </div>
                    <div class="lifetime-breakdown-label">
                        <span>MCQs</span>
                        <span class="lifetime-breakdown-value">${stats.totalMastered.mcqs.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div class="lifetime-analytics-subtitle">Across all courses</div>
        </div>
        
        <!-- Overall Accuracy Card -->
        <div class="lifetime-analytics-card">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-value">${stats.overallAccuracy}%</div>
                    <div class="lifetime-analytics-label">Overall Accuracy</div>
                </div>
                <div class="lifetime-analytics-trend lifetime-analytics-trend-up">
                    <i data-lucide="trending-up"></i>
                    <span>+3.2%</span>
                </div>
            </div>
            <div class="lifetime-analytics-progress-ring">
                <svg viewBox="0 0 100 100" class="lifetime-ring-svg">
                    <circle cx="50" cy="50" r="40" stroke="var(--border-light)" stroke-width="8" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="#10b981" stroke-width="8" fill="none"
                        stroke-dasharray="${2 * Math.PI * 40}" 
                        stroke-dashoffset="${2 * Math.PI * 40 * (1 - stats.overallAccuracy / 100)}" 
                        stroke-linecap="round" transform="rotate(-90 50 50)"/>
                </svg>
                <div class="lifetime-ring-value">${stats.overallAccuracy}%</div>
            </div>
            <div class="lifetime-analytics-subtitle">Weighted average</div>
        </div>
        
        <!-- Progress Timeline Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-wide">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Progress Timeline</div>
                    <div class="lifetime-analytics-value-small">Growth Over Time</div>
                </div>
            </div>
            <div class="lifetime-analytics-chart">
                <svg class="lifetime-line-chart" viewBox="0 0 ${timelineWidth} ${timelineHeight}" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    <path class="lifetime-chart-area" d="${timelineArea}" fill="url(#timelineGradient)"/>
                    <path class="lifetime-chart-line" d="${timelinePath}" stroke="var(--primary-color)" stroke-width="3" fill="none"/>
                    ${timelineData.map((data, index) => {
                        const x = timelinePadding + (index / (timelineData.length - 1 || 1)) * (timelineWidth - 2 * timelinePadding);
                        const y = timelineHeight - timelinePadding - (data.mastered / maxMastered) * (timelineHeight - 2 * timelinePadding);
                        return `<circle class="lifetime-chart-point" cx="${x}" cy="${y}" r="4" fill="var(--primary-color)"/>`;
                    }).join('')}
                </svg>
            </div>
            <div class="lifetime-analytics-subtitle">Last 12 months</div>
        </div>
        
        <!-- Activity Heatmap Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-wide">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Activity Heatmap</div>
                    <div class="lifetime-analytics-value-small">All-Time Study Activity</div>
                </div>
            </div>
        <div class="lifetime-heatmap">
                <div class="lifetime-heatmap-wrapper">
                    <div class="lifetime-heatmap-labels-y">
                        ${dayLabels.map(day => `<div class="lifetime-heatmap-day-label">${day}</div>`).join('')}
                    </div>
                    <div class="lifetime-heatmap-content">
                        <div class="lifetime-heatmap-labels-x">
                            ${monthLabels.map(month => `<div class="lifetime-heatmap-month-label" style="grid-column: ${month.week + 1};">${month.label}</div>`).join('')}
                        </div>
                        <div class="lifetime-heatmap-grid">
                            ${Array.from({ length: 7 }, (_, dayIndex) => 
                                heatmapData.map((weekData, weekIndex) => {
                                    const dayData = weekData[dayIndex];
                                    if (!dayData) return '';
                                    const opacity = Math.max(0.15, dayData.intensity);
                                    const studyTime = Math.round(dayData.studyTime);
                                    return `<div class="lifetime-heatmap-cell" 
                                                style="opacity: ${opacity}; background: var(--primary-color);" 
                                                title="${dayData.date}: ${studyTime} min"
                                                data-week="${weekIndex}"
                                                data-day="${dayIndex}"></div>`;
                                }).join('')
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="lifetime-heatmap-legend">
                <span>Less</span>
                <div class="lifetime-heatmap-legend-cells">
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.1;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.3;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.5;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.7;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 1;"></div>
                </div>
                <span>More</span>
            </div>
            <div class="lifetime-analytics-subtitle">Last 52 weeks</div>
        </div>
        
        <!-- Milestones Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-wide">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Achievement Milestones</div>
                    <div class="lifetime-analytics-value-small">${stats.milestones.length} Achievements Unlocked</div>
                </div>
                <button class="lifetime-milestones-see-all-btn" id="lifetime-milestones-see-all-btn">
                    See All
                    <i data-lucide="chevron-right"></i>
                </button>
            </div>
            <div class="lifetime-milestones-grid">
                ${stats.milestones.map(milestone => `
                    <div class="lifetime-milestone-card">
                        <div class="lifetime-milestone-icon lifetime-milestone-icon-${milestone.type}">
                            <i data-lucide="${milestone.icon}"></i>
                        </div>
                        <div class="lifetime-milestone-content">
                            <div class="lifetime-milestone-name">${milestone.name}</div>
                            <div class="lifetime-milestone-description">${milestone.description}</div>
                            <div class="lifetime-milestone-date">Unlocked ${new Date(milestone.date).toLocaleDateString()}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    lucide.createIcons();
    
    // Add event listener for See All button
    const seeAllBtn = document.getElementById('lifetime-milestones-see-all-btn');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', () => {
            showAllAchievementsModal();
        });
    }
}

// Show all achievements modal
function showAllAchievementsModal() {
    const modal = document.getElementById('lifetime-achievements-modal');
    if (!modal) return;
    
    const allAchievements = generateAllAchievements();
    const container = document.getElementById('lifetime-achievements-modal-content');
    if (!container) return;
    
    const stats = state.lifetimeStats;
    
    // Group achievements by type
    const grouped = {
        streak: allAchievements.filter(a => a.type === 'streak'),
        mastery: allAchievements.filter(a => a.type === 'mastery'),
        accuracy: allAchievements.filter(a => a.type === 'accuracy'),
        study: allAchievements.filter(a => a.type === 'study')
    };
    
    const typeLabels = {
        streak: 'Streak Achievements',
        mastery: 'Mastery Achievements',
        accuracy: 'Accuracy Achievements',
        study: 'Study Time Achievements'
    };
    
    container.innerHTML = Object.keys(grouped).map(type => {
        const achievements = grouped[type];
        if (achievements.length === 0) return '';
        
        return `
            <div class="lifetime-achievements-section">
                <h3 class="lifetime-achievements-section-title">${typeLabels[type]}</h3>
                <div class="lifetime-achievements-section-grid">
                    ${achievements.map(achievement => {
                        const unlockedMilestone = stats.milestones.find(m => m.name === achievement.name);
                        return `
                        <div class="lifetime-achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
                            <div class="lifetime-achievement-icon-wrapper">
                                <div class="lifetime-achievement-icon lifetime-achievement-icon-${achievement.type} ${achievement.unlocked ? '' : 'locked'}">
                                    <i data-lucide="${achievement.icon}"></i>
                                </div>
                                ${achievement.unlocked ? '<div class="lifetime-achievement-check"><i data-lucide="check"></i></div>' : '<div class="lifetime-achievement-lock"><i data-lucide="lock"></i></div>'}
                            </div>
                            <div class="lifetime-achievement-content">
                                <div class="lifetime-achievement-name">${achievement.name}</div>
                                <div class="lifetime-achievement-description">${achievement.description}</div>
                                <div class="lifetime-achievement-requirement">${achievement.requirement}</div>
                                ${achievement.unlocked && unlockedMilestone ? 
                                    `<div class="lifetime-achievement-date">Unlocked ${new Date(unlockedMilestone.date).toLocaleDateString()}</div>` : 
                                    '<div class="lifetime-achievement-status">Locked</div>'
                                }
                            </div>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    modal.classList.remove('hidden');
    lucide.createIcons();
}

// Generate mock leaderboard data
function generateLeaderboardData() {
    const currentUser = {
        name: "You",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
        retention: 78,
        accuracy: 92,
        streak: 12,
        mastered: 1280
    };
    
    const otherUsers = [
        { name: "Priya Sharma", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", retention: 85, accuracy: 94, streak: 18, mastered: 1450 },
        { name: "Rahul Kumar", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul", retention: 82, accuracy: 91, streak: 15, mastered: 1320 },
        { name: "Anjali Patel", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali", retention: 79, accuracy: 93, streak: 14, mastered: 1295 },
        { name: "Vikram Singh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram", retention: 76, accuracy: 89, streak: 11, mastered: 1210 },
        { name: "Sneha Reddy", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha", retention: 74, accuracy: 88, streak: 10, mastered: 1180 },
        { name: "Arjun Mehta", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun", retention: 72, accuracy: 87, streak: 9, mastered: 1150 },
        { name: "Kavya Nair", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya", retention: 70, accuracy: 86, streak: 8, mastered: 1120 }
    ];
    
    const allUsers = [currentUser, ...otherUsers];
    
    return {
        retention: allUsers.sort((a, b) => b.retention - a.retention).map((user, index) => ({
            ...user,
            rank: index + 1,
            value: user.retention,
            unit: '%',
            isCurrentUser: user.name === "You"
        })),
        accuracy: allUsers.sort((a, b) => b.accuracy - a.accuracy).map((user, index) => ({
            ...user,
            rank: index + 1,
            value: user.accuracy,
            unit: '%',
            isCurrentUser: user.name === "You"
        })),
        streak: allUsers.sort((a, b) => b.streak - a.streak).map((user, index) => ({
            ...user,
            rank: index + 1,
            value: user.streak,
            unit: ' days',
            isCurrentUser: user.name === "You"
        })),
        mastered: allUsers.sort((a, b) => b.mastered - a.mastered).map((user, index) => ({
            ...user,
            rank: index + 1,
            value: user.mastered,
            unit: '',
            isCurrentUser: user.name === "You"
        }))
    };
}

function renderLeaderboard(metric) {
    const leaderboardData = generateLeaderboardData();
    const rankings = leaderboardData[metric];
    const currentUserRank = rankings.findIndex(u => u.isCurrentUser);
    const currentUser = rankings[currentUserRank];
    
    const metricLabels = {
        retention: 'Retention Rate',
        accuracy: 'Accuracy',
        streak: 'Study Streak',
        mastered: 'Total Mastered'
    };
    
    return `
        <div class="course-detail-leaderboard-stats">
            <div class="course-detail-leaderboard-stat">
                <div class="course-detail-leaderboard-stat-label">Your Rank</div>
                <div class="course-detail-leaderboard-stat-value">#${currentUser.rank}</div>
            </div>
            <div class="course-detail-leaderboard-stat">
                <div class="course-detail-leaderboard-stat-label">Your ${metricLabels[metric]}</div>
                <div class="course-detail-leaderboard-stat-value">${currentUser.value}${currentUser.unit}</div>
            </div>
            <div class="course-detail-leaderboard-stat">
                <div class="course-detail-leaderboard-stat-label">Top Score</div>
                <div class="course-detail-leaderboard-stat-value">${rankings[0].value}${rankings[0].unit}</div>
            </div>
        </div>
        <div class="course-detail-leaderboard-list">
            ${rankings.slice(0, 5).map(user => `
                <div class="course-detail-leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}">
                    <div class="course-detail-leaderboard-rank">#${user.rank}</div>
                    <div class="course-detail-leaderboard-avatar">
                        <img src="${user.avatar}" alt="${user.name}">
                        ${user.rank <= 3 ? `<div class="course-detail-leaderboard-medal medal-${user.rank}">
                            <i data-lucide="${user.rank === 1 ? 'award' : user.rank === 2 ? 'medal' : 'trophy'}"></i>
                        </div>` : ''}
                    </div>
                    <div class="course-detail-leaderboard-info">
                        <div class="course-detail-leaderboard-name">${user.name}</div>
                        <div class="course-detail-leaderboard-metric">${user.value}${user.unit}</div>
                    </div>
                    <div class="course-detail-leaderboard-badge">
                        ${user.isCurrentUser ? '<span class="course-detail-leaderboard-you-badge">You</span>' : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        ${rankings.length > 5 ? `
            <div class="course-detail-leaderboard-more">
                <div class="course-detail-leaderboard-item">
                    <div class="course-detail-leaderboard-rank">...</div>
                    <div class="course-detail-leaderboard-info">
                        <div class="course-detail-leaderboard-name">${rankings.length - 5} more users</div>
                    </div>
                </div>
            </div>
        ` : ''}
    `;
}

// Render Test Performance Visuals
function renderTestPerformanceVisuals() {
    const container = document.getElementById('course-detail-test-performance-section');
    if (!container) return;

    // Calculate metrics from test performance data
    const sortedResults = [...testPerformanceData].sort((a, b) => b.date - a.date);
    const recentResults = sortedResults.slice(0, 7); // Last 7 tests for trend
    
    const totalTests = testPerformanceData.length;
    const averageScore = totalTests > 0 
        ? Math.round(testPerformanceData.reduce((sum, test) => sum + test.score, 0) / totalTests)
        : 0;
    const averageAccuracy = totalTests > 0
        ? Math.round(testPerformanceData.reduce((sum, test) => sum + test.accuracy, 0) / totalTests)
        : 0;
    
    // Calculate trend (compare last 3 vs previous 3)
    const last3 = recentResults.slice(0, 3);
    const prev3 = recentResults.slice(3, 6);
    const last3Avg = last3.length > 0
        ? last3.reduce((sum, t) => sum + t.score, 0) / last3.length
        : 0;
    const prev3Avg = prev3.length > 0
        ? prev3.reduce((sum, t) => sum + t.score, 0) / prev3.length
        : (recentResults.length > 3 ? last3Avg : 0);
    const scoreTrend = prev3Avg > 0 ? last3Avg - prev3Avg : 0;
    const trendDirection = scoreTrend >= 0 ? 'up' : 'down';
    const trendValue = Math.abs(Math.round(scoreTrend));

    // Generate line chart path for score trends
    const chartWidth = 400;
    const chartHeight = 200;
    const padding = 20;
    const chartData = recentResults.slice().reverse(); // Oldest to newest for chart
    const maxScore = 100;
    const minScore = Math.max(0, Math.min(...chartData.map(d => d.score)) - 10);
    const scoreRange = maxScore - minScore;
    
    let pathData = '';
    let areaPathData = '';
    if (chartData.length > 0) {
        const points = chartData.map((test, index) => {
            const x = padding + (index * (chartWidth - 2 * padding) / Math.max(1, chartData.length - 1));
            const y = padding + chartHeight - 2 * padding - ((test.score - minScore) / scoreRange) * (chartHeight - 2 * padding);
            return { x, y, score: test.score };
        });
        
        // Create smooth curve path
        if (points.length === 1) {
            pathData = `M ${points[0].x},${points[0].y}`;
            areaPathData = `M ${points[0].x},${points[0].y} L ${points[0].x},${chartHeight - padding} L ${padding},${chartHeight - padding} Z`;
        } else if (points.length === 2) {
            pathData = `M ${points[0].x},${points[0].y} L ${points[1].x},${points[1].y}`;
            areaPathData = `M ${points[0].x},${points[0].y} L ${points[1].x},${points[1].y} L ${points[1].x},${chartHeight - padding} L ${points[0].x},${chartHeight - padding} Z`;
        } else {
            // Use quadratic curves for smooth line
            let path = `M ${points[0].x},${points[0].y}`;
            let areaPath = `M ${points[0].x},${points[0].y}`;
            for (let i = 1; i < points.length; i++) {
                const prev = points[i - 1];
                const curr = points[i];
                const next = points[i + 1];
                
                if (next) {
                    const cp1x = prev.x + (curr.x - prev.x) / 2;
                    const cp1y = prev.y;
                    const cp2x = curr.x - (next.x - curr.x) / 2;
                    const cp2y = curr.y;
                    path += ` Q ${cp1x},${cp1y} ${curr.x},${curr.y} T ${next.x},${next.y}`;
                } else {
                    path += ` L ${curr.x},${curr.y}`;
                }
            }
            pathData = path;
            // Area path
            areaPath = path + ` L ${points[points.length - 1].x},${chartHeight - padding} L ${points[0].x},${chartHeight - padding} Z`;
            areaPathData = areaPath;
        }
    }

    container.innerHTML = `
        <div class="course-detail-test-performance-grid">
            <div class="course-detail-test-performance-left">
                <div class="course-detail-test-performance-card">
                    <div class="course-detail-analytics-card-header">
                        <div>
                            <div class="course-detail-analytics-value">${averageAccuracy}%</div>
                            <div class="course-detail-analytics-label">Accuracy</div>
                        </div>
                    </div>
                    <div class="course-detail-analytics-progress-ring">
                        <svg viewBox="0 0 100 100" class="course-detail-ring-svg">
                            <circle cx="50" cy="50" r="40" stroke="var(--border-light)" stroke-width="8" fill="none"/>
                            <circle cx="50" cy="50" r="40" stroke="#f97316" stroke-width="8" fill="none"
                                stroke-dasharray="${2 * Math.PI * 40}" 
                                stroke-dashoffset="${2 * Math.PI * 40 * (1 - averageAccuracy / 100)}" 
                                stroke-linecap="round" transform="rotate(-90 50 50)"/>
                        </svg>
                        <div class="course-detail-ring-value">${averageAccuracy}%</div>
                    </div>
                    <div class="course-detail-analytics-subtitle">Across all tests</div>
                </div>
                
                <div class="course-detail-test-performance-card">
                    <div class="course-detail-analytics-card-header">
                        <div>
                            <div class="course-detail-analytics-value">${totalTests}</div>
                            <div class="course-detail-analytics-label">Tests Completed</div>
                        </div>
                    </div>
                    <div class="course-detail-analytics-breakdown">
                        ${recentResults.length > 0 ? (() => {
                            const testCounts = {};
                            recentResults.forEach(test => {
                                testCounts[test.testTitle] = (testCounts[test.testTitle] || 0) + 1;
                            });
                            const testTypes = Object.keys(testCounts);
                            const maxCount = Math.max(...Object.values(testCounts));
                            return testTypes.map((title, index) => {
                                const count = testCounts[title];
                                const width = (count / maxCount) * 100;
                                const colors = ['#f97316', '#ef4444', '#6366f1'];
                                return `
                                    <div class="course-detail-breakdown-item">
                                        <div class="course-detail-breakdown-bar">
                                            <div class="course-detail-breakdown-fill" style="width: ${width}%; background: ${colors[index % colors.length]};"></div>
                                        </div>
                                        <div class="course-detail-breakdown-label">
                                            <span>${title.length > 20 ? title.substring(0, 20) + '...' : title}</span>
                                            <span class="course-detail-breakdown-value">${count}</span>
                                        </div>
                                    </div>
                                `;
                            }).join('');
                        })() : '<p style="text-align: center; color: var(--text-secondary-light); font-size: 0.875rem; padding: 1rem;">No test data available</p>'}
                    </div>
                    <div class="course-detail-analytics-subtitle">Recent activity</div>
                </div>
            </div>
            
            <div class="course-detail-test-performance-card course-detail-test-performance-card-chart">
                <div class="course-detail-analytics-card-header">
                    <div>
                        <div class="course-detail-analytics-value">${averageScore}</div>
                        <div class="course-detail-analytics-label">Average Score</div>
                    </div>
                    ${scoreTrend !== 0 ? `
                    <div class="course-detail-analytics-trend ${trendDirection === 'up' ? 'course-detail-analytics-trend-up' : ''}">
                        <i data-lucide="${trendDirection === 'up' ? 'trending-up' : 'trending-down'}"></i>
                        <span>${trendDirection === 'up' ? '+' : '-'}${trendValue}</span>
                    </div>
                    ` : ''}
                </div>
                ${chartData.length > 0 ? `
                <div class="course-detail-analytics-chart">
                    <svg class="course-detail-line-chart" viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="testScoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#f97316;stop-opacity:0.3" />
                                <stop offset="100%" style="stop-color:#f97316;stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path class="course-detail-chart-area" d="${areaPathData}" fill="url(#testScoreGradient)"/>
                        <path class="course-detail-chart-line" d="${pathData}" stroke="#f97316" stroke-width="3" fill="none"/>
                        ${chartData.map((test, index) => {
                            const x = padding + (index * (chartWidth - 2 * padding) / Math.max(1, chartData.length - 1));
                            const y = padding + chartHeight - 2 * padding - ((test.score - minScore) / scoreRange) * (chartHeight - 2 * padding);
                            return `<circle class="course-detail-chart-point" cx="${x}" cy="${y}" r="4" fill="#f97316"/>`;
                        }).join('')}
                    </svg>
                </div>
                <div class="course-detail-analytics-period">Last ${Math.min(7, recentResults.length)} tests</div>
                ` : `
                <div class="course-detail-test-performance-empty">
                    <p>Complete tests to see your score trends</p>
                </div>
                `}
            </div>
        </div>
    `;
    
    lucide.createIcons();
}

function renderTestSeriesView() {
    // Render performance visuals first
    renderTestPerformanceVisuals();
    
    const container = document.getElementById('course-detail-test-series-grid');
    if (!container) return;

    container.innerHTML = `
        <div class="course-detail-test-series-card" data-test-id="1">
            <div class="course-detail-test-series-badge">Exam Simulator</div>
            <h4 class="course-detail-test-series-title">Prelims 2026: Mock 1</h4>
            <button class="course-detail-test-series-launch-btn" data-test-id="1">Launch Test</button>
        </div>
        <div class="course-detail-test-series-card" data-test-id="2">
            <div class="course-detail-test-series-badge">Exam Simulator</div>
            <h4 class="course-detail-test-series-title">Polity Specialist</h4>
            <button class="course-detail-test-series-launch-btn" data-test-id="2">Launch Test</button>
        </div>
        <div class="course-detail-test-series-card" data-test-id="3">
            <div class="course-detail-test-series-badge">Exam Simulator</div>
            <h4 class="course-detail-test-series-title">Modern History PYQ</h4>
            <button class="course-detail-test-series-launch-btn" data-test-id="3">Launch Test</button>
        </div>
    `;

    // Add event listeners to launch buttons
    container.querySelectorAll('.course-detail-test-series-launch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const testId = btn.getAttribute('data-test-id');
            const card = btn.closest('.course-detail-test-series-card');
            const testTitle = card.querySelector('.course-detail-test-series-title').textContent;
            launchTest(testId, testTitle);
        });
    });
}

// Test Questions Data (Sample)
const testQuestionsData = {
    '1': [
        {
            id: 1,
            text: "Consider the following trees: 1. Jackfruit (Artocarpus heterophyllus) 2. Mahua (Madhuca indica) 3. Teak (Tectona grandis) How many of the above are deciduous trees?",
            options: ["Only one", "Only two", "All three", "None"],
            correctAnswer: 1
        }
        // Remaining questions will be generated
    ],
    '2': [],
    '3': []
};

// Test Performance Data (Sample historical results)
const testPerformanceData = [
    {
        testId: '1',
        testTitle: 'Prelims 2026: Mock 1',
        score: 85,
        accuracy: 85,
        date: new Date('2024-12-15'),
        totalQuestions: 50,
        correctAnswers: 42.5,
        marksObtained: 85,
        totalMarks: 100
    },
    {
        testId: '2',
        testTitle: 'Polity Specialist',
        score: 78,
        accuracy: 78,
        date: new Date('2024-12-10'),
        totalQuestions: 50,
        correctAnswers: 39,
        marksObtained: 78,
        totalMarks: 100
    },
    {
        testId: '1',
        testTitle: 'Prelims 2026: Mock 1',
        score: 82,
        accuracy: 82,
        date: new Date('2024-12-05'),
        totalQuestions: 50,
        correctAnswers: 41,
        marksObtained: 82,
        totalMarks: 100
    },
    {
        testId: '3',
        testTitle: 'Modern History PYQ',
        score: 88,
        accuracy: 88,
        date: new Date('2024-11-28'),
        totalQuestions: 50,
        correctAnswers: 44,
        marksObtained: 88,
        totalMarks: 100
    },
    {
        testId: '2',
        testTitle: 'Polity Specialist',
        score: 75,
        accuracy: 75,
        date: new Date('2024-11-20'),
        totalQuestions: 50,
        correctAnswers: 37.5,
        marksObtained: 75,
        totalMarks: 100
    },
    {
        testId: '1',
        testTitle: 'Prelims 2026: Mock 1',
        score: 80,
        accuracy: 80,
        date: new Date('2024-11-15'),
        totalQuestions: 50,
        correctAnswers: 40,
        marksObtained: 80,
        totalMarks: 100
    },
    {
        testId: '3',
        testTitle: 'Modern History PYQ',
        score: 83,
        accuracy: 83,
        date: new Date('2024-11-10'),
        totalQuestions: 50,
        correctAnswers: 41.5,
        marksObtained: 83,
        totalMarks: 100
    }
];

// Generate sample questions for tests
function generateSampleQuestions(count = 50) {
    const questions = [];
    const sampleTexts = [
        "What is the capital of India?",
        "Which river is known as the Ganga?",
        "Who wrote the Indian Constitution?",
        "What is the highest peak in India?",
        "Which state has the longest coastline in India?"
    ];
    const sampleOptions = [
        ["Option A", "Option B", "Option C", "Option D"],
        ["First option", "Second option", "Third option", "Fourth option"],
        ["Choice 1", "Choice 2", "Choice 3", "Choice 4"]
    ];

    for (let i = 0; i < count; i++) {
        questions.push({
            id: i + 1,
            text: `Question ${i + 1}: ${sampleTexts[i % sampleTexts.length]}`,
            options: sampleOptions[i % sampleOptions.length],
            correctAnswer: Math.floor(Math.random() * 4)
        });
    }
    return questions;
}

// Launch Test - Shows instructions modal first
function launchTest(testId, testTitle) {
    // Initialize test state (but don't start timer yet)
    let questions = testQuestionsData[testId];
    if (!questions || questions.length === 0) {
        questions = generateSampleQuestions(50);
    } else if (questions.length < 50) {
        // If we have some questions but not 50, generate the rest
        const existingCount = questions.length;
        const remainingQuestions = generateSampleQuestions(50 - existingCount);
        // Update IDs of remaining questions
        remainingQuestions.forEach((q, idx) => {
            q.id = existingCount + idx + 1;
        });
        questions = [...questions, ...remainingQuestions];
    }
    
    state.testState = {
        testId: testId,
        testTitle: testTitle,
        questions: questions,
        totalQuestions: questions.length,
        currentQuestionIndex: 0,
        answers: new Array(questions.length).fill(null),
        markedForReview: new Array(questions.length).fill(false),
        questionStatuses: new Array(questions.length).fill('not-visited'), // 'not-visited', 'answered', 'marked'
        timerSeconds: 60 * 60, // 60 minutes in seconds
        timerInterval: null,
        startTime: null // Will be set when test actually starts
    };

    // Show instructions modal
    showTestInstructionsModal();
}

// Show Test Instructions Modal
function showTestInstructionsModal() {
    const modal = document.getElementById('test-instructions-modal');
    const modalBody = document.getElementById('test-instructions-modal-body');
    
    if (!modal || !modalBody) return;
    
    const modalHTML = `
        <div class="test-instructions-section">
            <h4 class="test-instructions-section-title">
                <i data-lucide="clock"></i>
                Timing
            </h4>
            <ul class="test-instructions-list">
                <li>The examination clock is synchronized with the server.</li>
                <li>A countdown timer in the top-right corner of the screen shows the remaining time.</li>
                <li>The test automatically closes when the timer reaches 00:00, eliminating the need for manual submission.</li>
                <li>Responses and progress are saved automatically if you exit the test interface.</li>
            </ul>
        </div>
        
        <div class="test-instructions-section">
            <h4 class="test-instructions-section-title">
                <i data-lucide="grid-3x3"></i>
                Question Palette
            </h4>
            <p class="test-instructions-note">The examination clock is synchronized with the server.</p>
            <div class="test-instructions-palette-table">
                <div class="test-instructions-palette-row">
                    <div class="test-instructions-palette-symbol test-instructions-palette-symbol-grey"></div>
                    <div class="test-instructions-palette-label">Grey</div>
                    <div class="test-instructions-palette-meaning">Question not yet visited.</div>
                </div>
                <div class="test-instructions-palette-row">
                    <div class="test-instructions-palette-symbol test-instructions-palette-symbol-purple"></div>
                    <div class="test-instructions-palette-label">Purple</div>
                    <div class="test-instructions-palette-meaning">Question visited and marked as reviewed.</div>
                </div>
                <div class="test-instructions-palette-row">
                    <div class="test-instructions-palette-symbol test-instructions-palette-symbol-green"></div>
                    <div class="test-instructions-palette-label">Green</div>
                    <div class="test-instructions-palette-meaning">Question visited & answered.</div>
                </div>
            </div>
        </div>
        
        <div class="test-instructions-section">
            <h4 class="test-instructions-section-title">
                <i data-lucide="file-text"></i>
                Viewing the Question Paper
            </h4>
            <ul class="test-instructions-list">
                <li>You can select "View Question Paper" at any time to see the entire set of questions on a single screen.</li>
            </ul>
        </div>
        
        <div class="test-instructions-section">
            <h4 class="test-instructions-section-title">
                <i data-lucide="check-circle"></i>
                Answer Review
            </h4>
            <ul class="test-instructions-list">
                <li>Correct answers and detailed feedback will be provided after the test concludes and the report card is generated.</li>
            </ul>
        </div>
    `;
    
    modalBody.innerHTML = modalHTML;
    modal.classList.remove('hidden');
    
    // Initialize icons
    lucide.createIcons();
    
    // Setup event listeners
    const startBtn = document.getElementById('test-instructions-start-btn');
    const exitBtn = document.getElementById('test-instructions-exit-btn');
    
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            closeTestInstructionsModal();
            startTest();
        });
    }
    
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            closeTestInstructionsModal();
            state.testState = null;
        });
    }
}

// Close Test Instructions Modal
function closeTestInstructionsModal() {
    const modal = document.getElementById('test-instructions-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Start Test - Actually starts the timer and shows the interface
function startTest() {
    if (!state.testState) return;
    
    // Set start time
    state.testState.startTime = Date.now();
    
    // Show test interface page
    showPage('test-interface');
    
    // Initialize test interface (this will start the timer)
    initializeTestInterface();
}

// Initialize Test Interface
function initializeTestInterface() {
    if (!state.testState) return;

    const testState = state.testState;

    // Update total questions display
    document.getElementById('test-total-questions').textContent = testState.totalQuestions;
    document.getElementById('test-total-questions-progress').textContent = testState.totalQuestions;

    // Render question palette
    renderQuestionPalette();

    // Render current question
    renderCurrentQuestion();

    // Start timer
    startTimer();

    // Setup event listeners
    setupTestEventListeners();

    // Update status displays
    updateTestStatus();
}

// Render Question Palette
function renderQuestionPalette() {
    const container = document.getElementById('test-palette-grid');
    if (!container || !state.testState) return;

    const testState = state.testState;
    container.innerHTML = '';

    for (let i = 0; i < testState.totalQuestions; i++) {
        const item = document.createElement('div');
        
        // Determine status class
        let statusClass = 'not-visited';
        if (testState.markedForReview[i]) {
            statusClass = 'marked';
        } else if (testState.answers[i] !== null) {
            statusClass = 'answered';
        }

        item.className = `test-palette-item ${statusClass}`;
        if (i === testState.currentQuestionIndex) {
            item.classList.add('active');
        }
        item.textContent = i + 1;
        item.setAttribute('data-question-index', i);
        item.addEventListener('click', () => navigateToQuestion(i));
        container.appendChild(item);
    }
}

// Render Current Question
function renderCurrentQuestion() {
    if (!state.testState) return;

    const testState = state.testState;
    const question = testState.questions[testState.currentQuestionIndex];

    // Update question number
    document.getElementById('test-current-question-num').textContent = testState.currentQuestionIndex + 1;

    // Update question text
    document.getElementById('test-question-text').textContent = question.text;

    // Render options
    const optionsContainer = document.getElementById('test-options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'test-option';
        if (testState.answers[testState.currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'test-option';
        radio.value = index;
        radio.id = `test-option-${index}`;
        radio.checked = testState.answers[testState.currentQuestionIndex] === index;
        radio.addEventListener('change', () => selectAnswer(index));

        const label = document.createElement('label');
        label.className = 'test-option-label';
        label.htmlFor = `test-option-${index}`;
        label.textContent = option;

        // Make the entire container clickable
        optionDiv.addEventListener('click', (e) => {
            // Don't trigger if clicking directly on the radio or label (to avoid double-trigger)
            if (e.target !== radio && e.target !== label) {
                radio.checked = true;
                selectAnswer(index);
            }
        });

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });

    // Update palette active state
    renderQuestionPalette();
}

// Select Answer
function selectAnswer(optionIndex) {
    if (!state.testState) return;

    const testState = state.testState;
    const currentIndex = testState.currentQuestionIndex;

    testState.answers[currentIndex] = optionIndex;
    testState.questionStatuses[currentIndex] = 'answered';
    // Remove marked for review when answering
    testState.markedForReview[currentIndex] = false;

    updateTestStatus();
    renderCurrentQuestion();
}

// Navigate to Question
function navigateToQuestion(index) {
    if (!state.testState) return;

    const testState = state.testState;
    if (index < 0 || index >= testState.totalQuestions) return;

    testState.currentQuestionIndex = index;
    renderCurrentQuestion();
    updateTestStatus();
}

// Next Question
function nextQuestion() {
    if (!state.testState) return;

    const testState = state.testState;
    if (testState.currentQuestionIndex < testState.totalQuestions - 1) {
        navigateToQuestion(testState.currentQuestionIndex + 1);
    }
}

// Mark for Review and Next
function markForReviewAndNext() {
    if (!state.testState) return;

    const testState = state.testState;
    const currentIndex = testState.currentQuestionIndex;

    testState.markedForReview[currentIndex] = true;
    // Keep the answer if it exists, but mark for review
    if (testState.answers[currentIndex] === null) {
        testState.questionStatuses[currentIndex] = 'marked';
    }

    updateTestStatus();
    renderQuestionPalette();

    // Move to next question
    if (currentIndex < testState.totalQuestions - 1) {
        navigateToQuestion(currentIndex + 1);
    }
}

// Clear Response
function clearResponse() {
    if (!state.testState) return;

    const testState = state.testState;
    const currentIndex = testState.currentQuestionIndex;

    testState.answers[currentIndex] = null;
    testState.markedForReview[currentIndex] = false;
    testState.questionStatuses[currentIndex] = 'not-visited';

    updateTestStatus();
    renderCurrentQuestion();
    renderQuestionPalette();
}

// Update Test Status
function updateTestStatus() {
    if (!state.testState) return;

    const testState = state.testState;
    const answeredCount = testState.answers.filter(a => a !== null).length;
    const completedCount = answeredCount;
    const remainingCount = testState.totalQuestions - completedCount;
    const progressPercent = (completedCount / testState.totalQuestions) * 100;

    // Update attempted count
    document.getElementById('test-attempted-count').textContent = answeredCount;

    // Update completed count
    document.getElementById('test-completed-count').textContent = completedCount;
    document.getElementById('test-completed-indicator-count').textContent = completedCount;

    // Update remaining count
    document.getElementById('test-remaining-count').textContent = remainingCount;

    // Update progress bar
    document.getElementById('test-progress-fill').style.width = `${progressPercent}%`;

    // Update palette
    renderQuestionPalette();
}

// Timer Functions
function startTimer() {
    if (!state.testState) return;

    if (state.testState.timerInterval) {
        clearInterval(state.testState.timerInterval);
    }

    // Display initial time
    updateTimerDisplay();

    state.testState.timerInterval = setInterval(() => {
        if (!state.testState) return;

        state.testState.timerSeconds--;

        if (state.testState.timerSeconds <= 0) {
            clearInterval(state.testState.timerInterval);
            state.testState.timerSeconds = 0;
            updateTimerDisplay();
            // Handle timer expiration
            alert('Time is up! The test will be submitted automatically.');
            submitTest();
            return;
        }

        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    if (!state.testState) return;

    const minutes = Math.floor(state.testState.timerSeconds / 60);
    const seconds = state.testState.timerSeconds % 60;
    const timerDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const timerElement = document.getElementById('test-timer');
    if (timerElement) {
        timerElement.textContent = timerDisplay;
    }
}

function stopTimer() {
    if (state.testState && state.testState.timerInterval) {
        clearInterval(state.testState.timerInterval);
        state.testState.timerInterval = null;
    }
}

// Setup Event Listeners
function setupTestEventListeners() {
    // Navigation buttons
    const nextBtn = document.getElementById('test-next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    const markReviewBtn = document.getElementById('test-mark-review-btn');
    if (markReviewBtn) {
        markReviewBtn.addEventListener('click', markForReviewAndNext);
    }

    const clearBtn = document.getElementById('test-clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearResponse);
    }

    // Action buttons
    const submitBtn = document.getElementById('test-submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to submit the test? You will not be able to change your answers after submission.')) {
                submitTest();
            }
        });
    }

    const exitBtn = document.getElementById('test-exit-btn');
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to exit? Your progress will be saved, but the timer will continue.')) {
                exitTest();
            }
        });
    }

    const viewPaperBtn = document.getElementById('test-view-paper-btn');
    if (viewPaperBtn) {
        viewPaperBtn.addEventListener('click', viewQuestionPaper);
    }

    const reportBtn = document.getElementById('test-report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            const reportModal = document.getElementById('report-mcq-modal');
            if (reportModal) {
                reportModal.classList.remove('hidden');
            }
        });
    }
}

// Submit Test
function submitTest() {
    if (!state.testState) return;

    stopTimer();

    // Calculate results
    const testState = state.testState;
    const answeredCount = testState.answers.filter(a => a !== null).length;
    let correctCount = 0;

    testState.questions.forEach((question, index) => {
        if (testState.answers[index] !== null && testState.answers[index] === question.correctAnswer) {
            correctCount++;
        }
    });

    // Show results (for now, just alert - can be enhanced with a results page)
    alert(`Test Submitted!\n\nAnswered: ${answeredCount}/${testState.totalQuestions}\nCorrect: ${correctCount}\nScore: ${correctCount * 2} marks`);

    // Exit test
    exitTest();
}

// Exit Test
function exitTest() {
    stopTimer();
    
    // Go back to test series view
    if (state.currentCourseId) {
        showPage('course-detail');
        switchCourseView('test-series');
    } else {
        showPage('courses');
    }

    // Clear test state
    state.testState = null;
}

// View Question Paper
function viewQuestionPaper() {
    if (!state.testState) return;

    // Create a modal or overlay to show all questions
    // For now, we'll use a simple approach - can be enhanced
    const testState = state.testState;
    let paperContent = 'Question Paper:\n\n';
    
    testState.questions.forEach((question, index) => {
        paperContent += `Q${index + 1}. ${question.text}\n`;
        question.options.forEach((opt, optIndex) => {
            const marker = testState.answers[index] === optIndex ? '✓' : ' ';
            paperContent += `  ${marker} ${opt}\n`;
        });
        paperContent += '\n';
    });

    // Show in a new window or modal
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(`<pre style="padding: 20px; font-family: monospace;">${paperContent}</pre>`);
}

function renderFilterBar(containerId, showGSPaper, filterType = null, contentFilter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const courseData = courseDetailData[state.currentCourseId];
    if (!courseData) return;

    let html = `<div class="course-detail-filter-bar-grid ${showGSPaper ? 'has-gs-paper' : ''}">`;

    if (showGSPaper) {
        html += `
            <div class="course-detail-filter-item">
                <label class="course-detail-filter-label">GS Paper</label>
                <select class="course-detail-filter-select" id="filter-gs-paper">
                    <option value="All Papers" ${state.courseDetailFilters.gsPaper === 'All Papers' ? 'selected' : ''}>All Papers</option>
                    <option value="GS-I" ${state.courseDetailFilters.gsPaper === 'GS-I' ? 'selected' : ''}>GS Paper I</option>
                    <option value="GS-II" ${state.courseDetailFilters.gsPaper === 'GS-II' ? 'selected' : ''}>GS Paper II</option>
                    <option value="GS-III" ${state.courseDetailFilters.gsPaper === 'GS-III' ? 'selected' : ''}>GS Paper III</option>
                </select>
            </div>
        `;
    }

    html += `
        <div class="course-detail-filter-item">
            <label class="course-detail-filter-label">Subject</label>
            <select class="course-detail-filter-select" id="filter-subject">
                <option value="All Subjects" ${state.courseDetailFilters.subject === 'All Subjects' ? 'selected' : ''}>All Subjects</option>
                ${courseData.sections.map(s => `<option value="${s.id}" ${state.courseDetailFilters.subject === s.id ? 'selected' : ''}>${s.title}</option>`).join('')}
            </select>
        </div>
        <div class="course-detail-filter-item course-detail-filter-item-topic">
            <label class="course-detail-filter-label">Specific Topic</label>
            <div class="course-detail-filter-topic-wrapper">
                <select class="course-detail-filter-select" id="filter-topic" ${state.courseDetailFilters.subject === 'All Subjects' ? 'disabled' : ''}>
                    <option value="All Topics" ${state.courseDetailFilters.topic === 'All Topics' ? 'selected' : ''}>All Topics</option>
                    ${state.courseDetailFilters.subject !== 'All Subjects' ? 
                        courseData.sections.find(s => s.id === state.courseDetailFilters.subject)?.lessons.map(l => 
                            `<option value="${l.id}" ${state.courseDetailFilters.topic === String(l.id) ? 'selected' : ''}>${l.title}</option>`
                        ).join('') || '' : ''
                    }
                </select>
                ${filterType ? `
                    <div class="course-detail-content-filter-capsule">
                        <button class="course-detail-content-filter-btn-capsule ${contentFilter === 'all' ? 'active' : ''}" data-filter="all" data-tab="${filterType}">All</button>
                        <button class="course-detail-content-filter-btn-capsule ${contentFilter === 'educator' ? 'active' : ''}" data-filter="educator" data-tab="${filterType}">Educator</button>
                        <button class="course-detail-content-filter-btn-capsule ${contentFilter === 'user' ? 'active' : ''}" data-filter="user" data-tab="${filterType}">User</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;

    // Add event listeners
    const gsPaperSelect = document.getElementById('filter-gs-paper');
    if (gsPaperSelect) {
        gsPaperSelect.addEventListener('change', (e) => {
            state.courseDetailFilters.gsPaper = e.target.value;
            if (state.currentCourseView === 'global-recall' && state.revisionStep === 'session') {
                renderRevisionSession();
            } else if (state.currentCourseView === 'writing') {
                renderWritingView();
            } else if (state.currentCourseView === 'analytics') {
                renderAnalyticsView();
            }
        });
    }

    const subjectSelect = document.getElementById('filter-subject');
    if (subjectSelect) {
        subjectSelect.addEventListener('change', (e) => {
            state.courseDetailFilters.subject = e.target.value;
            state.courseDetailFilters.topic = 'All Topics';
            if (state.currentCourseView === 'global-recall' && state.revisionStep === 'session') {
                renderRevisionSession();
            } else if (state.currentCourseView === 'writing') {
                renderWritingView();
            } else if (state.currentCourseView === 'analytics') {
                renderAnalyticsView();
            }
        });
    }

    const topicSelect = document.getElementById('filter-topic');
    if (topicSelect) {
        topicSelect.addEventListener('change', (e) => {
            state.courseDetailFilters.topic = e.target.value;
            if (state.currentCourseView === 'global-recall' && state.revisionStep === 'session') {
                renderRevisionSession();
            } else if (state.currentCourseView === 'writing') {
                renderWritingView();
            } else if (state.currentCourseView === 'analytics') {
                renderAnalyticsView();
            }
        });
    }

    // Add event listeners for capsule filter buttons
    if (filterType) {
        container.querySelectorAll('.course-detail-content-filter-btn-capsule').forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                const tab = btn.getAttribute('data-tab');
                state.contentFilter[tab] = filterValue;
                if (state.currentCourseView === 'global-recall' && state.revisionStep === 'session') {
                    renderRevisionSession();
                }
            });
        });
    }
}

function filterBySelection(items) {
    return items.filter(item => {
        const sidMatch = state.courseDetailFilters.subject === 'All Subjects' || item.sid === state.courseDetailFilters.subject;
        const tidMatch = state.courseDetailFilters.topic === 'All Topics' || item.tid === parseInt(state.courseDetailFilters.topic);
        const gsMatch = !item.gs || state.courseDetailFilters.gsPaper === 'All Papers' || item.gs === state.courseDetailFilters.gsPaper;
        return sidMatch && tidMatch && gsMatch;
    });
}

function setupCourseDetailEventListeners() {
    // Back button
    const backBtn = document.getElementById('course-detail-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            showPage('courses');
        });
    }

    // Hub buttons
    document.querySelectorAll('.course-detail-hub-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            switchCourseView(view);
        });
    });

    // Lesson tabs
    document.querySelectorAll('.course-detail-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            state.currentLessonTab = tabName;

            // Update tab active state
            document.querySelectorAll('.course-detail-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Render tab content
            const courseData = courseDetailData[state.currentCourseId];
            if (courseData) {
                let currentLesson = null;
                for (const section of courseData.sections) {
                    currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
                    if (currentLesson) break;
                }
                if (currentLesson) {
                    renderLessonTabContent(currentLesson);
                }
            }
        });
    });

    // Change mode button
    const changeModeBtn = document.getElementById('course-detail-change-mode-btn');
    if (changeModeBtn) {
        changeModeBtn.addEventListener('click', () => {
            state.revisionStep = 'mode';
            renderSmartRevisionView();
        });
    }

    // Study Hub collapse on scroll
    const sidebarContent = document.querySelector('.course-detail-sidebar-content');
    const sidebarSections = document.querySelectorAll('.course-detail-sidebar-section');
    let studyHubSection = null;
    
    // Find the Study Hub section (contains hub buttons)
    sidebarSections.forEach(section => {
        if (section.querySelector('.course-detail-hub-buttons')) {
            studyHubSection = section;
        }
    });
    
    // Set tooltip data attributes for hub buttons and create dynamic tooltips
    const hubButtons = document.querySelectorAll('.course-detail-hub-btn');
    let activeTooltip = null;
    
    hubButtons.forEach(btn => {
        const span = btn.querySelector('span');
        const tooltipText = span ? span.textContent.trim() : '';
        if (span) {
            btn.setAttribute('data-tooltip', tooltipText);
        }
        
        // Create dynamic tooltip on hover
        btn.addEventListener('mouseenter', function(e) {
            if (studyHubSection && studyHubSection.classList.contains('collapsed') && tooltipText) {
                // Remove any existing tooltip
                if (activeTooltip) {
                    activeTooltip.remove();
                    activeTooltip = null;
                }
                
                // Create tooltip element
                const tooltip = document.createElement('div');
                tooltip.className = 'course-detail-hub-tooltip';
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);
                activeTooltip = tooltip;
                
                // Get button position
                const rect = this.getBoundingClientRect();
                
                // Position tooltip above the button (calculate after append)
                requestAnimationFrame(() => {
                    const tooltipRect = tooltip.getBoundingClientRect();
                    tooltip.style.top = `${rect.top - tooltipRect.height - 8}px`;
                    tooltip.style.left = `${rect.left + rect.width / 2}px`;
                    tooltip.style.transform = 'translateX(-50%)';
                    
                    // Show tooltip after positioning
                    setTimeout(() => {
                        tooltip.classList.add('visible');
                    }, 10);
                });
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (activeTooltip) {
                activeTooltip.classList.remove('visible');
                setTimeout(() => {
                    if (activeTooltip && activeTooltip.parentNode) {
                        activeTooltip.remove();
                    }
                    activeTooltip = null;
                }, 200);
            }
        });
    });
    
    if (sidebarContent && studyHubSection) {
        sidebarContent.addEventListener('scroll', () => {
            if (sidebarContent.scrollTop > 0) {
                studyHubSection.classList.add('collapsed');
            } else {
                studyHubSection.classList.remove('collapsed');
            }
        });
        
        // Check initial scroll position
        if (sidebarContent.scrollTop > 0) {
            studyHubSection.classList.add('collapsed');
        }
    }
}

// ==================== CHAT PAGE FUNCTIONS ====================

function renderChatPage() {
    renderCourseList();
    
    // If a course is selected, show its chat
    if (state.currentChatCourse) {
        renderChatMessages(state.currentChatCourse);
    } else {
        showChatEmptyState();
    }
}

function renderCourseList() {
    const container = document.getElementById('chat-course-list');
    if (!container) return;

    if (state.myCourses.length === 0) {
        container.innerHTML = '<div class="chat-no-courses">No courses available</div>';
        return;
    }

    container.innerHTML = state.myCourses.map(course => {
        const isActive = state.currentChatCourse === course.id;
        const unreadCount = getUnreadChatCount(course.id);
        return `
            <div class="chat-course-item ${isActive ? 'active' : ''}" data-course-id="${course.id}">
                <img src="${course.image}" alt="${course.title}" class="chat-course-thumb">
                <div class="chat-course-info">
                    <h4 class="chat-course-name">${course.title}</h4>
                    <p class="chat-course-instructor-small">${course.instructor}</p>
                </div>
                ${unreadCount > 0 ? `<span class="chat-unread-badge">${unreadCount}</span>` : ''}
            </div>
        `;
    }).join('');
    
    // Update main chat badge after rendering course list
    updateChatBadge();

    // Add click listeners
    container.querySelectorAll('.chat-course-item').forEach(item => {
        item.addEventListener('click', () => {
            const courseId = parseInt(item.getAttribute('data-course-id'));
            selectChatCourse(courseId);
        });
    });

    lucide.createIcons();
}

function getUnreadChatCount(courseId) {
    // Count unread messages (messages not from current user that haven't been read)
    const messages = state.chats[courseId] || [];
    const readSet = state.chatReadStates[courseId] || new Set();
    
    return messages.filter(msg => {
        // Count messages that are not from the current user and haven't been read
        const isNotFromUser = msg.name !== 'You';
        const isUnread = !readSet.has(msg.id);
        return isNotFromUser && isUnread;
    }).length;
}

function markChatAsRead(courseId) {
    // Mark all messages in this course as read
    if (!state.chatReadStates[courseId]) {
        state.chatReadStates[courseId] = new Set();
    }
    
    const messages = state.chats[courseId] || [];
    messages.forEach(msg => {
        if (msg.name !== 'You') {
            state.chatReadStates[courseId].add(msg.id);
        }
    });
    
    // Save to localStorage
    const readStatesToSave = {};
    Object.keys(state.chatReadStates).forEach(id => {
        readStatesToSave[id] = Array.from(state.chatReadStates[id]);
    });
    localStorage.setItem('chatReadStates', JSON.stringify(readStatesToSave));
    
    // Update badges
    updateChatBadge();
    renderCourseList();
}

function updateChatBadge() {
    // Count unread messages across all courses
    let totalUnread = 0;
    state.myCourses.forEach(course => {
        totalUnread += getUnreadChatCount(course.id);
    });
    
    const badge = document.getElementById('chat-badge');
    if (badge) {
        if (totalUnread > 0) {
            badge.textContent = totalUnread;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

function selectChatCourse(courseId) {
    state.currentChatCourse = courseId;
    renderChatPage();
}

function showChatEmptyState() {
    const emptyState = document.getElementById('chat-empty-state');
    const chatInterface = document.getElementById('chat-interface');
    
    if (emptyState) emptyState.classList.remove('hidden');
    if (chatInterface) chatInterface.classList.add('hidden');
}

function renderChatMessages(courseId) {
    const emptyState = document.getElementById('chat-empty-state');
    const chatInterface = document.getElementById('chat-interface');
    const messagesContainer = document.getElementById('chat-messages');
    const courseTitle = document.getElementById('chat-course-title');
    const instructorName = document.getElementById('chat-instructor-name');

    if (!messagesContainer || !courseTitle || !instructorName) return;

    // Hide empty state and show chat interface
    if (emptyState) emptyState.classList.add('hidden');
    if (chatInterface) chatInterface.classList.remove('hidden');
    
    // Mark messages as read when viewing the chat
    markChatAsRead(courseId);

    // Find course
    const course = state.myCourses.find(c => c.id === courseId);
    if (course) {
        courseTitle.textContent = course.title;
        instructorName.textContent = `Instructor: ${course.instructor}`;
    }

    // Get messages for this course
    const messages = state.chats[courseId] || [];
    
    messagesContainer.innerHTML = messages.map(msg => {
        const isInstructor = msg.sender === 'instructor';
        const isCurrentUser = msg.name === 'You';
        const timestamp = formatTimestamp(msg.timestamp);
        
        return `
            <div class="chat-message ${isInstructor ? 'instructor' : 'student'} ${isCurrentUser ? 'current-user' : ''}">
                <div class="chat-message-avatar">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(msg.name)}" alt="${msg.name}">
                </div>
                <div class="chat-message-content">
                    <div class="chat-message-header">
                        <span class="chat-message-name">${msg.name}</span>
                        <span class="chat-message-time">${timestamp}</span>
                    </div>
                    <div class="chat-message-text">${escapeHtml(msg.message)}</div>
                </div>
            </div>
        `;
    }).join('');

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Setup send message functionality
    setupChatInput(courseId);

    lucide.createIcons();
}

function setupChatInput(courseId) {
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');

    if (!input || !sendBtn) return;

    const sendMessage = () => {
        const message = input.value.trim();
        if (!message) return;

        // Add message to state
        if (!state.chats[courseId]) {
            state.chats[courseId] = [];
        }

        const newMessage = {
            id: Date.now(),
            sender: 'student',
            name: 'You',
            message: message,
            timestamp: Date.now()
        };

        state.chats[courseId].push(newMessage);

        // Save to localStorage
        localStorage.setItem('chats', JSON.stringify(state.chats));

        // Clear input
        input.value = '';

        // Re-render messages
        renderChatMessages(courseId);
        
        // Update course list to reflect new message count
        renderCourseList();
    };

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const oneDay = 24 * 60 * 60 * 1000;

    if (diff < oneDay) {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    } else if (diff < 7 * oneDay) {
        const days = Math.floor(diff / oneDay);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== FEEDBACK PAGE FUNCTIONS ====================

function renderFeedbackPage() {
    const form = document.getElementById('feedback-form');
    const success = document.getElementById('feedback-success');
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingValue = document.getElementById('feedback-rating-value');

    if (!form) return;

    // Setup star rating
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingValue.value = rating;
            
            // Update star display
            ratingStars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                    s.querySelector('i').setAttribute('data-lucide', 'star');
                } else {
                    s.classList.remove('active');
                    s.querySelector('i').setAttribute('data-lucide', 'star');
                }
            });
            lucide.createIcons();
        });
    });

    // Handle form submission
    form.addEventListener('submit', handleFeedbackSubmit);
}

function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const feedback = {
        rating: formData.get('rating'),
        category: formData.get('category'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: Date.now()
    };

    // Save to localStorage
    const savedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    savedFeedback.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(savedFeedback));

    // Show success message
    const formEl = document.getElementById('feedback-form');
    const success = document.getElementById('feedback-success');
    
    if (formEl) formEl.classList.add('hidden');
    if (success) success.classList.remove('hidden');

    // Reset form after 3 seconds
    setTimeout(() => {
        form.reset();
        document.getElementById('feedback-rating-value').value = '0';
        document.querySelectorAll('.rating-star').forEach(star => {
            star.classList.remove('active');
        });
        if (formEl) formEl.classList.remove('hidden');
        if (success) success.classList.add('hidden');
    }, 3000);
}

// ==================== NOTIFICATIONS PAGE FUNCTIONS ====================

function renderNotificationsPage() {
    const container = document.getElementById('notifications-list');
    const emptyState = document.getElementById('notifications-empty');
    
    if (!container) return;

    const unreadCount = state.notifications.filter(n => !n.read).length;
    updateNotificationBadge(unreadCount);

    if (state.notifications.length === 0) {
        if (container) container.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (container) container.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    // Sort notifications: unread first, then by timestamp
    const sorted = [...state.notifications].sort((a, b) => {
        if (a.read !== b.read) return a.read ? 1 : -1;
        return b.timestamp - a.timestamp;
    });

    container.innerHTML = sorted.map(notif => {
        const icon = getNotificationIcon(notif.type);
        const timeAgo = formatTimeAgo(notif.timestamp);
        
        return `
            <div class="notification-item ${notif.read ? 'read' : 'unread'}" data-notification-id="${notif.id}">
                <div class="notification-icon">
                    <i data-lucide="${icon}"></i>
                </div>
                <div class="notification-content">
                    <div class="notification-header">
                        <h4 class="notification-title">${escapeHtml(notif.title)}</h4>
                        <span class="notification-time">${timeAgo}</span>
                    </div>
                    <p class="notification-description">${escapeHtml(notif.description)}</p>
                </div>
                <div class="notification-actions">
                    ${!notif.read ? `
                        <button class="notification-action-btn" data-action="read" title="Mark as read">
                            <i data-lucide="check"></i>
                        </button>
                    ` : ''}
                    <button class="notification-action-btn" data-action="dismiss" title="Dismiss">
                        <i data-lucide="x"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Setup event listeners
    container.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.notification-actions')) {
                const id = parseInt(item.getAttribute('data-notification-id'));
                toggleNotificationRead(id);
            }
        });
    });

    container.querySelectorAll('.notification-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = btn.closest('.notification-item');
            const id = parseInt(item.getAttribute('data-notification-id'));
            const action = btn.getAttribute('data-action');
            
            if (action === 'read') {
                toggleNotificationRead(id);
            } else if (action === 'dismiss') {
                dismissNotification(id);
            }
        });
    });

    // Setup mark all as read
    const markAllReadBtn = document.getElementById('mark-all-read-btn');
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', markAllNotificationsRead);
    }

    lucide.createIcons();
}

function getNotificationIcon(type) {
    const icons = {
        'class': 'calendar',
        'content': 'file-plus',
        'update': 'refresh-cw',
        'announcement': 'megaphone'
    };
    return icons[type] || 'bell';
}

function formatTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
}

function toggleNotificationRead(id) {
    const notif = state.notifications.find(n => n.id === id);
    if (notif) {
        const wasUnread = !notif.read;
        notif.read = !notif.read;
        saveNotifications();
        
        // Add visual feedback
        const notifElement = document.querySelector(`.notification-item[data-notification-id="${id}"]`);
        if (notifElement && wasUnread) {
            // Add a brief highlight animation
            notifElement.classList.add('notification-read-animation');
            setTimeout(() => {
                notifElement.classList.remove('notification-read-animation');
            }, 600);
        }
        
        renderNotificationsPage();
    }
}

function dismissNotification(id) {
    state.notifications = state.notifications.filter(n => n.id !== id);
    saveNotifications();
    renderNotificationsPage();
}

function markAllNotificationsRead() {
    const hadUnread = state.notifications.some(n => !n.read);
    state.notifications.forEach(n => n.read = true);
    saveNotifications();
    
    // Add visual feedback
    if (hadUnread) {
        const container = document.getElementById('notifications-list');
        if (container) {
            container.classList.add('notification-bulk-read-animation');
            setTimeout(() => {
                container.classList.remove('notification-bulk-read-animation');
            }, 600);
        }
    }
    
    renderNotificationsPage();
}

function saveNotifications() {
    localStorage.setItem('notifications', JSON.stringify(state.notifications));
    const unreadCount = state.notifications.filter(n => !n.read).length;
    updateNotificationBadge(unreadCount);
}

function updateNotificationBadge(count) {
    const badge = document.getElementById('notifications-badge');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// Initialize when DOM is ready
// #region agent log
fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:365',message:'Script execution started',data:{readyState:document.readyState},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion
if (document.readyState === 'loading') {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:368',message:'Adding DOMContentLoaded listener',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    document.addEventListener('DOMContentLoaded', init);
} else {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:372',message:'DOM already ready, calling init()',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    init();
}
// #region agent log
window.addEventListener('error', function(e) {
    fetch('http://127.0.0.1:7242/ingest/8ac3d8ac-ff72-451c-a894-d2ddda31e2e0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:376',message:'JavaScript error caught',data:{error:e.message,filename:e.filename,lineno:e.lineno},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
});
// #endregion