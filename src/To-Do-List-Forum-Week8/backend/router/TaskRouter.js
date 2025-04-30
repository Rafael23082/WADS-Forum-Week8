import TaskController from "../controller/TaskController.js";
import express from "express";

const TaskRouter = express.Router();

TaskRouter.get("/getTasks", TaskController.getTasks);

/**
 * @swagger
 * /api/task/getTasks:
 *  get:
 *      summary: Get all tasks.
 *      responses:
 *          200: 
 *              description: Tasks retrieved successfully.
 * 
 */

TaskRouter.post("/", TaskController.createTask);

/**
 * @swagger
 * /api/task/:
 *  post:
 *      summary: Create a task.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          TaskName:
 *                              Type: string
 *                          UserId:
 *                              type: string
 *      responses:
 *          200:
 *              description: Task created successfully.
 *          500:
 *              description: Task already exists, or an error occured.
 */

TaskRouter.get("/getUserTasks/:UserId", TaskController.getUserTasks);

/**
 * @swagger
 * /api/task/getUserTasks/{UserId}:
 *   get:
 *     summary: Get the tasks of a user, given the user ID.
 *     parameters:
 *      - in: path
 *        name: UserId
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully.
 *       500:
 *         description: Invalid user or an error occurred.
 */


TaskRouter.put("/updateTask/:TaskId", TaskController.editTask);

/**
 * @swagger
 * /api/task/updateTask/{TaskId}:
 *   put:
 *     summary: Updates the content of a task.
 *     parameters:
 *       - in: path
 *         name: TaskId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               TaskName:
 *                 type: string
 *               IsCompleted:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *       500:
 *         description: An error occured.
 */

TaskRouter.delete("/deleteTask/:TaskId", TaskController.deleteTask);

/**
 * @swagger
 * /api/task/deleteTask/{TaskId}:
 *   delete:
 *     summary: To delete a task, given its id.
 *     parameters:
 *       - in: path
 *         name: TaskId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task successfully deleted.
 *       500: 
 *         description: An error occured.
 */

export default TaskRouter;