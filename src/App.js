import React from 'react';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {

  return (
    <div>
      <h1>App.js</h1>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
