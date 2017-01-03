import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board
          rows={5}
          columns={4}
        />
      </div>
    );
  }
}

export default App;
