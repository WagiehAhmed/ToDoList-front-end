import { useContext } from "react";
import { alertContext } from "../contexts/AlertContextProvider";

export const useAlertContext = () => {
  return useContext(alertContext);
};