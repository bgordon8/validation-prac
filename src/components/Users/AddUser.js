import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorsModal from "../UI/ErrorsModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "ivaild name",
        message: "please enter a valid name",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "ivaild age",
        message: "please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredUser, enteredAge);
    setEnteredAge("");
    setEnteredUser("");
  };

  const userNameChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorsModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUser}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
