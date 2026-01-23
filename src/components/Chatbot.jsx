import { useState, useEffect, useRef } from "react";

/* ---------------- FLOW STATES ---------------- */
const FLOW = {
  WELCOME: "WELCOME",
  SERVICES: "SERVICES",
  HOW_AI: "HOW_AI",

  AI_CHATBOTS: "AI_CHATBOTS",
  WORKFLOW: "WORKFLOW",
  CRM: "CRM",
  LEADS: "LEADS",
  EMAIL: "EMAIL",
  DATA: "DATA",

  TALK_NAME: "TALK_NAME",
  TALK_EMAIL: "TALK_EMAIL",
  TALK_BUSINESS: "TALK_BUSINESS",
  THANK_YOU: "THANK_YOU",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [flow, setFlow] = useState(FLOW.WELCOME);
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [input, setInput] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  });

  const welcomeLoaded = useRef(false);

  /* ---------------- WELCOME FLOW ---------------- */
  useEffect(() => {
    if (welcomeLoaded.current) return;
    welcomeLoaded.current = true;

    setMessages([
      { from: "genie", text: "Welcome to Genie AI Automation.", type: "welcome" },
      { from: "genie", text: "We help businesses grow using AI-powered automation.", type: "welcome" },
      { from: "genie", text: "What would you like to explore today?", type: "welcome" },
    ]);

    setShowOptions(true);
  }, []);

  /* ---------------- HELPERS ---------------- */
  const addBot = (text) =>
    setMessages([{ from: "genie", text }]); // 🔥 replace content (important)

  const addUser = (text) =>
    setMessages((m) => [...m, { from: "user", text }]);

  const clearWelcome = () =>
    setMessages((m) => m.filter((msg) => msg.type !== "welcome"));

  /* ---------------- FLOW HANDLER ---------------- */
