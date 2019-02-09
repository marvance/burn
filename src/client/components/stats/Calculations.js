import React from 'react';
import PropTypes from 'prop-types';



function Calculations(props) {


    //console logging props never seems to work
    //but data still get sent through in time to return JSX??
    console.log(props.countsList)
    //perhaps need to give each count an id, if want to map over them.
    //otherwise no unique key since there may likely be multiple of same date, proj, and num words
    return (
      <div>
        
        <ul>
          {props.countsList.map(function(proj){
            return (
              <li key={proj.project}>
                <h2>{proj.project}</h2>
              </li>
            )
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