import React, { useState } from "react";
import {
  CustomCircularProgress,
  CustomForm,
  CustomFormButton,
  CustomFormControl,
  CustomFormLabel,
  CustomLink,
  CustomTextFeild,
} from "../styles/CustomComponents";
import {InputAdornment } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = ({ sizes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useLogin();

  const navigate = useNavigate();

  // login handler
  const loginHandler = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <CustomForm sizes={sizes} className="center-form">
      <CustomFormControl sizes={sizes}>
        <CustomFormLabel>login to your account</CustomFormLabel>
        <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon color={email ? "primary2" : "inherit"} />
              </InputAdornment>
            ),
          }}
          key="email"
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          error={error === "email"}
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color={password ? "primary2" : "inherit"} />
              </InputAdornment>
            ),
          }}
          key="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          required
          error={error === "password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {loading && !error? (
            <CustomCircularProgress />
        ) : (
          <CustomFormButton
            type="submit"
            onClick={(e) => loginHandler(e)}
            startIcon={<LoginIcon />}
          >
            login
          </CustomFormButton>
       )} 
        <CustomFormLabel>
          don't have an account?
          <CustomLink onClick={() => navigate("/signup", { replace: true })}>
            sign up!
          </CustomLink>
        </CustomFormLabel>
      </CustomFormControl>
    </CustomForm>
  );
};

export default Login;
