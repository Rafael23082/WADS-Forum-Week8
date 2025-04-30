import express from "express";
import UserController from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/getUserInfo/:UserId", UserController.getUserInfo);

/**
 * @swagger
 * /api/user/getUserInfo/{UserId}:
 *   get:
 *     description: Get user details given the Id.
 *     parameters:
 *       - in: path
 *         name: UserId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Data retrieval successful.
 *       404: 
 *         description: User invalid.
 *       500:
 *         description: An error occured.
 */

UserRouter.post("/", UserController.createUser);

/**
 * @swagger
 * /api/user/:
 *   post:
 *     description: Creates a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FullName:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *       500:
 *         description: An error occured. 
 */

UserRouter.post("/login", UserController.login);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     description: To validate user when logging in.
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200: 
 *         description: Login successful.
 *       404:
 *         description: User invalid.
 *       500:
 *         description: Error orccured. 
 */

UserRouter.put("/updateUser/:UserId", UserController.changeUserDetails);

/**
 * @swagger
 * /api/user/updateUser/{UserId}:
 *   put:
 *     description: Update user details given the user ID.
 *     parameters:
 *       - in: path
 *         name: UserId
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
 *               FullName:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password: 
 *                 type: string
 *     responses:
 *       200:
 *         description: User details successfully changed.
 *       500: 
 *         description: An error occured.
 */

export default UserRouter;