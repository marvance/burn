import React from 'react';
import PropTypes from 'prop-types';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
 
function BarChart(props) {
    //Create the element
    const barChartDiv = new ReactFauxDOM.Element('div')

    const dataset = props.countsList
    console.log(dataset)
    
    d3.select(barChartDiv).selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d.words*.1 + "px"))
 
    //DOM manipulations done, convert to React
    return barChartDiv.toReact()
 
}

BarChart.propTypes = {
  countsList: PropTypes.array.isRequired,
}

export default BarChart


