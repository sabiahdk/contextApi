import React from 'react'
// import UserContext from './context/UserContext';
import Form from './Form/form';
import Props from './props/props';
import Greetings from './Greetings/Greetings';

export const App = () => {
  return (
    <div>
         <Form/>
        <Props/>
        <Props name = "sabiah"  age = {23}  food = "jollof " color = "brown"  occupation = "techy"/>
        <Props name = "hadiza" age = "16" food = "Semo" color = "White" occupation = "student" />
         <Props name = "Aliyu" age = "18" food = "spag" color = "White" occupation = "student" />
        <Props name = "Suraj" age = "20" food = "noodles" color = "White" occupation = "programmer" />


             <div>
         <Greetings name = "Suraj"  cert = "diploma"> <p>This is the children 
          props</p></Greetings>
        
          <Greetings name = "Sabiah"  cert = "degree"/> 

         <Greetings name = "Hadiza" cert = "masters"/>
    
              </div>


    </div>
  )
}
export default App;