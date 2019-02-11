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
    console.log(total, prodDay, prodDate)

    //if project selected
    //run calcs for given project
    if (props.selectedProject) {
      console.log(props.selectedProject)
      total = calculateTotal(sortByProject(props.selectedProject, props.countsList))
      prodDay = findMostProductiveDayOfWeek(sortByProject(props.selectedProject, props.countsList));
      findProdDate = findMostProductiveDate(sortByProject(props.selectedProject, props.countsList));
      prodDate = findProdDate.date;

    }

    if(props.selectedMonth) {
      console.log(props.selectedMonth)
    }

    if(props.selectedYear) {
      console.log(props.selectedYear)
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
  countsList: PropTypes.array.isRequired,
  selectedProject: PropTypes.string,
  selectedMonth: PropTypes.string,
  selectedYear: PropTypes.string,
}

function SelectDate(props){
//show all months in year

//show all years since user signed up ( will need to pass down user object to here eventually )
//select month in year

//run calcs on that individual month

//if zero, return zero
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let monthIndexes = ["01","02","03","04","05","06","07","08","09","10","11","12"] // may not need these
  let years = ['2019', '2018', '2017'] //reverse order is conventional UI


  return (
    <div>
      <label>
        Choose Month:
        <select onChange={props.onSelectMonth}>
          <option value=''>All Months</option>
          {months.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </label>

      <label>
        Choose Year:
        <select onChange={props.onSelectYear}>
          <option value=''>All Years</option>
          {years.map(item =>  (
            <option value={item}>{item}</option>
          ))}
        </select>
      </label>

    </div>
  )

}

SelectDate.propTypes = {
  onSelectMonth: PropTypes.func,
  onSelectYear: PropTypes.func,
  selectedMonth: PropTypes.string,
  selectedYear: PropTypes.string,
  countsList: PropTypes.array.isRequired,
}

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




class DisplayProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: '',
      selectedMonth: '',
      selectedYear: ''
    };
    this.updateProject = this.updateProject.bind(this);
  }
  updateProject(title) {
    this.setState(function () {
      return {
        selectedProject: title
      }
    });
  }

  updateMonth = e => {
    console.log(e.target.value)
    // console.log(month)
    this.setState({
      selectedMonth: e.target.value
    });
  }

  updateYear = e => {
    console.log(e.target.value)
    this.setState({
      selectedYear: e.target.value
    });
  }

  render() {
    let isCountsList = this.props.countsList.length > 0;
    console.log(isCountsList)
    console.log(this.state.selectedProject)
    console.log(this.state.selectedMonth)
    console.log(this.state.selectedYear)
    return (
      <div>
        <SelectProject
          selectedProject={this.state.selectedProject}
          onSelect={this.updateProject} 
          projectsList={this.props.projectsList}
          countsList={this.props.countsList} 
        />

        <SelectDate 
          onSelectMonth={this.updateMonth}
          onSelectYear={this.updateYear}
          selectedMonth={this.state.selectedMonth}
          selectedYear={this.state.selectedYear}
          countsList={this.props.countsList}
        />
        {isCountsList
          ? <Graphs 
              selectedProject={this.state.selectedProject}
              countsList={this.props.countsList} 
            />
          : <p>No data yet</p>
        }

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