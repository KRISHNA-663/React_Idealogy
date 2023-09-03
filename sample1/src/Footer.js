import React from 'react'
import { useState } from 'react';

const Footer = () => {

  const [name,setName]=useState("K")
    function Namechange()
  {
    const name = ["Aravinth","Neke","Jegan"];
    const int =Math.floor(Math.random()*3);
    setName(name[int]);
  }

  
  const handleClick = () => {
    console.log("You are added as a friend without name.");
  }
  {/*const handleClick3 = (e) => {
    console.log(e.target.innerText);   //Using an object for the event
  }*/}
  const handleClick2 = (name) => {
    console.log(`You are added as a friend ${name}`);
  }
  return (
    <div>
    <p>My best friend is {name}</p>
    <button onClick={Namechange}>CHANGE</button><br></br>
    <button onClick={() => handleClick2('KRISHNA')}>Add me as a friend</button>
    <button onClick={handleClick}>Add me as a friend without naming</button>
    {/*<button onClick={(e) => handleClick3(e)}>Target</button>*/}
    </div>
  )
}

export default Footer
