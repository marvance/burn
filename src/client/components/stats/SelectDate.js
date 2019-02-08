import React from 'react';
import PropTypes from 'prop-types';

function SelectDate (props) {
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

export default SelectDate