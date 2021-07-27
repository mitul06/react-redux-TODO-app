import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const AddTodo = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let input = e.target.userInput.value;
          props.dispatch(addTodo(input));
          e.target.userInput.value = "";
        }}
      >
        <input type="text" name="userInput" style={{margin:"5px", padding:"6px"}} placeholder="✒ write here..."/> &nbsp;
        <button className="btn btn-success" style={{margin:"5px", padding:"7px"}}>Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
