import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"

import routeData from "routes"
import generateRoutes from "utils/routeGenerator"

const FallbackComponent = () => <div>{"Loading..."}</div>

const App = () => {
  const routes = generateRoutes(routeData)

  return (
    <Router>
      <Suspense fallback={<FallbackComponent />}>
        <Routes>{routes}</Routes>
      </Suspense>
    </Router>
  )
}

export default App
