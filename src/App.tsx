import { BrowserRouter as Router, Routes } from "react-router-dom"

import routeData from "./routes"
import generateRoutes from "./utils/routeGenerator"

const App = () => {
  const routes = generateRoutes(routeData)

  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  )
}

export default App
