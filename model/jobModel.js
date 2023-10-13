import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    Company: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    Skills: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Salary: {
      type: String,
      required: true,
    },
    Experience: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("jobs", jobSchema);
