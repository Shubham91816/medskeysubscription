import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";
import "./Login.css";
import BaseUrl from "../components/BaseUrl";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema: yup.object({
      emailId: yup
        .string()
        .email("Please provide a valid email")
        .required("Please enter email"),
      password: yup
        .string()

        .required("Please enter password"),
    }),

    onSubmit: (values) => {
      Login(values);
    },
  });

  const Login = async (values) => {
    const apidata = {
      eventID: "1001",
      addInfo: {
        Email_Id: values.emailId,
        Password: values.password,
      },
    };

    try {
     
      const url = `${BaseUrl}login`;
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apidata),
      });
      const resData = await result.json();

      if (
        resData.rData.rCode == "0" &&
        resData.rData._subscription_status == "1"
      ) {
        localStorage.setItem("ID", resData.rData.objectId);
        localStorage.setItem("JWTToken", resData.rData.jwt);
        localStorage.setItem("SubscriptionStatus", 1);

        navigate("/dashboard");
      }

      if (
        resData.rData.rCode == "0" &&
        resData.rData._subscription_status == "0"
      ) {
        localStorage.setItem("ID", resData.rData.objectId);
        localStorage.setItem("JWTToken", resData.rData.jwt);
        localStorage.setItem("SubscriptionStatus", 0);

        navigate("/subscription");
      }

      if (resData.rData.rCode == "2") {
        Swal.fire({
          title: "Invalid Credentials!",
          text: "Please check your username and password and try again.",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
      }
    } catch (error) {
      console.log("function in catch block", "login");
      console.log(error, "login");

      Swal.fire({
        title: "Server Unavailable!",
        text: "We apologize for the inconvenience",
        confirmButtonColor: "#204e79",
        customClass: {
          confirmButton: "custom-confirm-button",
          title: "custom-title-class",
          content: "custom-text-class",
        },
      });
    }
  };

  const token = localStorage.getItem("JWTToken");
  if (token) navigate("/HospitalList");

  return (
    <div id="layout" class="theme-cyan">
      <div id="wrapper">
        <div class="d-flex h100vh align-items-center auth-main w-100">
          <div class="auth-box">
            <div class="card shadow p-lg-4">
              <div class="card-header">
                <div class="logo" style={{ margin: "0 auto" }}>
                  <img
                    src="assets/images/medsKeylogonew.jpeg"
                    class="avatar lg rounded me-3"
                    alt="medskey"
                  />
                </div>
                <p class="fs-5 mb-0 text-center">Login to your account</p>
              </div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      id="email"
                      class="form-control"
                      placeholder="name@example.com"
                      name="emailId"
                      onChange={formik.handleChange}
                      value={formik.values.emailId}
                      onBlur={formik.handleBlur}
                    />
                    <label>Email address</label>
                    {formik.touched.emailId && formik.errors.emailId && (
                      <p class="error" style={{ color: "red" }}>
                        {formik.errors.emailId}
                      </p>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div class="form-floating mb-3 password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    />
                    <label>Password</label>
                    <button
                      type="button"
                      class="toggle-password-button"
                      
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                    </button>
                    {formik.touched.password && formik.errors.password && (
                      <p class="error" style={{ color: "red" }}>
                        {formik.errors.password}
                      </p>
                    )}
                  </div>

                  <p
                    class="fs-6 text mb-0 text-centre "
                    style={{ textAlign: "center" }}
                  >
                    Don't have an account yet?
                    <span
                      class="fw-semibold"
                      onClick={() => navigate("/registeration")}
                      style={{ color: "#204e79", cursor: "pointer" }}
                    >
                      {" "}
                      Register
                    </span>
                  </p>
                  <div class="form-check my-1"></div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      class="btn btn-primary  px-5 py-2  "
                      style={{ textAlign: "center" }}
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
