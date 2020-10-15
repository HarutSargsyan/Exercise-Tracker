import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default ({ match }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [description, setDescripion] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`/exercises/${match.params.id}`)
      .then(({ data }) => {
        setUsername(data.user);
        setDescripion(data.description);
        setDuration(data.duration);
        setDate(new Date(data.date));
      })
      .catch((err) => console.log(err));

    axios
      .get("/users")
      .then(({ data }) => {
          setUsers(data.map((user) => user.username));
      })
      .catch((err) => console.error(err));
  }, [match.params.id]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescripion(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .put(`/exercises/update/${match.params.id}`, exercise)
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h3>Edit new exercise log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration(in minutes):</label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit"
            className="btn btn-warning"
          />
        </div>
      </form>
    </div>
  );
};
