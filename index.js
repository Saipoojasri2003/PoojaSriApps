import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//uimport App from './App';
import reportWebVitals from './reportWebVitals';
import Signedin from './Conditional';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Signedin isloggedin="20" ></Signedin>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
