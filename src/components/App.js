
// import React from "react";
// import './../styles/App.css';

// import {useState} from "react";

// const App = () => {
//   //using useState
//   const [count,setCount]=useState(0);
//   const increment=() =>{
//  //   let curr=count+1;
//     setCount(count+1);
//   }
//   return (
//     <div>
//       {/* <Counter/> */}
//       <p>Button clicked {count} times</p>
//       <button onClick={increment}>Click me</button>
//     </div>
//   )
// }


import React, {useState} from "react";
import './../styles/App.css';
const App = () => {
  const [count , setCount] = useState(0);
  const onClickEvent = () => {
    setCount(count + 1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>{`Button clicked ${count} times`}</p>
        <button onClick={onClickEvent}>Click me</button>
    </div>
    
  )
}
export default App