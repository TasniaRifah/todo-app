import React from "react";

import "./style.css";

function Todo(props) {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveItem(id);
  };
  return (
    <div>
      <article className="todo">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div>
          <button className="btn">
            <i
              className="fa fa-trash fa-2x "
              onClick={() => handleClick(id)}
            ></i>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Todo;
