//might not need this React import
import React from 'react';
import PropTypes from 'prop-types';


function ViewCounts(props) {
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
ViewCounts.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  countsList: PropTypes.array.isRequired,
};


export default ViewCounts