import React from 'react';
import {render} from 'react-dom';


class ProjectCard extends React.Component {

  constructor(props) {
    super(props);
  }

  hasImage(img) {
    if(img){
      return 'static/' + img;
    }
    else{
      return 'http://placehold.it/150x150';  
    }
  }

  render() {

    return (
      <div className='col s12'>
        <div className='card horizontal'>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.hasImage(this.props.img)} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.name}<i className="material-icons right">more_vert</i></span>
            
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.name}<i className="material-icons right">close</i></span>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>);
  }
}

class ProjectList extends React.Component{

  render(){
    return (
      <div className="row">
        {this.props.list.map(
          (project, i) => {
            return <ProjectCard
              cardType={this.props.cardType}
              key={i}
              name={project.name}
              img={project.img}
              description={project.description}
            />
          })
        }
      </div>
    );
  }
}

export default ProjectList;
