import { Route } from "react-router-dom"

export interface RouteData {
  path: string;
  component: () => JSX.Element;
  name: string; // Add any additional route-specific properties
}

const generateRoutes = (routeData: RouteData[]) => {
  return routeData.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ))
}

export default generateRoutes
