import React from 'react';
import PropTypes from 'prop-types';



class CountTotal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countTotal: 101
    };
    
  }
  // increment(){
  //   this.setState(function(){
  //     this.state.countTotal += {props.newCount}
  //   })
  // }
  render(){
    return(
      <div>Total: {this.state.countTotal}</div>
    )
  }

}


CountTotal.propTypes = {
  countTotal: PropTypes.number.isRequired
}


export default CountTotal