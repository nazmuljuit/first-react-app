import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const wlcome = 'Welcome to first react app!';
const reactVersion = 'React Version 18.2.0';
const reactDomV = 'React Dom Version 18.2.0';
const cardTitle = 'My Card';
const cardDescriptions = 'It is my card. One of the best card....';
root.render(
  <div>
    <h1>{wlcome}</h1>
    <h3>{reactVersion}</h3>
    <h5 className='headerFive'>{reactDomV}</h5>

    <div className='card'>
      <h2 className='cardTItle'>{cardTitle}</h2>
      <p className='cardDescriptions'>{cardDescriptions}</p>

    </div>
  </div>
  
);


