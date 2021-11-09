import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
// import Home from './pages/Home';
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

      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/login" render={() => {
              return <div>
                <Login />
              </div>
            }} /> */}
            {/* <Route exact path="/login" >
              <Login />
            </Route> */}
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
