import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import {Route} from 'react-router-dom';
import device from './components/device';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/' render={(props)=> <NavWrapper {...props} />} />
       <Route path='/device' render={(props)=> <device {...props} />} />
      </div>
    );
  }
}

export default App;
