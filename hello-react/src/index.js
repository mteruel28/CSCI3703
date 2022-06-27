import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Hello(props) {
  console.log(props)
  console.log(Object.keys(props))
  return (<div>
 <h1> Welcome to {props.library}!</h1>
 <p> Onto Better Things!</p>
<p>{props.message}</p>
<p>{props.number} Props Total</p>
<p>{Object.keys(props).length} Props Total</p>
  </div>
  )
}

ReactDOM.render(
<Hello
library="React" 
message= "have fun" 
number ={3}
/>,
 document.getElementById("root")
);

const lakelist=[
  {id:"1",name:"Echo", trailhead: "Echo"},
  {id:"1",name:"Maud ", trailhead: "Maud"},
  {id:"1",name:"Velma", trailhead: "Velma"},
];

function App(lakes){
  return (<div>
   {lakes.map(lake=>(
   <div key={lake.id}>
    <h2>{lake.name}</h2>
    <p>Accessed by: {lake.trailhead}</p>
   </div>))}
  </div>)

}

function App2({items}) {
  return(
    <ul>
      {items.map(item=>(
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );
}

const list= [1,2,3,4,5,];

ReactDOM.render(
  <App lakes ={lakelist}/>,
  <App2 items={list}/>,
  document.getElementById("root")
);

function Lake3(name){
  return(
    <div>
      <h1>Visit {name}</h1>
    </div>
      )
}

function SkiResort(name){
  return(
    <div>
      <h1>Visit {name}</h1>
    </div>
  )
}

function App3(props){
  if(props.season === "summer"){
    return <Lake3 name = "Jennie Lake"/>;
  } else if(props.season === "winter"){
    return <SkiResort name ="Jackson Resort"/>;
  }
}
ReactDOM.render(
  <App3 season = "summer" />,
  document.getElementById("root")
);

