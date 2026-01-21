require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* -------------------- HEALTH CHECK -------------------- */
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Genie Backend",
    time: new Date().toISOString(),
  });
});

/* -------------------- CHAT ENDPOINT -------------------- */
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({
      reply: "Message is required.",
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Genie, an AI assistant for an AI Automation Agency. You help users understand services, automation, and booking calls.",
        },
        { role: "user", content: userMessage },
      ],
    });

    return res.json({
      reply: completion.choices[0].message.content,
      source: "openai",
    });

  } catch (error) {
    console.error("OPENAI ERROR:", error.message);

    const msg = userMessage.toLowerCase();
    let fallbackReply =
      "Hi! I’m Genie 🤖. I can help you learn about our services or how to get in touch.";

    if (msg.includes("service")) {
      fallbackReply =
        "We offer AI chatbots, workflow automation, CRM automation, email automation, and analytics solutions.";
    } else if (msg.includes("contact") || msg.includes("reach")) {
      fallbackReply =
        "You can contact us using the contact form on this website. Our team will respond shortly.";
    } else if (msg.includes("book") || msg.includes("call")) {
      fallbackReply =
        "You can book a call by clicking the Get Started or Book Appointment button.";
    }

    return res.json({
      reply: fallbackReply,
      source: "fallback",
    });
  }
});

/* -------------------- SERVER START -------------------- */
app.listen(PORT, () => {
  console.log(`Genie backend running on http://localhost:${PORT}`);
});
