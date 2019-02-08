import React from 'react';
import PropTypes from 'prop-types';
import SelectProject from './SelectProject';


//should this be a stateless functional component instead?
//currently not receiving props

class DisplayProjects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProject: '',
      projects: []
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
          projectsList={this.state.projects}
          countsArray={this.state.projects} />
      </div>
    )
  }
}

//SelectProject takes projects array
DisplayProjects.propTypes = {
  projectsArray: PropTypes.array.isRequired,
  countsArray: PropTypes.array.isRequired,
};

export default DisplayProjects