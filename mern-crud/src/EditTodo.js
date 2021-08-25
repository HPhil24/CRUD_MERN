import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const EditTodo = () => {
    const [todo, setTodo] = useState();
  const { register, handleSubmit } = useForm({
      defaultValues: { text: todo ? todo.text : "" },
  });
  const history = useHistory()

  useEffect(() => {
    setTodo({
        text: "foo"
    })
  }, [])

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push("/")
  });

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
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
