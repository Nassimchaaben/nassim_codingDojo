import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myElement = "Hello Dojo!!";
// const myElement2 = "Things I need to to";
// const myElement3 = ['Learn React',`Climb Mt.Everest`,`Run a Marathon`,`Feed the dogs`];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
    {/* <h1>{myElement}</h1>
    <p>{myElement2}</p>
    <ul>{myElement3.map(element=><li>{element}</li>)}</ul> */}
  </React.StrictMode>
  
);
// root.render(myElement,myElement2,myElement3)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
