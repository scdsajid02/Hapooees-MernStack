import express from "express"
import { loginUser, registerUser, amdinLogin } from "../controllers/userController.js"

const userRouter = express.Router();


userRouter.post('/register', registerUser)
userRouter.post("/login", loginUser);
userRouter.post("/admin", amdinLogin);

export default userRouter