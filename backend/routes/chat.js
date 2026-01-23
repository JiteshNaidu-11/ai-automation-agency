import express from "express";
import Submission from "../models/Submission.js";
import { detectIntent } from "../services/genieBrain.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message, lead, page } = req.body;
  const intent = detectIntent(message || "");

  /* ---------------- BACK HANDLING ---------------- */
  if (intent === "back") {
    return res.json({
      type: "back",
      title: "Services",
      content: "Here are the AI automation services we offer:",
      actions: [
        "AI Chatbots",
        "Workflow Automation",
        "CRM Automation",
        "Lead Management",
        "Email Automation",
        "Data & Reporting",
      ],
    });
  }

  /* ---------------- LEAD CAPTURE ---------------- */
  if (intent === "lead" && lead) {
    await Submission.create({
      ...lead,
      source: "genie",
    });

    return res.json({
      type: "final",
      title: "Thank You",
      content:
        "Thanks for sharing your details. Our team will contact you shortly.",
    });
  }

  /* ---------------- SERVICES LIST ---------------- */
  if (intent === "services") {
    return res.json({
      type: "services",
      title: "Our Services",
      content: "Choose a service to learn more:",
      actions: [
        "AI Chatbots",
        "Workflow Automation",
        "CRM Automation",
        "Lead Management",
        "Email Automation",
        "Data & Reporting",
      ],
    });
  }

  /* ---------------- SERVICE DETAILS ---------------- */
  const serviceDetails = {
    "AI Chatbots": {
      title: "AI Chatbots",
      content:
        "AI Chatbots provide instant responses to customers 24/7.\n\nThey help with FAQs, lead qualification, appointment booking, and support automation.",
    },

    "Workflow Automation": {
      title: "Workflow Automation",
      content:
        "Workflow automation eliminates repetitive manual tasks.\n\nWe automate approvals, task routing, tool integrations, and notifications.",
    },

    "CRM Automation": {
      title: "CRM Automation",
      content:
        "CRM automation keeps your customer data accurate and up-to-date.\n\nIt reduces manual entry and provides real-time sales insights.",
    },

    "Lead Management": {
      title: "Lead Management",
      content:
        "AI-powered lead management helps sales teams focus on high-intent leads.\n\nWe capture, score, and route leads automatically.",
    },

    "Email Automation": {
      title: "Email Automation",
      content:
        "Email automation sends personalized emails at the right time.\n\nThis includes follow-ups, campaigns, reminders, and re-engagement.",
    },

    "Data & Reporting": {
      title: "Data & Reporting",
      content:
        "Automated reporting provides real-time business insights.\n\nDashboards and reports are generated without manual effort.",
    },
  };

  if (serviceDetails[message]) {
    return res.json({
      type: "service_detail",
      title: serviceDetails[message].title,
      content: serviceDetails[message].content,
      actions: ["Back", "Talk to an Expert"],
    });
  }

  /* ---------------- PRICING ---------------- */
  if (intent === "pricing") {
    return res.json({
      type: "info",
      title: "Pricing",
      content:
        "Pricing depends on the scope and complexity of automation.\n\nWould you like to talk to an expert for a custom quote?",
      actions: ["Talk to an Expert", "Back"],
    });
  }

  /* ---------------- FALLBACK ---------------- */
  res.json({
    type: "general",
    title: "Genie",
    content:
      "I can help you explore our services or connect you with an expert.",
    actions: ["Our Services", "Talk to an Expert"],
  });
});

export default router;
