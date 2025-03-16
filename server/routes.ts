import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/interest", async (req, res) => {
    console.log("📥 Incoming Request:", req.body);

    try {
      const { name, email, message } = req.body;
      if (!name || !email) {
        return res.status(400).json({ error: "Invalid request data" });
      }

      const payload = JSON.stringify({ name, email, message: message || "", api_key: "STOKNIT12345" });

      console.log("🚀 Forwarding Payload to Google Sheets:", payload);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx_ZoxF2coWRvIX_XvpoWMTzEsbC7Ar7dsLNMmpEPZj0ghkV2DYEOOjk4628YrcMUP3/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
        }
      );

      const textResponse = await response.text();
      console.log("✅ Google Sheets Response:", textResponse);

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json({ success: true, message: textResponse });
    } catch (error) {
      console.error("❌ API request failed:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return createServer(app);
}
