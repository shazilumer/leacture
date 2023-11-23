import React, { useState } from 'react'
import "./State.css"
const State = () => {
    // const sum = 3 + undefined
    // console.log(sum)
    console.log(useState("Bilal"))

    const [num, setNum] = useState(45)
    // const [num1, setNum1] = useState(num)
// console.log(num)
//  let arr = [1,2,3,4,"Ali", "Shazil", "Cr", "Bilal"]
//  let [,two,three] = arr
// console.log(two,three)

    // let count = 0
const increment = ()=>{
    setNum(num+1)
    // count = count+1
    // console.log(count)
}
const decrement = ()=>{
    setNum(num-1)
    // count = count+1
    // console.log(count)
}
const change=()=>{
document.getElementById("color").className="change-color2"
}
  return (
  <>
  
  <h1>{num}</h1>
  <button onClick={increment}  id="color" className='change-color' >Click Me</button>
  <button onClick={decrement}>Click now</button>
  <button onClick={change} style={{background:"black",color:"#fff"}}>change color</button>
  
  </>
  )
}

export default State