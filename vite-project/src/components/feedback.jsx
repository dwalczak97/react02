const Feedback = ({values, totalFeedback}) =>{
    return(
<>
    <p>Good: {values.good}</p>
    <p>Neutral: {values.neutral}</p>
    <p>Bad: {values.bad}</p>
    <p>Total: {totalFeedback}</p>
</> 
    );
}



export default Feedback;