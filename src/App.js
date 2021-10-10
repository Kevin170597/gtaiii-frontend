import React, { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Axios from "axios";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
import ItemsGuns from "./components/Items/ItemsGuns";
import Bands from "./components/Bands/Bands";
import Vehicles from "./components/Vehicles/Vehicles";
import Missions from "./components/Missions/Missions";
import MissionsByOwner from "./components/MissionsByOwner/MissionsByOwner";
import Phones from "./components/Phones/Phones";
import RC from "./components/RC/RC";
import R3 from "./components/R3/R3";
import Rampages from "./components/Rampages/Rampage";
import Packages from "./components/Packages/Packages";
import Jumps from "./components/Jumps/Jumps";
import Garages from "./components/Garages/Garages";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import Context from "./Contexts/Context";

function App() {
  const [stateOwner, setOwner] = useState("");

  const [loginStatus, setLogin] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('https://gtaiii.herokuapp.com/users/login')
    .then((response) => {
        //console.log(response)
        if (response.data.loggedIn) {
            setLogin(response.data.user[0])
        }
    })
  }, []);

  return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Context.Provider value={loginStatus}>
              <Header />
            </Context.Provider>
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
              <Route path="/missions">
                <Missions owner={owner => setOwner(owner)} />
              </Route>
              <Route path="/missionowner">
                <Context.Provider value={stateOwner}>
                  <MissionsByOwner />
                </Context.Provider>
              </Route>
              <Route path="/phones">
                <Phones/>
              </Route>
              <Route path="/rc">
                <RC/>
              </Route>
              <Route path="/r3">
                <R3/>
              </Route>
              <Route path="/rampages">
                <Rampages/>
              </Route>
              <Route path="/packages">
                <Packages />
              </Route>
              <Route path="/jumps">
                <Jumps />
              </Route>
              <Route path="/garages">
                <Garages />
              </Route>
              <Route path="/register">
                <Context.Provider value={loginStatus}>
                  <Register />
                </Context.Provider>
              </Route>
              <Route path="/login">
                <Context.Provider value={loginStatus}>
                  <Login />
                </Context.Provider>
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