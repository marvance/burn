import React from 'react';
import PropTypes from 'prop-types';
import {sortByProject, calculateTotal} from '../../utils/api';

//need to rename this ListAllCounts,
//put calculations in yet another component?
//or just move this return function and replace with calculations using api

function Calculations(props) {


    //console logging props never seems to work
    //but data still get sent through in time to return JSX??
    console.log(props.countsList)
    //perhaps need to give each count an id, if want to map over them.
    //otherwise no unique key since there may likely be multiple of same date, proj, and num words
    return (
      <div>
        <h2>Counts for {props.selectedProject}:</h2>
        <ul>
          {props.countsList.map(function(proj){
            if(proj.project === props.selectedProject) {
              return (
                <li key={proj.words}>
                  <h2>{proj.date}</h2>
                  <h3>{proj.words}</h3>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )

}


//SelectProject takes projects array
Calculations.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  countsList: PropTypes.array.isRequired,
};


export default Calculations