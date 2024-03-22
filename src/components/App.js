import React, { useEffect } from "react";
import { theme } from "../styles/theme";
import { useMediaQuery } from "@mui/material";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tasks from "./Tasks";
import { useUserContext } from "../hooks/useUserContext";
import { CustomContainer, MainContainer } from "../styles/CustomComponents";
import MainAppBar from "./MainAppBar";
import MainFooter from "./MainFooter";
const App = () => {
  // use media hook to get access to different screens
  const matches = {
    xs: useMediaQuery(theme.breakpoints.down("sm")),
    sm: useMediaQuery(theme.breakpoints.down("md")),
    md: useMediaQuery(theme.breakpoints.down("lg")),
    lg: useMediaQuery(theme.breakpoints.down("xl")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };

  // using the store hook to access global state and dispatch function
  const { user } = useUserContext();

  // using use navigate to go to login or tasks according to user state(login or logout)
  const navigate = useNavigate();
  useEffect(() => {
    if (user.token) {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <MainContainer>
      <MainAppBar />
      <CustomContainer className="mainSection">
        <Routes>
          <Route path="/" exact element={<Tasks sizes={matches} />} />
          <Route path="/login" element={<Login sizes={matches} />} />
          <Route path="/signup" element={<Signup sizes={matches} />} />
        </Routes>
      </CustomContainer>
      <MainFooter sizes={matches} />
    </MainContainer>
  );
};

export default App;
