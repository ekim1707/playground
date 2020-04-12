import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.scss";
import Router from "./router.js";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);