import React from 'react';
import {render} from 'react-dom';
import ProjectList from './projects.js';

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

export default Notebook;