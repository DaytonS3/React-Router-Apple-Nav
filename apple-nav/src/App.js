import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import {Route} from 'react-router-dom';
import Device from './components/Device';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route path='/' render={()=> <NavWrapper />} />
       <Route path='/device' render={()=> <Device />} />
      </div>
    );
  }
}

export default App;
