import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPosts } from "./PostSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeUserName = (e) => setUserId(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      dispatch(AddPosts(title, content, userId));
      console.log(title, content, userId);
    }

    setTitle("");
    setContent("");
    setUserId("");
  };

  const UserList = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
          value={userId}
          onChange={onChangeUserName}
        >
          <option value="">선택해주세요</option>
          {UserList}
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
