import React from 'react';
import PropTypes from 'prop-types';

function SelectProject (props) {
  var projects = ['Mild', 'War and Peach', 'Artemis Shrugged'];
  return (
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
  )
}

SelectProject.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Projects extends React.Component {
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
        <SelectProject
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} />
      </div>
    )
  }
}

export default Projects
