let postId = 1;

const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용",
  },
];

export function write (ctx) {
  console.log(ctx.request.body);
  // console.log("requests:  " + ctx.request.body);
  const { title, body } = ctx.request;

  postId += 1;
  const post = { id: postId, title, body };
  console.log(post);
  posts.push(post);
  ctx.body = post;
};

export function list (ctx) {
  ctx.body = posts;
};

export function read (ctx) {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지않습니다.",
    };
    return;
  }
  ctx.body = post;
};

export function remove (ctx) {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지않습니다.",
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204; //no content
};

export function replace (ctx) {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지않습니다.",
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

export function update (ctx) {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지않습니다.",
    };
    return;
  }

  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

export default posts;
