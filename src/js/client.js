import React from "react"
import ReactDOM from "react-dom"
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from "react-redux"
import { hashHistory } from 'history'

import People from "./components/People"
import PersonDetail from "./components/PersonDetail"
import store from "./store"

ReactDOM.render(<Provider store={store}>
  <Router history={hashHistory}>
    <Switch>
      <Route exact path="/" component={People} />
      <Route path="/person" component={PersonDetail} />
    </Switch>
  </Router>
</Provider>, document.getElementById("app"));
