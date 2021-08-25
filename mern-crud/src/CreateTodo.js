import React from "react";
import { useForm } from "react-hook-form";

export const CreateTodo = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              autoComplete="off"
              {...register("description", { required: "Required" })}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
