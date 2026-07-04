// All resume data structured for PM, Founder's Office, and Data/Analytics portfolio
export const resumeData = {
  name: 'Himanshu',
  title: "Great products start with internal clarity and relentless execution. Let's build one.",
  subtitle: "AI & Data Science undergrad focused on systems and strategy. Open to Product Management (PM/APM) roles (Onsite / Remote / Hybrid). PAN-India based.",
  location: 'Delhi, India',
  email: 'himanshuworkin01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/himanshu-15226b307/',
  github: 'https://github.com/Codewith-Psycho',

  summary: `AI & Data Science undergraduate with hands-on experience shipping live AI and cloud-based products end-to-end — from customer discovery and PRD authoring to Agile sprint execution across cross-functional teams. Demonstrated ability to translate complex AI and ML capabilities into measurable user outcomes, backed by direct C-suite exposure and a consistent national-finalist track record.`,

  heroStats: [
    { value: '2', label: 'Live Products Shipped' },
    { value: '100%', label: 'Credit Traceability · Neeledger' },
    { value: '8+', label: 'National Competition Finals' },
    { value: '2L+', label: 'Competitors Outranked · EY' },
  ],

  skills: [
    {
      category: 'Product Management',
      items: ['Discovery', 'PRD Writing', 'Roadmap Prioritisation', 'Backlog Grooming', 'GTM Planning', 'OKRs', 'Agile/Scrum', 'Value Proposition Design', 'Competitive Analysis'],
    },
    {
      category: 'AI & Data Science',
      items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'LSTM', 'NLP', 'LLMs', 'Generative AI', 'Power BI', 'Tableau', 'IBM Watson Studio'],
    },
    {
      category: 'Research & Validation',
      items: ['User Interviews', 'Usability Testing', 'Market Sizing', 'EDA', 'Statistical Analysis', 'KPI Design', 'Feedback Loop Design', 'SDG-aligned Policy Research'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Figma', 'Jira', 'Notion', 'Google Analytics', 'AWS', 'Blockchain (Polygon)', 'Git/GitHub', 'Jupyter Notebook'],
    },
  ],

  experience: [
    {
      role: 'Product & Strategy Intern',
      company: 'Prodigal AI',
      detail: 'Reporting to COO',
      location: 'Remote',
      date: 'Jul – Aug 2025',
      bullets: [
        'Ran stakeholder discovery and market research across 2 concurrent AI products; converted findings into PRDs that cut sprint ambiguity and accelerated team kick-off.',
        'Scoped a GenAI automation layer (Gemini 2.5 Flash) that replaced a fully manual KPI reporting cycle — zero new UI, full workflow elimination.',
        'Led sprint planning, backlog grooming, and demo cycles for a 4-person cross-functional team from concept to live product.',
        'Received Letter of Recommendation from COO for cross-functional impact in a fast-moving startup environment.',
      ],
    },
    {
      role: 'Data Analytics Intern',
      company: 'IBM SkillsBuild × CSRBOX',
      detail: '6-Week Summer Programme',
      location: 'Remote',
      date: 'Jun – Jul 2024',
      bullets: [
        'Led a team of 5 to analyse 12 years of women-centric crime data across Indian states — ran EDA, feature engineering, and built heatmaps and trend charts in Python.',
        'Prioritised which data cuts drove the highest-impact policy questions — applied product thinking to analytics delivery, not just technical execution.',
        'Shipped an Analytics Dashboard that eliminated manual KPI compilation for non-technical stakeholders.',
        'Completed 29.8 hrs of IBM structured learning: PM Fundamentals, Data Analytics, AI Agent Architecture, LLMs, GenAI.',
      ],
    },
  ],

  productWork: [
    {
      title: 'Prodigal AI',
      subtitle: 'COO Office Product Discovery & Automation',
      tags: ["Founder's Office", 'GTM', 'Generative AI', 'PRD', 'Agile'],
      date: 'Jul – Aug 2025',
      role: 'Product & Strategy Intern',
      blocks: [
        { label: 'Problem', text: 'Analyst teams lost hours every reporting cycle to manual KPI extraction with no automation layer.' },
        { label: 'My Role', text: 'Embedded in COO\'s office. Ran discovery, wrote PRDs, led a 4-person Agile team across 2 concurrent AI products.' },
        { label: 'Approach', text: 'Mapped analyst workflow end-to-end, found the extraction bottleneck, scoped a Generative AI solution (Gemini 2.5 Flash) to automate KPI reporting entirely.' },
        { label: 'PM Thinking Applied', text: 'Prioritised the solution that required no new UI surface — the fastest path to removing friction without adding complexity.' },
      ],
      outcome: 'Eliminated a multi-hour manual reporting cycle. 2 products launched. Letter of Recommendation from COO.',
    },
    {
      title: 'Neeledger',
      subtitle: 'Blue Carbon Credit Traceability',
      tags: ['Product', 'Blockchain', 'Sustainability', 'MRV'],
      date: 'Aug 2025 – Mar 2026',
      role: 'Team Lead · National Finalist',
      blocks: [
        { label: 'Problem', text: 'Lack of transparency, high double-counting risk, and complex verification processes hindering Indian organizations from actively participating in voluntary and compliance blue carbon markets.' },
        { label: 'Platform Strategy', text: 'A blockchain-based platform designed to track verified blue carbon credits from issuance to retirement. Phase 1 enables secure ownership, transfer, and sale tracking.' },
        { label: 'Phase 2 Expansion', text: 'Adds MRV (Measurement, Reporting, and Verification) document linkage, connecting PDDs (Project Design Documents) and verification reports directly to the tokens.' },
        { label: 'PM Thinking', text: 'Designed a phased roadmap to address critical trust and double-counting risks first, establishing proof of ownership before layering in complex compliance documents.' },
      ],
      outcome: 'Improved credit transparency and eliminated double counting. Shipped Phase 1 tracking. National Finalist.',
      link: 'https://neeledger-omega.vercel.app/',
      metric: '100%',
      metricLabel: 'Traceability Rate',
    },
    {
      title: 'VoltIQ',
      subtitle: 'AI Energy Optimisation Platform',
      tags: ['Product', 'Data Science', 'Predictive Analytics', 'Consumer'],
      date: 'Dec 2025 – Mar 2026',
      role: 'Team Lead · Live Product',
      blocks: [
        { label: 'Problem', text: '3Cr+ Indian smart-meter households overpaying 23% monthly with zero intelligent optimisation tooling.' },
        { label: 'My Role', text: 'Owned proposition design end to end. Defined KPIs before engineering started. Mapped user adoption journey.' },
        { label: 'Key Decision', text: 'Defined success as monthly saving % and adoption rate — not feature completion. Every sprint had to move one of those two numbers.' },
        { label: 'Validated With', text: 'Real user interviews at each adoption stage. Iterated UI until non-technical users understood their savings instantly.' },
      ],
      outcome: 'Live product. Validated with real users. Demonstrated 23% overpayment reduction potential.',
      link: 'https://volt-nine-black.vercel.app/',
      metric: '23%',
      metricLabel: 'Monthly Savings',
    },
    {
      title: 'IBM SkillsBuild x CSRBOX',
      subtitle: 'Data-Informed Policy Insights Dashboard',
      tags: ['Data Analytics', 'Research', 'Policy', 'Social Impact'],
      date: 'Jun – Jul 2024',
      role: 'Data Analytics Intern · Team Lead',
      blocks: [
        { label: 'Problem', text: 'Policymakers had no consolidated visual analysis of crime patterns affecting women across Indian states — decisions were made on fragmented, unprocessed data.' },
        { label: 'My Role', text: 'Led a team of 5. Defined the insight framework — decided which data cuts answered the highest-impact questions first. Applied product thinking to analytics: decision-maker\'s question first, analysis second.' },
        { label: 'Approach', text: 'Analysed 12-year crime dataset (2001–2013), performed EDA, built heatmaps and trend visualisations in Python to surface regional hotspots.' },
        { label: 'PM Thinking Applied', text: 'Scoped the output to 3 most actionable insights rather than showing all available data — chose visualisation types by audience comprehension, not data availability.' },
      ],
      outcome: 'SDG 16-aligned policy recommendations. Analytics Dashboard shipped. Manual KPI reporting eliminated.',
    },
  ],

  achievements: [
    { title: 'EY Techathon 6.0', result: 'Top 5,000', detail: 'out of 2,00,000+ registrations nationwide', type: 'certificate' },
    { title: 'Hackstreet 4.0', result: 'Winner (1st Runner-Up)', detail: 'National Level', type: 'winner' },
    { title: 'Paranox 2.0', result: '1st Runner-Up', detail: 'National Level', type: 'winner' },
    { title: 'Riverathon 1.0', result: 'Top 60', detail: 'World Bank-affiliated', type: 'finalist' },
    { title: 'India Innovates 2026', result: 'Finalist', detail: 'Ministry of Education & MCD', type: 'finalist' },
    { title: 'CodeZen 2.0', result: 'Top 12', detail: 'National Level', type: 'finalist' },
    { title: 'Graphethon 3.0', result: 'Top 50', detail: 'National Level', type: 'finalist' },
  ],

  education: [
    {
      institution: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
      degree: 'B.Tech, Artificial Intelligence & Data Science',
      cgpa: '8.8/10',
      cgpaNote: 'up to 5th Semester',
      date: 'Sep 2023 – Aug 2027 (Expected)',
      location: 'Delhi, India',
      coursework: ['AIML', 'Metaverse', 'Blockchain', 'Cloud Computing', 'IoT', 'Probability & Statistics', 'Operations Research', 'Core CSE', 'Supply Chain Management', 'Economics', 'Accountancy', 'Software Engineering', 'Product Management', 'Data/Business Analytics'],
    },
    {
      institution: 'Good Samaritan School, Jasola (CBSE)',
      degree: 'Senior Secondary (PCM + Computer Science)',
      score: '90.1%',
      secondaryScore: '94.6%',
      date: '2021 – 2023',
      location: 'Delhi, India',
    },
  ],

  leadership: [
    {
      role: 'Team Lead',
      org: 'Abhedya EDC — Cybersecurity Club, GGSIPU',
      date: 'Feb 2026 – Present',
      location: 'Delhi, India',
      bullets: [
        'Organised cybersecurity seminar for 50+ people. Built the interview process that selected the next team.',
      ],
    },
    {
      role: 'Event Management Specialist',
      org: 'ARHAM — The Nature\'s Club, GGSIPU EDC',
      date: 'Feb 2025 – Sep 2025',
      location: 'Delhi, India',
      bullets: [
        'Delivered 4+ events across 8 months. Owned planning to execution.',
      ],
    },
    {
      role: 'Sponsorship Coordinator',
      org: 'GameDev Guild — Student Club, GGSIPU',
      date: 'Oct – Nov 2024',
      location: 'Delhi, India',
      bullets: [
        'Cold-called industry professionals, wrote pitch decks, secured sponsors under tight deadlines.',
      ],
    },
  ],

  certifications: [
    {
      issuer: 'IBM SkillsBuild',
      year: '2025',
      certs: ['AI Agent Architect Learning Plan', 'Crafting Precision Prompts with Generative AI', 'The Rise of Multiagent Systems', 'Introduction to Large Language Models', 'Mastering the Art of Prompting'],
    },
    {
      issuer: 'IBM SkillsBuild',
      year: '2024',
      certs: ['Project Management Fundamentals', 'Data Analytics (CSRBOX Internship Plan)', 'Make an Impact with Data Analytics', 'Overview of Data Tools and Languages'],
    },
    {
      issuer: 'Google',
      year: '',
      certs: ['Google Analytics for Beginners', 'Google Analytics Academy'],
    },
  ],
}
