import { useState, useEffect } from 'react'
 import Notification from "./components/notification.jsx"
import Description from "./components/description.jsx"
import Options from "./components/options.jsx"
import './App.css'
import Feedback from "./components/feedback.jsx"
 
const initialValue =
 {
  good: 0,
	neutral: 0,
  bad: 0

};


function App() {

const [values, setValues] = useState(()=>{

const getLocal = localStorage.getItem("Feedback rates");
if (getLocal !== null) {
      return JSON.parse(getLocal);
    } else {
      return initialValue;
    }
});

const totalFeedback = values.good + values.neutral + values.bad;

const updateFeedback = (x) => {
  setValues({ ...values, [x]: values[x] + 1 });
  //  setVisible (visible !== true);
 };
  
const positive = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

 useEffect(() => {
    localStorage.setItem("Feedback rates", JSON.stringify(values));
  }, [values]);

  const [visible, setVisible] = useState(true);

const reset = () => {
   localStorage.clear()
   setVisible (visible === true)

};
// const [visible, setVisible] = useState(

// );





return (
  <>
   <Description  />

    <Options updateFeedback={updateFeedback} reset={reset} />
    <Feedback values={values} totalFeedback={totalFeedback} positive={positive} />
    { visible && <Notification/>}
   

   
  </>
)
};



export default App;
