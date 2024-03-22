import React, { forwardRef, useState } from "react";
import {
  CustomCircularProgress,
  CustomDialog,
  CustomFooter,
  CustomForm,
  CustomFormControl,
  CustomFormLabel,
  CustomTextFeild,
  CustomToolBar,
  IconContainer,
} from "../styles/CustomComponents";
import AddIcon from "@mui/icons-material/Add";
import { Slide, Tooltip } from "@mui/material";
import {
  CustomFormButton,
  CustomDialogContent,
} from "./../styles/CustomComponents";
import { useAddTask } from "../hooks/useAddTask";
import { useUserContext } from "../hooks/useUserContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MainFooter = ({ sizes }) => {
  // task info
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // get user data
  const { user } = useUserContext();

  const { addTask, loading, error } = useAddTask();

  // dialog trigger
  const [openDialog, setOpenDialog] = useState(false);
  const dialogTriggerhandler = () => {
    setOpenDialog(!openDialog);
  };

  // add task handler
  const addTaskHandler = (e) => {
    e.preventDefault();
    addTask({ title, content });
    // dialogTriggerhandler();
    if (!error) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <CustomFooter>
      <CustomToolBar sx={{ display: user.token ? "block" : "none" }}>
        <Tooltip title="Add Task" arrow placement="top">
          <IconContainer
            className="add-task-container"
            onClick={dialogTriggerhandler}
          >
            <AddIcon className="add-task" />
          </IconContainer>
        </Tooltip>

        <CustomDialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={dialogTriggerhandler}
          aria-describedby="alert-dialog-slide-description"
        >
          {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
          <CustomDialogContent>
            <CustomForm sizes={sizes} className="dialog-form">
              <CustomFormControl sizes={sizes}>
                <CustomFormLabel>add new task</CustomFormLabel>
                <CustomTextFeild
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <MailIcon color={title ? "primary2" : "inherit"} />
                  //     </InputAdornment>
                  //   ),
                  // }}
                  key="title"
                  name="title"
                  label="Title"
                  variant="outlined"
                  type="text"
                  error={error === "title"}
                  autoFocus
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <CustomTextFeild
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <LockIcon color={content ? "primary2" : "inherit"} />
                  //     </InputAdornment>
                  //   ),
                  // }}
                  key="content"
                  name="content"
                  label="Content"
                  variant="outlined"
                  type="text"
                  error={error === "content"}
                  required
                  value={content}
                  multiline
                  rows={5}
                  className="multiline"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />

                {loading && !error ? (
                  <CustomCircularProgress />
                ) : (
                  <CustomFormButton
                    type="submit"
                    onClick={(e) => addTaskHandler(e)}
                    startIcon={<AddIcon />}
                  >
                    add
                  </CustomFormButton>
                )}
              </CustomFormControl>
            </CustomForm>
          </CustomDialogContent>
        </CustomDialog>
      </CustomToolBar>
    </CustomFooter>
  );
};

export default MainFooter;
