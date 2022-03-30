import styled from "styled-components";
import "./App.css";
import AddPostForm from "./features/post/AddPostForm";
import PostList from "./features/post/PostList";
import AddUserForm from "./features/users/AddUserForm";

function App() {
  return (
    <div className="App">
      <StyledAddArea>
        <AddPostForm className="post-area" />
        <AddUserForm className="user-area" />
      </StyledAddArea>
      <PostList></PostList>
    </div>
  );
}

export default App;

const StyledAddArea = styled.div`
  display: flex;
  width: 25rem;
  margin: 3rem auto;
  jusify-content: space-between;

  & .post-area {
    width: 9rem;
  }

  & .user-area {
    width: 9rem;
  }
`;
