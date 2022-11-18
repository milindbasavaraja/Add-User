import Card from "../UI/Card";
import "./addUser.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    console.log(enteredAge);
    console.log(enteredUserName);
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> UserName</label>
          <input
            type="text"
            id="username"
            onChange={changeUserNameHandler}
            value={enteredUserName}
          />
          <label htmlFor="age"> Age</label>
          <input
            type="number"
            id="age"
            onChange={changeAgeHandler}
            value={enteredAge}
          />
          <Button type={"Submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
