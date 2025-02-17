// import { useEffect, useState } from "react";
//
// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [organization, setOrganization] = useState(null);
//
//   // useEffect(() => {
//   //   const fetchUsers = async () => {
//   //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   //     const result = await res.json();
//   //     console.log(result);
//   //     return result;
//   //   };
//   //
//   //   fetchUsers();
//   // }, []);
//   // useEffect(() => {
//   //   const fetchNodejsInfo = async () => {
//   //     const res = await fetch("https://api.github.com/orgs/nodejs");
//   //     const result = await res.json();
//   //     setOrganization(result);
//   //   };
//   //
//   //   fetchNodejsInfo();
//   // }, []);
//   // return (
//   //   <div>
//   //     <h4>Name: {organization.name}</h4>
//   //     <h4>Blog: {organization.blog}</h4>
//   //     <h4>Twitter: {organization.twitter_username}</h4>
//   //   </div>
//   // );
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const result = await res.json();
//       setUsers(result);
//     };
//
//     fetchUsers();
//   }, []);
//
//   return (
//     <div>
//       {users.map((user, index) => {
//         return (
//           <div key={user.id}>
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//             <p>{user.address.street}</p>
//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SinglePost from "./components/SinglePost";

export default function App() {
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Users />} path="/users" />
        <Route element={<Posts />} path="/posts" />
        <Route path="/posts/:postId" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}
