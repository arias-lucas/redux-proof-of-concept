import React from "react";
import { connect } from "react-redux";

function List(props) {
  return (
    <div>
      <div>Todo list: {props.todoList.join(', ')}</div>
      <button onClick={props.addTodo}>Add text</button>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    todoList: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch({ type: "ADD_TODO", text: "Agrega3" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
