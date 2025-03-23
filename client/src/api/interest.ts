import { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("✅ Incoming Request:", req.method, req.headers);
    
    // Ensure JSON body parsing
    if (req.method === "POST" && !req.body) {
        console.error("❌ No request body detected.");
        return res.status(400).json({ error: "Invalid request data" });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end(); // ✅ Handle CORS preflight
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email) {
            console.error("❌ Missing required fields:", { name, email });
            return res.status(400).json({ error: "Invalid request data" });
        }

        const payload = JSON.stringify({ name, email, message, api_key: API_KEY });

        console.log("🚀 Sending Payload to Google Sheets:", payload);

        const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
        });

        const result = await response.text();
        console.log("✅ Google Sheets Response:", result);

        return res.status(200).json({ success: true, message: result });
    } catch (error) {
        console.error("❌ API request failed:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
