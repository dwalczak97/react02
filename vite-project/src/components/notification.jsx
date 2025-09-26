const Notification = ({ values }) => {
  if (values.good === 0 && values.neutral === 0 && values.bad === 0) {
    return <div>No feedback yet</div>;
  }
};

export default Notification;