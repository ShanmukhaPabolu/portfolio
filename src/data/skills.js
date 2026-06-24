// Skills table + island grouping for the Skill Explorer section.

export const skills = [
  { name: "Java", category: "Programming", level: "Proficient" },
  { name: "Python", category: "Programming", level: "Proficient" },
  { name: "C", category: "Programming", level: "Proficient" },
  { name: "JavaScript", category: "Programming", level: "Proficient" },
  { name: "HTML", category: "Frontend", level: "Proficient" },
  { name: "Tailwind CSS", category: "Frontend", level: "Proficient" },
  { name: "React.js", category: "Frontend", level: "Proficient" },
  { name: "Next.js", category: "Frontend", level: "Working Knowledge" },
  { name: "Node.js", category: "Backend", level: "Proficient" },
  { name: "Express.js", category: "Backend", level: "Proficient" },
  { name: "Flask", category: "Backend", level: "Proficient" },
  { name: "MongoDB", category: "Database", level: "Proficient" },
  { name: "MySQL", category: "Database", level: "Working Knowledge" },
  { name: "PostgreSQL", category: "Database", level: "Working Knowledge" },
  { name: "Git", category: "Tools", level: "Proficient" },
  { name: "GitHub", category: "Tools", level: "Proficient" },
  { name: "VS Code", category: "Tools", level: "Proficient" },
  { name: "Postman", category: "Tools", level: "Proficient" },
];

export const skillCategories = [
  "All",
  "Programming",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

// Treasure-map islands for the Skill Explorer section.
export const islands = [
  {
    id: "programming",
    name: "Programming Island",
    x: 18,
    y: 28,
    techs: ["Java", "Python", "C", "JavaScript"],
    projects: ["ELITE", "SAHAYAK", "HealthMate"],
    level: "Core language foundation across 4 languages",
  },
  {
    id: "frontend",
    name: "Frontend Island",
    x: 50,
    y: 14,
    techs: ["HTML", "Tailwind CSS", "React.js", "Next.js"],
    projects: ["ELITE", "Training Management Platform", "SAHAYAK"],
    level: "Builds production UI across all client projects",
  },
  {
    id: "backend",
    name: "Backend Island",
    x: 78,
    y: 30,
    techs: ["Node.js", "Express.js", "Flask"],
    projects: ["Training Management Platform", "ELITE", "HealthMate"],
    level: "Owns API design, auth, and business logic",
  },
  {
    id: "database",
    name: "Database Island",
    x: 32,
    y: 62,
    techs: ["MongoDB", "MySQL", "PostgreSQL"],
    projects: ["Training Management Platform", "ELITE", "HealthMate"],
    level: "Schema design across SQL & NoSQL stores",
  },
  {
    id: "ai",
    name: "AI Island",
    x: 66,
    y: 70,
    techs: ["AI Chatbots", "Recommendation Systems", "Posture/Health AI"],
    projects: ["ELITE", "SAHAYAK", "HealthMate"],
    level: "Applied AI across 3 production platforms",
  },
];
