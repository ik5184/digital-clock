import React, { useState } from "react";
import './App.css';

const App=()=>{
  let time=new Date().toLocaleTimeString();
  const [ctime,setTime]=useState(time);
  
  
  const Show=()=>{
    time=new Date().toLocaleTimeString();
    setTime(time);
  }
  // var data=setInterval(Show,1000);
  
  return(
    <>
    <div className="title">
      <h2>Created by Iklash Khan</h2>
    <h1>{ctime}</h1>
    <button onClick={Show}>Get Time</button>
</div>
    </>
  );
}
export default App;