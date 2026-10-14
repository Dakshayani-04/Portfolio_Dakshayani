/**
 * ==============================================================================
 * DAKSHAYANI KALE — PORTFOLIO CONTENT DATA STORE
 * ==============================================================================
 * 
 * Single source of truth powering the entire portfolio website.
 * Edit any section below to update portfolio content across all pages and views.
 * 
 * STRUCTURE:
 * 1. meta                 - SEO tags, page titles, and favicon settings
 * 2. identity             - Personal branding, hero text, photo, and bios
 * 3. education            - Academic degrees, institutions, scores, and honors
 * 4. careerObjective      - Target roles, industry preferences, and vision
 * 5. skills               - Categorized technical & soft skills with proof
 * 6. projects             - Featured works with deep-dive problem/solution journeys
 * 7. experience           - Internships and work history with impact metrics
 * 8. certifications       - Professional certifications and credentials
 * 9. competitiveProgramming - Coding platform statistics and profile ratings
 * 10. contact             - Contact methods, social links, and form endpoints
 * 
 * NOTE: Loaded via standard <script> tag in HTML. Do not convert to ES modules
 * (import/export) unless your bundler/setup specifically requires it.
 * ==============================================================================
 */

const siteData = {
  // ----------------------------------------------------------------------------
  // 1. META & SEO
  // ----------------------------------------------------------------------------
  // Update these fields for search engine indexing and browser tab details.
  meta: {
    title: "Dakshayani Kale | Data Analyst · Full-Stack Developer · Software Engineer",
    description: "Portfolio of Dakshayani Kale — final-year IT student at Aditya University. Expertise in Data Analytics, Full-Stack Development, AI/ML, and Software Engineering.",
    favicon: "assets/images/favicon.svg"
  },

  // ----------------------------------------------------------------------------
  // 2. IDENTITY & HERO
  // ----------------------------------------------------------------------------
  // Personal brand identity, hero introduction, profile image, and core pillars.
  identity: {
    name: "Dakshayani Kale",
    title: "Data Analyst · Full-Stack Developer · Software Engineer",
    headline: "Crafting Intelligent Solutions — From Data to Deployment",
    intro: "Final-year Information Technology student at Aditya University with a passion for turning raw data into actionable insights and building full-stack applications that solve real-world problems. A quick learner and collaborative leader who thrives at the intersection of data analytics, software engineering, and AI — eager to bring fresh perspectives and relentless drive to a forward-thinking team.",
    photo: "assets/images/profile.jpg",
    monogram: "DK",
    signatureLine: "Designed & Built by Dakshayani Kale",
    strengthTags: [
      "Full-Stack Development",
      "AI & Machine Learning",
      "Data Analytics"
    ],
    philosophyQuote: "I don't just write code — I engineer solutions that tell a story."
  },

  // ----------------------------------------------------------------------------
  // 3. EDUCATION
  // ----------------------------------------------------------------------------
  // Chronological academic record from university to secondary school.
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Aditya University",
      location: "Kakinada, AP",
      year: "2023 – 2027",
      score: "CGPA: 9.1/10",
      highlights: [
        "Consistent 9+ CGPA every semester",
        "3rd Rank in Department (Sem 3)",
        "Recognized for Communication Skills"
      ]
    },
    {
      degree: "Intermediate (12th)",
      institution: "Sri Chaitanya Jr College",
      location: "Vijayawada, AP",
      year: "2020 – 2022",
      score: "975/1000 · 97.5%",
      highlights: []
    },
    {
      degree: "SSC (10th)",
      institution: "Atkinson High School",
      location: "Vijayawada, AP",
      year: "2020",
      score: "80%",
      highlights: []
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. CAREER OBJECTIVE & VISION
  // ----------------------------------------------------------------------------
  // Target positions, target sectors, and personal long-term mission statement.
  careerObjective: {
    targetRoles: [
      "Data Analyst",
      "Software Engineer",
      "AI/ML Engineer",
      "Full-Stack Developer"
    ],
    industries: "Open to all industries",
    vision: "Driven by a builder's mindset and an entrepreneurial spirit — currently focused on growing within a high-impact tech team where I can solve meaningful problems, and ultimately channel that experience into creating something of my own."
  },

  // ----------------------------------------------------------------------------
  // 5. SKILLS MATRIX
  // ----------------------------------------------------------------------------
  // Grouped by technical domain. Each skill includes an honesty/mastery level
  // and real-world proof (project, certification, or competitive achievement).
  // Level options: "Advanced" | "Intermediate" | "Familiar"
  skills: [
    {
      name: "Technical",
      icon: "💻",
      skills: [
        {
          name: "Python",
          level: "Advanced",
          proof: "RAG Engine & AI Chatbot projects"
        },
        {
          name: "Java",
          level: "Advanced",
          proof: "CampusFix Android App"
        },
        {
          name: "C",
          level: "Intermediate",
          proof: "HackerRank 5-Star Gold Badge"
        },
        {
          name: "JavaScript",
          level: "Advanced",
          proof: "TechNexus & 10+ projects"
        },
        {
          name: "SQL",
          level: "Advanced",
          proof: "HackerRank 5-Star & E-Commerce DB"
        },
        {
          name: "HTML5/CSS3",
          level: "Advanced",
          proof: "EcoVana & multiple web projects"
        }
      ]
    },
    {
      name: "Frameworks",
      icon: "⚡",
      skills: [
        {
          name: "React.js",
          level: "Advanced",
          proof: "TechNexus Ticket Tracker"
        },
        {
          name: "Node.js",
          level: "Intermediate",
          proof: "TechNexus Backend"
        },
        {
          name: "Express.js",
          level: "Intermediate",
          proof: "TechNexus REST APIs"
        },
        {
          name: "FastAPI",
          level: "Intermediate",
          proof: "Real-Time Streaming RAG"
        }
      ]
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: [
        {
          name: "MySQL",
          level: "Advanced",
          proof: "Scalable E-Commerce DB System"
        },
        {
          name: "MongoDB",
          level: "Intermediate",
          proof: "TechNexus + MongoDB Certification"
        }
      ]
    },
    {
      name: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Docker",
          level: "Intermediate",
          proof: "PKI 2FA Microservice"
        },
        {
          name: "Git/GitHub",
          level: "Advanced",
          proof: "GitHub Foundations (Microsoft)"
        },
        {
          name: "Postman",
          level: "Advanced",
          proof: "Full-Stack Internship API Testing"
        },
        {
          name: "Linux CLI",
          level: "Intermediate",
          proof: "AI Internship workflows"
        }
      ]
    },
    {
      name: "AI/ML",
      icon: "🧠",
      skills: [
        {
          name: "Machine Learning",
          level: "Intermediate",
          proof: "AI Intern at EduExpose"
        },
        {
          name: "Deep Learning",
          level: "Intermediate",
          proof: "Medical Chatbot (Hugging Face)"
        },
        {
          name: "RAG",
          level: "Intermediate",
          proof: "Hybrid RAG Search Engine"
        },
        {
          name: "Data Preprocessing",
          level: "Advanced",
          proof: "AI Internship at EduExpose"
        }
      ]
    },
    {
      name: "Core CS",
      icon: "📐",
      skills: [
        {
          name: "DSA",
          level: "Advanced",
          proof: "LeetCode 1563 Rating · 150+ Problems"
        },
        {
          name: "OOP",
          level: "Advanced",
          proof: "CampusFix Java Architecture"
        },
        {
          name: "DBMS",
          level: "Advanced",
          proof: "Mini SQL Database Engine"
        },
        {
          name: "Operating Systems",
          level: "Intermediate",
          proof: "Academic coursework"
        },
        {
          name: "Computer Networks",
          level: "Intermediate",
          proof: "Academic coursework"
        },
        {
          name: "SDLC/Agile",
          level: "Advanced",
          proof: "Full-Stack Internship"
        }
      ]
    },
    {
      name: "Professional",
      icon: "🤝",
      skills: [
        {
          name: "Leadership",
          level: "Advanced",
          proof: "Department Recognition"
        },
        {
          name: "Communication",
          level: "Advanced",
          proof: "Department Award"
        },
        {
          name: "Team Collaboration",
          level: "Advanced",
          proof: "Cross-functional teams at Technical Hub"
        },
        {
          name: "Quick Learner",
          level: "Advanced",
          proof: "4 internships across domains"
        },
        {
          name: "Adaptive",
          level: "Advanced",
          proof: "Virtual + Hybrid + On-site experience"
        }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. FEATURED PROJECTS
  // ----------------------------------------------------------------------------
  // Flagship projects showcasing end-to-end architecture and engineering journey.
  // Each project highlights: Problem -> Approach -> Solution -> Outcome.
  projects: [
    {
      id: "technexus",
      title: "TechNexus",
      tagline: "Jira-inspired issue tracking for modern teams",
      category: "Full-Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Dakshayani-04/TechNexus",
      liveDemo: "https://github.com/Dakshayani-04/TechNexus",
      videoPlaceholder: true,
      journey: {
        problem: "Small teams and startups struggle with bloated project management tools that are expensive and overcomplicated for their needs.",
        approach: "Designed a clean Jira-modeled architecture with modular React components, RESTful Express APIs, and MongoDB for flexible document storage.",
        solution: "Built an interactive dashboard with real-time ticket status tracking, priority management, CRUD operations, and productivity metrics visualization.",
        outcome: "Delivered a fully functional ticket tracking system with real-time status updates, role-based workflows, and an intuitive React dashboard for team productivity."
      }
    },
    {
      id: "campusfix",
      title: "CampusFix",
      tagline: "Real-time campus infrastructure reporting",
      category: "Mobile",
      techStack: ["Android SDK", "Java", "XML", "Firebase"],
      github: "https://github.com/Dakshayani-04/CampusFix",
      liveDemo: "https://github.com/Dakshayani-04/CampusFix",
      videoPlaceholder: true,
      journey: {
        problem: "Campus infrastructure issues (broken lights, plumbing, road damage) go unreported for weeks because there's no centralized, easy-to-use reporting system.",
        approach: "Built a native Android app using Java OOP principles with Firebase backend for real-time data sync, authentication, and image storage.",
        solution: "Engineered real-time issue reporting with image uploads, GPS-tagged locations, status tracking, and an admin analytics dashboard.",
        outcome: "Created a fully functional mobile reporting system with real-time Firebase sync, image uploads, and status analytics for campus administrators."
      }
    },
    {
      id: "ecovana",
      title: "EcoVana",
      tagline: "AI-personalized plant care companion",
      category: "Web / AI",
      techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
      // Pointing to GitHub profile until dedicated repository link is configured
      github: "https://github.com/Dakshayani-04",
      liveDemo: "https://github.com/Dakshayani-04",
      videoPlaceholder: true,
      journey: {
        problem: "Home gardeners struggle to find personalized care routines because generic advice doesn't account for local climate, soil, and plant species.",
        approach: "Integrated third-party weather and environmental APIs using async JavaScript to fetch real-time, location-based data for each user.",
        solution: "Developed an AI-driven platform delivering custom care schedules based on user location, plant type, and environmental conditions with responsive design.",
        outcome: "Delivered a responsive, cross-device gardening platform with real-time environmental data integration and personalized AI-driven care routines."
      }
    },
    {
      id: "hybrid-rag-search",
      title: "Hybrid RAG Search Engine",
      tagline: "Intelligent document search with vector + keyword fusion",
      category: "AI/ML",
      techStack: ["Python", "RAG", "Vector Search", "LLM"],
      github: "https://github.com/Dakshayani-04/Hybrid-RAG-Search-Engine",
      liveDemo: "https://github.com/Dakshayani-04/Hybrid-RAG-Search-Engine",
      videoPlaceholder: true,
      journey: {
        problem: "Traditional keyword search fails to understand semantic meaning, while pure vector search misses exact-match requirements — neither alone is sufficient.",
        approach: "Combined dense vector embeddings with sparse keyword retrieval (BM25) in a hybrid retrieval pipeline, then used an LLM for answer generation.",
        solution: "Built a Retrieval-Augmented Generation engine that fuses semantic and lexical search for comprehensive, context-aware document retrieval.",
        outcome: "Achieved superior search relevance by combining the precision of keyword matching with the contextual understanding of vector embeddings."
      }
    },
    {
      id: "ai-medical-chatbot",
      title: "AI Medical Chatbot",
      tagline: "Heart disease detection powered by Hugging Face",
      category: "AI/ML",
      techStack: ["Python", "Hugging Face", "Machine Learning"],
      github: "https://github.com/Dakshayani-04/AI-Powered-Medical-Chatbot-for-Heart-Disease-Detection-Using-Hugging-Face",
      liveDemo: "https://github.com/Dakshayani-04/AI-Powered-Medical-Chatbot-for-Heart-Disease-Detection-Using-Hugging-Face",
      videoPlaceholder: true,
      journey: {
        problem: "Early heart disease detection requires expensive medical consultations, making preliminary screening inaccessible to many people.",
        approach: "Leveraged Hugging Face pre-trained models and clinical datasets to build a conversational AI that asks symptom-based questions.",
        solution: "Created an interactive medical chatbot that performs preliminary heart disease risk assessment through natural language conversation.",
        outcome: "Delivered an AI-powered screening tool that provides preliminary heart disease risk indicators, making early detection more accessible."
      }
    },
    {
      id: "real-time-streaming-rag",
      title: "Real-Time Streaming RAG",
      tagline: "Live-streaming AI answers with FastAPI",
      category: "AI / Backend",
      techStack: ["Python", "FastAPI", "RAG", "Streaming"],
      github: "https://github.com/Dakshayani-04/Build-a-Real-Time-Streaming-RAG-Application-with-FastAPI",
      liveDemo: "https://github.com/Dakshayani-04/Build-a-Real-Time-Streaming-RAG-Application-with-FastAPI",
      videoPlaceholder: true,
      journey: {
        problem: "Standard RAG applications make users wait for the entire response to generate before displaying anything, creating poor user experience.",
        approach: "Implemented server-sent events (SSE) with FastAPI to stream LLM-generated responses token by token as they're produced.",
        solution: "Built a real-time streaming RAG application where answers appear word-by-word, backed by document retrieval for grounded responses.",
        outcome: "Reduced perceived latency dramatically by streaming AI responses in real-time while maintaining retrieval-augmented accuracy."
      }
    },
    {
      id: "notification-rate-limiter",
      title: "Notification Rate Limiter",
      tagline: "Event-driven dispatch with RabbitMQ",
      category: "Backend",
      techStack: ["Python", "FastAPI", "RabbitMQ"],
      github: "https://github.com/Dakshayani-04/notification-rate-limiter-service",
      liveDemo: "https://github.com/Dakshayani-04/notification-rate-limiter-service",
      videoPlaceholder: true,
      journey: {
        problem: "High-throughput systems need to send millions of notifications without overwhelming downstream services or hitting API rate limits.",
        approach: "Designed an event-driven architecture with a FastAPI producer, RabbitMQ message queue, and a rate-limited consumer service.",
        solution: "Built a decoupled notification pipeline where messages are queued and dispatched at controlled rates, preventing service overload.",
        outcome: "Created a production-ready notification system with configurable rate limiting, message queuing, and reliable delivery guarantees."
      }
    },
    {
      id: "real-time-data-dashboard",
      title: "Real-Time Data Dashboard",
      tagline: "Live data visualization with WebSocket",
      category: "Data / Frontend",
      techStack: ["JavaScript", "WebSocket", "Chart.js"],
      github: "https://github.com/Dakshayani-04/Real-Time-Data-Dashboard",
      liveDemo: "https://github.com/Dakshayani-04/Real-Time-Data-Dashboard",
      videoPlaceholder: true,
      journey: {
        problem: "Static dashboards require manual refreshes and fail to capture rapidly changing data streams in real-time.",
        approach: "Implemented WebSocket connections for bi-directional, live data streaming with dynamic chart rendering.",
        solution: "Built an interactive dashboard with real-time data visualization, auto-updating charts, and trend analysis capabilities.",
        outcome: "Delivered a live-updating analytics dashboard demonstrating real-time data processing and dynamic visualization skills."
      }
    },
    {
      id: "ai-personal-shopping",
      title: "AI-Powered Personal Shopping",
      tagline: "Intelligent product recommendations with ML",
      category: "AI/ML",
      techStack: ["Python", "Machine Learning", "NLP", "Recommendation Engine"],
      github: "https://github.com/Dakshayani-04/AI-Powered-Personal-Shopping",
      liveDemo: "https://github.com/Dakshayani-04/AI-Powered-Personal-Shopping",
      videoPlaceholder: true,
      journey: {
        problem: "Online shoppers are overwhelmed by vast product catalogs, leading to decision fatigue and missed relevant products.",
        approach: "Built a recommendation engine combining collaborative filtering and NLP-based product understanding for personalized suggestions.",
        solution: "Developed an AI shopping assistant that learns user preferences and delivers context-aware product recommendations.",
        outcome: "Created an intelligent recommendation system demonstrating practical AI/ML application in e-commerce personalization."
      }
    },
    {
      id: "multi-agent-security",
      title: "Multi-Agent Security Research",
      tagline: "CrewAI-powered security strategy workflows",
      category: "AI/ML",
      techStack: ["Python", "CrewAI", "LLM", "Multi-Agent"],
      github: "https://github.com/Dakshayani-04/Multi-Agent-Security-Research-Strategy-Workflow-CrewAI",
      liveDemo: "https://github.com/Dakshayani-04/Multi-Agent-Security-Research-Strategy-Workflow-CrewAI",
      videoPlaceholder: true,
      journey: {
        problem: "Security research requires analyzing threats from multiple angles simultaneously — a task too complex for a single AI agent.",
        approach: "Orchestrated multiple specialized AI agents using CrewAI, each responsible for different aspects of security analysis.",
        solution: "Built a multi-agent system where researcher, analyst, and strategist agents collaborate on comprehensive security assessments.",
        outcome: "Demonstrated advanced multi-agent AI orchestration for real-world cybersecurity research and strategy generation."
      }
    },
    {
      id: "ecommerce-optimization",
      title: "Full-Stack E-Commerce Platform",
      tagline: "Scalable online shopping with performance optimization",
      category: "Full-Stack",
      techStack: ["React.js", "Node.js", "MongoDB", "REST API"],
      github: "https://github.com/Dakshayani-04/Full-Stack-E-Commerce-Optimization-Platform",
      liveDemo: "https://github.com/Dakshayani-04/Full-Stack-E-Commerce-Optimization-Platform",
      videoPlaceholder: true,
      journey: {
        problem: "Small businesses need affordable, performant e-commerce solutions that don't sacrifice user experience for scalability.",
        approach: "Architected a full-stack platform with optimized database queries, lazy loading, and CDN-ready asset management.",
        solution: "Built a complete e-commerce system with product management, cart, checkout, and performance-optimized frontend.",
        outcome: "Delivered a production-ready e-commerce platform showcasing full-stack architecture and performance optimization skills."
      }
    },
    {
      id: "local-llm-support-bot",
      title: "Local LLM Customer Support Bot",
      tagline: "Privacy-first AI support with local models",
      category: "AI / Backend",
      techStack: ["Python", "LLM", "Local AI", "NLP"],
      github: "https://github.com/Dakshayani-04/local-llm-customer-support-bot",
      liveDemo: "https://github.com/Dakshayani-04/local-llm-customer-support-bot",
      videoPlaceholder: true,
      journey: {
        problem: "Cloud-based AI chatbots raise data privacy concerns, and API costs make them expensive for small businesses.",
        approach: "Deployed a locally-hosted LLM to handle customer queries without sending sensitive data to external servers.",
        solution: "Created a privacy-respecting customer support bot running entirely on local infrastructure with zero API costs.",
        outcome: "Built a fully offline AI support system proving that effective NLP doesn't require cloud dependency."
      }
    },
    {
      id: "kafka-microservice",
      title: "Core Kafka Microservice",
      tagline: "Event-driven architecture with Apache Kafka",
      category: "Backend",
      techStack: ["Python", "Apache Kafka", "Microservices", "Docker"],
      github: "https://github.com/Dakshayani-04/core-kafka-microservice",
      liveDemo: "https://github.com/Dakshayani-04/core-kafka-microservice",
      videoPlaceholder: true,
      journey: {
        problem: "Traditional synchronous microservices create tight coupling and fail to handle high-throughput event streams efficiently.",
        approach: "Implemented Apache Kafka as the event backbone connecting loosely-coupled microservices with guaranteed message delivery.",
        solution: "Built a production-ready event-driven microservice architecture with Kafka producers, consumers, and topic management.",
        outcome: "Demonstrated mastery of event-driven architecture patterns essential for scalable distributed systems."
      }
    },
    {
      id: "mini-sql-engine",
      title: "Mini SQL Database Engine",
      tagline: "Build a database from scratch in Python",
      category: "Backend",
      techStack: ["Python", "SQL Parser", "B-Tree", "File I/O"],
      github: "https://github.com/Dakshayani-04/Build-a-Mini-SQL-Database-Engine-in-Python",
      liveDemo: "https://github.com/Dakshayani-04/Build-a-Mini-SQL-Database-Engine-in-Python",
      videoPlaceholder: true,
      journey: {
        problem: "Understanding database internals is crucial for engineers but most learn databases only through ORMs and high-level APIs.",
        approach: "Implemented core database components from scratch: SQL parser, query executor, B-Tree indexing, and file-based storage.",
        solution: "Built a functioning SQL database engine supporting CREATE, INSERT, SELECT, WHERE, and JOIN operations.",
        outcome: "Deepened understanding of DBMS internals — parsing, indexing, query optimization — by building one from the ground up."
      }
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. EXPERIENCE & INTERNSHIPS
  // ----------------------------------------------------------------------------
  // Reverse chronological order of professional and internship experience.
  // "achievements" array powers animated count-up stat badges on cards.
  experience: [
    {
      role: "Business Analyst Intern",
      company: "Seaok",
      duration: "May 2026 – Aug 2026",
      location: "Virtual",
      type: "Virtual",
      responsibilities: [
        "Conducted business requirement analysis and stakeholder communication",
        "Analyzed operational data to identify process improvement opportunities",
        "Prepared analytical reports and data-driven recommendations",
        "Collaborated with cross-functional teams on strategic initiatives"
      ],
      tools: ["Data Analysis", "Business Intelligence", "Documentation"],
      achievements: [
        { label: "Months", value: 3 }
      ]
    },
    {
      role: "AI Intern",
      company: "EduExpose Pvt. Ltd.",
      duration: "May 2026 – Jun 2026",
      location: "Hyderabad, TS",
      type: "Hybrid",
      responsibilities: [
        "Gained hands-on experience in AI/ML fundamentals, model training, and feature engineering",
        "Participated in AI model experimentation and data preprocessing using Python",
        "Collaborated in hybrid team workflows to analyze dataset metrics",
        "Integrated AI components into module pipelines"
      ],
      tools: ["Python", "Machine Learning", "Data Preprocessing"],
      achievements: [
        { label: "ML Models", value: 2 }
      ]
    },
    {
      role: "Full-Stack Development Intern",
      company: "Technical Hub Pvt. Ltd.",
      duration: "May 2025 – May 2026",
      location: "Kakinada, AP",
      type: "On-site",
      responsibilities: [
        "Completed intensive 12-month full-stack development program focused on React and Node.js",
        "Developed and deployed EcoVana and TechNexus as capstone projects",
        "Built responsive UIs and backend RESTful APIs",
        "Executed API testing and debugging with Postman",
        "Collaborated using Git/GitHub within Agile development lifecycle"
      ],
      tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "Postman"],
      achievements: [
        { label: "Projects Shipped", value: 2 },
        { label: "Months", value: 12 }
      ]
    },
    {
      role: "Web Development Intern",
      company: "Tamizhan IT",
      duration: "May 2024 – Jun 2024",
      location: "Virtual",
      type: "Virtual",
      responsibilities: [
        "Gained foundational experience in web development technologies",
        "Built responsive web layouts using HTML, CSS, and JavaScript",
        "Collaborated remotely with development teams"
      ],
      tools: ["HTML", "CSS", "JavaScript"],
      achievements: [
        { label: "Months", value: 2 }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 8. CERTIFICATIONS
  // ----------------------------------------------------------------------------
  // Industry-recognized credentials. Set 'image' to local asset path or null.
  // Replace '[ADD VERIFICATION LINK]' with actual credential verification URLs.
  certifications: [
    {
      name: "Oracle Certified Foundations Associate — Database, GenAI & Cloud Infrastructure (OCI 2025)",
      issuer: "Oracle",
      date: "Oct 2025",
      image: "assets/images/cert-oracle-oci.png",
      verifyLink: "[ADD VERIFICATION LINK]"
    },
    {
      name: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "Nov 2025",
      image: "assets/images/cert-oracle-ai-vector.png",
      verifyLink: "[ADD VERIFICATION LINK]"
    },
    {
      name: "Google Cloud Career Launchpad: Generative AI Leader Track",
      issuer: "Google Cloud",
      date: "Dec 2025",
      image: "assets/images/cert-google-cloud.png",
      verifyLink: "[ADD VERIFICATION LINK]"
    },
    {
      name: "MongoDB Certified Associate Developer",
      issuer: "MongoDB",
      date: "Mar 2026",
      image: "assets/images/cert-mongodb.png",
      verifyLink: "[ADD VERIFICATION LINK]"
    },
    {
      name: "GitHub Foundations",
      issuer: "Microsoft",
      date: "Apr 2026",
      image: "assets/images/cert-github-foundations.png",
      verifyLink: "[ADD VERIFICATION LINK]"
    }
  ],

  // ----------------------------------------------------------------------------
  // 9. COMPETITIVE PROGRAMMING & METRICS STRIP
  // ----------------------------------------------------------------------------
  // Highlight stats displayed in hero / proof tickers across the portfolio.
  competitiveProgramming: [
    {
      platform: "LeetCode",
      stat: "1563",
      label: "Contest Rating",
      extra: "150+ Problems · 50 Days Badge",
      link: "https://leetcode.com/u/Dakshayani25/",
      icon: "⚡"
    },
    {
      platform: "HackerRank",
      stat: "5★",
      label: "Gold Badge",
      extra: "Problem Solving, Java, Python, C",
      link: "https://www.hackerrank.com/profile/kaledakshayani",
      icon: "🏆"
    },
    {
      platform: "CodeChef",
      stat: "1304",
      label: "Peak Rating",
      extra: "",
      link: "https://www.codechef.com/users/dakshu_kale",
      icon: "🍳"
    },
    {
      platform: "GeeksforGeeks",
      stat: "75+",
      label: "Problems Solved",
      extra: "",
      link: "https://www.geeksforgeeks.org/user/kaledaks4vw5/",
      icon: "📗"
    }
  ],

  // ----------------------------------------------------------------------------
  // 10. CONTACT, SOCIALS & EMAIL DISPATCH
  // ----------------------------------------------------------------------------
  // Communication channels, availability indicator, and EmailJS configuration.
  contact: {
    emails: [
      "dakshayani0415@gmail.com",
      "dakshayani0405@gmail.com"
    ],
    phone: "+91-9014634627",
    linkedin: "https://www.linkedin.com/in/dakshayani-kale-5a5774294",
    github: "https://github.com/Dakshayani-04",
    availability: {
      status: "open",
      text: "Open to Internships & Full-Time Roles (2027)"
    },
    // EmailJS Credentials for portfolio contact form submission
    formServiceId: "service_2ga1ydm",
    formTemplateId: "template_a4csh3s",
    formPublicKey: "CIoag3VRbnD-lAmC5",
    codingProfiles: [
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/Dakshayani25/"
      },
      {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/kaledakshayani"
      },
      {
        name: "CodeChef",
        url: "https://www.codechef.com/users/dakshu_kale"
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/user/kaledaks4vw5/"
      }
    ]
  }
};
