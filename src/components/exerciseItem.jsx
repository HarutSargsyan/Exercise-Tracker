import React from 'react';
import { useHistory, Link } from "react-router-dom";

export default ({ exercise, deleteExercise }) => {
    const history = useHistory();
    return (
      <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0, 10)}</td>
        <td>
          <Link to={`/edit/${exercise._id}`}>
            <button class="btn btn-warning mr-2">edit</button>
          </Link>
          <button
            class="btn btn-primary"
            onClick={() => {
              deleteExercise(exercise._id);
              history.push("/");
            }}
          >
            delete
          </button>
        </td>
      </tr>
    );
  };
  