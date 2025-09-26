


const Options = ({updateFeedback, reset}) =>{


return (
    <>
        <button onClick={()=>updateFeedback("good")}>Good</button>
        <button onClick={()=>updateFeedback("neutral")}>Neutral</button>
        <button onClick={()=>updateFeedback("bad")}>Bad</button>
        <button onClick={() => reset("reset")}>Reset</button>
       

    </>
)


};
export default Options;