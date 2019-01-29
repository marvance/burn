class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      photo: '',
      bio: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(name, genre, bio) {
    this.setState(function() {
      var newState = {};
      newState['name'] = name;
      newState['genre'] = genre;
      newState['bio'] = bio;
      newState['photo'] = 'https://via.placeholder.com/100';
      return newState;
    })
  }
  render() {
    return (
      <form>
        <label>Name: </label>
        <input value={this.state.name} />
        <label>Genre: </label>
        <input value={this.state.genre} />
        <label>Bio: </label>
        <input value={this.state.bio} />
        <button>Submit</button>
      </form>
    )
  }
}