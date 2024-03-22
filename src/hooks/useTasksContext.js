import { useContext } from "react";
import { tasksContext } from "../contexts/TasksContextProvider";

export const useTasksContext = () => {
  return useContext(tasksContext);
};