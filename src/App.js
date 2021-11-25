import React from 'react';
// Virtual Router 
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
// Personal Components
import TopBar from "./Components/TopBar";
// View
import LandingPage from "./Views/LandingPage";
// Style in SASS
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <TopBar/>
      <div>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            {'about'}
          </Route>
          <Route path="/dashboard">
            {'dashboard'}
          </Route>
      </div>
    </Router>
    </div>
  );
}

export default App;
