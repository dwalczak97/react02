const Feedback = ({values, totalFeedback, positive}) =>{
    return(
<>
    <p>Good: {values.good}</p>
    <p>Neutral: {values.neutral}</p>
    <p>Bad: {values.bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive: {positive}</p>
</> 
    );
}



export default Feedback;