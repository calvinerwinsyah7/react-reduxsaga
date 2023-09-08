import { lazy } from "react"

import type { RouteData } from "utils/routeGenerator"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "pages/Home"))

const routeData: RouteData[] = [
  {
    component: Home,
    name: "Home Page",
    path: "/",
  },
]

export default routeData
