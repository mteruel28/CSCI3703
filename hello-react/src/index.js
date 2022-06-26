import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let city = { 
  name: "New York",
  country: "United States"};

ReactDOM.render(
 <h1>{city.name} is in {city.country}</h1>>
 document.getElementById("root")
);



