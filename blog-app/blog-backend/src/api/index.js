const Router = require("koa-tree-router");
const posts = new Router();

posts.get("/posts", (ctx) => {
  ctx.body = "post test 성공";
});

module.exports = posts;
