import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatRoom from "./components/ChatRoom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Robot from "./components/robot";

import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
    <div className="cir"></div>
    <div className="cird"></div>
      {!user ? (
        <div>
        <div className="start_login">
        <Login />
        </div>
        <Robot />
        </div>
      ) : (
        <div className="app__container">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomid">
                <ChatRoom />
              </Route>
              <Route path="/">
                <ChatRoom />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
