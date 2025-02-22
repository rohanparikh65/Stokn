import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInterestedUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/interest", async (req, res) => {
    try {
      const data = insertInterestedUserSchema.parse(req.body);
      const user = await storage.createInterestedUser(data);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: "Invalid request data" });
    }
  });

  return createServer(app);
}
