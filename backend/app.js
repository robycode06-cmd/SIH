import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectToDB from "./db/db.js";

//handler
const app = express();

//mongo connection 
connectToDB();

//PORT
const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
    res.json("hello World");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});