import React from 'react';
import PropTypes from 'prop-types';
import ViewCounts from './ViewCounts';
import {sortByProject, calculateTotal, calculateAverage, findMostProductiveDayOfWeek, findMostProductiveDate} from '../../utils/api';


function Graphs (props) {
  //if no project selected
  //run calcs on all
  let total = calculateTotal(props.countsList);
  let prodDay = findMostProductiveDayOfWeek(props.countsList);
  let findProdDate = findMostProductiveDate(props.countsList);
  let prodDate = findProdDate.date;
  //if project selected
  //run calcs for given project
  if (props.selectedProject !== '') {
    total = calculateTotal(sortByProject(props.selectedProject, props.countsList))
    prodDay = findMostProductiveDayOfWeek(sortByProject(props.selectedProject, props.countsList));
    findProdDate = findMostProductiveDate(sortByProject(props.selectedProject, props.countsList));
    prodDate = findProdDate.date;
  }

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

function SelectDate(){

//show all months in year

//show all years since user signed up

//select month in year

//run calcs on that individual month

//if zero, return zero
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let monthIndexes = ["01","02","03","04","05","06","07","08","09","10","11","12"]
  let month;
  let monthSelectorTemplate = months.map(item => (
    <option value={item}>{item}</option>
  ));

  let years = ['2019', '2018', '2017'] //reverse order is conventional UI
  let year;
  let yearSelectorTemplate = years.map(item =>(
    <option value={item}>{item}</option>
  ))

  return (
    <div>
      <label>
        Choose Month:
        <select value={month}>
          <option value=''>All Months</option>
          {monthSelectorTemplate}
        </select>
      </label>

      <label>
        Choose Year:
        <select value={year}>
          <option value=''>All Years</option>
          {yearSelectorTemplate}
        </select>
      </label>
    </div>
  )
}


function SelectProject (props) {
  const projects = props.projectsList;
  console.log(props.countsList)
  let isCountsList = props.countsList.length > 0;
  console.log(isCountsList)
   
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
        {isCountsList
          ? <Graphs selectedProject={props.selectedProject}
          countsList={props.countsList} />
          : <p>No data yet</p>}
        <SelectDate />
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

    return (
      <div>
        <SelectProject
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} 
          projectsList={this.props.projectsList}
          countsList={this.props.countsList} />


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