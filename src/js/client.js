import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import People from "./components/People"
import store from "./store"

ReactDOM.render(<Provider store={store}>
  <People />
</Provider>, document.getElementById("app"));