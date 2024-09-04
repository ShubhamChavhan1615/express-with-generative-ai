import express from "express";
import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import indexRoutes from "./routes/index.js";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

//routes
app.use("/", indexRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})

