import React, { useEffect, useState } from "react";
import Exercise from "./exerciseItem";
import axios from "axios";

export default () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("/exercises")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((err) => console.error(err));
  }, [exercises]);

  const deleteExercise = (id) => {
    axios
      .delete(`/exercises/${id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
    setExercises(exercises.filter((el) => el._id !== id));
  };
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
        <tbody>
          {exercises.map((exercise) => (
            <Exercise
              exercise={exercise}
              deleteExercise={deleteExercise}
              key={exercise._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
