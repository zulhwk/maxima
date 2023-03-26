// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useRoutes} from 'react-router-dom';
import allRoutes from "./routes";

function App() {
  const routes = useRoutes(allRoutes());
  return routes;
}

export default App;
