import { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx_ZoxF2coWRvIX_XvpoWMTzEsbC7Ar7dsLNMmpEPZj0ghkV2DYEOOjk4628YrcMUP3/exec";
const API_KEY = "STOKNIT12345";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        console.error("❌ [ERROR] Invalid request method:", req.method);
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    // Ensure the API Key is included
    const payload = JSON.stringify({ name, email, message, api_key: API_KEY });

    console.log("✅ Sending Data to Google Sheets:", payload);

    try {
        const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload
        });

        const result = await response.text();
        console.log("✅ Google Sheets API Response:", result);

        if (result !== "Success") {
            throw new Error(`Google Sheets API failed: ${result}`);
        }

        return res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
        console.error("❌ [ERROR] API request failed:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
