import React, { LazyExoticComponent } from "react"
import { Route } from "react-router-dom"

export interface RouteData {
  path: string
  component: LazyExoticComponent<() => JSX.Element>
  name: string
}

const generateRoutes = (routeData: RouteData[]) => {
  return routeData.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ))
}

export default generateRoutes
