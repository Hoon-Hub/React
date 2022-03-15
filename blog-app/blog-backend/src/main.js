require("dotenv").config();
import Koa from "koa";
import Router from "koa-tree-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import api from "./api";

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const postsCtrl = require("./posts.ctrl");

const app = new Koa();
const router = new Router();

const group = router.newGroup("/api");

group.get("/posts", postsCtrl.list());
group.post("/posts", postsCtrl.write());
group.get("/posts/:id", postsCtrl.read());
group.delete("/posts/:id", postsCtrl.remove());
group.put("/posts/:id", postsCtrl.replace());
group.patch("/posts/:id", postsCtrl.update());

app.use(router.routes()).use(bodyParser());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to Port ${port}...`);
});
