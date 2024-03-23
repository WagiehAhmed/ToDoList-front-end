import React, { useState } from "react";
import {
  IconContainer,
  TaskContainer,
  TaskContent,
  TaskDate,
  TaskTitle,
} from "../styles/CustomComponents";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Skeleton } from "@mui/material";
import {formatDistanceToNow} from "date-fns"
import { useUserContext } from "../hooks/useUserContext";
import { useTasksContext } from "../hooks/useTasksContext";
import { useAlertContext } from "../hooks/useAlertContext";
import { serverUrl } from './../util/serverUrl';

const Task = ({ taskData,isLoading }) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // user hook
  const { tasksDispatch } = useTasksContext();

  // user hook
  const { user } = useUserContext();

  // alert hook
  const { alertDispatch } = useAlertContext();

  const deleteTask = async (task) => {
    setLoading(true);
    setError(null);

    try {
      //fetch request to server with the user data
      const response = await fetch(
        `${serverUrl}api/tasks/${task._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
      }
      if (response.ok) {
        tasksDispatch({ type: "DELETE_TASK", payload: task });
        alertDispatch({ type: "SUCCESS", message: json.message });
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      alertDispatch({ type: "ERROR", message: error.message });
    }
  };

  const deleteHandler = (task) => {
    if(user.token){
      deleteTask(task);
    }
  };
  return (
    <TaskContainer>

      {
      !isLoading?<TaskTitle>{taskData.title}</TaskTitle>:<Skeleton animation="wave" variant="text" width="50%" />
  }
      {
      !isLoading?<TaskContent>{taskData.content}</TaskContent>:<Skeleton animation="wave" variant="text" width="90%" />
  }
      {
      !isLoading?<TaskDate>{formatDistanceToNow(new Date(taskData.createdAt),{addSuffix:true})}</TaskDate>:<Skeleton animation="wave" variant="text" width="90%" />
  }
      

      
      <IconContainer className="delete-task-container" onClick={()=>{deleteHandler(taskData)}}>
      <DeleteOutlineIcon className="delete-task" />
      </IconContainer>
    </TaskContainer>
  );
};

export default Task;
