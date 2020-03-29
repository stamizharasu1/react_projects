import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    //only time to direct assignment to state
    this.state = { lat: null, lon: null, errorMsg: ''};

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ 
          lat: position.coords.latitude, 
          lon: position.coords.longitude
      }),
      (err) => this.setState({ errorMsg: err }),
    );
  }

  render() {
    if(this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    else if(!this.state.errorMsg && !this.state.lat) {
      return <div>Loading</div>;
    }
    else {
      return <div>Latitude: {this.state.lat}, Longitude: {this.state.lon} </div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));