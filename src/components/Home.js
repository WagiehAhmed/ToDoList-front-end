import React from "react";
import { CustomContainer, MainContainer } from "../styles/CustomComponents";
import MainAppBar from "./MainAppBar";
import MainFooter from "./MainFooter";
import { Outlet } from "react-router-dom";

const Home = ({ sizes }) => {
  return (
    <MainContainer>
      <MainAppBar />
      <CustomContainer className="mainSection">
        <Outlet />
      </CustomContainer>  
      <MainFooter sizes={sizes} />
    </MainContainer>
  );
};

export default Home;
