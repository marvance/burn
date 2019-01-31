import React from 'react';
import PropTypes from 'prop-types';


export default ({handleChange, handleSubmit, count}) => {
  return (
    <form>
      <label>
        Enter Count: 
        <input name='words' type='number' value={count.words} onChange={handleChange} />
      </label>
      <label>
        Date: 
        <input name='date' type='date' value={count.date} onChange={handleChange} />
      </label>
      <label>
        Project: 
        <input name='project' type='text' value={count.project} onChange={handleChange} />
      </label>         

      <input type='submit' value='Submit' onClick={handleSubmit}/>
    </form>
  )
}







