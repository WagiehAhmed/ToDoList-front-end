import { useContext } from "react";
import { userContext } from "../contexts/userContextProvider";

export const useUserContext = () => {
  return useContext(userContext);
};