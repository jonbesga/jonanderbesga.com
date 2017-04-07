import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../modules/home.js';
import Notebook from '../modules/notebook.js';
import Food from '../modules/food.js';
import Interests from '../modules/interests.js';
import Questions from '../modules/questions.js';

const CustomRouter = () => (
  <Router>
    <div>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notebook">Notebook</Link></li>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/interests">Interests</Link></li>
            <li><Link to="/questions">Questions</Link></li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/notebook" component={Notebook}/>
      <Route path="/food" component={Food}/>
      <Route path="/interests" component={Interests}/>
      <Route path="/questions" component={Questions}/>
    </div>
  </Router>
)

export default CustomRouter