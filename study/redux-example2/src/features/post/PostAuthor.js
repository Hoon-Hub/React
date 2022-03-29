import { useSelector } from "react-redux";
import React from "react";

const PostAuthor = ({ userName }) => {
  const users = useSelector((state) => state.users);

  const author = users.find((user) => user.id === userName);

  return <span>by {author ? author.name : "Unknown Author"} </span>;
};

export default PostAuthor;
