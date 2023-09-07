import React from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"

import routeData from "./routes"
import generateRoutes from "./utils/routeGenerator"

const AppRouter: React.FC = () => {
  const routes = generateRoutes(routeData)

  return <Routes>{routes}</Routes>
}

const App = () => {
  return (
    <Router>
      <div>
        <AppRouter />
      </div>
    </Router>
  )
}

export default App
