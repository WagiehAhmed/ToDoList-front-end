import React, { useEffect, useState } from "react";
import Task from "./Task";
import { CustomCircularProgress, TasksContainer } from "../styles/CustomComponents";
import { useUserContext } from "../hooks/useUserContext";
import { useTasksContext } from "../hooks/useTasksContext";
import { useFetchTasks } from "../hooks/useFetchTasks";

const Tasks = () => {
  const { tasks , tasksDispatch} = useTasksContext();

  const {user} = useUserContext();

  const { fetchTasks, error, isLoading } = useFetchTasks();


  // fetch tasks at first time of render
  useEffect(() => {
    if (user.token) {
      fetchTasks();
    }
  }, []);
  return (
    <TasksContainer>
      {isLoading && !error
        ? (<CustomCircularProgress/>)
        : tasks && !error
        ? tasks.map((task) => (
            <Task taskData={task} key={task.title} isLoading={isLoading} />
          ))
        : "No tasks. "}
    </TasksContainer>
  );
};

export default Tasks;
