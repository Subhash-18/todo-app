import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    });
    setInput("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              type="text"
              value={input}
              placeholder="Update Todo"
              onChange={handleChange}
              className="todo-input edit form-control w-50 mx-auto"
            />
            <button
              onClick={handleSubmit}
              className="todo-button edit btn btn-primary"
            >
              Update
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={input}
              placeholder="Add a Todo"
              onChange={handleChange}
              className="todo-input form-control w-50 mx-auto"
            />
            <button
              onClick={handleSubmit}
              className="todo-button btn btn-primary"
            >
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
