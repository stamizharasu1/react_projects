// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a React component
const App = () => {
  const buttonText = 'Click Me!'

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

//Take this component and render it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
