import React from 'react'
import { useState } from 'react'

const Content = () => {

    function countIn(){
        setCount(count+1) //got an error => when given multiple times the count stays as initialized in the first.
    }

    function countInc(){
        setCount((postcount) => {return (postcount+1)})
        setCount((rootcount) => {return (rootcount+1)})
        setCount((postcount) => {return (postcount+1)})
    }

    function  countDec(){
        setCount(count-1)
    }

    const [count,setCount]=useState(0);
  return (
    <main style={{backgroundColor:"pink"}}>
        <p>Change count</p>
        <button onClick={countDec}>-</button>
        <button>Subscribe</button>
        <button onClick={countInc}>+</button>
        <br></br>
        <span>{count}</span>
    </main>
  )
}

export default Content