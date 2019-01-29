import React from 'react';
import PropTypes from 'prop-types';
import ProfilePart from './ProfileParts';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        
        <input type='submit' value='Submit' />
      </form>
    )
  }
}


export default ProfileForm