import React from 'react';
import PropTypes from 'prop-types';
import SelectProject from './SelectProject';
const api = require('../../utils/api.js');


class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedProject: 'Mild',
      projects: []
    };

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
    return (
      <div>
        <SelectProject
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} 
          projectsList={this.state.projects} />
      </div>
    )
  }
}

export default Projects