import express from "express";
import connectDB from "./configuration.js";
import TaskRouter from "./router/TaskRouter.js";
import UserRouter from "./router/UserRouter.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB()
.then(console.log("Database Connected!"))

app.use(cors());

app.use(express.json());
app.use("/api/task", TaskRouter);
app.use("/api/user", UserRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})