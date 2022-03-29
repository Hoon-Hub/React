import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddPosts } from "./PostSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content && userName) {
      dispatch(AddPosts(title, content));
    }

    setTitle("");
    setContent("");
  };

  const onChangeUserName = (e) => {};

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onChangeTitle}
          placeholder="제목"
        />
        <br />

        <select
          name="userName"
          id="userName"
          value={userName}
          onChange={onChangeUserName}
        >
          <option value="">선택해주세요</option>
        </select>

        <br />
        <textarea
          name="postContent"
          id="postContent"
          placeholder="내용"
          value={content}
          onChange={onChangeContent}
        ></textarea>

        <button onClick={onSavePostClicked}>Add</button>
      </form>
    </section>
  );
};

export default AddPostForm;
