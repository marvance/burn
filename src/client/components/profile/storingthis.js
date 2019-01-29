class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      bio: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.name + ' writes ' + this.state.genre + '. They are ' + this.state.bio);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input name='name' type='text' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Genre: 
          <input name='genre' type='text' value={this.state.genre} onChange={this.handleChange} />
        </label>
        <label>
          Bio: 
          <input name='bio' type='text' value={this.state.bio} onChange={this.handleChange} />
        </label>
        
        <input type='submit' value='Submit' />
      </form>
    )
  }
}