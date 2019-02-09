import React from 'react';
import PropTypes from 'prop-types';
import Calculations from './Calculations';


function SelectProject (props) {
  // var projects = ['Mild', 'War and Peach', 'Artemis Shrugged'];
  const projects = props.projectsList;

   
    return (
      <div>
        <ul className='projects'>
          {projects.map(function (title) {
            return (
              <li
                style={title === props.selectedProject ? {color: '#d0021b'} : null}
                onClick={props.onSelect.bind(null, title)}
                key={title}>
                  {title}
              </li>
            )
          })}
        </ul>
        <Calculations selectedProject={props.selectedProject}
          countsList={props.countsList} />
      </div>

    )

}

//SelectProject takes projects array
SelectProject.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  projectsList: PropTypes.array.isRequired,
  countsList: PropTypes.array.isRequired,
};


//should this be a stateless functional component instead?
//currently not receiving props
//no, because it needs selectedProject state; that's the point of the component
//SelectProject and Calculations can be SFCs though

class DisplayProjects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProject: ''
    };
    console.log(this.props)
    this.updateProject = this.updateProject.bind(this);
  }
  updateProject(title) {
    this.setState(function () {
      return {
        selectedProject: title
      }
    });
  }


  render() {
    //Projects passes projects Array to SelectProject
    return (
      <div>
        <SelectProject
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} 
          projectsList={this.props.projectsList}
          countsList={this.props.countsList} />
      </div>
    )
  }
}

//SelectProject takes projects array
DisplayProjects.propTypes = {
  projectsList: PropTypes.array.isRequired,
  countsList: PropTypes.array.isRequired,
};

export default DisplayProjects