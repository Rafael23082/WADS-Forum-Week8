import TaskController from "../controller/TaskController.js";
import express from "express";

const TaskRouter = express.Router();

TaskRouter.get("/getTasks", TaskController.getTasks);
TaskRouter.post("/", TaskController.createTask);
TaskRouter.get("/getUserTasks/:UserId", TaskController.getUserTasks);
TaskRouter.put("/updateTask/:TaskId", TaskController.editTask);
TaskRouter.delete("/deleteTask/:TaskId", TaskController.deleteTask);

export default TaskRouter;