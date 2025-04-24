import express from "express";
import mongoose from "mongoose";
import TaskRouter from "./router/TaskRouter.js";
import UserRouter from "./router/UserRouter.js";
import cors from "cors";

const app = express();

mongoose.connect("mongodb+srv://rafanderson777:RafaelBinus@cluster0.vpx9ra7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(console.log("Database connected!"))
.catch((err) => {
    console.log("Error Connecting to the database!");
})

app.use(cors());

app.use(express.json());
app.use("/api/task", TaskRouter);
app.use("/api/user", UserRouter);

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})