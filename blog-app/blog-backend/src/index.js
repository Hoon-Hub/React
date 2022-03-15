import Router from "koa-tree-router";
import posts from "./posts.ctrl";
const api = new Router();

api.use("/posts", posts.routes());

export default api;
