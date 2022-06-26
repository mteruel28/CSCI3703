import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Hello() {
  return (<div>
 <h1> Welcome to React!</h1>
 <p> Onto Better Things!</p>
  </div>
  )
}

let city = { 
  name: "New York",
  country: "United States"};

ReactDOM.render(
  <><Hello />
  <h1 id="heading" className="cool-text">
    {city.name} is in {city.country}
  </h1></>>

 document.getElementById("root")
);




