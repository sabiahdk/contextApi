import React from 'react'
// import UserContext from './context/UserContext';
import Form from './Form/form';
import Props from './Props/props'

export const App = () => {
  return (
    <div>
         <Form/>
        <Props/>
        <props name = "sabiah"  age = "23"  food = "jollof " color = "brown"  isFemale = {true}/>
    </div>
  )
}
export default App;