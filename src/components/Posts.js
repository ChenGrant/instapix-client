import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { generatePost } from "../utils/requests";

const Posts = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([])
  const [prompt, setPrompt] = useState("");
  const [isGeneratingPost, setIsGeneratingPost] = useState(false);

  return (
    <div>
      <h3>Posts</h3>
      {isGeneratingPost ? (
        <div>Generating Post</div>
      ) : (
        <>
          <input type="text" onChange={(e) => setPrompt(e.target.value)} />
          <button
            onClick={async () => {
              setIsGeneratingPost(true);
              const response = await generatePost(user, prompt);
              console.log(response);
              setPosts(response)
              setIsGeneratingPost(false);
            }}
          >
            Generate Post
          </button>
        </>
      )}
      <ul>
          {posts.map((post, index) => (
            <li key={index} >
              <img src={post.photo_src} height="300"/>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Posts;
