//Seasons Application

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    //Inherit setState from React.Component -- use it to set the state
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat= {this.state.lat} />;
    }

    return <Spinner message="Please Accept Our Location Request!"/>;
  }

  //React needs us to define the render method
  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
