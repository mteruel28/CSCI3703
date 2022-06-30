import React,{ useState ,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

// function Hello(props) {
//   console.log(props)
//   console.log(Object.keys(props))
//   return (<div>
//  <h1> Welcome to {props.library}!</h1>
//  <p> Onto Better Things!</p>
// <p>{props.message}</p>
// <p>{props.number} Props Total</p>
// <p>{Object.keys(props).length} Props Total</p>
//   </div>
//   )
// }

// ReactDOM.render(
// <Hello
// library="React" 
// message= "have fun" 
// number ={3}
// />,
//  document.getElementById("root")
// );

// const lakelist=[
//   {id:"1",name:"Echo", trailhead: "Echo"},
//   {id:"1",name:"Maud ", trailhead: "Maud"},
//   {id:"1",name:"Velma", trailhead: "Velma"},
// ];

// function App(lakes){
//   return (<div>
//    {lakes.map(lake=>(
//    <div key={lake.id}>
//     <h2>{lake.name}</h2>
//     <p>Accessed by: {lake.trailhead}</p>
//    </div>))}
//   </div>)

// }

// function App2({items}) {
//   return(
//     <ul>
//       {items.map(item=>(
//         <li key={item.toString()}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// const list= [1,2,3,4,5,];

// ReactDOM.render(
//   <App lakes ={lakelist}/>,
//   <App2 items={list}/>,
//   document.getElementById("root")
// );

// function Lake3(name){
//   return(
//     <div>
//       <h1>Visit {name}</h1>
//     </div>
//       )
// }

// function SkiResort(name){
//   return(
//     <div>
//       <h1>Visit {name}</h1>
//     </div>
//   )
// }

// function App3(props){
//   if(props.season === "summer"){
//     return <Lake3 name = "Jennie Lake"/>;
//   } else if(props.season === "winter"){
//     return <SkiResort name ="Jackson Resort"/>;
//   }
// }
// ReactDOM.render(
//   <App3 season = "summer" />,
//   document.getElementById("root")
// );

// function App4(){
//   const[year,setYear]= useState(2030);
//   const[manager,setManager] = useState("Miguel")
//   const[status,setStatus] =useState("Open");
//   return(
//     <>
//     <div>
//       <h1>{year}</h1>
//       <button
//       onClick={() => setYear(year + 1)}
//       >New Year! </button>
//     </div>
//     <div>
//       <div>
//       <h1>Manager on Duty: {manager}</h1>
//       <button 
//       onClick={() => setManager("Rachel")}
//       ></button>
//       </div>
//       <h1>Status: {status}</h1>
//       <button onClick={() => setStatus("Open")}>
//         Open
//       </button>
//       <button onClick={() => setStatus("Back in 5")}>
//         Break
//       </button>
//       <button onClick={() => setStatus("Closed")}>
//         Closed
//       </button>
//     </div>
//     </>
//   )
// }

// React.Dom.render(
//   <App4/>,
//   document.getElementById("root")
// );

// function Checkbox() {
//   const[checked,setChecked] =useState(false)
//   useEffect(()=> {
//   //alert('checked: ${checked.toString()}');
//   });
//   return(
//     <>
//     <input 
//     type ="checkbox"
//      value ={checked}
//      onChange={() => setChecked(checked => !checked)}
//      />
//     {checked ? "checked" : "not checked"}
//     </>
//   )
// }

// ReactDOM.render(
// <Checkbox />,
// document.getElementById("root")
// );

// function App5(){
//   const[val,setVal] =useState("");
//   const[val2,setVal2] =useState("");

// useEffect(()=> {
// // eslint-disable-next-line no-template-curly-in-string
// console.log('field 1: ${val}');
// }, [val]);
// useEffect(()=> {
//   // eslint-disable-next-line no-template-curly-in-string
//   console.log('field 2: ${val2}');
//   },[val,val2]);

//   return(
// <>
// <label>
//   Favorite Phrase:
//   <input 
//   value={val}
//   OnChange={e => setVal(e.target.value)}
//   />
// </label>
// <br />
// <label>
//   Favorite Phrase:
//   <input 
//   value={val2}
//   OnChange={e => setVal2(e.target.value)}
//   />
// </label>
// </>
//   );
// }

// ReactDOM.render(
// <App5/>,
// document.getElementById("root")
// );