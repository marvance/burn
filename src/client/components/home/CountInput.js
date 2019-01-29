import React from 'react';
import PropTypes from 'prop-types';


class CountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function(){
      return {
        newCount: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state.newCount
    );
  }
  render() {
    return (
      <form className='count-form' onSubmit={this.handleSubmit}>
        <label className='count-form-header' htmlFor='newCount'>{this.props.label}</label>
        <input 
          id='newCount'
          placeholder='42'
          type='number'
          value={this.state.newCount}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.newCount}>
          Submit
        </button>
      </form>
    )
  }
}

CountInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

CountInput.defaultProps = {
  label: 'Enter Count',
}



export default CountInput