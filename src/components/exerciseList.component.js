import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const baseURI = "http://localhost:5000";

const Exercise = (props) => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${props.exercise._id}`}>edit</Link> |
        <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>
          delete
        </a>
      </td>
    </tr>
  );
};

class exerciseList extends Component {
  state = {
    exercises: [],
  };

  componentDidMount() {
    axios
      .get(`${baseURI}/exercises`)
      .then((response) => {
        this.setState({ exercises: response.data });
      })
  }

  deleteExercise = id => {
    axios
      .delete(`${baseURI}/exercises/${id}`)
      .then((response) => console.log(response.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id),
    });
  };

  renderList = () => {
    return this.state.exercises.map((exercise) => {
      return (
        <Exercise
          exercise={exercise}
          deleteExercise={this.deleteExercise}
          key={exercise._id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Logged exercises</h3>
        <table className="table">
          <thead className="tgead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default exerciseList;
