import React from 'react';
import PropTypes from 'prop-types';

class Calculations extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedProject: '',
      projects: []
    };

    
  }


  render() {
    console.log(this.state.projects)
    return (
      <div>
        Projects list -remove this later-
        <ul>
          {this.state.projects.map(function(proj){
            return (
              <li key={proj}>
                <h2>{proj}</h2>
              </li>
            )
          })}
       </ul>
      </div>
    )
  }
}


//SelectProject takes projects array
Calculations.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  countsList: PropTypes.array.isRequired,
};


export default Calculations