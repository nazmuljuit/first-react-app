import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const wlcome = 'Welcome to first react app!';
const reactVersion = 'React Version 18.2.0';
const reactDomV = 'React Dom Version 18.2.0';
root.render(
  <div>
    <h1>{wlcome}</h1>
    <h3>{reactVersion}</h3>
    <h5>{reactDomV}</h5>
  </div>
  
);


