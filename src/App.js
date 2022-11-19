import { React, useState } from "react";
import AddUser from "./Component/Users/Adduser";
import UsersList from "./Component/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { id: Math.floor(Math.random() * 100), name: uName, age: uAge },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
