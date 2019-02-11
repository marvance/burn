import React from 'react';
import PropTypes from 'prop-types';
// import Graphs from './Graphs';
import ViewCounts from './ViewCounts';
import {sortByProject, calculateTotal, calculateAverage, findMostProductiveDayOfWeek, findMostProductiveDate} from '../../utils/api';


function Graphs (props) {
  console.log(props)
  let clist = props.countsList
  console.log(clist)
  let total = calculateTotal(props.countsList);
  let prodDay = findMostProductiveDayOfWeek(props.countsList);
  let findProdDate = findMostProductiveDate(props.countsList);
  console.log(total, prodDay, findProdDate)
  let prodDate = findProdDate.date;
  console.log(prodDate)


  return (
    <div>
      <p>Total: {total} words</p>
      <p>Most productive day of week: {prodDay}</p>
      <p>Most productive date: {prodDate} </p>

      
      
    </div>
  )

}

Graphs.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  countsList: PropTypes.array.isRequired,
};


function SelectProject (props) {
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
        <ViewCounts selectedProject={props.selectedProject}
          countsList={props.countsList} />

      </div>

    )

}

//SelectProject takes projects array
SelectProject.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  projectsList: PropTypes.array.isRequired,
  countsList: PropTypes.array.isRequired,
};


//should this be a stateless functional component instead?
//currently not receiving props
//no, because it needs selectedProject state; that's the point of the component
//SelectProject and Calculations can be SFCs though

class DisplayProjects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProject: ''
    };
    console.log(this.props)
    this.updateProject = this.updateProject.bind(this);
  }
  updateProject(title) {
    this.setState(function () {
      return {
        selectedProject: title
      }
    });
  }


  render() {
    console.log(this.props.countsList)
    let isCountsList = this.props.countsList.length > 0;
    console.log(isCountsList)

    return (
      <div>
        <SelectProject
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} 
          projectsList={this.props.projectsList}
          countsList={this.props.countsList} />
        {isCountsList
          ? <Graphs selectedProject={this.state.selectedProject}
          countsList={this.props.countsList} />
          : <p>No data yet</p>}

      </div>
    )
  }
}

//SelectProject takes projects array
// DisplayProjects.propTypes = {
//   projectsList: PropTypes.array.isRequired,
//   countsList: PropTypes.array.isRequired,
// };

export default DisplayProjects