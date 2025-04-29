import express from "express";
import postsRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";
import { config } from "./config.mjs";
import cors from "cors"; // 추가

const app = express();

app.use(cors()); // 추가

app.use(express.json());

app.use(express.static("signuplogin"));
app.get("/", (req, res) => {
  res.sendFile("signup.html", { root: "signuplogin" });
});

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(config.host.port);
