// Projects pulled from the resume. `github` / `demo` are placeholders —
// swap in real repo / live URLs (use "" to hide a button on that card).

export const projects = [
  {
    id: "elite",
    name: "ELITE",
    subtitle: "AI-Powered Fitness, Nutrition & Performance Ecosystem",
    description:
      "An AI-driven wellness platform delivering personalized fitness and nutrition plans, real-time posture correction, AI-powered workout recommendations, and mental health tracking. Includes a multilingual AI coach with voice/chat support.",
    image: "/images/elite.png",
    stack: ["React", "Flask", "MongoDB", "Python"],
    category: "AI",
    featured: true,
    github: "https://github.com/",
    demo: "",
  },
  {
    id: "healthmate",
    name: "HealthMate",
    subtitle: "Personal Health Management System",
    description:
      "A healthcare management platform with role-based access (Patient, Doctor) for secure management of medical records, prescriptions, allergies, vaccinations, and appointments — plus medication reminders, health analytics, PDF reports, and an AI chatbot for medicine side-effect analysis.",
    image: "/images/healthmate.png",
    stack: ["React", "Flask", "MongoDB"],
    category: "AI",
    featured: true,
    github: "https://github.com/",
    demo: "",
  },
  {
    id: "gov-tms",
    name: "Training Management Platform",
    subtitle: "Government Training Management System",
    description:
      "A role-based TMS with RBAC across 4 admin tiers (Super, State, District, Venue) managing training programs across states, districts, mandals and venues — with attendance, venue, food and photo management, audit logs, and Cloudinary-backed media.",
    image: "/images/gov-tms.png",
    stack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    category: "Web",
    featured: true,
    github: "https://github.com/",
    demo: "",
  },
  {
    id: "sahayak",
    name: "SAHAYAK",
    subtitle: "AI-Powered Internship Companion",
    description:
      "An AI-powered internship platform connecting students with opportunities, especially for underrepresented communities. Features an inclusive multilingual interface, guided application workflows, an internship tracking dashboard, real-time data scraping, and a mentorship chatbot.",
    image: "/images/sahayak.png",
    stack: ["React.js", "Flask", "MongoDB", "REST APIs"],
    category: "AI",
    featured: true,
    github: "https://github.com/",
    demo: "",
  },
  {
    id: "blogging-platform",
    name: "Sports & Travel Blog",
    subtitle:
      "A blogging platform to create, share, and explore user-generated content on sports and travel experiences.",
    description:
      "A dynamic web application for user-generated sports and travel blogs. Features full CRUD functionality, secure user authentication, image uploads, category-based content filtering, and an independently managed backend and UI.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    category: "Web",
    featured: false,
    github: "https://github.com/",
    demo: "",
  },
  {
    id: "crash-prevention",
    name: "IoT Crash Prevention",
    subtitle:
      "An IoT-based crash prevention system designed to enhance road safety through driver monitoring.",
    description:
      "An IoT-based safety system integrating computer vision and embedded hardware to prevent road accidents. Monitors driver fatigue and posture in real-time using MediaPipe and OpenCV, delivering instant audio warnings and microcontroller-managed alerts.",
    stack: ["Python", "Arduino", "OpenCV", "MediaPipe"],
    category: "IoT",
    featured: false,
    github: "https://github.com/",
    demo: "",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories = ["All", "Web", "AI", "IoT", "Others"];
