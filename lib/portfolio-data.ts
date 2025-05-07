export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  highlightKeyword?: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  completionDate?: string
  longDescription?: string
  features?: string[]
  process?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    "id": "apps-design-1", 
    "title": "Financial Apps UI/UX Design", 
    "description": "A sleek and intuitive UI/UX design crafted for a financial application, focusing on user-friendly data visualization, account management, and real-time insights.", 
    "category": "apps-design",
    "highlightKeyword": "Financial Apps", 
    "image": "/design/app-design-1.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-2", 
    "title": "iBanking Apps UI/UX Design", 
    "description": "An intuitive iBanking UI/UX for seamless account management, secure transactions, and clear financial insights.", 
    "category": "apps-design",
    "highlightKeyword": "iBanking Apps", 
    "image": "/design/app-design-2.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "December 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-3", 
    "title": "Fitness Apps UI/UX Design", 
    "description": "An intuitive UI/UX design for a fitness app focused on workout tracking, progress insights, and user-friendly navigation.", 
    "category": "apps-design",
    "highlightKeyword": "Fitness Apps", 
    "image": "/design/app-design-3.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-4", 
    "title": "E-commerce Apps UI/UX Design", 
    "description": "Clean and modern UI/UX for an e-commerce app, ensuring smooth browsing, easy checkout, and personalized shopping experience.", 
    "category": "apps-design",
    "highlightKeyword": "E-commerce Apps", 
    "image": "/design/app-design-4.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-5", 
    "title": "Finance Apps UI/UX Design", 
    "description": "Sleek UI/UX for a financial app with clear visuals, easy account management, and real-time insights.", 
    "category": "apps-design",
    "highlightKeyword": "Finance Apps", 
    "image": "/design/app-design-5.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-6", 
    "title": "Chatbot Apps UI/UX Design", 
    "description": "Smart and simple UI/UX for a chatbot app, enabling smooth conversations and quick user support.", 
    "category": "apps-design",
    "highlightKeyword": "Chatbot Apps", 
    "image": "/design/app-design-6.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-7", 
    "title": "Fitness Tracking Apps UI/UX Design", 
    "description": "Clean UI/UX for a fitness app with workout tracking, progress monitoring, and goal setting.", 
    "category": "apps-design",
    "highlightKeyword": "Fitness Tracking Apps", 
    "image": "/design/app-design-7.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "apps-design-8", 
    "title": "Mental Health Apps UI/UX Design", 
    "description": "Calm and thoughtful UI/UX for a mental health app, supporting mood tracking, journaling, and guided sessions.", 
    "category": "apps-design",
    "highlightKeyword": "Mental Health Apps", 
    "image": "/design/app-design-8.png", 
    "technologies": ["Figma", "Figjam", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-1", 
    "title": "Foxbridge Golf Club Website Design", 
    "description": "An elegant and sophisticated website design for Foxbridge Golf Club, featuring course information, membership details, and online booking system with a premium feel.", 
    "category": "web-design",
    "highlightKeyword": "Golf Club", 
    "image": "/design/web-design-1.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-2", 
    "title": "Urban Fitness Center Website Design", 
    "description": "A dynamic and energetic website design for Urban Fitness Center, showcasing class schedules, trainer profiles, and membership packages with an engaging user interface.", 
    "category": "web-design",
    "highlightKeyword": "Fitness Center", 
    "image": "/design/web-design-2.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-3", 
    "title": "TechStartup Hub Website Design", 
    "description": "A modern and innovative website design for TechStartup Hub, featuring startup resources, event listings, and community networking with a tech-forward aesthetic.", 
    "category": "web-design",
    "highlightKeyword": "Tech Hub", 
    "image": "/design/web-design-3.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-4", 
    "title": "GreenLife Organic Market Website Design", 
    "description": "A fresh and natural website design for GreenLife Organic Market, showcasing product catalog, delivery services, and sustainable practices with an eco-friendly approach.", 
    "category": "web-design",
    "highlightKeyword": "Organic Market", 
    "image": "/design/web-design-4.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-5", 
    "title": "Creative Minds Art Gallery Website Design", 
    "description": "An artistic and immersive website design for Creative Minds Art Gallery, featuring exhibition showcases, artist portfolios, and event calendars with a creative touch.", 
    "category": "web-design",
    "highlightKeyword": "Art Gallery", 
    "image": "/design/web-design-5.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-6", 
    "title": "Global Travel Adventures Website Design", 
    "description": "A vibrant and engaging website design for Global Travel Adventures, featuring destination guides, booking systems, and travel tips with an adventurous spirit.", 
    "category": "web-design",
    "highlightKeyword": "Travel Agency", 
    "image": "/design/web-design-6.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-7", 
    "title": "SmartHome Solutions Website Design", 
    "description": "A sleek and intuitive website design for SmartHome Solutions, showcasing smart home products, installation services, and automation guides with a modern tech feel.", 
    "category": "web-design",
    "highlightKeyword": "Smart Home", 
    "image": "/design/web-design-7.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-8", 
    "title": "HealthFirst Medical Center Website Design", 
    "description": "A professional and trustworthy website design for HealthFirst Medical Center, featuring appointment booking, doctor profiles, and health resources with a caring approach.", 
    "category": "web-design",
    "highlightKeyword": "Medical Center", 
    "image": "/design/web-design-8.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-9", 
    "title": "EduTech Learning Platform Website Design", 
    "description": "An interactive and engaging website design for EduTech Learning Platform, featuring course catalogs, student dashboards, and learning resources with an educational focus.", 
    "category": "web-design",
    "highlightKeyword": "Education", 
    "image": "/design/web-design-9.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-10", 
    "title": "Gourmet Delights Restaurant Website Design", 
    "description": "A mouthwatering website design for Gourmet Delights Restaurant, featuring menu showcases, reservation system, and culinary events with an appetizing presentation.", 
    "category": "web-design",
    "highlightKeyword": "Restaurant", 
    "image": "/design/web-design-10.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-11", 
    "title": "Fashion Forward Boutique Website Design", 
    "description": "A stylish and trendy website design for Fashion Forward Boutique, featuring product collections, size guides, and fashion blogs with a chic aesthetic.", 
    "category": "web-design",
    "highlightKeyword": "Fashion Boutique", 
    "image": "/design/web-design-11.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-12", 
    "title": "AutoCare Service Center Website Design", 
    "description": "A reliable and professional website design for AutoCare Service Center, featuring service booking, maintenance tips, and customer testimonials with a trustworthy approach.", 
    "category": "web-design",
    "highlightKeyword": "Auto Service", 
    "image": "/design/web-design-12.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-13", 
    "title": "PetCare Veterinary Clinic Website Design", 
    "description": "A caring and friendly website design for PetCare Veterinary Clinic, featuring appointment scheduling, pet care tips, and emergency services with a compassionate touch.", 
    "category": "web-design",
    "highlightKeyword": "Veterinary Clinic", 
    "image": "/design/web-design-13.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-14", 
    "title": "GreenScape Landscaping Website Design", 
    "description": "A natural and refreshing website design for GreenScape Landscaping, featuring project portfolios, service offerings, and garden tips with an organic feel.", 
    "category": "web-design",
    "highlightKeyword": "Landscaping", 
    "image": "/design/web-design-14.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-15", 
    "title": "TechRepair Solutions Website Design", 
    "description": "A technical and efficient website design for TechRepair Solutions, featuring repair services, device diagnostics, and support resources with a professional approach.", 
    "category": "web-design",
    "highlightKeyword": "Tech Repair", 
    "image": "/design/web-design-15.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "website-design-16", 
    "title": "MusicMasters Academy Website Design", 
    "description": "A harmonious and engaging website design for MusicMasters Academy, featuring course offerings, instructor profiles, and performance schedules with a musical theme.", 
    "category": "web-design",
    "highlightKeyword": "Music Academy", 
    "image": "/design/web-design-16.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Figjam", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-1", 
    "title": "Divo Branding – Bold Identity Design", 
    "description": "Creative and cohesive branding for Divo, featuring a bold visual identity, modern typography, and versatile logo applications across digital and print.", 
    "category": "branding",
    "highlightKeyword": "Logo Design", 
    "image": "/design/branding-1.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-2", 
    "title": "FifthSip Coffee Shop – Warm & Inviting Branding", 
    "description": "Charming and cozy branding for FifthSip Coffee Shop, featuring a warm color palette, hand-crafted logo, and a welcoming atmosphere for coffee lovers.", 
    "category": "branding",
    "highlightKeyword": "Logo Design", 
    "image": "/design/branding-2.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-3", 
    "title": "NTREX AI Connection – Cutting-Edge AI Solutions", 
    "description": "Innovative and powerful branding for NTREX AI Connection, showcasing advanced AI-driven technologies that connect businesses with intelligent automation and data insights.", 
    "category": "branding",
    "highlightKeyword": "Brand Guideline", 
    "image": "/design/branding-3.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "branding-4", 
    "title": "Matrixa Health – Empowering Wellness through Technology", 
    "description": "Modern and sleek branding for Matrixa Health, blending technology with wellness to provide innovative health solutions, personalized care, and real-time health monitoring.", 
    "category": "branding",
    "highlightKeyword": "Medical Logo", 
    "image": "/design/branding-4.png", 
    "technologies": ["Illustrator", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-1", 
    "title": "Helping Australia – Supportive Email Template", 
    "description": "A simple and impactful email template for Helping Australia, designed to engage and inspire support for local causes.", 
    "category": "email-template",
    "highlightKeyword": "Sass Email Template", 
    "image": "/design/email-template-1.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-2", 
    "title": "HR Email Template – Streamlining Communication", 
    "description": "A polished and efficient HR email template designed to simplify recruitment, onboarding, and employee updates.", 
    "category": "email-template",
    "highlightKeyword": "HR Email Template", 
    "image": "/design/email-template-2.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-3", 
    "title": "Event Management Email Template", 
    "description": "A professional and engaging email template for event management, designed to streamline communication, invite attendees, and manage event details.", 
    "category": "email-template",
    "highlightKeyword": "Event Management", 
    "image": "/design/email-template-3.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-4", 
    "title": "Yoga Email Template – Tranquil and Inviting", 
    "description": "A calming and welcoming email template for yoga studios, designed to promote classes, events, and wellness tips with a peaceful tone.", 
    "category": "email-template",
    "highlightKeyword": "Yoga", 
    "image": "/design/email-template-4.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-5", 
    "title": "Community Email Template – Building Connections", 
    "description": "A warm and engaging email template designed to foster communication, promote local events, and strengthen community bonds.", 
    "category": "email-template",
    "highlightKeyword": "Community", 
    "image": "/design/email-template-5.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  {
    "id": "email-template-6", 
    "title": "Blink Email Build – Fast and Effective Communication", 
    "description": "A sleek and responsive email template for Blink, designed to deliver quick updates, announcements, and notifications with ease.", 
    "category": "email-template",
    "highlightKeyword": "Email Build", 
    "image": "/design/email-template-6.png", 
    "technologies": ["Figma", "Illustrator", "Photoshop", "Google Doc"], 
    "demoUrl": "https://example.com/demo",
    "githubUrl": "https://github.com/example/project",
    "completionDate": "September 2023",
    "features": [
      "Multi-source data aggregation",
      "Historical weather data analysis",
      "Forecast prediction algorithms",
      "Geolocation-based queries"
    ]
  },
  
]


export const sectionInfo = {
  "apps-design": {
    "title": "Apps Design",
    "description": "Explore my apps design projects with a focus on user experience and design."
  },
  "branding": {
    "title": "Branding",
    "description": "Discover my branding projects with a range of features and capabilities."
  },
  "email-template": {
    "title": "Email Template",
    "description": "Check out my email template projects with a focus on user experience and design."
  },
}
