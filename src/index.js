//import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//get a refrerence to the div with ID of root
const el = document.querySelector('#root');
//tell react to take control of that element
const root = ReactDOM.createRoot(el);

//create a component

//show the component on the screen
root.render(<App />);
