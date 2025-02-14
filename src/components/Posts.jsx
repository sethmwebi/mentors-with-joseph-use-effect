import { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const result = await response.json();
      setPosts(result);
    };

    fetchPosts();
  }, []);
  return (
    <div
      style={{
        width: "800px",
        display: "flex",
        justifySelf: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
