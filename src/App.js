import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";

const App = () => {
  return (
    <div style={{margin:"10px"}}>
      <br></br>
      <h1 style={{textAlign:"center"}}>Welcome,</h1>
      <h4 style={{textAlign:"center"}}>TODO List 😃</h4>
      <AddTodo/> <br></br>
      <div className="card divstyle">
        <div className="card-body">
          <List />
        </div>
      </div>
    </div>
  );
};

export default App;
