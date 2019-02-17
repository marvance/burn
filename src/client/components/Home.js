import React from 'react';
// import CountForm from './home/CountForm';
import CountRender from './home/CountRender';
//need to figure out how to render local images
// var testImage = require('./../uploads/TestMaryShelley.jpg');





class Home extends React.Component {
    render() {
      //where is this.props.countTotal coming from?? Is it working as expected?
    return (
      <div className='home-container'>
        <h1>BURN ONE MILLION</h1>

        <CountRender countTotal={this.props.countTotal}/>
      </div>
    )
  }
}

export default Home