import React from 'react'

const Footer = () => {
    function Namechange()
  {
    const name = ["Aravinth","Neke","Jegan"];
    const int =Math.floor(Math.random()*3);
    return name[int];
  }
  return (
    <p>My best friend is {Namechange()}</p>
  )
}

export default Footer
