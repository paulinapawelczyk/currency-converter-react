import React, { Component } from 'react';
import './reset.css';
import './App.css';
import logo from './assets/logo.jpg';
import ExchangeForm from './Components/ExchangeForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <h1 className="header">Currency converter</h1>
          <div className="logo">
            <img className="logo" src={logo} alt="Converter logo"></img>
          </div>
          <ExchangeForm />
        </div>
      </div>
    );
  }
}

export default App;