const handleFlow = (next) => {
  // SPECIAL CASE: GOING BACK TO WELCOME
  if (next === FLOW.WELCOME) {
    setFlow(FLOW.WELCOME);
    setMessages([
      { from: "genie", text: "Welcome to Genie AI Automation.", type: "welcome" },
      { from: "genie", text: "We help businesses grow using AI-powered automation.", type: "welcome" },
      { from: "genie", text: "What would you like to explore today?", type: "welcome" },
    ]);
    setShowOptions(true);
    return;
  }

  // NORMAL FLOW
  setShowOptions(false);
  setFlow(next);

  switch (next) {
    case FLOW.SERVICES:
      setMessages([{ from: "genie", text: "Here are the AI automation services we offer.\n\nSelect a service to learn more." }]);
      break;

    case FLOW.AI_CHATBOTS:
      setMessages([{ from: "genie", text: "AI Chatbots\n\n• 24/7 customer support\n• Lead qualification\n• Appointment booking" }]);
      break;

    case FLOW.WORKFLOW:
      setMessages([{ from: "genie", text: "Workflow Automation\n\n• Remove repetitive tasks\n• Automate approvals\n• Tool integrations" }]);
      break;

    case FLOW.CRM:
      setMessages([{ from: "genie", text: "CRM Automation\n\n• Auto-updated leads\n• Clean data\n• Better sales visibility" }]);
      break;

    case FLOW.LEADS:
      setMessages([{ from: "genie", text: "Lead Management\n\n• Capture leads\n• Score automatically\n• Route instantly" }]);
      break;

    case FLOW.EMAIL:
      setMessages([{ from: "genie", text: "Email Automation\n\n• Follow-ups\n• Campaigns\n• Re-engagement" }]);
      break;

    case FLOW.DATA:
      setMessages([{ from: "genie", text: "Data & Reporting\n\n• Dashboards\n• Automated reports\n• Faster insights" }]);
      break;

    case FLOW.HOW_AI:
      setMessages([{ from: "genie", text: "AI helps businesses save time, reduce costs, and scale faster." }]);
      break;

    case FLOW.TALK_NAME:
      setMessages([{ from: "genie", text: "Let’s get started.\n\nWhat is your name?" }]);
      break;

    case FLOW.TALK_EMAIL:
      setMessages([{ from: "genie", text: "Please share your email address." }]);
      break;

    case FLOW.TALK_BUSINESS:
      setMessages([{ from: "genie", text: "What type of business are you running?" }]);
      break;

    case FLOW.THANK_YOU:
      setMessages([
        { from: "genie", text: "Thank you for sharing your details." },
        { from: "genie", text: "Our team will contact you shortly." },
      ]);
      break;

    default:
      setMessages([{ from: "genie", text: "Please choose an option below." }]);
  }
};


  /* ---------------- USER INPUT HANDLER ---------------- */
  const handleUserInput = async () => {
    if (!input.trim()) return;

    addUser(input);

    if (flow === FLOW.TALK_NAME) {
      setFormData((p) => ({ ...p, name: input }));
      setInput("");
      handleFlow(FLOW.TALK_EMAIL);
    } else if (flow === FLOW.TALK_EMAIL) {
      setFormData((p) => ({ ...p, email: input }));
      setInput("");
      handleFlow(FLOW.TALK_BUSINESS);
    } else if (flow === FLOW.TALK_BUSINESS) {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `Business Type: ${input}`,
        source: "genie",
      };

      setInput("");
      addBot("Submitting your details...");

      try {
        await fetch("http://localhost:5000/submissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        handleFlow(FLOW.THANK_YOU);
      } catch {
        addBot("Submission failed. Please try again.");
      }
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="bg-white w-80 h-[460px] shadow-2xl rounded-xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 font-semibold">
            Genie
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.from === "genie" ? "text-gray-800" : "text-right text-blue-600"}
                style={{ whiteSpace: "pre-line" }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {(flow === FLOW.TALK_NAME ||
            flow === FLOW.TALK_EMAIL ||
            flow === FLOW.TALK_BUSINESS) && (
            <div className="p-2 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                className="flex-1 border rounded px-2 py-1 text-sm"
              />
              <button
                onClick={handleUserInput}
                className="bg-blue-600 text-white px-3 rounded"
              >
                Send
              </button>
            </div>
          )}

          <div className="p-2 border-t space-y-2">
            {flow === FLOW.WELCOME && showOptions && (
              <>
                <Btn text="Our Services" onClick={() => handleFlow(FLOW.SERVICES)} />
                <Btn text="How AI Helps My Business" onClick={() => handleFlow(FLOW.HOW_AI)} />
                <Btn text="Talk to an Expert" onClick={() => handleFlow(FLOW.TALK_NAME)} />
              </>
            )}

            {flow === FLOW.SERVICES && (
              <>
                <Btn text="AI Chatbots" onClick={() => handleFlow(FLOW.AI_CHATBOTS)} />
                <Btn text="Workflow Automation" onClick={() => handleFlow(FLOW.WORKFLOW)} />
                <Btn text="CRM Automation" onClick={() => handleFlow(FLOW.CRM)} />
                <Btn text="Lead Management" onClick={() => handleFlow(FLOW.LEADS)} />
                <Btn text="Email Automation" onClick={() => handleFlow(FLOW.EMAIL)} />
                <Btn text="Data & Reporting" onClick={() => handleFlow(FLOW.DATA)} />
                <Btn text="Back" onClick={() => handleFlow(FLOW.WELCOME)} />
              </>
            )}

            {flow !== FLOW.WELCOME && flow !== FLOW.SERVICES && (
              <Btn text="Back" onClick={() => handleFlow(FLOW.SERVICES)} />
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        Genie
      </button>
    </div>
  );
}

/* ---------------- BUTTON ---------------- */
function Btn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-100 hover:bg-blue-100 px-3 py-2 rounded text-left"
    >
      {text}
    </button>
  );
}
