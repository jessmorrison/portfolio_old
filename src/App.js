import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import './../src/App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to={'/portfolio'} className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/work'} className="nav-link">Work</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/contact'} className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/portfolio' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;