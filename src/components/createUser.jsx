import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default () => {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/add", { username })
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Create New User:</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            required
            type="text"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
