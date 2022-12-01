import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import NewTodo from "../NewTodo";
import Todos from "../Todos";
import "./style.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const handelAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  console.log(todos)
  const handleRemoveTodo=(id)=>{

setTodos((prevtodos)=>{
  const filteredTodos=prevtodos.filter((todo)=>todo.id !== id)
  return filteredTodos;
})
  }
  return (
    <div className="container">
      <h1>Todo App</h1>
      <NewTodo onAddTodo={handelAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
}

export default Home;
