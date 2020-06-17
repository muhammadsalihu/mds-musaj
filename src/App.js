import React from "react"

//===================== Libraries =============================================
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

// ============================================================================

// Components
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
