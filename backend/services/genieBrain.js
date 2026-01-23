export function detectIntent(message) {
  const msg = message.toLowerCase();

  if (msg.includes("price") || msg.includes("cost")) {
    return "pricing";
  }

  if (
    msg.includes("service") ||
    msg.includes("automation") ||
    msg.includes("chatbot") ||
    msg.includes("workflow") ||
    msg.includes("crm")
  ) {
    return "services";
  }

  if (
    msg.includes("contact") ||
    msg.includes("reach") ||
    msg.includes("expert") ||
    msg.includes("talk")
  ) {
    return "lead";
  }

  if (msg.includes("back")) {
    return "back";
  }

  return "general";
}
