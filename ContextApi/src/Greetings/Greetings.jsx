import React from 'react'

const Greetings = (props) =>
  
  
  { 
  return (
      <div>
    <h1> Good morning {props.name} i have a {props.cert} </h1>
    {props.children}
    </div>
  ) 
}

export default Greetings