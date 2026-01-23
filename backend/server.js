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

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/health", (_, res) => res.json({ status: "OK" }));

app.use("/submissions", submissionRoutes);
app.use("/chat", chatRoutes);

app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));
