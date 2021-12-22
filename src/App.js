import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AssignMentor from "./AssignMentor";
import ChangeMentor from "./ChangeMentor";
import CreateMentor from "./CreateMentor";
import CreateUser from "./CreateUser";
import Error from "./Error";
import Home from "./Home";
import Mentors from "./Mentors";
import Navbar from "./Navbar";
import SingleMentor from "./SingleMentor";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/createMentor">
            <CreateMentor />
          </Route>
          <Route path="/createUser">
            <CreateUser />
          </Route>
          <Route path="/mentors">
            <Mentors />
          </Route>
          <Route path="/assignMentor">
            <AssignMentor />
          </Route>
          <Route path="/changeMentor">
            <ChangeMentor />
          </Route>
          <Route path="/mentor/:id">
            <SingleMentor />
          </Route>
          <Route path="**">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
