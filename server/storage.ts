import { db } from "./db";
import {
  messages, projects, experiences, skills, education, certifications, achievements,
  type Message, type InsertMessage,
  type Project, type Experience, type Skill, type Education, type Certification, type Achievement
} from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getExperiences(): Promise<Experience[]>;
  getSkills(): Promise<Skill[]>;
  getEducation(): Promise<Education[]>;
  getCertifications(): Promise<Certification[]>;
  getAchievements(): Promise<Achievement[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.order);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.order);
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education).orderBy(education.order);
  }

  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications).orderBy(certifications.order);
  }

  async getAchievements(): Promise<Achievement[]> {
    return await db.select().from(achievements).orderBy(achievements.order);
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [created] = await db.insert(messages).values(message).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();