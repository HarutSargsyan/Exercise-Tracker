import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exerciseList.component";
import EditExercise from "./components/editExercises.component";
import CreateExercise from "./components/createExercise.component";
import CreateUser from "./components/createUser.component";

function App() {
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
