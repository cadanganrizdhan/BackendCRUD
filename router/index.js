import express from "express";
import notes from "./notes.js";

const router = express();

router.use(notes);

export default router