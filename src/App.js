import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from "react";
import Header from "./Header"
import PersonAddress from "./components/personAddress/personAddress";
import Home from "./components/home/home"

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path = "/personDetails"><PersonAddress/></Route>
          <Route path = "/home"><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
