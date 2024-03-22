import React from "react";
import {
  ActionButton,
  Actions,
  CustomAppBar,
  CustomToolBar,
  Logo,
} from "../styles/CustomComponents";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useUserContext } from "../hooks/useUserContext";

const MainAppBar = () => {
  // using use store to reach local state context
  const { user } = useUserContext();

  //using useLogout hook to manage logout process
  const { logout } = useLogout();

  //using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  //logout handler
  const logoutHandler = () => {
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <CustomAppBar>
      <CustomToolBar>
        <Logo>ToDo</Logo>
        <Actions>
          {!user.token && (
            <>
             <ActionButton
              startIcon={<LoginIcon />}
              onClick={() => {
                navigate("login", { replace: true });
              }} >
              login
            </ActionButton>
              <ActionButton
                startIcon={<HowToRegIcon />}
                onClick={() => {
                  navigate("signup", { replace: true });
                }} >
                signup
              </ActionButton>
            </>
          )}

          {user.token && (
            <>
              <ActionButton>{user.email}</ActionButton>

              <ActionButton startIcon={<LogoutIcon />} onClick={logoutHandler}>
                logout
              </ActionButton>
            </>
          )}
        </Actions>
      </CustomToolBar>
    </CustomAppBar>
  );
};

export default MainAppBar;
