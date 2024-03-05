import React from "react";
import { useStore, actions } from "../store";
import "../App.scss";

function TodoList1() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
  };

  const handleEdit = (index) => {
    const newText = prompt("Enter new text for todo:");
    if (newText !== null) {
      dispatch(actions.editTodo(index, newText));
    }
  };

  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
  };

  return (
    <div>
      <div className="input-container">
        <input
          value={todoInput}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
          type="text"
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList1;
