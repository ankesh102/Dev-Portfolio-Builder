import { db } from "../server/db";
import { projects, experiences, skills, education, certifications, achievements } from "../shared/schema";
import { sql } from "drizzle-orm";

async function main() {
  console.log("Seeding database with Ankesh Kumar Pandey's portfolio data...");

  // Clear existing data
  await db.delete(projects);
  await db.delete(experiences);
  await db.delete(skills);
  await db.delete(education);
  await db.delete(certifications);
  await db.delete(achievements);

  // Seed Projects
  await db.insert(projects).values([
    {
      title: "Real Time Chat App (MERN Stack)",
      description: "Developed a real-time one-to-one chat application using Socket.IO for instant messaging. Implemented features such as online status indicators, typing animations, and emoji/image sharing. Deployed the full-stack MERN application on Render with secure MongoDB-backed chat message storage.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      githubUrl: "https://github.com/ankesh102/AnkyChat-MERN",
      liveUrl: "https://anky-chat.onrender.com/",
      imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800",
      order: 1
    },
    {
      title: "Placement Portal Web Application",
      description: "Built a placement management portal with separate user and admin interfaces. Features include student registration, admin dashboard, and responsive webpages for different portal operations. Implemented admin controls for managing enrolled students, including the ability to block and unblock user accounts.",
      technologies: ["HTML", "JavaScript", "Bootstrap", "Advanced CSS"],
      githubUrl: "https://github.com/ankesh102/Placement-Portal",
      liveUrl: "https://ankesh102.github.io/Placement-Portal/",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      order: 2
    },
    {
      title: "Portfolio Web App",
      description: "Built an interactive and responsive personal portfolio website. Dedicated sections for projects, qualifications, licenses, and personal information. Utilized multiple NPM libraries to create a polished, interactive interface.",
      technologies: ["React.js", "JavaScript", "Material UI", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/ankesh102/portfolio-website",
      liveUrl: "https://ankesh102.github.io/portfolio-website/",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      order: 3
    }
  ]);

  // Seed Experiences
  await db.insert(experiences).values([
    {
      role: "Software Engineer | Full Stack",
      company: "TransUnion GCC",
      duration: "Feb 2024 - Present",
      achievements: [
        "Started as an Intern working on a legacy portal (Java, JSP); converted to Full-Time Software Engineer after 4 months.",
        "Working on the TruContact Portfolio (Trusted Call Solution), contributing to scalable enterprise communication systems.",
        "Core contributor to SDPR microservice — a policy management service responsible for storing policy and subscription data used for real-time call treatment decisions.",
        "Led AAM microservice, the central Account & Administrative Management system acting as the source of truth for user and account data across services.",
        "Full-stack developer using Spring Boot, Microservices, MongoDB, and Angular.",
        "Managed source code repositories and contributed to CI/CD pipelines."
      ],
      order: 1
    }
  ]);

  // Seed Skills
  await db.insert(skills).values([
    { category: "Languages", name: "Java", level: 80, order: 1 },
    { category: "Languages", name: "C++", level: 75, order: 2 },
    { category: "Languages", name: "Python", level: 55, order: 3 },
    { category: "Languages", name: "CSS", level: 60, order: 4 },
    { category: "Languages", name: "JavaScript", level: 75, order: 5 },
    { category: "Frameworks", name: "Spring Boot", level: 90, order: 6 },
    { category: "Frameworks", name: "ReactJS", level: 85, order: 7 },
    { category: "Frameworks", name: "NodeJS", level: 80, order: 8 },
    { category: "Frameworks", name: "Express", level: 80, order: 9 },
    { category: "Frameworks", name: "Bootstrap", level: 90, order: 10 },
    { category: "Frameworks", name: "Angular", level: 75, order: 11 },
    { category: "Libraries & Tools", name: "Tailwind CSS", level: 85, order: 12 },
    { category: "Libraries & Tools", name: "Material UI", level: 80, order: 13 },
    { category: "Libraries & Tools", name: "Redux", level: 75, order: 14 },
    { category: "Libraries & Tools", name: "Socket.io", level: 80, order: 15 },
    { category: "Databases", name: "MongoDB", level: 85, order: 16 },
    { category: "Databases", name: "MySQL", level: 50, order: 17 },
    { category: "DevOps & Cloud", name: "Docker", level: 75, order: 18 },
    { category: "DevOps & Cloud", name: "AWS (EC2)", level: 70, order: 19 },
    { category: "DevOps & Cloud", name: "Git", level: 90, order: 20 },
    { category: "DevOps & Cloud", name: "CI/CD", level: 75, order: 21 }
  ]);

  // Seed Education
  await db.insert(education).values([
    {
      degree: "B.Tech in Computer Science",
      college: "Lovely Professional University",
      year: "July 2024",
      location: "Phagwara, Punjab, India",
      cgpa: "8.21 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Advanced Object-Oriented Programming",
        "Computer Networks",
        "Agile Basics, Cloud Basics, DevOps",
        "Spring Boot, Maven, WebServices REST",
        "Unit Testing, CI/CD Tools",
        "Angular, React"
      ],
      order: 1
    }
  ]);

  // Seed Certifications
  await db.insert(certifications).values([
    {
      name: "Data Structure and Algorithms",
      issuer: "GeeksForGeeks",
      link: "https://media.geeksforgeeks.org/courses/certificates/077068ece2f67152213182125700c82d.pdf",
      order: 1
    },
    {
      name: "C++ Programming",
      issuer: "Coding Ninjas",
      link: "https://certificate.codingninjas.com/view/740a8d02b775e05f",
      order: 2
    },
    {
      name: "Certified Full Stack Web Developer",
      issuer: "Udemy (by Dr. Angela Yu)",
      link: "https://www.udemy.com/certificate/UC-dd956353-66ed-4a1d-b4f2-024ff6aebea7/",
      order: 3
    },
    {
      name: "Learn C++ Programming: Beginner to Advance",
      issuer: "Udemy (by Abdul Bari)",
      link: "https://www.udemy.com/certificate/UC-ab52b17d-0d21-4ca7-b09d-529e51d94464/",
      order: 4
    },
    {
      name: "Database Management System Part-1",
      issuer: "Infosys Springboard",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01275806667282022456_shared/1-60b5cb16-6e40-407a-9ae9-9ce84c68c446.pdf",
      order: 5
    }
  ]);

  // Seed Achievements
  await db.insert(achievements).values([
    {
      description: "400+ DSA Problems Solved across LeetCode, GeeksForGeeks, and CodeStudio (Aug 2021 - Present)",
      links: [
        "https://leetcode.com/Ankesh102/",
        "https://auth.geeksforgeeks.org/user/ankeshpandey8/",
        "https://www.codingninjas.com/studio/profile/6a6941b5-e5f4-4571-87fe-12e23bffe58d"
      ],
      order: 1
    }
  ]);

  console.log("Database seeded successfully with Ankesh's data!");
  // process.exit(0);
}

main().catch((err) => {
  console.error("Error seeding database:", err);
  process.exit(1);
});
