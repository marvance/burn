import React from 'react';
import PropTypes from 'prop-types';


export default ({handleChange, handleSubmit, count}) => {
  return (
    <form>
      <label>
        Enter Count: 
        <input name='count' type='number' value={count} onChange={handleChange} />
      </label>
      
      <input type='submit' value='Submit' onClick={handleSubmit}/>
    </form>
  )
}







