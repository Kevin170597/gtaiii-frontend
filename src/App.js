import React from "react";
import "./styles/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Maps from "./components/Maps";
import ItemsGuns from "./components/ItemsGuns";
import Bands from "./components/Bands";
import Vehicles from "./components/Vehicles";

function App() {
  return (
      <div className="App">
        <Router>
        <Navbar />
        <div className="container">
          <Header />
          <Switch>
            <Route path="/maps">
              <Maps />
            </Route>
            <Route path="/itemsguns">
              <ItemsGuns />
            </Route>
            <Route path="/bands">
              <Bands />
            </Route>
            <Route path="/vehicles">
              <Vehicles />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        </Router>
      </div>
  );
}

export default App;
