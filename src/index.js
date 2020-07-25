import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// a variable declared with const can not be changed
// a variable declared with let can be changed

// but if a variable is an array or object
// its value can get altered

const indentity = {
    name: "My Name is Nazmul Hossain",
    address: "I am from Bangladesh"
};

class Hello extends React.Component {
    render(){

        indentity.iAmNewPara = "I am a programmer. I am a Masters in IT !";

        return(

            <div>

                <h1 style={{color:"green"}}>{indentity.name}</h1>
                <h3>{indentity.address}</h3>
                <p style={{background:"gray"}}>{indentity.iAmNewPara}</p>

            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
