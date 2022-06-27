/*Creating an Object 

const pool = {
name: pool
volume: 30 ,
color: "blue" ,
width: 45
height: 35
}
*/

/* Creating a Class , very similar context to java
class Name{} this declares a class
const Name = class{} expression for class

example:
class Pool{
    constructor // contains parameters and properties
    ( width
    height
    volume
    )
}
*/

/* mixing strings and literals
const content ``; - backticks under escape key, tells browser that template literal, mix html and string with JS expressions

${pool} - insert JS expression,  calls JS expressions, render then output to placeholder
affects line 3
*/

/*DOM: Document Object Model
document.querySelector("brown dog") - selects element that matches CSS selectors

modify classes for elements
document.querySelector()classList.add() - adds classes
document.querySelector()classList.remove() - removes class
document.querySelector()classList.toggle() - toggles between add and remove, toggles between classes
document.querySelector()classList.replace()-changes classes based on user

attributesdocument.querySelector()setAttribute() - adjust element attributes
*/

/*Adding more DOM Element
example:
const main =document.querySelector(".maincontent");
const newText = document.createElement("Swimming Pool")
newText.classlist.add("Pool")
newText.setAttribute("blue","water")
newText.innerHTML = content; - appends to main class in index.html

*/

/*Variables in Javascript
var = variable
var shelf = 6
6 is the value of shelf
*/

/* Dealing with Arrays
create a constant class and assign values using []
const beach bag=["sunscreen","glasses","beachball"];

let bag=["apples"];
bag.push("bananas","blueberries") - appends to the given array which is bag
bag.unshift("blueberries") - bring last item to the top of the list
bag.shift("apples") - takes first item off the list

*/

/*Functions

Declaration
function dojump(dog){
  let jumping = dog;
  return jumping;

Expression 
const bag =function(parameters){
    let c = parameters;
    return c;
}

*/

/*STATEMENTS

conditional = if(object === true){
    console.log()
}else{
    console.log()
}

/*SWITCH statementsc similar to java

hungry =20
switch(true)
case hungry > 10
description ="starving"
break;
case  hungry >20
description ="not starving"
break;
case  hungry >30
description ="kinda starving"
default;
console.log("I'm okay");
*/

