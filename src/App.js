import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import './App.css';

function App() {

  return (
    <div>
      <h1>Medi App</h1>
      {/* <Typography variant="h1" noWrap>
        Medi App
      </Typography> */}



      <BrowserRouter basename="/medication-counter-app-react">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
