import React from "react";

import Todo from "../Todo";
import "./style.css";

function Todos(props) {
  return (
    
      <section className="todos">
        {props.todos.map((todo) => (
          <Todo todo={todo.todo}  id={todo.id} onRemoveItem={props.onRemoveTodo}/>
        ))}
      </section>
    
  );
}

export default Todos;
