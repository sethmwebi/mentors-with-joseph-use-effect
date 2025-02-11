import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [organization, setOrganization] = useState(null);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const result = await res.json();
  //     console.log(result);
  //     return result;
  //   };
  //
  //   fetchUsers();
  // }, []);
  // useEffect(() => {
  //   const fetchNodejsInfo = async () => {
  //     const res = await fetch("https://api.github.com/orgs/nodejs");
  //     const result = await res.json();
  //     setOrganization(result);
  //   };
  //
  //   fetchNodejsInfo();
  // }, []);
  // return (
  //   <div>
  //     <h4>Name: {organization.name}</h4>
  //     <h4>Blog: {organization.blog}</h4>
  //     <h4>Twitter: {organization.twitter_username}</h4>
  //   </div>
  // );
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUsers(result);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
