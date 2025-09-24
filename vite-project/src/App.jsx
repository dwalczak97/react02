// import { useState } from 'react'

import Description from "./components/description.jsx"
import Options from "./components/options.jsx"
import './App.css'

function App() {
  const Rate = {
	good: 0,
	neutral: 0,
	bad: 0
}
return (
  <>
   <Description  />
    <Options />
   
  </>
)
}



export default App
