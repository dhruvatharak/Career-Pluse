// Official Tamil Nadu Higher Secondary (11th & 12th) Government Group Codes & Data Architecture

export const TN_OFFICIAL_GROUPS = [
  // Science Stream - Maths Based (2500 Series)
  { code: '2501', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Statistics', 'Mathematics'], categoryId: 'cs-maths', title: 'Physics, Chemistry, Statistics, Mathematics' },
  { code: '2502', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Computer Science', 'Mathematics'], categoryId: 'cs-maths', title: 'Physics, Chemistry, Computer Science, Mathematics (CS-Maths)' },
  { code: '2503', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'], categoryId: 'bio-maths', title: 'Physics, Chemistry, Biology, Mathematics (Bio-Maths)' },
  { code: '2504', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Bio-Chemistry', 'Mathematics'], categoryId: 'cs-maths', title: 'Physics, Chemistry, Bio-Chemistry, Mathematics' },
  { code: '2505', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Communicative English', 'Mathematics'], categoryId: 'cs-maths', title: 'Physics, Chemistry, Communicative English, Mathematics' },
  { code: '2506', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Home Science'], categoryId: 'cs-maths', title: 'Physics, Chemistry, Mathematics, Home Science' },

  // Science Stream - Life Science Based (2600 Series)
  { code: '2601', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Computer Science'], categoryId: 'bio-maths', title: 'Physics, Chemistry, Biology, Computer Science (Bio-CS)' },
  { code: '2602', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Micro-Biology'], categoryId: 'pure-science', title: 'Physics, Chemistry, Biology, Micro-Biology' },
  { code: '2603', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Bio-Chemistry'], categoryId: 'pure-science', title: 'Physics, Chemistry, Biology, Bio-Chemistry' },
  { code: '2604', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'General Nursing'], categoryId: 'pure-science', title: 'Physics, Chemistry, Biology, General Nursing' },
  { code: '2605', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Nutrition & Dietetics'], categoryId: 'pure-science', title: 'Physics, Chemistry, Biology, Nutrition & Dietetics' },
  { code: '2606', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Communicative English'], categoryId: 'pure-science', title: 'Physics, Chemistry, Biology, Communicative English' },
  { code: '2607', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Biology', 'Home Science'], categoryId: 'pure-science', title: 'Physics, Chemistry, Biology, Home Science' },
  { code: '2608', stream: 'Science', subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'], categoryId: 'pure-science', title: 'Physics, Chemistry, Botany, Zoology (Pure Science)' },

  // Commerce Stream (2700 Series)
  { code: '2701', stream: 'Commerce', subjects: ['Statistics', 'Economics', 'Commerce', 'Accountancy'], categoryId: 'commerce', title: 'Statistics, Economics, Commerce, Accountancy' },
  { code: '2702', stream: 'Commerce', subjects: ['Economics', 'Commerce', 'Accountancy', 'Computer Applications'], categoryId: 'commerce', title: 'Economics, Commerce, Accountancy, Computer Applications' },
  { code: '2703', stream: 'Commerce', subjects: ['Communicative English', 'Economics', 'Commerce', 'Accountancy'], categoryId: 'commerce', title: 'Communicative English, Economics, Commerce, Accountancy' },
  { code: '2704', stream: 'Commerce', subjects: ['History', 'Economics', 'Commerce', 'Accountancy'], categoryId: 'commerce', title: 'History, Economics, Commerce, Accountancy' },
  { code: '2705', stream: 'Commerce', subjects: ['Economics', 'Political Science', 'Commerce', 'Accountancy'], categoryId: 'commerce', title: 'Economics, Political Science, Commerce, Accountancy' },
  { code: '2706', stream: 'Commerce', subjects: ['Economics', 'Commerce', 'Accountancy', 'Ethics and Indian Culture'], categoryId: 'commerce', title: 'Economics, Commerce, Accountancy, Ethics & Culture' },
  { code: '2707', stream: 'Commerce', subjects: ['Economics', 'Commerce', 'Accountancy', 'Advanced Language (Tamil)'], categoryId: 'commerce', title: 'Economics, Commerce, Accountancy, Advanced Tamil' },
  { code: '2708', stream: 'Commerce', subjects: ['Economics', 'Commerce', 'Accountancy', 'Business Mathematics and Statistics'], categoryId: 'commerce', title: 'Economics, Commerce, Accountancy, Business Maths' },

  // Arts & Humanities Stream (2800 Series)
  { code: '2801', stream: 'Humanities', subjects: ['Statistics', 'Geography', 'History', 'Economics'], categoryId: 'arts-humanities', title: 'Statistics, Geography, History, Economics' },
  { code: '2802', stream: 'Humanities', subjects: ['Geography', 'History', 'Economics', 'Computer Applications'], categoryId: 'arts-humanities', title: 'Geography, History, Economics, Computer Applications' },
  { code: '2803', stream: 'Humanities', subjects: ['Geography', 'Communicative English', 'History', 'Economics'], categoryId: 'arts-humanities', title: 'Geography, Communicative English, History, Economics' },
  { code: '2804', stream: 'Humanities', subjects: ['Geography', 'History', 'Economics', 'Political Science'], categoryId: 'arts-humanities', title: 'Geography, History, Economics, Political Science' },
  { code: '2805', stream: 'Humanities', subjects: ['Geography', 'History', 'Economics', 'Ethics and Indian Culture'], categoryId: 'arts-humanities', title: 'Geography, History, Economics, Ethics & Culture' },
  { code: '2806', stream: 'Humanities', subjects: ['Geography', 'History', 'Economics', 'Advanced Language (Tamil)'], categoryId: 'arts-humanities', title: 'Geography, History, Economics, Advanced Tamil' },

  // Vocational Stream (2900 Series)
  { code: '2921', stream: 'Vocational', subjects: ['Mathematics', 'Basic Mechanical Engineering (Theory)', 'Computer Technology', 'Mechanical Engg (Practical)'], categoryId: 'cs-maths', title: 'Basic Mechanical Engineering Vocational' },
  { code: '2922', stream: 'Vocational', subjects: ['Mathematics', 'Basic Electrical Engineering (Theory)', 'Computer Technology', 'Electrical Engg (Practical)'], categoryId: 'cs-maths', title: 'Basic Electrical Engineering Vocational' },
  { code: '2923', stream: 'Vocational', subjects: ['Mathematics', 'Basic Electronics Engineering (Theory)', 'Computer Technology', 'Electronics Engg (Practical)'], categoryId: 'cs-maths', title: 'Basic Electronics Engineering Vocational' },
  { code: '2924', stream: 'Vocational', subjects: ['Mathematics', 'Basic Civil Engineering (Theory)', 'Computer Technology', 'Civil Engg (Practical)'], categoryId: 'cs-maths', title: 'Basic Civil Engineering Vocational' },
  { code: '2925', stream: 'Vocational', subjects: ['Mathematics', 'Basic Automobile Engineering (Theory)', 'Computer Technology', 'Automobile Engg (Practical)'], categoryId: 'cs-maths', title: 'Basic Automobile Engineering Vocational' },
  { code: '2926', stream: 'Vocational', subjects: ['Mathematics', 'Textile Technology (Theory)', 'Computer Technology', 'Textile Tech (Practical)'], categoryId: 'cs-maths', title: 'Textile Technology Vocational' },
  { code: '2931', stream: 'Vocational', subjects: ['Biology', 'Nursing (Theory)', 'Computer Technology', 'Nursing (Practical)'], categoryId: 'pure-science', title: 'Nursing Vocational Stream' },
  { code: '2941', stream: 'Vocational', subjects: ['Home Science', 'Textile & Dress Designing (Theory)', 'Computer Technology', 'Dress Designing (Practical)'], categoryId: 'arts-humanities', title: 'Textile & Dress Designing Vocational' },
  { code: '2942', stream: 'Vocational', subjects: ['Home Science', 'Food Service Management (Theory)', 'Computer Technology', 'Food Service (Practical)'], categoryId: 'pure-science', title: 'Food Service Management Vocational' },
  { code: '2951', stream: 'Vocational', subjects: ['Biology', 'Agricultural Science (Theory)', 'Computer Technology', 'Agri Science (Practical)'], categoryId: 'pure-science', title: 'Agricultural Science Vocational Stream' },
  { code: '2961', stream: 'Vocational', subjects: ['Commerce', 'Accountancy (Theory)', 'Office Management & Secretaryship', 'Computer Applications (Practical)'], categoryId: 'commerce', title: 'Office Management & Secretaryship' },
  { code: '2962', stream: 'Vocational', subjects: ['Commerce', 'Accountancy (Theory)', 'Computer Applications', 'Auditing (Practical)'], categoryId: 'commerce', title: 'Commerce & Auditing Vocational' }
];

export const GROUPS = [
  {
    id: 'cs-maths',
    name: 'Computer Science + Mathematics',
    nameTa: 'கணினி அறிவியல் + கணிதம்',
    shortCode: 'CS + Maths (Code 2502)',
    officialCodes: ['2502', '2501', '2504', '2505', '2506', '2921', '2922', '2923', '2924', '2925'],
    badge: 'High Tech & Innovation',
    badgeTa: 'உயர் தொழில்நுட்பம்',
    color: 'from-blue-500 to-indigo-600',
    accentColor: '#2F4157',
    glowColor: 'rgba(47, 65, 87, 0.4)',
    icon: 'Cpu',
    description: 'Master software engineering, AI, robotics, algorithms, and mathematics for the tech-driven future.',
    descriptionTa: 'மென்பொருள் பொறியியல், செயற்கை நுண்ணறிவு, ரோபாட்டிக்ஸ் மற்றும் கணிதப் பாடங்களில் தேர்ச்சி பெறுங்கள்.',
    coreSubjects: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
    coreSubjectsTa: ['கணினி அறிவியல்', 'கணிதம்', 'இயற்பியல்', 'வேதியியல்'],
    futureScope: 'Extremely High (AI, Quantum Computing, Software, Cybersecurity)',
    avgStartingSalary: '₹6.5L - ₹24L / year',
    topCoursesCount: 12,
    popularCareers: ['Software Engineer', 'Data Scientist', 'AI/ML Specialist', 'Cloud Architect'],
    
    // Structured Verification Metadata
    officialSource: 'Directorate of Government Examinations (DGE) Tamil Nadu Annexure I',
    lastVerified: 'June 2026',
    ruleVersion: '2026–2027 Academic Session',
    
    // What if I change my direction? Options
    directionChangeOptions: [
      {
        targetInterest: 'Business & Management',
        targetInterestTa: 'வணிகம் மற்றும் மேலாண்மை',
        possibleCourses: ['BBA', 'B.Com (Professional)', 'IPM at IIMs'],
        reason: 'Mathematics requirement is fulfilled, opening doors for top quantitative finance & management programs.'
      },
      {
        targetInterest: 'Law & Governance',
        targetInterestTa: 'சட்டம் மற்றும் ஆளுமை',
        possibleCourses: ['Integrated B.A. LL.B / B.B.A. LL.B (5 Years)'],
        reason: 'Open to all 12th pass streams; analytical math foundation provides a major advantage in CLAT.'
      },
      {
        targetInterest: 'Design & Digital Media',
        targetInterestTa: 'வடிவமைப்பு மற்றும் டிஜிட்டல் மீடியா',
        possibleCourses: ['B.Des (UI/UX Design)', 'B.Sc Digital Media'],
        reason: 'Combines technical coding capabilities with digital creative aesthetics.'
      }
    ],

    // Impact View Counts
    impactCounts: {
      entranceRoutes: 6,
      courseCategories: 12,
      higherStudyPaths: 8,
      careerDomains: 15
    }
  },
  {
    id: 'bio-maths',
    name: 'Bio-Mathematics (PCBM)',
    nameTa: 'உயிரியல் - கணிதம் (PCBM)',
    shortCode: 'Bio-Maths (Code 2503)',
    officialCodes: ['2503', '2601'],
    badge: 'Medical & Life Sciences',
    badgeTa: 'மருத்துவம் & உயிர் அறிவியல்',
    color: 'from-emerald-500 to-teal-600',
    accentColor: '#577C8E',
    glowColor: 'rgba(87, 124, 142, 0.4)',
    icon: 'Dna',
    description: 'The ultimate versatile group. Keeps doors open for both Medicine, Biotechnology & Engineering pathways.',
    descriptionTa: 'மருத்துவம் மற்றும் பொறியியல் ஆகிய இரு பாதைகளுக்கும் கதவுகளைத் திறக்கும் மிகவும் பல்துறைப் பிரிவு.',
    coreSubjects: ['Biology', 'Mathematics', 'Physics', 'Chemistry'],
    coreSubjectsTa: ['உயிரியல்', 'கணிதம்', 'இயற்பியல்', 'வேதியியல்'],
    futureScope: 'Very High (Genomics, Bioinformatics, Healthcare AI, Biomedicine)',
    avgStartingSalary: '₹5L - ₹18L / year',
    topCoursesCount: 15,
    popularCareers: ['Doctor (MBBS)', 'Bio-informatician', 'Biotech Scientist', 'Biomedical Engineer'],

    officialSource: 'TN Medical Selection Committee & DoTE TNEA Guidelines',
    lastVerified: 'June 2026',
    ruleVersion: '2026–2027 Academic Session',

    directionChangeOptions: [
      {
        targetInterest: 'Technology & Computing',
        targetInterestTa: 'தொழில்நுட்பம் & கணினி',
        possibleCourses: ['B.E. Computer Science', 'B.Tech AI & Data Science'],
        reason: 'Contains 12th Mathematics, making you 100% eligible for TNEA engineering counselling.'
      },
      {
        targetInterest: 'Agricultural & Veterinary Sciences',
        targetInterestTa: 'வேளாண்மை மற்றும் கால்நடை அறிவியல்',
        possibleCourses: ['B.Sc Agriculture (TNAU)', 'B.V.Sc & A.H (TANUVAS)'],
        reason: 'Physics, Chemistry and Biology subjects satisfy TNAU & TANUVAS admission criteria.'
      }
    ],

    impactCounts: {
      entranceRoutes: 8,
      courseCategories: 18,
      higherStudyPaths: 10,
      careerDomains: 20
    }
  },
  {
    id: 'commerce',
    name: 'Commerce & Business Studies',
    nameTa: 'வணிகவியல் & வணிகப் படிப்புகள்',
    shortCode: 'Commerce (Code 2708 / 2702)',
    officialCodes: ['2701', '2702', '2703', '2704', '2705', '2706', '2707', '2708', '2961', '2962'],
    badge: 'Finance & Entrepreneurship',
    badgeTa: 'நிதி & தொழில் முனைவோர்',
    color: 'from-amber-500 to-orange-600',
    accentColor: '#2F4157',
    glowColor: 'rgba(47, 65, 87, 0.4)',
    icon: 'TrendingUp',
    description: 'Master financial markets, corporate strategy, accounting, economics, and business management.',
    descriptionTa: 'நிதிச் சந்தைகள், கார்ப்பரேட் உத்திகள், கணக்கியல் மற்றும் வணிக நிர்வாகத்தில் தேர்ச்சி பெறுங்கள்.',
    coreSubjects: ['Accountancy', 'Business Studies / Commerce', 'Economics', 'Business Maths / CS'],
    coreSubjectsTa: ['கணக்கியல்', 'வணிகவியல்', 'பொருளாதாரம்', 'வணிக கணிதம் / கணினி பயன்பாடுகள்'],
    futureScope: 'High (Fintech, Investment Banking, Corporate Law, Consulting)',
    avgStartingSalary: '₹4.5L - ₹16L / year',
    topCoursesCount: 10,
    popularCareers: ['Chartered Accountant (CA)', 'Investment Banker', 'Financial Analyst', 'Business Strategist'],

    officialSource: 'ICAI Charter & TNCASA State Single Window System',
    lastVerified: 'June 2026',
    ruleVersion: '2026–2027 Academic Session',

    directionChangeOptions: [
      {
        targetInterest: 'Technology & Computing',
        targetInterestTa: 'தொழில்நுட்பம் & கணினி',
        possibleCourses: ['BCA (Bachelor of Computer Applications)', 'B.Sc Data Analytics (Commerce Track)'],
        reason: 'Code 2702 includes Computer Applications, satisfying eligibility for BCA in Arts & Science colleges.'
      },
      {
        targetInterest: 'Corporate Law',
        targetInterestTa: 'கார்ப்பரேட் சட்டம்',
        possibleCourses: ['B.Com LL.B (Hons)', 'B.B.A. LL.B (Hons)'],
        reason: 'Ideal combination of corporate accounting rules with legal jurisprudence.'
      }
    ],

    impactCounts: {
      entranceRoutes: 5,
      courseCategories: 10,
      higherStudyPaths: 7,
      careerDomains: 14
    }
  },
  {
    id: 'arts-humanities',
    name: 'Arts & Humanities',
    nameTa: 'கலை & மனிதவியல்',
    shortCode: 'Arts / Humanities (Code 2804)',
    officialCodes: ['2801', '2802', '2803', '2804', '2805', '2806', '2941'],
    badge: 'Public Policy, Law & Creative',
    badgeTa: 'பொதுக் கொள்கை & சட்டம்',
    color: 'from-purple-500 to-pink-600',
    accentColor: '#577C8E',
    glowColor: 'rgba(87, 124, 142, 0.4)',
    icon: 'Palette',
    description: 'Build analytical, critical thinking, administrative, and creative skills for governance, law, and media.',
    descriptionTa: 'ஆளுமை, சட்டம் மற்றும் ஊடகத் துறைகளுக்கான பகுப்பாய்வு மற்றும் படைப்பாற்றல் திறன்களை உருவாக்குங்கள்.',
    coreSubjects: ['History', 'Political Science', 'Psychology / Geography', 'Economics / Literature'],
    coreSubjectsTa: ['வரலாறு', 'அரசியல் அறிவியல்', 'புவியியல் / உளவியல்', 'பொருளாதாரம்'],
    futureScope: 'High (Civil Services, Corporate Law, Media, Public Relations)',
    avgStartingSalary: '₹4L - ₹15L / year',
    topCoursesCount: 14,
    popularCareers: ['Civil Servant (IAS/IPS)', 'Corporate Lawyer', 'Clinical Psychologist', 'Journalist'],

    officialSource: 'UPSC CSE Syllabus & TNDALU Law Admissions',
    lastVerified: 'June 2026',
    ruleVersion: '2026–2027 Academic Session',

    directionChangeOptions: [
      {
        targetInterest: 'Media & Digital Communication',
        targetInterestTa: 'ஊடகம் & டிஜிட்டல் தொடர்பு',
        possibleCourses: ['B.A. Visual Communication', 'B.A. Journalism & Digital Media'],
        reason: 'Strong foundation in social dynamics, writing, and contemporary global political affairs.'
      },
      {
        targetInterest: 'Management & HR',
        targetInterestTa: 'நிர்வாகம் & மனித வளம்',
        possibleCourses: ['BBA (Human Resource Management)', 'B.A. Public Administration'],
        reason: 'Human behavior & psychology background offers superior corporate management fit.'
      }
    ],

    impactCounts: {
      entranceRoutes: 6,
      courseCategories: 14,
      higherStudyPaths: 9,
      careerDomains: 16
    }
  },
  {
    id: 'pure-science',
    name: 'Pure Science / Agricultural Stream',
    nameTa: 'தூய அறிவியல் / வேளாண்மைத் துறை',
    shortCode: 'Pure Science (Code 2608 / 2951)',
    officialCodes: ['2602', '2603', '2604', '2605', '2606', '2607', '2608', '2931', '2942', '2951'],
    badge: 'Research & Applied Tech',
    badgeTa: 'ஆராய்ச்சி & பயன்பாட்டு தொழில்நுட்பம்',
    color: 'from-cyan-500 to-blue-600',
    accentColor: '#2F4157',
    glowColor: 'rgba(47, 65, 87, 0.4)',
    icon: 'Microscope',
    description: 'Deep focus on pure sciences, agricultural technology (TNAU), veterinary studies (TANUVAS), and specialized lab research.',
    descriptionTa: 'தூய அறிவியல், வேளாண் தொழில் நுட்பம் (TNAU), மற்றும் கால்நடை மருத்துவம் (TANUVAS) பற்றிய ஆழமான கவனம்.',
    coreSubjects: ['Physics', 'Chemistry', 'Botany & Zoology / Micro-Bio', 'Agriculture / Nursing'],
    coreSubjectsTa: ['இயற்பியல்', 'வேதியியல்', 'தாவரவியல் & விலங்கியல்', 'வேளாண் அறிவியல்'],
    futureScope: 'High (Agri-tech, Research Labs, Renewable Energy, Food Tech)',
    avgStartingSalary: '₹4L - ₹12L / year',
    topCoursesCount: 11,
    popularCareers: ['Agricultural Officer', 'Research Scientist', 'Food Technologist', 'Veterinary Specialist'],

    officialSource: 'TNAU Single Window System & TANUVAS Guidelines',
    lastVerified: 'June 2026',
    ruleVersion: '2026–2027 Academic Session',

    directionChangeOptions: [
      {
        targetInterest: 'Environmental Science & Sustainability',
        targetInterestTa: 'சுற்றுச்சூழல் அறிவியல்',
        possibleCourses: ['B.Sc Environmental Science', 'B.Tech Energy & Environmental Engg'],
        reason: 'Deep grounding in biological ecological systems and organic chemistry.'
      }
    ],

    impactCounts: {
      entranceRoutes: 5,
      courseCategories: 11,
      higherStudyPaths: 8,
      careerDomains: 12
    }
  }
];

// Visual Pathway Tree Data (Branching Node Structure)
export const VISUAL_BRANCHING_TREE = {
  'cs-maths': {
    root: '10th Standard Board Exam Pass',
    groupNode: '11th Group Code 2502 (CS + Mathematics)',
    subjectsNode: 'Physics + Chemistry + Computer Science + Mathematics',
    branches: [
      {
        routeName: 'Engineering & Technology Route',
        admission: 'TNEA Single Window (TN Cutoff out of 200) / JEE Main',
        ugCourses: [
          { name: 'B.E. Computer Science & Engineering (CSE)', tnCutoff: '190.5 - 199.5', why: 'Requires 12th Maths + Physics + Chemistry' },
          { name: 'B.Tech AI & Data Science (AI&DS)', tnCutoff: '188.0 - 198.5', why: 'Requires 12th Maths + Physics + Chemistry' },
          { name: 'B.Tech Information Technology (IT)', tnCutoff: '185.0 - 197.0', why: 'Requires 12th Maths + Physics + Chemistry' },
          { name: 'B.E. Cyber Security / Cloud Tech', tnCutoff: '182.0 - 195.0', why: 'Requires 12th Maths + Physics + Chemistry' },
          { name: 'B.E. Electronics & Communication (ECE)', tnCutoff: '186.0 - 198.0', why: 'Requires 12th Maths + Physics + Chemistry' }
        ],
        collegeCounselling: 'Anna University Campus (CEG, MIT, ACTech), Govt & Aided Colleges',
        higherStudies: 'M.Tech / GATE Exam / MS in USA/Europe / Ph.D in AI',
        careers: ['AI Engineer', 'Software Architect', 'Data Scientist', 'Cybersecurity Expert']
      },
      {
        routeName: 'Pure Computing & Applied Sciences Route',
        admission: 'TNCASA / College Merit List based on 12th Marks',
        ugCourses: [
          { name: 'B.Sc. Computer Science', tnCutoff: '12th Merit', why: 'Computer Science background in 12th' },
          { name: 'BCA (Bachelor of Computer Applications)', tnCutoff: '12th Merit', why: 'Mathematics / CS subjects passed' },
          { name: 'B.Sc. Artificial Intelligence & Data Science', tnCutoff: '12th Merit', why: 'Maths background mandatory' }
        ],
        collegeCounselling: 'Loyola College, MCC, PSG CAS Coimbatore, St. Joseph’s',
        higherStudies: 'MCA / M.Sc Computer Science / Data Science Certifications',
        careers: ['Full Stack Developer', 'Database Administrator', 'Web Systems Engineer']
      }
    ]
  },
  'bio-maths': {
    root: '10th Standard Board Exam Pass',
    groupNode: '11th Group Code 2503 (Bio-Mathematics)',
    subjectsNode: 'Physics + Chemistry + Biology + Mathematics',
    branches: [
      {
        routeName: 'Medical & Healthcare Route',
        admission: 'NEET-UG Score + TN DME State Single Window Counselling',
        ugCourses: [
          { name: 'MBBS (Bachelor of Medicine & Surgery)', tnCutoff: 'NEET Marks (600+ for Govt Colleges)', why: 'Physics, Chemistry & Biology mandatory' },
          { name: 'BDS (Dental Surgery)', tnCutoff: 'NEET Marks (520+)', why: 'Physics, Chemistry & Biology mandatory' },
          { name: 'BSMS / BAMS / BHMS (AYUSH Medicine)', tnCutoff: 'NEET Marks / State Merit', why: 'Biology prerequisite fulfilled' }
        ],
        collegeCounselling: 'Madras Medical College (MMC), Stanley, Kilpauk Medical College',
        higherStudies: 'NEET-PG / MD / MS Specializations / Clinical Doctorates',
        careers: ['Specialist Physician', 'Surgeon', 'Clinical Director', 'Medical Officer']
      },
      {
        routeName: 'Biological Engineering & Biotech Route',
        admission: 'TNEA Single Window / JEE Main',
        ugCourses: [
          { name: 'B.E. Biomedical Engineering', tnCutoff: '180.0 - 195.0', why: 'Maths + Biology combination allows med-tech entry' },
          { name: 'B.Tech Biotechnology', tnCutoff: '182.0 - 196.0', why: 'Maths & Physics prerequisites satisfied' },
          { name: 'B.Tech Agricultural Engineering', tnCutoff: '175.0 - 192.0', why: 'Allowed via TNEA / TNAU' }
        ],
        collegeCounselling: 'Anna University ACTech Campus, PSG Tech, SSN',
        higherStudies: 'M.Tech Bio-Engineering / Ph.D Genetics',
        careers: ['Biomedical Engineer', 'Genomic Analyst', 'Biotech Scientist']
      }
    ]
  },
  'commerce': {
    root: '10th Standard Board Exam Pass',
    groupNode: '11th Group Code 2708 / 2702 (Commerce Stream)',
    subjectsNode: 'Accountancy + Commerce + Economics + Business Maths / CS',
    branches: [
      {
        routeName: 'Professional Financial & Audit Route',
        admission: 'ICAI Registration + CA Foundation / CMA Exams',
        ugCourses: [
          { name: 'Chartered Accountancy (CA)', tnCutoff: 'Pass 12th + CA Foundation', why: 'Strong Accountancy & Commerce foundation' },
          { name: 'B.Com (Professional Accounting / Corporate Secretaryship)', tnCutoff: '12th Cutoff Marks (95%+)', why: 'Requires 12th Accountancy' },
          { name: 'Cost & Management Accountant (CMA)', tnCutoff: 'Pass 12th + CMA Foundation', why: 'Accountancy & Economics core' }
        ],
        collegeCounselling: 'ICAI Direct / Loyola, MCC, Stella Maris, PSG CAS',
        higherStudies: 'CA Final / CFA (USA) / ACCA (UK) / M.Com',
        careers: ['Chartered Accountant', 'Corporate Auditor', 'Tax Consultant']
      },
      {
        routeName: 'Management & Corporate Strategy Route',
        admission: 'IPMAT (IIM Indore/Rohtak) / CUET / Merit',
        ugCourses: [
          { name: 'IPM (5-Year Integrated MBA at IIMs)', tnCutoff: 'IPMAT Entrance Score', why: 'Business Maths / Statistics background' },
          { name: 'BBA (Bachelor of Business Administration)', tnCutoff: '12th Merit', why: 'Business Studies core' }
        ],
        collegeCounselling: 'IIM Indore / IIM Rohtak / Top TN Management Institutes',
        higherStudies: 'MBA via CAT/XAT / Global MS Finance',
        careers: ['Investment Banker', 'Corporate Strategist', 'Financial Analyst']
      }
    ]
  },
  'arts-humanities': {
    root: '10th Standard Board Exam Pass',
    groupNode: '11th Group Code 2804 (Arts & Humanities)',
    subjectsNode: 'History + Political Science + Geography + Economics',
    branches: [
      {
        routeName: 'Legal & Constitutional Jurisprudence Route',
        admission: 'CLAT Entrance / TNDALU State Law Counselling',
        ugCourses: [
          { name: 'Integrated B.A. LL.B (Hons) - 5 Years', tnCutoff: 'CLAT Score / TNDALU 12th Cutoff', why: 'Political Science & History core subjects' },
          { name: 'B.A. Criminology & Police Administration', tnCutoff: '12th Merit', why: 'Humanities background preferred' }
        ],
        collegeCounselling: 'Tamil Nadu Dr. Ambedkar Law University (TNDALU) / NLUs',
        higherStudies: 'LL.M / Master of Laws / Judiciary Exam (State Judicial Service)',
        careers: ['Corporate Advocate', 'High Court / Supreme Court Lawyer', 'Judicial Magistrate']
      },
      {
        routeName: 'Governance & Public Administration Route',
        admission: 'Direct College Admissions + UPSC / TNPSC Exam Focus',
        ugCourses: [
          { name: 'B.A. Political Science & Governance', tnCutoff: '12th Merit Marks', why: '70% overlap with UPSC Civil Services Prelims syllabus' },
          { name: 'B.A. Economics', tnCutoff: '12th Merit Marks', why: 'Economics subject passed' }
        ],
        collegeCounselling: 'Presidency College Chennai, Madras Christian College, Loyola',
        higherStudies: 'UPSC CSE (IAS/IPS/IFS) / TNPSC Group 1 / M.A. Public Policy',
        careers: ['District Collector (IAS)', 'Police Officer (IPS)', 'Diplomat (IFS)']
      }
    ]
  },
  'pure-science': {
    root: '10th Standard Board Exam Pass',
    groupNode: '11th Group Code 2608 / 2951 (Pure Science & Agriculture)',
    subjectsNode: 'Physics + Chemistry + Botany + Zoology / Agri Science',
    branches: [
      {
        routeName: 'Agricultural Science & Technology Route',
        admission: 'TNAU Online Single Window System (12th PCB Cutoff)',
        ugCourses: [
          { name: 'B.Sc (Hons) Agriculture', tnCutoff: '185.0 - 198.0', why: 'Physics + Chemistry + Botany + Zoology required' },
          { name: 'B.Sc (Hons) Horticulture', tnCutoff: '180.0 - 195.0', why: 'Botany & Chemistry background' },
          { name: 'B.Tech Agricultural Information Technology', tnCutoff: '178.0 - 192.0', why: 'Science stream eligibility' }
        ],
        collegeCounselling: 'Tamil Nadu Agricultural University (TNAU Main Campus Coimbatore & Constituent Colleges)',
        higherStudies: 'M.Sc Agriculture / ICAR JRF Fellowship / Ph.D',
        careers: ['Agricultural Officer (ADO)', 'Soil Scientist', 'Agritech Product Specialist']
      },
      {
        routeName: 'Veterinary Medicine & Animal Sciences Route',
        admission: 'TANUVAS State Single Window Counselling',
        ugCourses: [
          { name: 'B.V.Sc & A.H (Veterinary Science & Animal Husbandry)', tnCutoff: '192.0 - 199.0', why: 'Biology / Zoology marks out of 200' },
          { name: 'B.Tech Food Technology', tnCutoff: '180.0 - 194.0', why: 'Chemistry & Physics core' }
        ],
        collegeCounselling: 'Madras Veterinary College (MVC Chennai), TANUVAS Namakkal',
        higherStudies: 'M.V.Sc Specialization / Veterinary Clinical Doctorate',
        careers: ['Veterinary Surgeon', 'Livestock Health Specialist', 'Food Safety Officer']
      }
    ]
  }
};

// Complete Step-by-Step Interactive Roadmaps for All Groups
export const ROADMAP_DATA = {
  'cs-maths': {
    title: 'Computer Science + Mathematics Roadmap (Code 2502)',
    description: 'Complete educational and professional pathway from 10th standard to High-Tech Leadership',
    stages: [
      {
        step: 1,
        id: 'cs-stage-1',
        name: '10th Standard Foundation',
        icon: 'GraduationCap',
        tagline: 'Build logical reasoning, algebra, basic coding concepts & science fundamentals',
        details: 'Strong focus on Mathematics, Science, and Analytical Aptitude in 10th board exams (SSLC / CBSE).'
      },
      {
        step: 2,
        id: 'cs-stage-2',
        name: '11th & 12th CS + Maths Group (Code 2502)',
        icon: 'BookOpen',
        tagline: 'Physics + Chemistry + Computer Science + Mathematics',
        details: 'TN Govt Code 2502: Master Calculus, Linear Algebra, Mechanics, Electricity, C++/Python fundamentals, and Logical Design.'
      },
      {
        step: 3,
        id: 'cs-stage-3',
        name: 'Entrance Exams & Counselling',
        icon: 'FileCheck',
        tagline: 'JEE Main & Advanced, TNEA (Tamil Nadu), CUET, BITSAT, VITEEE',
        details: 'Entrance & Single-Window Counselling Routes:',
        routes: [
          { name: 'JEE Main / Advanced', target: 'IITs, NITs, IIITs, CFTIs' },
          { name: 'TNEA (Tamil Nadu Code 2502)', target: 'Anna University Campus Colleges (CEG, MIT), Govt & Aided Colleges (Cutoff based on 12th Maths+Physics+Chem)' },
          { name: 'BITSAT / VITEEE / SRMJEEE', target: 'Top Private University Engineering Streams' },
          { name: 'CUET (UG)', target: 'Central Universities (DU, BHU) B.Sc CS / Data Science' }
        ]
      },
      {
        step: 4,
        id: 'cs-stage-4',
        name: 'Undergraduate Degrees (3-4 Yrs)',
        icon: 'Award',
        tagline: 'B.E / B.Tech / B.Sc / BCA Programs',
        options: [
          {
            name: 'B.E. Computer Science & Engineering (CSE)',
            duration: '4 Years',
            focus: 'Core Software Systems, Operating Systems, Algorithms, Full Stack',
            tnRoute: 'TNEA Counselling aggregate cutoff typically 185-199.5/200'
          },
          {
            name: 'B.Tech AI & Data Science (AI&DS)',
            duration: '4 Years',
            focus: 'Machine Learning, Neural Networks, Deep Learning, Big Data Analytics',
            tnRoute: 'Very high demand across Anna University affiliated top colleges'
          },
          {
            name: 'B.Tech Information Technology (IT) / Cyber Security',
            duration: '4 Years',
            focus: 'Cloud Computing, Network Security, Ethical Hacking, Web Infra',
            tnRoute: 'Direct entry via TNEA Cutoff Marks'
          },
          {
            name: 'B.Sc. Computer Science / Data Science / BCA',
            duration: '3 Years',
            focus: 'Programming, Database Systems, Web Tech, Mobile App Dev',
            tnRoute: 'Direct 12th Board Merit Admission in Arts & Science Colleges'
          }
        ]
      },
      {
        step: 5,
        id: 'cs-stage-5',
        name: 'Higher Studies & Certifications',
        icon: 'Layers',
        tagline: 'GATE, GRE, MS Abroad, M.Tech, AWS/Google Certifications',
        details: 'Enhance your career velocity with specialized post-graduation or global industry standard credentials.',
        certifications: ['AWS Certified Solutions Architect', 'Google Cloud ML Engineer', 'Certified Information Systems Auditor (CISA)']
      },
      {
        step: 6,
        id: 'cs-stage-6',
        name: 'Career Opportunities & Roles',
        icon: 'Briefcase',
        tagline: 'High Impact Roles in Tech, AI, Cloud, and Global Enterprise',
        roles: [
          { title: 'AI / ML Engineer', pay: '₹8L - ₹30L+', growth: '35% CAGR', desc: 'Build generative AI models, recommendation systems, and autonomous algorithms.' },
          { title: 'Full Stack Software Developer', pay: '₹6L - ₹22L', growth: '24% CAGR', desc: 'Architect scalable web applications, mobile apps, and enterprise microservices.' },
          { title: 'Data Scientist & Analytics Lead', pay: '₹7.5L - ₹25L', growth: '30% CAGR', desc: 'Extract predictive insights from massive enterprise datasets.' },
          { title: 'Cyber Security Specialist', pay: '₹6.5L - ₹20L', growth: '28% CAGR', desc: 'Defend organizational cloud infrastructures and secure networks against modern cyber threats.' }
        ]
      }
    ]
  },
  'bio-maths': {
    title: 'Bio-Mathematics Pathway (Code 2503)',
    description: 'Dual-power stream opening doors for Medical, Biological Engineering & Pure Life Sciences',
    stages: [
      {
        step: 1,
        id: 'bio-stage-1',
        name: '10th Standard Foundation',
        icon: 'GraduationCap',
        tagline: 'Deep curiosity in living organisms, human physiology, chemistry & geometry',
        details: 'Build strong fundamentals in Biology concepts (Cell Biology, Genetics) along with 10th Mathematics.'
      },
      {
        step: 2,
        id: 'bio-stage-2',
        name: '11th & 12th Bio-Maths Group (Code 2503)',
        icon: 'BookOpen',
        tagline: 'Physics + Chemistry + Biology + Mathematics',
        details: 'TN Govt Code 2503: The ultimate versatile group. Allows student to attempt NEET for Medical as well as TNEA engineering counselling routes.'
      },
      {
        step: 3,
        id: 'bio-stage-3',
        name: 'Entrance Exams & Counselling Routes',
        icon: 'FileCheck',
        tagline: 'NEET-UG, TNEA, TN Medical Counselling, TANUVAS, TNAU, ICAR',
        details: 'Specialized State & National Selection Routes:',
        routes: [
          { name: 'NEET-UG', target: 'MBBS, BDS, AYUSH (BAMS, BHMS, BSMS) Govt & Private Colleges' },
          { name: 'TN DME Medical Counselling', target: 'Tamil Nadu Single-Window MBBS/BDS Seats (Govt Quota)' },
          { name: 'TNEA Engineering Route', target: 'B.E Biomedical, Bio-Tech, Food Tech engineering admissions' },
          { name: 'TANUVAS / TNAU', target: 'B.V.Sc (Veterinary Science) & B.Sc Agriculture in Tamil Nadu' }
        ]
      },
      {
        step: 4,
        id: 'bio-stage-4',
        name: 'Undergraduate Courses (4-5.5 Yrs)',
        icon: 'Award',
        tagline: 'Medical, Dental, Allied Health & Biotech Engineering',
        options: [
          {
            name: 'MBBS (Bachelor of Medicine & Surgery)',
            duration: '5.5 Years (Inc. 1 Yr Internship)',
            focus: 'Clinical diagnosis, human anatomy, pharmacology, surgery fundamentals',
            tnRoute: 'Selection exclusively through NEET-UG Score via TN Medical Selection Committee'
          },
          {
            name: 'B.Tech / B.E. Biomedical Engineering / Biotechnology',
            duration: '4 Years',
            focus: 'Bio-instrumentation, artificial organs, genetic engineering, drug design',
            tnRoute: 'Admissions via TNEA aggregate cutoff'
          },
          {
            name: 'B.Pharm / B.Sc Nursing / BPT (Physiotherapy)',
            duration: '4 Years',
            focus: 'Pharmaceutical formulation, patient care, rehabilitation science',
            tnRoute: 'TN Paramedical Selection Committee Single Window Counselling'
          },
          {
            name: 'B.Sc. Bio-Chemistry / Microbiology / Bio-informatics',
            duration: '3 Years',
            focus: 'Molecular biology, cellular research, genomic data analytics',
            tnRoute: 'Merit-based admission in top Arts & Science institutions'
          }
        ]
      },
      {
        step: 5,
        id: 'bio-stage-5',
        name: 'Higher Studies & Specializations',
        icon: 'Layers',
        tagline: 'MD / MS, NEET-PG, M.Tech Biotech, Ph.D. Cancer Research',
        details: 'Medical specialization through NEET-PG / INI-CET, or research master/doctorate in top global institutes.'
      },
      {
        step: 6,
        id: 'bio-stage-6',
        name: 'Career Opportunities & Roles',
        icon: 'Briefcase',
        tagline: 'Doctors, Clinical Researchers, Healthcare Tech Innovators',
        roles: [
          { title: 'Specialist Physician / Surgeon (MD/MS)', pay: '₹10L - ₹35L+', growth: 'Very High', desc: 'Diagnose patients, perform surgeries, manage clinical healthcare facilities.' },
          { title: 'Biotechnology Research Scientist', pay: '₹6L - ₹20L', growth: '26% CAGR', desc: 'Develop biopharmaceuticals, vaccine candidates, and gene editing therapies.' },
          { title: 'Bioinformatician', pay: '₹7L - ₹22L', growth: '32% CAGR', desc: 'Apply mathematical algorithms to decode DNA sequencing & clinical trial data.' },
          { title: 'Biomedical Product Specialist', pay: '₹5.5L - ₹16L', growth: '20% CAGR', desc: 'Design medical diagnostic devices, robotic surgery tools, and MRI sensors.' }
        ]
      }
    ]
  },
  'commerce': {
    title: 'Commerce & Financial Leadership Pathway (Code 2708)',
    description: 'Roadmap from 10th to Finance, Corporate Governance, Investment Banking & Accounting Excellence',
    stages: [
      {
        step: 1,
        id: 'comm-stage-1',
        name: '10th Standard Foundation',
        icon: 'GraduationCap',
        tagline: 'Interest in business, mathematics, statistics, market trends & logic',
        details: 'Develop quick calculation skills, logical aptitude, and interest in commerce and economics.'
      },
      {
        step: 2,
        id: 'comm-stage-2',
        name: '11th & 12th Commerce Group (Code 2708 / 2702)',
        icon: 'BookOpen',
        tagline: 'Accountancy + Commerce + Economics + Business Maths / CS',
        details: 'TN Govt Codes 2708 / 2702: Master balance sheets, trial balance, economics, financial markets, and business laws.'
      },
      {
        step: 3,
        id: 'comm-stage-3',
        name: 'Entrance Exams & Professional Exams',
        icon: 'FileCheck',
        tagline: 'CA Foundation, CMA Foundation, CSEET, IPMAT, CUET (UG)',
        details: 'Premier Entrance & Professional Pathways:',
        routes: [
          { name: 'CA Foundation (ICAI)', target: 'Chartered Accountancy 3-Level Professional Certification' },
          { name: 'IPMAT (IIM Indore/Rohtak)', target: '5-Year Integrated Program in Management (IPM)' },
          { name: 'CUET (UG)', target: 'B.Com (Hons) in Top Central Universities like SRCC, Delhi University' },
          { name: 'TNCASA Single Window', target: 'Government & Aided Arts & Science B.Com / BBA Seats in TN' }
        ]
      },
      {
        step: 4,
        id: 'comm-stage-4',
        name: 'Undergraduate Degrees & Professional Credentials',
        icon: 'Award',
        tagline: 'B.Com / BBA / CA / CMA / CS Courses',
        options: [
          {
            name: 'B.Com (Accounting & Finance / Professional Accounting)',
            duration: '3 Years',
            focus: 'Financial accounting, corporate audit, direct/indirect taxation, cost management',
            tnRoute: 'High demand in Loyola, MCC, Stella Maris, PSG College of Arts & Science'
          },
          {
            name: 'Chartered Accountancy (CA - ICAI)',
            duration: '4-5 Years Concurrent',
            focus: 'Statutory audit, taxation law, corporate finance, forensic accounting',
            tnRoute: 'Direct exam registration post 12th Commerce'
          },
          {
            name: 'BBA (Bachelor of Business Administration) / IPM',
            duration: '3-5 Years',
            focus: 'Corporate leadership, marketing strategy, human resources, venture capital',
            tnRoute: 'Admission via entrance exams or 12th merit'
          }
        ]
      },
      {
        step: 5,
        id: 'comm-stage-5',
        name: 'Higher Studies & Certifications',
        icon: 'Layers',
        tagline: 'MBA (CAT/XAT), CFA (USA), ACCA (UK), M.Com',
        details: 'Elevate into global financial markets with Chartered Financial Analyst (CFA) or MBA from IIMs.'
      },
      {
        step: 6,
        id: 'comm-stage-6',
        name: 'Career Opportunities & Roles',
        icon: 'Briefcase',
        tagline: 'Financial Strategists, CA Partners, Investment Bankers & CFOs',
        roles: [
          { title: 'Chartered Accountant (CA)', pay: '₹9L - ₹28L+', growth: 'High', desc: 'Conduct statutory audits, optimize tax strategies, lead corporate finance decisions.' },
          { title: 'Investment Banker / Risk Analyst', pay: '₹10L - ₹32L', growth: '25% CAGR', desc: 'Structure mergers & acquisitions, manage corporate debt portfolios & IPOs.' },
          { title: 'Financial Controller / Chief Accountant', pay: '₹8L - ₹24L', growth: 'Stable High', desc: 'Manage organizational general ledgers, financial reporting, and compliance.' },
          { title: 'Fintech Specialist', pay: '₹7L - ₹20L', growth: '30% CAGR', desc: 'Bridge financial logic with digital payment algorithms and blockchain ledger tech.' }
        ]
      }
    ]
  },
  'arts-humanities': {
    title: 'Arts & Humanities Pathway (Code 2804)',
    description: 'Roadmap for Civil Services, Governance, Corporate Law, Public Policy & Creative Leadership',
    stages: [
      {
        step: 1,
        id: 'arts-stage-1',
        name: '10th Standard Foundation',
        icon: 'GraduationCap',
        tagline: 'Passionate about reading, social structures, geography, world affairs & expression',
        details: 'Focus on Social Sciences, English literature, history, and current national events.'
      },
      {
        step: 2,
        id: 'arts-stage-2',
        name: '11th & 12th Arts/Humanities Group (Code 2804)',
        icon: 'BookOpen',
        tagline: 'History + Political Science + Geography + Economics',
        details: 'TN Govt Code 2804: Deep analysis of constitution, macroeconomics, human behavior, geopolitics, and critical writing.'
      },
      {
        step: 3,
        id: 'arts-stage-3',
        name: 'Entrance Exams & Selection Routes',
        icon: 'FileCheck',
        tagline: 'CLAT (Law), CUET (UG), NIFT/NID (Design), UPSC Preparation Path',
        details: 'Top National & State Entrance Routes:',
        routes: [
          { name: 'CLAT / AILET', target: '5-Year Integrated B.A. LL.B (Hons) in NLUs (National Law Universities)' },
          { name: 'CUET (UG)', target: 'B.A. (Hons) Economics / Political Science / Psychology in Top Central Universities' },
          { name: 'TNCASA Single Window', target: 'Admission to premier TN Govt & Aided Arts & Science Colleges' },
          { name: 'NIFT / NID Entrance', target: 'Bachelor of Design (B.Des) in Fashion, Communication & Product Design' }
        ]
      },
      {
        step: 4,
        id: 'arts-stage-4',
        name: 'Undergraduate Degrees (3-5 Yrs)',
        icon: 'Award',
        tagline: 'B.A. Programs & Integrated Law Degrees',
        options: [
          {
            name: 'Integrated B.A. LL.B (Hons) Law Degree',
            duration: '5 Years',
            focus: 'Constitutional law, corporate law, cyber jurisprudence, criminal law',
            tnRoute: 'Admissions via TNDALU (Tamil Nadu Dr. Ambedkar Law University) counselling or CLAT'
          },
          {
            name: 'B.A. Economics / Political Science / International Relations',
            duration: '3 Years',
            focus: 'Econometrics, political theory, diplomatic policy, public finance',
            tnRoute: '12th Merit based single window admission in TN colleges'
          },
          {
            name: 'B.A. Psychology / Applied Psychology',
            duration: '3 Years',
            focus: 'Cognitive psychology, clinical assessment, organizational behavior',
            tnRoute: 'High popularity in top urban arts colleges'
          },
          {
            name: 'B.A. Journalism & Mass Communication',
            duration: '3 Years',
            focus: 'Digital journalism, media broadcasting, public relations, content architecture',
            tnRoute: 'Merit & entrance-based institutional admission'
          }
        ]
      },
      {
        step: 5,
        id: 'arts-stage-5',
        name: 'Civil Services / Masters / Bar Council',
        icon: 'Layers',
        tagline: 'UPSC CSE (IAS/IPS/IFS), TNPSC Group 1, LL.M, M.A. Public Policy',
        details: 'Prepare for India’s premier administrative examinations (UPSC / TNPSC) or earn legal advocacy license.'
      },
      {
        step: 6,
        id: 'arts-stage-6',
        name: 'Career Opportunities & Roles',
        icon: 'Briefcase',
        tagline: 'Civil Servants, Legal Advocates, Policy Analysts & Media Leaders',
        roles: [
          { title: 'Civil Services Officer (IAS / IPS / IFS / IRS)', pay: '₹8L - ₹20L + Govt Perks & Governance Power', growth: 'Highest Prestige', desc: 'Direct district administration, policy implementation, policing, and diplomatic missions.' },
          { title: 'Corporate / Cyber Lawyer', pay: '₹8L - ₹30L+', growth: 'High', desc: 'Advise multinational corporations on intellectual property, mergers, and legal compliance.' },
          { title: 'Policy Analyst & Economic Consultant', pay: '₹6L - ₹18L', growth: '22% CAGR', desc: 'Evaluate government schemes, socio-economic policies, and international trade models.' },
          { title: 'Clinical / Industrial Psychologist', pay: '₹5L - ₹16L', growth: '25% CAGR', desc: 'Provide mental health therapies or design employee well-being frameworks.' }
        ]
      }
    ]
  },
  'pure-science': {
    title: 'Pure Science & Agricultural Tech Pathway (Code 2608 / 2951)',
    description: 'Roadmap for Pure Research, Agricultural Science (TNAU), Veterinary Medicine (TANUVAS) & Green Technology',
    stages: [
      {
        step: 1,
        id: 'pure-stage-1',
        name: '10th Standard Foundation',
        icon: 'GraduationCap',
        tagline: 'Curiosity about nature, plant biology, chemical reactions & experimental science',
        details: 'Focus on experimental science, chemistry balance, and foundational biology.'
      },
      {
        step: 2,
        id: 'pure-stage-2',
        name: '11th & 12th Pure Science Group (Code 2608 / 2951)',
        icon: 'BookOpen',
        tagline: 'Physics + Chemistry + Botany + Zoology / Agri Tech',
        details: 'TN Govt Codes 2608 / 2951: Deep dive into organic chemistry, plant biology, genetics, animal physiology, and agricultural lab practicals.'
      },
      {
        step: 3,
        id: 'pure-stage-3',
        name: 'Entrance Exams & Counselling',
        icon: 'FileCheck',
        tagline: 'TNAU Counselling, TANUVAS, ICAR AIEEA, NEST, CUET',
        details: 'Specialized Agricultural & Research Admission Routes:',
        routes: [
          { name: 'TNAU Single Window', target: 'Tamil Nadu Agricultural University B.Sc (Hons) Agriculture / Horticulture' },
          { name: 'TANUVAS Counselling', target: 'Tamil Nadu Veterinary & Animal Sciences University (B.V.Sc & A.H)' },
          { name: 'ICAR AIEEA (CUET)', target: 'All India ICAR Agricultural Colleges seat quota' },
          { name: 'NEST / IISER IAT', target: '5-Year BS-MS Integrated Science in IISERs and NISER' }
        ]
      },
      {
        step: 4,
        id: 'pure-stage-4',
        name: 'Undergraduate Degrees (3-5 Yrs)',
        icon: 'Award',
        tagline: 'B.Sc Agriculture / B.V.Sc / B.Sc Chemistry & Botany',
        options: [
          {
            name: 'B.Sc (Hons) Agriculture / Horticulture',
            duration: '4 Years',
            focus: 'Agronomy, soil science, crop genetics, precision farming technology',
            tnRoute: 'TNAU Online Single Window Counselling based on 12th marks'
          },
          {
            name: 'B.V.Sc & A.H (Veterinary Science & Animal Husbandry)',
            duration: '5.5 Years',
            focus: 'Animal medicine, surgical care, livestock breeding, veterinary pharmacology',
            tnRoute: 'TANUVAS Cutoff calculation from 12th PCB subjects'
          },
          {
            name: 'B.Sc Food Technology / Dairy Technology',
            duration: '4 Years',
            focus: 'Food processing engineering, quality assurance, microbiology standards',
            tnRoute: 'TNAU & TANUVAS specialized technology streams'
          }
        ]
      },
      {
        step: 5,
        id: 'pure-stage-5',
        name: 'Higher Studies & Research Grants',
        icon: 'Layers',
        tagline: 'M.Sc, ICAR JRF, CSIR-NET, Ph.D Research Fellowship',
        details: 'Qualify for CSIR-NET Junior Research Fellowship to work in premier national science laboratories.'
      },
      {
        step: 6,
        id: 'pure-stage-6',
        name: 'Career Opportunities & Roles',
        icon: 'Briefcase',
        tagline: 'Agricultural Officers, Veterinary Surgeons & Research Scientists',
        roles: [
          { title: 'Agricultural Development Officer (ADO)', pay: '₹6L - ₹15L + Govt Post', growth: 'Stable', desc: 'Lead district agricultural development, seed distribution, and soil health programs.' },
          { title: 'Veterinary Surgeon / Medical Specialist', pay: '₹6.5L - ₹18L', growth: 'High', desc: 'Provide clinical medical & surgical care for domestic and commercial livestock.' },
          { title: 'Agritech Innovation Specialist', pay: '₹7L - ₹22L', growth: '34% CAGR', desc: 'Deploy drone soil sensors, automated irrigation AI, and climate-resilient crop technology.' },
          { title: 'Research Scientist (CSIR / ICAR / ISRO)', pay: '₹7.5L - ₹24L', growth: 'High Research Scope', desc: 'Conduct cutting-edge research in plant genetics, satellite crop mapping & biotechnology.' }
        ]
      }
    ]
  }
};

// Course Comparison Data Grid
export const COMPARISON_MATRIX = [
  {
    feature: 'Core Subjects & Official TN Codes',
    'cs-maths': 'Code 2502: CS, Maths, Physics, Chemistry',
    'bio-maths': 'Code 2503: Biology, Maths, Physics, Chemistry',
    'commerce': 'Code 2708: Commerce, Accountancy, Econ, Business Maths',
    'arts-humanities': 'Code 2804: History, Geography, Econ, Pol Sci',
    'pure-science': 'Code 2608 / 2951: Botany, Zoology / Agri, Physics, Chem'
  },
  {
    feature: 'Key Entrance Examinations',
    'cs-maths': 'JEE Main/Adv, TNEA, BITSAT, VITEEE, CUET',
    'bio-maths': 'NEET-UG, TNEA, TN Medical, TANUVAS, TNAU',
    'commerce': 'CA Foundation, IPMAT, CMA, CSEET, CUET',
    'arts-humanities': 'CLAT, AILET, CUET (UG), NIFT, UPSC Path',
    'pure-science': 'TNAU Single Window, TANUVAS, ICAR AIEEA, NEST'
  },
  {
    feature: 'Popular UG Courses',
    'cs-maths': 'B.E CSE, B.Tech AI&DS, B.Tech IT, B.Sc CS, BCA',
    'bio-maths': 'MBBS, BDS, B.Tech Biotech, B.Pharm, B.Sc Nursing',
    'commerce': 'B.Com (Hons), BBA, CA (Concurrent), B.Com Finance',
    'arts-humanities': 'B.A LL.B (Hons), B.A Economics, B.A Psych, B.A Pol Sci',
    'pure-science': 'B.Sc Agriculture, B.V.Sc, B.Tech Food Tech, B.Sc Bio'
  },
  {
    feature: 'Top Career Opportunities',
    'cs-maths': 'Software Architect, Data Scientist, AI/ML Specialist',
    'bio-maths': 'Doctor (MBBS), Biotech Researcher, Bioinformatician',
    'commerce': 'Chartered Accountant, Investment Banker, CFO',
    'arts-humanities': 'Civil Servant (IAS/IPS), Corporate Lawyer, Psychologist',
    'pure-science': 'Agri Officer, Veterinary Surgeon, Research Scientist'
  },
  {
    feature: 'Average Starting Salary',
    'cs-maths': '₹6.5L - ₹24.0L / year',
    'bio-maths': '₹5.0L - ₹18.0L / year (Post Internship)',
    'commerce': '₹4.5L - ₹16.0L / year (Higher with CA)',
    'arts-humanities': '₹4.0L - ₹15.0L / year (High in Law & Admin)',
    'pure-science': '₹4.0L - ₹12.0L / year (High in Agri-tech)'
  },
  {
    feature: 'AI Era Resilience & Growth',
    'cs-maths': 'Very High (Creators of AI & Code Infrastructure)',
    'bio-maths': 'Highest (Requires physical human medical care & clinical judgment)',
    'commerce': 'High (Strategic human financial decisions & auditing)',
    'arts-humanities': 'Very High (Human empathy, jurisprudence, governance & policy)',
    'pure-science': 'High (Physical laboratory research & agricultural food security)'
  }
];

// Interactive Quiz Questions
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Which school subjects do you naturally find most engaging and enjoyable?',
    options: [
      { text: 'Solving math puzzles, writing code, or logical problem solving (Group Code 2502)', scores: { 'cs-maths': 10, 'commerce': 4, 'bio-maths': 5, 'arts-humanities': 1, 'pure-science': 3 } },
      { text: 'Understanding how biological organisms, human body & living cells work (Group Code 2503 / 2601)', scores: { 'bio-maths': 10, 'pure-science': 8, 'cs-maths': 2, 'commerce': 0, 'arts-humanities': 1 } },
      { text: 'Money, stock markets, business operations, and financial news (Group Code 2708 / 2702)', scores: { 'commerce': 10, 'cs-maths': 3, 'arts-humanities': 4, 'bio-maths': 0, 'pure-science': 1 } },
      { text: 'History, political debates, literature, law, human behavior & ethics (Group Code 2804)', scores: { 'arts-humanities': 10, 'commerce': 3, 'bio-maths': 1, 'cs-maths': 0, 'pure-science': 2 } },
      { text: 'Nature, agriculture, chemical experiments, plant life & animals (Group Code 2608 / 2951)', scores: { 'pure-science': 10, 'bio-maths': 7, 'arts-humanities': 2, 'cs-maths': 1, 'commerce': 1 } }
    ]
  },
  {
    id: 2,
    question: 'What type of learning style suits you best?',
    options: [
      { text: 'Hands-on practical coding, building algorithms & debugging', scores: { 'cs-maths': 10, 'commerce': 4, 'bio-maths': 3, 'arts-humanities': 1, 'pure-science': 3 } },
      { text: 'In-depth laboratory research, microscopic examination & medical studies', scores: { 'bio-maths': 10, 'pure-science': 9, 'cs-maths': 3, 'commerce': 0, 'arts-humanities': 1 } },
      { text: 'Case studies, analyzing financial ledgers & business strategy', scores: { 'commerce': 10, 'arts-humanities': 4, 'cs-maths': 3, 'bio-maths': 0, 'pure-science': 1 } },
      { text: 'Critical reading, essay writing, debates, and analytical discussions', scores: { 'arts-humanities': 10, 'commerce': 3, 'bio-maths': 1, 'cs-maths': 1, 'pure-science': 2 } }
    ]
  },
  {
    id: 3,
    question: 'Where do you see yourself working in 7-10 years?',
    options: [
      { text: 'At a global technology firm, startup, or AI innovation lab', scores: { 'cs-maths': 10, 'commerce': 3, 'bio-maths': 4, 'arts-humanities': 0, 'pure-science': 2 } },
      { text: 'In a major hospital, medical clinic, or biomedical research facility', scores: { 'bio-maths': 10, 'pure-science': 6, 'cs-maths': 2, 'commerce': 0, 'arts-humanities': 1 } },
      { text: 'In a corporate boardroom, accounting firm, bank, or stock exchange', scores: { 'commerce': 10, 'cs-maths': 3, 'arts-humanities': 3, 'bio-maths': 0, 'pure-science': 1 } },
      { text: 'In government administration (IAS/IPS), courtroom, or media house', scores: { 'arts-humanities': 10, 'commerce': 3, 'bio-maths': 1, 'cs-maths': 0, 'pure-science': 2 } },
      { text: 'In an agricultural research station, veterinary hospital, or food lab', scores: { 'pure-science': 10, 'bio-maths': 7, 'arts-humanities': 1, 'cs-maths': 1, 'commerce': 1 } }
    ]
  },
  {
    id: 4,
    question: 'What is your primary career motivation?',
    options: [
      { text: 'Inventing cutting-edge technology & automated intelligent systems', scores: { 'cs-maths': 10, 'commerce': 2, 'bio-maths': 4, 'arts-humanities': 1, 'pure-science': 3 } },
      { text: 'Saving lives, healing human ailments & advancing healthcare science', scores: { 'bio-maths': 10, 'pure-science': 7, 'cs-maths': 2, 'commerce': 0, 'arts-humanities': 1 } },
      { text: 'Creating financial wealth, leading businesses & mastering markets', scores: { 'commerce': 10, 'cs-maths': 3, 'arts-humanities': 3, 'bio-maths': 0, 'pure-science': 1 } },
      { text: 'Serving society, upholding justice, leading public governance & policy', scores: { 'arts-humanities': 10, 'commerce': 2, 'bio-maths': 1, 'cs-maths': 0, 'pure-science': 2 } }
    ]
  }
];

// National & State Entrance Exam Directory
export const ENTRANCE_EXAMS = [
  {
    id: 'neet',
    name: 'NEET-UG (National Eligibility cum Entrance Test)',
    category: 'Medical',
    conductingBody: 'NTA (National Testing Agency)',
    eligibility: 'Pass in 12th Board (Group Code 2503 Bio-Maths or 2601/2608 Pure Science) with Physics, Chemistry, Biology with min 50% aggregate marks.',
    level: 'National Level',
    targetCourses: 'MBBS, BDS, BAMS, BHMS, BSMS, BVSc (Selected seats)',
    counselling: 'MCC All India Quota (15%) + TN DME State Quota (85% single window)',
    frequency: 'Once a year (May)',
    website: 'https://neet.nta.nic.in'
  },
  {
    id: 'jee-main',
    name: 'JEE Main & JEE Advanced',
    category: 'Engineering & Tech',
    conductingBody: 'NTA / IITs',
    eligibility: 'Pass in 12th Board (Group Code 2502 CS-Maths or 2503 Bio-Maths) with Physics, Mathematics, Chemistry/CS.',
    level: 'National Level',
    targetCourses: 'B.E / B.Tech in IITs, NITs, IIITs, CFTIs',
    counselling: 'JoSAA / CSAB Counselling',
    frequency: 'Twice a year (Jan & April)',
    website: 'https://jeemain.nta.nic.in'
  },
  {
    id: 'tnea',
    name: 'TNEA (Tamil Nadu Engineering Admissions)',
    category: 'Engineering & Tech',
    conductingBody: 'Directorate of Technical Education (DoTE), Tamil Nadu',
    eligibility: '12th Board Pass (Group Codes 2502, 2503, 2501, 2504, 2505, 2506, 2921-2926) with Physics, Chemistry & Mathematics. Selection based on 12th normalised cutoff mark out of 200.',
    level: 'State Level (Tamil Nadu)',
    targetCourses: 'B.E / B.Tech in Anna University Campus Colleges (CEG, MIT, ACTech), Govt & Aided Engineering Colleges',
    counselling: 'TNEA Single Window Online Counselling',
    frequency: 'Annual (May - August)',
    website: 'https://www.tneaonline.org'
  },
  {
    id: 'clat',
    name: 'CLAT (Common Law Admission Test)',
    category: 'Law & Governance',
    conductingBody: 'Consortium of NLUs',
    eligibility: '12th Pass from any stream (Group Codes 2801-2806 Arts, 2701-2708 Commerce, 2502/2503 Science) with min 45% aggregate.',
    level: 'National Level',
    targetCourses: '5-Year Integrated B.A. LL.B (Hons), B.B.A. LL.B (Hons)',
    counselling: 'Centralized NLU Counselling',
    frequency: 'Once a year (December)',
    website: 'https://consortiumofnlus.ac.in'
  },
  {
    id: 'ca-foundation',
    name: 'CA Foundation Exam',
    category: 'Commerce & Finance',
    conductingBody: 'ICAI (Institute of Chartered Accountants of India)',
    eligibility: 'Registered post 12th Board from Commerce (Group Codes 2701-2708) or Science stream.',
    level: 'National Professional Body',
    targetCourses: 'Chartered Accountancy Course (CA)',
    counselling: 'Direct ICAI Registration & Articleship Training',
    frequency: 'Thrice a year (Jan, June, Sept)',
    website: 'https://www.icai.org'
  },
  {
    id: 'cuet',
    name: 'CUET-UG (Common University Entrance Test)',
    category: 'Arts, Science & Commerce',
    conductingBody: 'NTA',
    eligibility: 'Pass in 12th Board from any recognized TN State Board group.',
    level: 'National Level',
    targetCourses: 'B.A (Hons), B.Sc (Hons), B.Com (Hons), Integrated Masters in Central Universities',
    counselling: 'Individual University Single Window (e.g. CSAS Delhi University)',
    frequency: 'Once a year (May)',
    website: 'https://cuetug.ntaonline.in'
  },
  {
    id: 'tnau',
    name: 'TNAU Single Window Admissions',
    category: 'Agriculture & Science',
    conductingBody: 'Tamil Nadu Agricultural University, Coimbatore',
    eligibility: '12th Pass (Group Codes 2608 Pure Science, 2503 Bio-Maths, or 2951 Vocational Agri) with Physics, Chemistry, Biology/Botany/Zoology/Agriculture.',
    level: 'State Level (Tamil Nadu)',
    targetCourses: 'B.Sc (Hons) Agriculture, Horticulture, Forestry, B.Tech Agri Engg',
    counselling: 'TNAU Online Single Window System',
    frequency: 'Annual (June - July)',
    website: 'https://tnau.ac.in'
  }
];

// Pre-seeded AI Chatbot Knowledge Base & Intent Recognizer
export const AI_CHATBOT_KNOWLEDGE = [
  {
    keywords: ['2502', 'code 2502', 'data scientist', 'data science', 'cs with maths', 'can i become data scientist'],
    question: 'If I choose Group Code 2502 (CS + Mathematics), can I become a Data Scientist?',
    answer: `**Yes, absolutely!** Choosing **Group Code 2502 (Physics, Chemistry, Computer Science, Mathematics)** in 11th standard is the **single best pathway** to becoming a Data Scientist.

Here is your exact educational and career roadmap:

1. **11th & 12th Standard**: Master Mathematics (Calculus, Statistics, Algebra) & Computer Science (Python/C++).
2. **Undergraduate Degree**: Pursue **B.Tech in Artificial Intelligence & Data Science (AI&DS)**, **B.E. Computer Science**, or **B.Sc. Data Science**.
3. **Core Skills Needed**: Python, SQL, Statistics, Machine Learning libraries (Pandas, Scikit-Learn, PyTorch).
4. **Target Career Role**: Start as a Data Analyst → Data Scientist → Senior Machine Learning Engineer with average salaries ranging from **₹7.5L to ₹25L+ / year**.`,
    relatedGroup: 'cs-maths'
  },
  {
    keywords: ['2503', 'code 2503', 'bio-maths', 'both jee and neet', 'jee and neet', 'can bio maths student write jee'],
    question: 'Can a Group Code 2503 (Bio-Maths) student write both NEET and JEE examinations?',
    answer: `**Yes!** Since **Group Code 2503 (Physics, Chemistry, Biology, Mathematics)** includes Physics, Chemistry, Biology, AND Mathematics:

- **You are eligible for NEET-UG** (for MBBS, BDS, Biotech, Nursing).
- **You are ALSO eligible for JEE Main & TNEA Counselling** (for Engineering like B.E CSE, Biomedical, Biotechnology, Artificial Intelligence).

This gives you the **highest flexibility** among all 11th standard groups in Tamil Nadu!`,
    relatedGroup: 'bio-maths'
  },
  {
    keywords: ['tnea', 'tnea cutoff', 'tamil nadu engineering', 'how tnea cutoff calculated'],
    question: 'How is the Tamil Nadu TNEA Engineering aggregate cutoff calculated from 12th marks?',
    answer: `In Tamil Nadu, **TNEA engineering admission cutoff is calculated out of 200 marks** from your 12th board marks:

- **Mathematics**: Converted to out of **100 marks** (12th Maths Mark / 2)
- **Physics**: Converted to out of **50 marks** (12th Physics Mark / 4)
- **Chemistry**: Converted to out of **50 marks** (12th Chemistry Mark / 4)

**TNEA Cutoff = Maths + (Physics / 2) + (Chemistry / 2)**

*Example*: If you score 90 in Maths, 90 in Physics, and 90 in Chemistry:
**Cutoff = 90 + 45 + 45 = 180 / 200**`,
    relatedGroup: 'cs-maths'
  },
  {
    keywords: ['2804', 'code 2804', 'arts', 'civil services', 'ias', 'ips', 'can arts student become ias'],
    question: 'How does Group Code 2804 (Arts / Humanities) help in preparing for IAS / Civil Services (UPSC)?',
    answer: `The **Arts / Humanities Group Code 2804** (History, Geography, Economics, Political Science) directly overlaps with **over 70% of the UPSC Civil Services Preliminary and Mains General Studies syllabus**!

**Pathway**:
1. **11th & 12th Arts**: Build deep understanding of Indian History, Constitution, Geopolitics & Economics.
2. **Degree**: B.A. Political Science, B.A. Economics, or B.A. LL.B Law.
3. **UPSC Exam**: Attempt UPSC CSE after completing any graduation degree.
4. **Advantage**: Arts students spend 5 years reading core governance subjects, giving them a strong competitive edge in essay writing and optional papers!`,
    relatedGroup: 'arts-humanities'
  },
  {
    keywords: ['2708', 'code 2708', 'commerce', 'ca vs mba', 'chartered accountant', 'how to become ca'],
    question: 'What is the step-by-step process to become a Chartered Accountant (CA) after 10th using Group Code 2708?',
    answer: `Here is the official **ICAI Chartered Accountancy pathway** for Tamil Nadu Commerce students:

1. **10th Standard**: Choose **Group Code 2708** (Economics + Commerce + Accountancy + Business Mathematics & Statistics).
2. **Post 12th Board**: Register for **CA Foundation Exam**.
3. **Pass CA Foundation** → Register for **CA Intermediate** (8 Subjects).
4. **Articleship**: Complete **2 Years of Mandatory Practical Articleship Training** under a practicing CA.
5. **CA Final**: Pass both groups of **CA Final Examination** to become a certified **Chartered Accountant (CA)**.`,
    relatedGroup: 'commerce'
  }
];

// Verified Source Records Dictionary
export const VERIFIED_SOURCES_DATA = [
  {
    id: 'dge-tn',
    authority: 'Directorate of Government Examinations (DGE), Government of Tamil Nadu',
    document: 'Annexure I - Higher Secondary Group Classification Rules',
    lastChecked: 'June 15, 2026',
    cycle: '2026–2027 Academic Session',
    officialUrl: 'https://dge.tn.gov.in',
    verifiedFacts: [
      'Tamil Nadu Higher Secondary Groups are officially classified into 40 distinct 4-digit numeric codes (2501 to 2962).',
      'Group 2502 consists of Physics, Chemistry, Computer Science, and Mathematics.',
      'Group 2503 contains Physics, Chemistry, Biology, and Mathematics.'
    ],
    aiExplanationNote: 'This means choosing 2503 preserves dual eligibility for both medical (NEET) and engineering (TNEA) counselling streams.'
  },
  {
    id: 'dote-tnea',
    authority: 'Directorate of Technical Education (DoTE), Tamil Nadu',
    document: 'TNEA Engineering Admissions Counselling Guidelines',
    lastChecked: 'May 20, 2026',
    cycle: '2026–2027 Admission Cycle',
    officialUrl: 'https://www.tneaonline.org',
    verifiedFacts: [
      'Engineering cutoff aggregate is computed strictly out of 200: Maths (100) + Physics (50) + Chemistry (50).',
      'Passing 12th Mathematics, Physics, and Chemistry is mandatory for B.E / B.Tech admission.'
    ],
    aiExplanationNote: 'Students from Group 2502 (CS-Maths) or 2503 (Bio-Maths) fulfill all required subjects under state single-window counselling.'
  },
  {
    id: 'nta-neet',
    authority: 'National Testing Agency (NTA) & Medical Counselling Committee (MCC)',
    document: 'NEET-UG Information Bulletin',
    lastChecked: 'April 10, 2026',
    cycle: '2026 Admission Cycle',
    officialUrl: 'https://neet.nta.nic.in',
    verifiedFacts: [
      'Candidates must have passed 10+2 with Physics, Chemistry, Biology/Biotechnology and English.',
      'Minimum aggregate of 50% marks in PCB required for General category.'
    ],
    aiExplanationNote: 'Tamil Nadu MBBS/BDS admissions rely 100% on NEET-UG score under 85% State Quota managed by TN DME.'
  }
];
