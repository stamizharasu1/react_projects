import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);

    //only time to direct assignment to state
    this.state = { lat: null, lon: null, errorMsg: ''};
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ 
          lat: position.coords.latitude, 
          lon: position.coords.longitude
      }),
      (err) => this.setState({ errorMsg: err }), 
    );
  }

  renderContent() {
    if(this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if(!this.state.errorMsg && !this.state.lat) {
      return <Spinner message="Please accept location request" />;
    }
    return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
  };

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));