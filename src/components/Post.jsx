import React from "react";
import "./Posts.css";
import { Link } from "react-router";

const Post = ({ id, title, body }) => {
  return (
    <Link to={`/posts/${id}`}>
      <div className="post-container">
        <h4 id="id">ID: {id}</h4>
        <h4 className="title">Title: {title}</h4>
        <p className="body">{body}</p>
      </div>
    </Link>
  );
};

export default Post;
