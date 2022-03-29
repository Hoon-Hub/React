import { useSelector } from "react-redux";
import React from "react";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userName={post.userName} />
    </article>
  ));

  return <>{renderedPosts}</>;
};

export default PostList;
