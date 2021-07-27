const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      const todo = state.data.filter((todo) => todo.id !== action.id);

      return {
        ...state,
        data: todo,
      };
    default:
      return state;
  }
};

export default todos;
