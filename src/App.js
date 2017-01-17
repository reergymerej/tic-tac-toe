import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux'
import Game from './Game'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    )
  }
}

export default App;
