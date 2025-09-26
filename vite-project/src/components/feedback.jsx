const Feedback = ({values, totalFeedback, positive}) =>{
     if (values.good !== 0 || values.neutral !== 0 || values.bad !== 0)
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