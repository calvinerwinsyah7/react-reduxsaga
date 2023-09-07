import type { RouteData } from 'utils/routeGenerator'

import Home from '../pages/Home'

const routeData: RouteData[] = [
  {
    component: Home,
    name: 'Home Page',
    path: '/'
  }
  // Add more route data objects as needed
]

export default routeData
