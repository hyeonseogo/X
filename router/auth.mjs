import express from "express";
import * as authController from "../controller/auth.mjs";

const router = express.Router();

// 회원가입
// POST
// http://127.0.0.1:9090/auth/signup
router.post("/signup", authController.signup);

// 로그인
// POST
// http://127.0.0.1:9090/auth/login
router.post("/login", authController.login);

export default router;
