import { useState } from "react";
import { taskSchema } from "../util/validation/validation";
import { useAlertContext } from "./useAlertContext";
import { useTasksContext } from './useTasksContext';
import { useUserContext } from "./useUserContext";
import { serverUrl } from "../util/serverUrl";

export const useAddTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // user hook
  const {tasksDispatch} = useTasksContext();

  // user hook
  const {user} = useUserContext();

  // alert hook
  const {alertDispatch} = useAlertContext();
  
  const addTask = async (taskData) => {
    
    //check user data
    const { error } = taskSchema.validate(taskData);
    if (!error) {
      try {
        //setting loading with true
        setLoading(true);
        //fetch request to server with the user data
        const response = await fetch(`${serverUrl}api/tasks/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authorization":`Bearer ${user.token}`
          },
          body: JSON.stringify(taskData),
        });

        const json = await response.json();
        if (!response.ok) {
          setLoading(false);
          throw Error(json.message)
        } 

          tasksDispatch({type:"ADD_TASK",payload:json.task});

          alertDispatch({type:"SUCCESS",message:json.message})
    
          setLoading(false);
        
      } catch (error) {
        setError(error.message);
        alertDispatch({type:"ERROR",message:error.message})
      }
    } else {
      setError(error.details[0].path[0]);
      alertDispatch({type:"ERROR",message:error.details[0].message})
    }
  };

  return { addTask, loading, error };
};