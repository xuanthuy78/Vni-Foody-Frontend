import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import routes from './routes/routes'
export class App extends Component {
  showRouters = (routes) => {
    var result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
  render() {
    return <Router>{this.showRouters(routes)}</Router>
  }
}

export default App
