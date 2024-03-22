import { createContext, useReducer } from "react";

export const tasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TASKS":
        return {
          tasks: action.payload,
        };
      case "RESET_TASKS":
        return {
          tasks: [],
        };
      case "ADD_TASK": {
        let newTasks = null;
        if (state.tasks) {
          newTasks = [action.payload, ...state.tasks];
        } else {
          newTasks = [action.payload];
        }
        return {
          tasks: newTasks,
        };
      }
      case "DELETE_TASK":
        return {
          tasks: state.tasks.filter((task) => task._id !== action.payload._id),
        };
      default:
        return state;
    }
  };

  

  const [state, tasksDispatch] = useReducer(
    reducer,
    {tasks: []}
  );

  return (
    <tasksContext.Provider value={{...state, tasksDispatch }}>
      {children}
    </tasksContext.Provider>
  );
};

export default TasksContextProvider;

