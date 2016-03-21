import React, { Component } from 'react';
import Home from './Home';
import NavBar from './shared/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <NavBar />
        <Home />
        <div className="app-footer">This is Footer</div>
      </div>
    );
  }
}

export default App;
