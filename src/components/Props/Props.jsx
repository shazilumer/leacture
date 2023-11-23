  import React from 'react'
import "./Props.css"
const Props = (props) => {


  return (
    <div>
        <div class="container">
 <div class="wrapper">
   <div class="banner-image" style={{backgroundImage:`url(${props.imgsrc})`}}> </div>
   <h1> {props.title}</h1>
   <p>{props.text}</p>
  </div>
  <div class="button-wrapper"> 
  <button class="btn outline">DETAILS</button>
    <button class="btn fill">BUY NOW</button>
  </div>
    </div>
        
 


    </div>
  )
}

export default Props