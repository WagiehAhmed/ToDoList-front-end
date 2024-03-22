import { useState } from "react";
import { userSchema } from "../util/validation/validation";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./useUserContext";
import { useAlertContext } from "./useAlertContext";
import { serverUrl } from "../util/serverUrl";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //user hook
  const { userDispatch } = useUserContext();

  //alert hook
  const { alertDispatch } = useAlertContext();

  const login = async (userData) => {
    
    //check user data
    const { error } = userSchema.validate(userData);
    if (!error) {
      try {
        // set loading with true
        setLoading(true);
        //fetch request to server with the user data
        const response = await fetch(`${serverUrl}api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const json = await response.json();
        if (!response.ok) {
          setLoading(false);
          throw Error(json.message);
        }

        // save user and token in local state
        userDispatch({
          type: "SET_USER",
          payload: { email: json.email, token: json.token },
        });

        // save token in localStorage
        localStorage.setItem(
          "token",
          JSON.stringify({ email: json.email, token: json.token })
        );

        // redirect to tasks page
        navigate("/", { replace: true });

        //notofication
        alertDispatch({ type: "SUCCESS", message: json.message });
        
        // reset loading with false
        setLoading(false);
      } catch (error) {
        setError(error.message);
        alertDispatch({ type: "ERROR", message: error.message});
      }
    } else {
      setError(error.details[0].path[0]);
      alertDispatch({ type: "ERROR", message: error.details[0].message });
    }
  };

  return { login, loading, error };
};
