import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Link,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { theme } from "./theme";

export const CustomAppBar = styled(AppBar)(() => ({
  boxSizing: "border-box",
  position: "static",
  // border:'2px solid red',
}));

export const CustomFooter = styled(AppBar)(() => ({
  boxSizing: "border-box",
  position: "static",
  // position: "fixed",
  // top:"93%",
  // bottom:"0px",
  // left:"0px",
  // border:'2px solid red',
}));

export const CustomToolBar = styled(Toolbar)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  // border:'2px solid green',
}));

export const Logo = styled(Typography)(() => ({
  textAlign: "center",
  color: `${theme.palette.primary2.main}`,
  fontSize: "25px",
  fontWeight: "bold",
  // border: "2px solid red",
}));

export const Actions = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  padding: "1px",
  justifyContent: "space-between",
  // border: "2px solid red",
}));

export const ActionButton = styled(Button)(() => ({
  margin: "auto 5px",
  borderRadius: "100px",
  textTransform: "capitalize",
  width: "fit-content",
  margin: "5px",
  backgroundColor: `${theme.palette.primary2.main}`,
  "&:hover": {
    backgroundColor: `${theme.palette.primary2.main}`,
    scale: "1.05",
  },
}));

export const MainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between",
  boxSizing: "border-box",
  overflow:"hidden",
  height: "100dvh",
  backgroundColor: `${theme.palette.secondary.main}`,
  // border: "2px solid green",
}));

export const IconContainer = styled(IconButton)(() => ({
  boxSizing: "border-box",
  position: "relative",
  
"&:hover":{
  transform:"scale(1.12,1.12)",
},

  "&.add-task-container": {
    border: `7px solid ${theme.palette.secondary.main}`,
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: `${theme.palette.primary2.main}`,
  },
  "&.add-task-container::before": {
    // backgroundColor:`red`,
    backgroundColor: `${theme.palette.primary}`,
    content: "''",
    width: "10px",
    height: "10px",
    position: "absolute",
    top: "50%",
    left: "-24%",
    borderRadius: "0 100% 0 0",
    boxShadow: `3px -3px 0 3px ${theme.palette.secondary.main}`,
  },
  "&.add-task-container::after": {
    backgroundColor: `${theme.palette.primary}`,
    content: "''",
    width: "10px",
    height: "10px",
    position: "absolute",
    top: "50%",
    right: "-24%",
    borderRadius: "100% 0 0 0",
    boxShadow: `-3px -3px 0 3px ${theme.palette.secondary.main}`,
  },
  "& .add-task": {
    color: `${theme.palette.primary.main}`,
    fontSize: "50px",
  },

  "&.delete-task-container": {
    position:"absolute",
    bottom:"5px",
    right:"5px",
    //  backgroundColor: `${theme.palette.secondary.main}`,
    backgroundColor: `${theme.palette.primary2.main}`,
    fontSize: "50px",
  },
  "& .delete-task": {
    color: `${theme.palette.primary.main}`,
    fontSize: "25px",
  },
}));

export const CustomContainer = styled(Box)(() => ({
  boxSizing: "border-box",
  position:"relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexGrow: 1,
  backgroundColor: `${theme.palette.secondary.main}`,
  overflowY:"scroll",
  margin:"10px 0px",
  // border: "2px solid red",
}));

// task section ............................................................

export const TasksContainer = styled(Container)(() => ({
  // backgroundColor: `${theme.palette.primary.main}`,
  padding:"10px !important",
  // border: "2px solid red",
}));
export const TaskContainer = styled(Box)(() => ({
  boxSizing:'border-box',
  backgroundColor: `${theme.palette.primary.main}`,
  position:"relative",
  margin:"5px",
  padding:"10px",
  borderRadius:"10px",
  // border: "2px solid red",
}));

export const TaskTitle = styled(Typography)(() => ({
  boxSizing:'border-box',
  textTransform: "capitalize",
  // border: "2px solid green",
}));

export const TaskContent = styled(Typography)(() => ({
  boxSizing:'border-box',
  padding:"5px",
  // border: "2px solid green",
}));
export const TaskDate = styled(Typography)(() => ({
  boxSizing:'border-box',
  padding:"5px",
  color: `${theme.palette.secondary.main}`,
  // border: "2px solid green",
}));

