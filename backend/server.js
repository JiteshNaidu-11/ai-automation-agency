import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import submissionRoutes from "./routes/submission.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE (IMPORTANT FOR RENDER)
app.get("/", (req, res) => {
  res.json({ status: "Genie backend running" });
});

// HEALTH CHECK
app.get("/health", (_, res) => res.json({ status: "OK" }));

// ROUTES
app.use("/submissions", submissionRoutes);
app.use("/chat", chatRoutes);

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

// ✅ USE RENDER PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on port ${PORT}`)
);
