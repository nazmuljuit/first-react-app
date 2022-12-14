import React from "react";
import "./index.css";
import Card from "./components/Card";

const wlcome = 'Welcome to First React App!';
const reactVersion = 'React Version 18.2.0';
const reactDomV = 'React Dom Version 18.2.0';

function App()
{

    return <div>
        <div className="headingDiv">
            <h1>{wlcome}</h1>
            <h3>{reactVersion}</h3>
            <h5 className='headerFive'>{reactDomV}</h5>
        </div>
    <Card />

    </div>

}

export default App;