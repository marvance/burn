import React from 'react';


    // const fd = new FormData();
    // fd.append('photo', this.state.contents.photo, this.state.contents.photo.name)
    // axios.post('/createprofile', fd)
    //   .then(response => {
    //     console.log(response);
    //   })


class TestServer extends React.Component {
  state = {
      data: null
    };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/test');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="TestServer">
        <header className="App-header">
      
          <h1 className="App-title">Welcome to React</h1>
        </header>
         Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}


export default TestServer