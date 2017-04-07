import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ProjectList from './projects.js';

const Home = () => (
  <div className="container">
    <div className="center-align">
      <p>Nothing here yet! (that you can see)</p>
    </div>
  </div>
)

const Interests = () => (
  <div className="container">
    <div className="center-align">
      <p>Interests: Nothing here yet! (that you can see)</p>
    </div>
  </div>
)

const Questions = () => (
  <div className="container">
    <div className="center-align">
      <p>Questions: Nothing here yet! (that you can see)</p>
    </div>
  </div>
)

class Notebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects_list: []
    };

    // this.componentDidMount = this.componentDidMount.bind(this)

  }

  // componentDidMount(){
    
  //   fetch('data/projects.txt', {
  //     method: 'GET'
  //   }).then(function(response) {
  //     return response.json();
  //   }).then((data) => {
  //     this.setState({projects_list : data});
  //   });

  //   $('ul.tabs').tabs();
  // }

  render(){
    return (
      <div className="container">
        <div className="center-align">
          <h1>TODO List</h1>
          <p>A list of some things I have to do by category. Extracted from my idea notebook:</p>  
        </div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a className="active" href="#tab1">Project</a></li>
              <li className="tab col s3"><a href="#tab2">Talks</a></li>
              <li className="tab col s3"><a href="#tab3">Tasks</a></li>
              <li className="tab col s3"><a href="#tab4">Articles</a></li>
            </ul>
          </div>
          <div id="tab1" className="col s12">
            <ProjectList list={this.state.projects_list}/>
          </div>
          <div id="tab2" className="col s12">
          </div>
          <div id="tab3" className="col s12">
          </div>
          <div id="tab4" className="col s12">
          </div>
        </div>
      </div>
    ) 
  }
}

const Food = () => (
  <div className="container">
    <h1>How to prepared food</h1>
    <h2>Rice</h2>
    <h3>Materials</h3>
    <ol>
      <li>1 cup of rice</li>
      <li>Double cup of water</li>
      <li>1 oil 'girasol' spoon</li>
      <li>1 salt little spoon</li>
    </ol>
    <h3>Steps</h3>
    <ol>
      <li>Clean rice of 'almidon'</li>
      <li>Warm water</li>
      <li>Drop oil spoon into the rice and stir</li>
      <li>Drop salt into the water and stir</li>
      <li>Mix water and rice</li>
      <li>Boil the rice/water with no 'tapa'</li>
      <li>When 'boiled' put the 'tapa' on and wait 15 minutes</li>
    </ol>
    <hr/>
    <h2>Fried egg</h2>
    <h3>Materials</h3>
    <ol>
      <li>Olive oil</li>
      <li>Egg</li>
    </ol>
    <h3>Steps</h3>
    <ol>
      <li>Drop olive oil (little) in the pan</li>
      <li>Drop egg in water and see if it's floating. If does, it's bad (Optional)</li>
      <li>Drop egg into a cup to see if it's bad</li>
      <li>Drop egg into then pan</li>
      <li>Drop salt into the 'yema'</li>
      <li>3 min with 'tapa' puesta</li>
    </ol>
  </div>
)

const App = () => (
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

render(<App/>, document.getElementById('app'));