import React from 'react';
import { Routes } from 'react-router-dom';
import generateRoutes from './utils/routeGenerator';
import routeData from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const AppRouter: React.FC = () => {
  const routes = generateRoutes(routeData);

  return <Routes>{routes}</Routes>;
};

const App = () => {
  return (
    <Router>
      <div>
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
