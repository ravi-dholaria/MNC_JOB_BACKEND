  import express from "express";
import dotenv from "dotenv";
import connnectDB from "./db.js";
import cors from "cors";
import morgan from "morgan";
import jobs from "./routes/jobs.js";
dotenv.config();
connnectDB();

const app = express();

// middleware (as of now not required)!
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/jobs", jobs);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
