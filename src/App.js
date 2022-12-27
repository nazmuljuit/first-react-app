import React from "react";
import "./index.css";
import Card from "./components/Card";
import Data from "./data.json";

const wlcome = 'Welcome to First React App!';
const reactVersion = 'React Version 18.2.0';
const reactDomV = 'React Dom Version 18.2.0';

function App()
{
    let items = [];
    /*for(let x=0;x< Data.length;x++){
    	items.push(<Card cardTitle={Data[x].title} cardDescriptions={Data[x].description} />)
    }*/

    items = Data.map((item,index) => <Card key={index} cardTitle={item.title} cardDescriptions={item.description} />);
    return <div>
        <div className="headingDiv">
            <h1>{wlcome}</h1>
            <h3>{reactVersion}</h3>
            <h5 className='headerFive'>{reactDomV}</h5>
        </div>
        {items}
    


    </div>

}

export default App;