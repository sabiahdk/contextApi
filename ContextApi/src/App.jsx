import React from 'react'
// import UserContext from './context/UserContext';
import Form from './Form/form';
import Props from './props/props';


export const App = () => {
  return (
    <div>
         <Form/>
        <Props/>
        <Props name = "sabiah"  age = "23"  food = "jollof " color = "brown"  occupation = "techy"/>
    </div>
  )
}
export default App;