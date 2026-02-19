import { db } from "../server/db";
import { projects, experiences, skills, education } from "../shared/schema";

async function main() {
  console.log("Seeding database...");

  // Seed Projects
  await db.insert(projects).values([
    {
      title: "E-Commerce Dashboard",
      description: "A modern analytics dashboard for e-commerce platforms featuring real-time data visualization and inventory management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
      githubUrl: "https://github.com/placeholder/dashboard",
      liveUrl: "https://demo-dashboard.example.com",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      order: 1
    },
    {
      title: "FinTech Mobile App",
      description: "A cross-platform financial application allowing users to track expenses, set budgets, and monitor investments securely.",
      technologies: ["React Native", "PostgreSQL", "Express", "Stripe API"],
      githubUrl: "https://github.com/placeholder/fintech-app",
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=800",
      order: 2
    },
    {
      title: "DevFlow Collaboration Tool",
      description: "A real-time workspace for developer teams with integrated chat, task tracking, and code review capabilities.",
      technologies: ["Next.js", "Socket.io", "Redis", "Framer Motion"],
      liveUrl: "https://devflow.example.com",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      order: 3
    }
  ]);

  // Seed Experiences
  await db.insert(experiences).values([
    {
      role: "Software Developer",
      company: "TechNova Solutions",
      duration: "Jan 2022 - Present",
      achievements: [
        "Architected and developed scalable frontend components reducing load time by 30%.",
        "Collaborated with product designers to implement pixel-perfect user interfaces.",
        "Mentored junior developers and led weekly code review sessions."
      ],
      order: 1
    },
    {
      role: "Junior Web Developer",
      company: "Creative Digital Agency",
      duration: "Jun 2020 - Dec 2021",
      achievements: [
        "Built and maintained responsive client websites using React and modern CSS.",
        "Integrated third-party APIs and streamlined deployment pipelines.",
        "Improved website accessibility scores to 99% across 10+ client projects."
      ],
      order: 2
    }
  ]);

  // Seed Skills
  await db.insert(skills).values([
    { category: "Programming Languages", name: "JavaScript", level: 90, order: 1 },
    { category: "Programming Languages", name: "TypeScript", level: 85, order: 2 },
    { category: "Programming Languages", name: "Python", level: 75, order: 3 },
    { category: "Frameworks", name: "React", level: 95, order: 4 },
    { category: "Frameworks", name: "Next.js", level: 80, order: 5 },
    { category: "Frameworks", name: "Node.js/Express", level: 85, order: 6 },
    { category: "Databases", name: "PostgreSQL", level: 80, order: 7 },
    { category: "Databases", name: "MongoDB", level: 70, order: 8 },
    { category: "Tools", name: "Git & GitHub", level: 90, order: 9 },
    { category: "Tools", name: "Docker", level: 75, order: 10 },
    { category: "Tools", name: "Figma", level: 65, order: 11 }
  ]);

  // Seed Education
  await db.insert(education).values([
    {
      degree: "B.S. in Computer Science",
      college: "State University of Technology",
      year: "2016 - 2020",
      order: 1
    }
  ]);

  console.log("Database seeded successfully!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Error seeding database:", err);
  process.exit(1);
});
