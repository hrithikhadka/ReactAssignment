import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  let data;
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await fetch(url);
      data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Users</h2>
      <div className="heading-underline"></div>
      <div className="App">
        {users.map((user, index) => (
          <Card data={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
