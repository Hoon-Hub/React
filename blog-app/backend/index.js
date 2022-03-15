import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postsCtrl from './posts.ctrl.js';

dotenv.config();
const app = express(); // app생성

app.get("/", function (req, res) {
  res.send("hello world!!");
});

app.get("/posts", postsCtrl.list);
app.post("/posts", postsCtrl.write);
app.get("/posts/:id", postsCtrl.read);
app.delete("/posts/:id", postsCtrl.remove);
app.put("/posts/:id", postsCtrl.replace);
app.patch("/posts/:id", postsCtrl.update);

const { PORT, MONGO_URI } = process.env;

import mongoose from "mongoose";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => console.log(`${PORT}포트입니다.`));
