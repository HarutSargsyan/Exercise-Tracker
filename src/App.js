import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar";
import ExerciseList from "./components/exerciseList";
import EditExercise from "./components/editExercises";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

function App() {
  axios.defaults.baseURL = "http://localhost:5000"
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
