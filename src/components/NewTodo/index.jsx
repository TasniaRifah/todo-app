import React, { useState } from "react";

import "./style.css";

function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldtodo) => {
      return { ...oldtodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(todo);
    props.onAddTodo(todo);
  };


  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="desc">Description: </label>
        <textarea
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
