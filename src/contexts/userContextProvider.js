import { createContext, useReducer } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          user: {
            email: action.payload.email,
            token: action.payload.token,
          },
        };
      case "RESET_USER":
        return {
          user: {
            email: null,
            token: null,
          },
        };
      default:
        return state;
    }
  };

  const [state, userDispatch] = useReducer(
    reducer,
    {
      user: { email: null, token: null },
    },
    () => {
      // getting user data from local storage if exists
      const userData = JSON.parse(localStorage.getItem("token"));
      return userData
        ? {
            user: { email: userData.email, token: userData.token },
          }
        : {
            user: { email: null, token: null },
          };
    }
  );

  return (
    <userContext.Provider value={{...state, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
