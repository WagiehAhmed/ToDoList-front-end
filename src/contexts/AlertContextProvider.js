import { Alert, Grow, Slide, Snackbar } from "@mui/material";
import { createContext, useReducer} from "react";

export const alertContext = createContext();

const SlideTransition = (props)=>{
  return(
     <Slide {...props} direction="right" />
    // <Grow {...props}/>
  )
}

const AlertContextProvider = ({ children }) => {
  
  const reducer = (state,action)=>{
    switch(action.type) {
      case "ERROR":
        return {
          error:true,
          success:state.success,
          info:state.info,
          warning:state.warning,
          message:action.message,
        };
      case "SUCCESS":
        return {
          error:state.error,
          success:true,
          info:state.info,
          warning:state.warning,
          message:action.message,
        };
      case "INFO":
        return {
          error:state.error,
          success:state.success,
          info:true,
          warning:state.warning,
          message:action.message,
        };
      case "WARNING":
        return {
          error:state.error,
          success:state.success,
          info:state.info,
          warning:true,
          message:action.message,
        };
      case "RESET":
        return {
          error:null,
          success:false,
          info:false,
          warning:false,
          message:"",
        };
        default :
          return state;

  }};

  const [state,alertDispatch] = useReducer(reducer,{error:false,success:false,info:false,warning:false,message:""})
   
  return (
    <alertContext.Provider value={{alertDispatch}}>
      {children}
      
      <Snackbar
        open={
          state.error ||
          state.success ||
          state.info ||
          state.warning 
        }
        autoHideDuration={1200}
        TransitionComponent={SlideTransition}
        onClose={()=>alertDispatch({type:"RESET"})}
      >
        <Alert
          severity={ state.error
            ? "error"
            :  state.success
            ? "success"
            : state.info
            ? "info"
            : state.warning
            ? "warning"
            : ""}

          // onClose={()=>dispatch({type:"RESET"})}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </alertContext.Provider>
  );
};

export default AlertContextProvider;
