import { useState } from 'react'
 import Notification from "./components/notification.jsx"

import Description from "./components/description.jsx"
import Options from "./components/options.jsx"
import './App.css'
import Feedback from "./components/feedback.jsx"

function App() {

const [values, setValues] = useState(
 {
  good: 0,
	neutral: 0,
	bad: 0

});


const updateFeedback = (x) => {
  setValues({ ...values, [x]: values[x] + 1 });
 };
  
return (
  <>
   <Description  />
    <Options updateFeedback={updateFeedback}/>
    <Feedback values={values} />
   

   
  </>
)
};



export default App;
