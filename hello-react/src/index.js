import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Hello(props) {
  console.log(props)
  return (<div>
 <h1> Welcome to {props.library}!</h1>
 <p> Onto Better Things!</p>
<p>{props.message}</p>
<p>{props.number} Props Total</p>
  </div>
  )
}

let city = { 
  name: "New York",
  country: "United States"};

ReactDOM.render(
<h1 id ="heading" className="cool-text">
{city.name is in {city.country}}
</h1>,

<><Hello  
library="React" 
message= "have fun" 
number ={3}
/>,
 document.getElementById("root")
);
