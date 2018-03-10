import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import BoxDisplay from './topic_components/BoxDisplay/BoxDisplay';
import ResumeTemplate from './topic_components/ResumeTemplate/ResumeTemplate';

class App extends Component {
  render() {
    return (
      <Router>
      <div classNam="App">
        <h3>Topics</h3>
        <ul>
          <li><Link to="/box-display">BoxDisplay</Link></li>
          <li><Link to="/resume-template">ResumeTemplate</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/box-display" component={BoxDisplay}/>
        <Route path="/resume-template" component={ResumeTemplate}/>
      </div>
    </Router>
    );
  }
}

export default App;

const Home = () => (
  <div>
  </div>
)