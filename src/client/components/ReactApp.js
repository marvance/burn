import React from 'react';
import Projects from './Project';
import CountInput from './Count';



class ReactApp extends React.Component {
  render() {
    return (
      <div className='container'>
        <Projects />
        <CountInput />
      </div>
    )
  }
}

export default ReactApp

