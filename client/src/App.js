import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//component imports
import Home from "./components/Home"
//end of compontents


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Nav Bar here</Link>
      </nav>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
