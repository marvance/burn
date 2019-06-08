import React from 'react';
import PropTypes from 'prop-types';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
// import d3pie from 'd3pie';
 
function PieChart(props) {
  //Create the element
  const pieChartDiv = new ReactFauxDOM.Element('div')
 

  // const dataset = props.countsList
  // console.log(dataset)





  //DOM manipulations done, convert to React
  return pieChartDiv.toReact()










 

 
}

PieChart.propTypes = {
  countsList: PropTypes.array.isRequired,
}

export default PieChart