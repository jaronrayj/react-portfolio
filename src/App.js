import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Route exact route='/projects' />
        </Router>
      </>
    )
  }
}
