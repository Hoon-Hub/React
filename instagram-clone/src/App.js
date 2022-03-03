import "./App.css";
import Post from "./Post.js";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://instagram28.p.rapidapi.com/medias",
      params: { user_id: "25025320", batch_size: "20" },
      headers: {
        "x-rapidapi-host": "instagram28.p.rapidapi.com",
        "x-rapidapi-key": "14da1892d0msh271145b8e4184bcp189d1ajsn304316d1313b",
      },
    };
    const posts = async () => {
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data.id);
          // console.log(response.data);
          // setPosts.map(() => {

          // })
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    return posts;
  });

  return (
    <div className="App">
      <div className="app__headerImage">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="INSTAGRAM"
        />
      </div>
      {posts.map((post) => {
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />;
      })}

      {/* Header */}
      {/* posts */}
      {/* posts */}
    </div>
  );
}

export default App;
