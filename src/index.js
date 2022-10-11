import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';


  const root = ReactDOM.createRoot(document.getElementById('root'));
  const el = (
    <div>
      <h1 class ='my-todo'>My Todo</h1>;
        <input placeholder='search' />;
      <ul>  
        <li> learn react</li>
        <li>build app</li>
      </ul>
    </div>);


root.render(el);

