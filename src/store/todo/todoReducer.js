
export const todoActionTypes = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_ALL: "DELETE_ALL",
};

const initialState = {
  todo: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      const newTodo =  {
            id: Math.random().toString() + new Date().getMilliseconds().toString(),
            title:action.payload,
            complete: false
          }
      return {
        ...state,
        todo: [
          ...state.todo, newTodo]
      };

    case todoActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              complete: !item.complete,
            };
          }
          return item;
        }),
      };

    case todoActionTypes.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };

    case todoActionTypes.EDIT_TODO:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              title: action.value,
            };

          }
          return item;
        }),
      };
    case todoActionTypes.DELETE_ALL:
      return initialState;
    default:
      return state;
  }
};

