// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useRoutes} from 'react-router-dom';
import allRoutes from "./routes";
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const routes = useRoutes(allRoutes());
  return routes;
}

export default App;
