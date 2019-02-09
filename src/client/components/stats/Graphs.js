import React from 'react';
import PropTypes from 'prop-types';
import {sortByProject, calculateTotal, calculateAverage, findMostProductiveDayOfWeek, findMostProductiveDate} from '../../utils/api';


class Graphs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: '',
      productiveDay: '',
      productiveDate: ''
    };
    this.changeState = this.changeState.bind(this);
    
  }

  componentDidMount(){
    this.changeState()

  }

  changeState(){
    let total = calculateTotal(this.props.countsList);
    let prodDay = findMostProductiveDayOfWeek(this.props.countsList);
    let prodDate = findMostProductiveDate(this.props.countsList);
    //produces (null, "Saturday", null)
    console.log(total, prodDay, prodDate)
    //generates memory leak error message
    this.setState({
      total: total.words,
      productiveDay: prodDay,
      productiveDate: prodDate.date
    })
  }



  render() {
    return (
      <div>
        <p>Total: {this.state.total} words</p>
        <p>Most productive day of week: {this.state.productiveDay}</p>
        <p>Most productive date: {this.state.productiveDate}</p>
        
      </div>
    )   

  }
}

//SelectProject takes projects array
Graphs.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  countsList: PropTypes.array.isRequired,
};


export default Graphs