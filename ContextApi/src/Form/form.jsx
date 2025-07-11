import React from 'react'
import { useState } from 'react'


const Form = () => {
  const [userDetails, setUserDetails] = useState ({
    firstName:"",
    lastNmae:"",
    email:"",
    passWord:"",
    phoneNumber:"",

  })
  const handleFormUpdate = (e) => {
      //  console.log (userDetails);
          console.log (e.target.name, e.target.value, e.target.placeholder)
       }

  return (

      
     
    <div className='flex-1/2 justify-items-center'>
        <div >
             <form>

              <h3>Firstname</h3>
              <input onChange={handleFormUpdate} type="text" placeholder='enter your name'/>
               <h3>Lastname</h3>
               <input onChange={handleFormUpdate} type="text"  placeholder='your lastname'/>
               <h3>email</h3>
               <input onChange={handleFormUpdate} type="text"placeholder='@gmail.com' />
               <h3>Phone Number</h3>
              <input onChange={handleFormUpdate} type="text" placeholder='+234...' />
               <h3>Password</h3>
               <input onChange={handleFormUpdate} type="text" placeholder='*****' />
               </form>
        </div>
        
        




    </div>
  )
}

export default Form