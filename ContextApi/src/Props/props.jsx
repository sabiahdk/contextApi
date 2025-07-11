import React from 'react'



const props = (props) => {
  return (
    <div className='flex-1/2 justify-items-center' >
          <h2>name:{props.name}</h2>
            <h2>age: {props.age}</h2>
             <h2>food:{props.food}</h2>
              <h2>color:{props.color}</h2>
              <h2>female:{props.isFemale ? "yes" : "no"}</h2>

      </div>
 
      
     
  )
}

export default props