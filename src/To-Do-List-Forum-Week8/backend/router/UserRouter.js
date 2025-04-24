import express from "express";
import UserController from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/getUserInfo/:UserId", UserController.getUserInfo);
UserRouter.post("/", UserController.createUser);
UserRouter.post("/login", UserController.login);
UserRouter.put("/updateUser/:UserId", UserController.changeUserDetails);

export default UserRouter;