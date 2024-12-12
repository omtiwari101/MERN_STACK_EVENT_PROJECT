import express from "express";
import { sendMessage } from "../controller/messageController.js";
import { Message } from "../models/messageSchema.js";



const router = express.Router();

router.post("/send", sendMessage);

export default router;
