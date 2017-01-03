import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board
          rows={7}
          columns={9}
        />
      </div>
    );
  }
}

export default App;