// forms section ...........................................................................
export const CustomDialog = styled(Dialog)(()=>({
  // width:"100%",
  // height:"100%",
  backgroundColor:"rgba(0,0,0,0.5)",
  
  "& .MuiPaper-root":{
    borderRadius:"10px",

  }
}))
export const CustomDialogContent = styled(DialogContent)(()=>({
  borderRadius:"10px",
  overflow: "hidden",
  padding: "0px",
  maxWidth: "500px",
  minWidth: "300px",
}))


// forms section ...........................................................................
export const CustomForm = styled("form")(({ sizes }) => ({
  width: sizes.xs ? "90%" : "25%",
  minWidth: sizes.xs ? "90%" : "350px",
  maxWidth: "100%",
  margin: "0px auto",
  borderRadius: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  backgroundColor: `${theme.palette.primary.main}`,
  // border: "2px solid green",

  "&.center-form":{
    position:'absolute',
    top:"50%",
    left: '50%',
    transform: "translate(-50%, -50%)",
  },

  "&.dialog-form":{
   width:"100%",
  }
}));

export const CustomFormControl = styled(FormControl)(({ sizes }) => ({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  padding: sizes.md ? "10px" : "20px",
  //   boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  // border: "2px solid red",
}));

export const CustomFormLabel = styled(FormLabel)(() => ({
  textAlign: "center",
  padding: "10px",
  margin: "10px 0px",
  // border: "2px solid red",
  color: `${theme.palette.black.main}`,
  "&::first-letter": {
    textTransform: "capitalize",
  },
  "&.new-account": {
    fontWeight: "bold",
  },
}));

export const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  textTransform: "capitalize",
  padding: "0px",
  margin: "5px 0px",
  // border: "2px solid red",
}));

export const CustomTextFeild = styled(TextField)(() => ({
  flexGrow: 1,
  marginBottom: "15px",
  color: "secondary",
  borderRadius: "50px",
  //   border:"2px solid green",
  "& .MuiInputBase-root": {
    borderRadius: "50px",
  },
  "& .MuiInputBase-input": {
    padding: "10px ",
    borderRadius: "50px",
  },

  "& label.Mui-focused": {
    color: `${theme.palette.primary2.main}`,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: `${theme.palette.secondary.main}`,
    },
    "&:hover fieldset": {
      margin: "-1px",
      borderColor: `${theme.palette.primary2.main}`,
    },
    "&.Mui-focused fieldset": {
      margin: "-1px",
      borderColor: `${theme.palette.primary2.main}`,
    },
  },

  "&.multiline":{

 borderRadius: "25px",
  "& .MuiInputBase-root": {
    borderRadius: "25px",
  },
  "& .MuiInputBase-input": {
    padding: "10px ",
    borderRadius: "25px",
  },

  }
}));

//   export const CustomMultilineTextFeild = styled(TextField)(() => ({
//     flexGrow: 1,
// marginBottom: "15px",
// backgroundColor: "#ECEEEB",
// borderRadius: "10px",
// "& .MuiInputBase-root": {
//   borderRadius: "10px",
//   padding:"5px"
// },
// "& .MuiInputBase-input": {
//   padding:"5px ",
//   borderRadius: "10px",
// },

// '& .MuiOutlinedInput-root': {
//   '& fieldset': {
//     borderColor: `${colors.white}`,
//   },
//   '&:hover fieldset': {
//     margin:"-1px",
//     borderColor: `${colors.textSecondary}`,
//   },
//   '&.Mui-focused fieldset': {
//     margin:"-1px",
//     borderColor: `${colors.primary}`,
//   },
// },
//   }));

export const CustomFormButton = styled(Button)(() => ({
  textTransform: "capitalize",
  borderRadius: "100px",
  width: "fit-content",
  alignSelf: "center",
  margin: "5px",
  color: `${theme.palette.primary.main}`,
  backgroundColor: `${theme.palette.primary2.main}`,
  "&:hover": {
    backgroundColor: `${theme.palette.primary2.main}`,
    scale: "1.05",
  },
}));

export const CustomCircularProgress = styled(CircularProgress)(() => ({
  width: "fit-content",
  alignSelf: "center",
  margin: "5px",
  color: `${theme.palette.primary2.main}`,
}));

export const CustomButton = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  margin: "5px",
  color: `${theme.palette.primary.main}`,
  backgroundColor: `${theme.palette.primary2.main}`,
  "&:hover": {
    backgroundColor: `${theme.palette.primary2.main}`,
    scale: "1.05",
  },
}));

export const CustomLink = styled(Link)(() => ({
  textTransform: "capitalize",
  textDecoration: "none",
  color: `${theme.palette.primary2.main}`,
  "&:hover": {
    cursor: "pointer",
  },
}));
