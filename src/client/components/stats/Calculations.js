import React from 'react';

class Calculations extends React.Component {



  render() {
    console.log(this.state.projects)
    return (
      <div>
        <ul>
          {this.state.counts.map(function(ct){
            return (
              <li key={ct.date}>
                <h2>{ct.date}</h2>
                <h3>{ct.project}</h3>
                <h3>{ct.words}</h3>
              </li>
            )
          })}
       </ul>
      </div>
    )
  }
}


export default Calculations