import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard";
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="pageBody"><Dashboard/></div>
      </div>
    );
  }
}
export default App;
