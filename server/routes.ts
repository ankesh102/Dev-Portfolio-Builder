import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.portfolio.getProjects.path, async (req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  app.get(api.portfolio.getExperiences.path, async (req, res) => {
    const data = await storage.getExperiences();
    res.json(data);
  });

  app.get(api.portfolio.getSkills.path, async (req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  app.get(api.portfolio.getEducation.path, async (req, res) => {
    const data = await storage.getEducation();
    res.json(data);
  });

  app.get(api.portfolio.getCertifications.path, async (req, res) => {
    const data = await storage.getCertifications();
    res.json(data);
  });

  app.get(api.portfolio.getAchievements.path, async (req, res) => {
    const data = await storage.getAchievements();
    res.json(data);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      
      // Note: Real email sending would require a service like SendGrid or Resend.
      // For now, we simulate the "getting mail" by confirming it's saved for ankesh.pandey8@gmail.com
      console.log(`Notification: New message from ${input.name} (${input.email}) sent to ankesh.pandey8@gmail.com`);
      
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}