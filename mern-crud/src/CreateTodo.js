import React from "react";
import { createTodo } from "./api";
import { TodoForm } from "./TodoForm";

export const CreateTodo = () => {
  const onSubmit = (data) => {
    createTodo(data)
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
