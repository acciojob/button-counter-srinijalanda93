
import React from "react";
import './../styles/App.css';

import {useState} from "react";

const App = () => {
  //using useState
  const [count,setCount]=useState(0);
  const increment=() =>{
 //   let curr=count+1;
    setCount(count+1);
  }
  return (
    <div>
      {/* <Counter/> */}
      <p>Button clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  )
}

