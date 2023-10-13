import express from "express";
import {
  jobController,
  jobInsertController,
} from "./../controller/jobController.js";
const router = express.Router();

router.get("/all", jobController);

router.post("/all", jobInsertController);

export default router;
