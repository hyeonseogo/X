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

// 로그인 유지
// GET
// http://127.0.0.1:9090/auth/me
router.get("/me", authController.me);

// 로그아웃
// GET
// http://127.0.0.1:9090/auth/logout
router.get("/logout", authController.logout);

export default router;
