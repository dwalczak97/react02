import { useState } from 'react'
 import Notification from "./components/notification.jsx"

import Description from "./components/description.jsx"
import Options from "./components/options.jsx"
import './App.css'

function App() {

const initialValue ={
   good: 0,
	neutral: 0,
	bad: 0
};

// const updateFeedback = (x) => {
 
//  const [values, setValues] = useState({
//    (x) =>{setValues{{
//     ...values,
//     x: values.x +1
//    }}}
//  })};


	// const updateNeutral = () => {setValues({
	// 	...values,
	// 	neutral: values.neutral + 1})};

  //   const updateBad = () => {setValues({
	// 	...values,
	// 	bad: values.bad + 1});
  //   };

  
return (
  <>
   <Description  />
    <Options />
   
  </>
)
};



export default App
