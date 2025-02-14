import React from "react";
import "./Posts.css";

const Post = ({ id, title, body }) => {
  return (
    <div className="post-container">
      <h4 id="id">ID: {id}</h4>
      <h4 className="title">Title: {title}</h4>
      <p className="body">{body}</p>
    </div>
  );
};

export default Post;
