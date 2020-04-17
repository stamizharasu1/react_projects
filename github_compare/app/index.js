import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//component
//state
//lifecycle
//ui

class App extends React.Component {
  render() {
    return <div> Hello World </div>
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)