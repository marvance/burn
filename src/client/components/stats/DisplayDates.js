import React from 'react';
import PropTypes from 'prop-types';
import SelectDate from './SelectDate';



class Dates extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedProject: 'Mild',
    };

    this.updateProject = this.updateProject.bind(this);
  }
  updateProject(title) {
    this.setState(function () {
      return {
        selectedProject: title,
      }
    });
  }
  render() {
    return (
      <div>
        <SelectDate
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} />
      </div>
    )
  }
}

export default Dates