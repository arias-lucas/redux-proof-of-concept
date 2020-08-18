import React from "react";
import { connect } from "react-redux";

const value = 5;

function Counter({ count, decrement, reset, increment, incrementAsync }) {
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment async</button>
    </div>
  );
}

const mapStateToProps = function (state) {
  return { count: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch({ type: "DECREMENT", value }),
    reset: () => dispatch({ type: "RESET" }),
    increment: () => dispatch({ type: "INCREMENT", value }),
    incrementAsync: () => dispatch({ type: "INCREMENT_ASYNC", value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
