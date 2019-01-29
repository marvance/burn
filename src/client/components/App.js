import React from 'react';
import Projects from './stats/Project';
import Home from './Home';
import Stats from './Stats';
import Friends from './Friends';
import Profile from './Profile';

//importing didn't work but setting var did
// import ReactRouter from 'react-router-dom';
//var ReactRouter = require('react-router-dom');

//var Router = ReactRouter.BrowserRouter;
//var Route = ReactRouter.Route;
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
            <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/profile' component={Profile} />
                  <Route path='/stats' component={Stats} />
                  <Route path='/friends' component={Friends} />
                  <Route render={() => <p>Not Found</p>} />
              </Switch>
        
        
        </div>
      </Router>
    )
  }
}

export default App

