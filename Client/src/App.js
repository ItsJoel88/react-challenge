import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
        </Router>
      </div>
    )
  }
}

export default App;
