import React from "react";
import { connect } from "react-redux";

const value = 5;

function Counter(props) {
  return (
    <div>
      <div>Counter: {props.count}</div>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync}>Increment async</button>
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
    decrement: () => dispatch({ type: "DECREMENT", value: value }),
    reset: () => dispatch({ type: "RESET" }),
    increment: () => dispatch({ type: "INCREMENT", value: value }),
    incrementAsync: () => dispatch({ type: "INCREMENT_ASYNC", value: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
