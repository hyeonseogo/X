import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname as getDirname } from "path";
import postsRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";
import { config } from "./config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = getDirname(__filename);

const app = express();

app.use(express.static("signuplogin"));
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/signuplogin/signup.html", (err, data) => {
    if (err) {
      res.status(500).send("파일 읽기 오류");
    } else {
      res.status(200).type("html").send(data);
    }
  });
});

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(config.host.port, () => {
  console.log(`✅ 서버가 포트 ${config.host.port}에서 실행 중입니다`);
});
