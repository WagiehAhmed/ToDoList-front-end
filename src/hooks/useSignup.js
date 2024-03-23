import { useState } from "react";
import { userSchema } from "../util/validation/validation";
import { useAlertContext } from "./useAlertContext";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../util/serverUrl";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { alertDispatch } = useAlertContext();

  const signup = async (userData) => {
    //check user date
    const { error } = userSchema.validate(userData);
    if (!error) {
      try {
        //setting loading to true
        setLoading(true);
        //fetch request to server for registering the new user
        const response = await fetch(`${serverUrl}api/users/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
          },
          body: JSON.stringify(userData),
        });

        const json = await response.json();
        if (!response.ok) {
          setLoading(false);
          throw Error(json.message);
        }

        alertDispatch({ type: "SUCCESS", message: json.message });
        // navigate to login page
        
        navigate("/login", { replace: true });
        // reset loading with false
        setLoading(false);
        
      } catch (error) {
        setError(error.message);
        alertDispatch({ type: "ERROR", message: error.message });
      }
    } else {
      setLoading(false);
      setError(error.details[0].path[0]);
      alertDispatch({ type: "ERROR", message: error.details[0].message });
    }
  };
  return { signup, loading, error };
};
