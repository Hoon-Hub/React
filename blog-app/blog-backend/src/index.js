const Koa = require("koa");
const Router = require("koa-tree-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "홈";
});

router.get("/about", (ctx) => {
  ctx.body = "소개";
});

app.use(router.routes());

app.listen(4000, () => {
  console.log("Listening to Port 4000...");
});
