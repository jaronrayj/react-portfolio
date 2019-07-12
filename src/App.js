import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Projects from './components/Projects'

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch location={this.props.location}>
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </Router>
      </>
    )
  }
}
