import express from "express";
import Submission from "../models/Submission.js";

const router = express.Router();

/* ---------------- CREATE SUBMISSION ---------------- */
router.post("/", async (req, res) => {
  try {
    const { name, email, message, source } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required",
      });
    }

    const submission = await Submission.create({
      name,
      email,
      message,
      source: source || "form",
    });

    res.status(201).json({
      success: true,
      message: "Saved successfully",
      submission,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

/* ---------------- READ SUBMISSIONS ---------------- */
router.get("/", async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      total: submissions.length,
      submissions: submissions.map((s, i) => ({
        _id: s._id,                // IMPORTANT for delete
        id: i + 1,
        name: s.name,
        email: s.email,
        message: s.message,
        source: s.source,
        submittedAt: new Date(s.createdAt).toLocaleString(),
      })),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

/* ---------------- DELETE SUBMISSION ---------------- */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Submission.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Submission not found",
      });
    }

    res.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
