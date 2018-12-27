import React from 'react';
import Welcome from './Welcome';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2>How to Develop Your React Superpowers</h2>
        <h2>with the HOC Pattern</h2>
        <Welcome isLoaded={false} user="Eduardo"/>
      </div>
    );
  }
}

export default App;