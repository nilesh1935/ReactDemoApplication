import React,{useState, useEffect} from "react";

const Counter = () =>{
const [value, setValue]= useState(0)

useEffect(()=>{
  displayAlert()
},[value])

function displayAlert(){
  alert(value)
}
  return(
    <>
    <p>Counter : {value}</p>
    <input type="button" value="Increment" onClick={()=>setValue(value+1)}/>
    <input type="button" value="Decrement" onClick={()=>setValue(value-1)}/>
    </>
  )
}
export default Counter