import React from 'react'

const Footer = () => {
    function Namechange()
  {
    const name = ["Aravinth","Neke","Jegan"];
    const int =Math.floor(Math.random()*3);
    return name[int];
  }
  const handleClick = () => {
    console.log("You are added as a friend");
  }
  const handleClick2 = (name) => {
    console.log(`You are added as a friend ${name}`);
  }
  return (
    <div>
    <p>My best friend is {Namechange()}</p>
    <button onClick={() => handleClick2('KRISHNA')}>Add me as a friend</button>
    <button onClick={handleClick}>Add me as a friend without naming</button>
    </div>
  )
}

export default Footer
