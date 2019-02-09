import React from 'react';
import PropTypes from 'prop-types';
import {sortByProject, calculateTotal, calculateAverage, findMostProductiveDayOfWeek, findMostProductiveDate} from '../../utils/api';


class Graphs extends React.Component {

  constructor(props) {
    super(props);

    
    this.state = {
      total: '',
      productiveDay: '',
      productiveDate: '',
      countsArray: [],
      projectSelected: ''
    };
    
  }

    componentWillReceiveProps(nextProps){
      if(nextProps.countsList !== this.props.countsList){
        
        let total = calculateTotal(nextProps.countsList);
        let prodDay = findMostProductiveDayOfWeek(nextProps.countsList);
        //prodDate isn't actually most productive date
        
        console.log(total, prodDay);
        this.setState({
          countsArray: nextProps.countsList,
          total: total,
          productiveDay: prodDay
          
        });
      }
      if(nextProps.selectedProject !== this.props.selectedProject){
        this.setState({projectSelected: nextProps.selectedProject});
      }

    }





  render() {
    let findProdDate = findMostProductiveDate(this.state.countsArray);
    let prodDate = findProdDate.date;
    //still not working because returns null on first page load
    //and whole page breaks
    //need to investigate: Lifting State Up, Redux
    console.log(findProdDate)
    console.log(this.state.countsArray)
    return (
      <div>
        <p>Total: {this.state.total} words</p>
        <p>Most productive day of week: {this.state.productiveDay}</p>
        <p>Most productive date: </p>
        
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