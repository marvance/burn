import React from 'react';
import PropTypes from 'prop-types';
// import ProfilePart from './ProfileParts';

export default ({handleChange, handleSubmit, contents, fileInput, handleFile}) => {
  return (
    <form id='profileForm' encType='multipart/form-data'>
      <label>
        Name: 
        <input name='name' type='text' value={contents.name} onChange={handleChange} />
      </label>
      <label>
        Genre: 
        <input name='genre' type='text' value={contents.genre} onChange={handleChange} />
      </label>
      <label>
        Bio: 
        <input name='bio' type='text' value={contents.bio} onChange={handleChange} />
      </label>
      <label>
        Upload Photo: 
        <input accept='image/*' ref={fileInput} name='photo' type='file' defaultValue={contents.photo.name || ''} onChange={handleFile} />
      </label>
      
      <input type='submit' value='Submit' onClick={handleSubmit}/>
    </form>
  )
}






