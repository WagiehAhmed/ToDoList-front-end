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
import { InputAdornment } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import { useNavigate } from "react-router-dom";
import { useSignup } from "./../hooks/useSignup";

const Signup = ({ sizes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, loading, error} = useSignup();

  // the navigate hook to programmatically redirect users after they have been signed up.
  const navigate = useNavigate();

  // login handler
  const signupHandler = async (e) => {
    e.preventDefault();
    signup({ email, password });
  };

  return (
    <CustomForm sizes={sizes} className="center-form" onSubmit={signupHandler}>
      <CustomFormControl sizes={sizes}>
        <CustomFormLabel>new account</CustomFormLabel>
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
          required
          error={error === "email"}
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
          error={error === "password"}
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {loading && !error ? (
          <CustomCircularProgress />
        ) : (
          <CustomFormButton
            type="submit"
            startIcon={<HowToRegIcon />}
          >
            signup
          </CustomFormButton>
         )} 
        <CustomFormLabel>
          I have an account?
          <CustomLink onClick={() => navigate("/login", { replace: false })}>
            login.
          </CustomLink>
        </CustomFormLabel>
      </CustomFormControl>
    </CustomForm>
  );
};

export default Signup;
