import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>game goes here</h2>
        <div><Board /></div>
      </div>
    );
  }
}

export default App;
