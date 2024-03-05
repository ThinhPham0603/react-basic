import { SET_TODO_INPUT, ADD_TODO, EDIT_TODO, DELETE_TODO } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};
function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      const { index, newText } = action.payload;
      const updatedTodos = [...state.todos];
      updatedTodos[index] = newText;
      return {
        ...state,
        todos: updatedTodos,
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        (_, i) => i !== action.payload.index
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      throw new Error("Invalid action.");
  }
}

export { initState };
export default reducer;
