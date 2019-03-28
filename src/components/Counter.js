import React from "react";
import { connect } from "react-redux";

const counterValue = 5;

function Counter(props) {
  return (
    <div>
      <div>Counter: {props.count}</div>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT", value: counterValue }),
    decrement: () => dispatch({ type: "DECREMENT", value: counterValue }),
    reset: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
