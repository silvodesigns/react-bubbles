import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute.js";
import Login from "./components/Login.js";
import BubblePage from "./components/BubblePage.js";

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <ProtectedRoute exact path="/BubblePage" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
