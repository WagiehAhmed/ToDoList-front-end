import { useState } from "react";
import { useAlertContext } from "./useAlertContext";
import { useTasksContext } from './useTasksContext';
import { useUserContext } from "./useUserContext";
import { serverUrl } from "../util/serverUrl";

export const useFetchTasks = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  
  // user hook
  const {tasks , tasksDispatch} = useTasksContext();
  // user hook
  const {user} = useUserContext();
  // alert hook
  const {alertDispatch} = useAlertContext();
  
  const fetchTasks = async () => {
      try {
        // settign loading and error states 
        setIsLoading(true);
        setError("");
          //fetch request to server with the user data
          const response = await fetch(`${serverUrl}api/tasks/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization":`Bearer ${user.token}`,
              "Access-Control-Allow-Origin": "*"
            },
          });
          
          const json = await response.json();
          if (!response.ok) {
            setIsLoading(false);
            throw Error(json.message)
        } 
        
        //saving tasks to local state
        tasksDispatch({ type:"SET_TASKS", payload:json.tasks});
        
        // resetting loading and error states 
        setIsLoading(false);
        setError("");
        
        } catch (err) {
          setError(err.message);
          alertDispatch({type:"ERROR",message:err.message})
        }
  };

  return { fetchTasks, isLoading, error };
};