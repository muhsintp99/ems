import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "assets/images/logo.png";
import TextField from "ui-component/common/TextField";
import CmnStyles from "ui-component/common/style";
import { useTheme } from "@mui/material/styles";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./style";

export default function Index() {
  const theme = useTheme();
  const CmnStyle = CmnStyles(theme);
  const style = styles(theme);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Box sx={style.LoginmainBox}>
        <Box sx={style.LoginSubbox}>
          <Formik
            initialValues={{
              email: "hello@yourcenter.com",
              password: "12345678",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setErrors }) => {
              const errors = {};

              if (!values.email) {
                errors.email = "Email is required";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }

              if (Object.keys(errors).length) {
                setErrors(errors);
                toast.error("Please correct the errors before submitting.", {
                  autoClose: 3000,
                });
              } else {
                navigate("/home");
                toast.success("Logged in  successfully", {
                  autoClose: 3000,
                });
              }
            }}
          >
            {({ errors, touched, values, resetForm }) => (
              <Form>
                <Box sx={style.LoginAccountBox}>
                  <img src={Logo} alt="logo" style={style.LogoImage} />
                </Box>
                <Box sx={style.LoginBox}>
                  <Typography sx={style.LoginTxt}>
                    Login to your account
                  </Typography>
                  <Typography sx={style.LoginSubtxt}>
                    Your work assistant for the day!
                  </Typography>

                  <Box sx={style.LoginBox}>
                    <Box>
                      <Field
                        name="email"
                        as={TextField}
                        id="email"
                        label="EMAIL"
                      />
                      {errors.email && touched.email && (
                        <Typography sx={style.errorTypo}>
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={style.PasswrdBox}>
                      <Field
                        name="password"
                        as={TextField}
                        label="PASSWORD"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      {errors.password && touched.password && (
                        <Typography sx={style.errorTypo}>
                          {errors.password}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  <Box sx={style.clearButtonBox}>
                    <Button
                      variant="outlined"
                      sx={CmnStyle.cancelOutlinebtn}
                      onClick={() =>
                        resetForm({
                          values: {
                            email: "",
                            password: "",
                          },
                        })
                      }
                    >
                      Clear
                    </Button>
                    <Button
                      sx={CmnStyle.containedButton}
                      variant="contained"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
}
