import { useAlertContext } from "./useAlertContext";
import { useTasksContext } from "./useTasksContext";
import { useUserContext } from "./useUserContext";

export const useLogout = () => {
  //tasks hook
  const { tasksDispatch } = useTasksContext();
  //user hook
  const { userDispatch } = useUserContext();
  //alert hook
  const { alertDispatch } = useAlertContext();

  const logout = async () => {
    // remove token from local state
    tasksDispatch({ type: "RESET_TASKS" });
    userDispatch({ type: "RESET_USER" });
    // remove token from localStorage
    localStorage.removeItem("token");
    alertDispatch({type:"SUCCESS",message:"GoodBye"});
  };
  return { logout };
};
