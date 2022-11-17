import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = (text) => {
    updateTodo(edit.id, text);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row row text-decoration-line-through w-50 mx-auto" : "todo-row row w-50 mx-auto"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className="col">
        {todo.text}
      </div>
      <div className="icons col">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, text: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
