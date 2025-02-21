import express from "express";
import userAuth from "../middleware/userAuth";
import { getUserData } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);

export default userRouter;
