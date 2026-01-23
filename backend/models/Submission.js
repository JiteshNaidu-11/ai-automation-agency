import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    source: {
      type: String,
      default: "form", // form | genie
    },
  },
  { timestamps: true }
);

export default mongoose.model("Submission", submissionSchema);
