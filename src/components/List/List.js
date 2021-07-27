import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";

const List = (props) => {
  return (
    <ol className="list-group list-group-numbered ">
      {props.todos.map((todo, index) => (
        <li className="list-group-item text-start" key={index} style={{fontSize:"23px"}} >
          {todo.message}
          <button className="btn btn-outline-dark float-end" onClick={() => props.dispatch(deleteTodo(todo.id))}>
          ⛔Delete⛔
          </button>
        </li>
      ))}
    </ol>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
