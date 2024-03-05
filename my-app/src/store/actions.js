import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: { index },
});
export const editTodo = (index, newText) => ({
  type: EDIT_TODO,
  payload: { index, newText },
});
