import express from "express";
import { model } from "../app.js";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.status(200).render("home")
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

router.post("/", async (req, res) => {
    try {
        // Extract the prompt from the request body
        const { prompt } = req.body;
        const result = await model.generateContent(prompt);
        res.json({ response: result.response.text() });

    } catch (error) {
        // Handle any errors
        console.error("Error handling request:", error);
        res.status(500).json({ response: "Sorry, something went wrong on the server." });
    }
})


export default router;