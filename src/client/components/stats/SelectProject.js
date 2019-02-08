import React from 'react';
import PropTypes from 'prop-types';

function SelectProject (props) {
  // var projects = ['Mild', 'War and Peach', 'Artemis Shrugged'];
  const projects = props.projectsList;
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
  projectsList: PropTypes.array.isRequired,
};


export default SelectProject
