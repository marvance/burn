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
        countsList={props.countsArray} />
      </div>

    )

}

//SelectProject takes projects array
SelectProject.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  projectsList: PropTypes.array.isRequired,
  countsArray: PropTypes.array.isRequired,
};


export default SelectProject
