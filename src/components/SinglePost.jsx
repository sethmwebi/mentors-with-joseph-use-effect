import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SinglePost.css";

export default function SinglePost() {
  const [post, setPost] = useState(null);
  const params = useParams();
  // console.log(params.postId);
  useEffect(() => {
    const fetchSinglePost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
      );
      const result = await res.json();
      setPost(result);
    };

    fetchSinglePost();
  }, [params.postId]);
  return (
    <div className="single-post-container">
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
    </div>
  );
}
