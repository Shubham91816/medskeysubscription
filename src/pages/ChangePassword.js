import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";
import BaseUrl from "../components/BaseUrl";
import { FaEyeSlash , FaRegEye} from "react-icons/fa";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      oldpassword: "",
      newpassword: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      oldpassword: yup
        .string()
        .required("Please enter old password"),
      newpassword: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
          "password contains at least one uppercase letter, one lowercase letter, one digit, and is at least 6 characters long: "
        )
        .min(6, "Password must be at least 6 characters")
        .required("Please enter password"),
      confirmPassword: yup
        .string()
        .oneOf(
          [yup.ref("newpassword"), null],
          "Passwords & Confirm password must be same"
        )
        .required("Please enter confirm password"),
    }),

    onSubmit: (values) => {
      UpdatePassword(values);
    },
  });

  const UpdatePassword = async (values) => {
    const id = localStorage.getItem("ID");
    const apidata = {
      eventID: "1003",
      addInfo: {
        user_id: id,
        OldPassword: values.oldpassword,
        NewPassword: values.confirmPassword,
      },
    };

    try {
      // const url = "http://localhost:5209/login";
      const url = `${BaseUrl}updateUser`;
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apidata),
      });
      const resData = await result.json();

      if (resData.rData.rCode == "0") {
        Swal.fire({
          title: "Password Updated Successfully",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
      }

      if (resData.rData.rCode == "1") {
        Swal.fire({
          title: "Invalid Old Password!",
          text: "Please enter the correct old password and try again.",
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

  return (
    <div id="layout" className="theme-cyan">
      <div id="wrapper">
        <Header />
        <Navbar />
        <div id="main-content">
          <div class="container-fluid">
            <div class="block-header py-lg-4 py-3">
              <div class="row g-3">
                <div class="col-md-6 col-sm-12">
                  <h2 class="m-0 fs-5">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"
                    >
                      <i
                        class="fa fa-arrow-left"
                        onClick={() => navigate("/dashboard")}
                      ></i>
                    </a>{" "}
                    Change Password
                  </h2>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Please Update Password</h6>
                  </div>
                  <div className="card-body">
                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                      <div className="col-6">
                        <label className="form-label">Old Password</label>
                        <div className="input-group">

                      
                        <input
                           type="password"
                        
                          className="form-control"
                          name="oldpassword"
                          onChange={formik.handleChange}
                          value={formik.values.oldpassword}
                          onBlur={formik.handleBlur}
                        />
                        
        </div>
                       {formik.touched.oldpassword &&
                          formik.errors.oldpassword && (
                            <p style={{ color: "red", marginBottom: "-8px" }}>
                              {formik.errors.oldpassword}
                            </p>
                          )}
                       
                      </div>
                      <div className="col-6">
                        <label className="form-label">New Password</label>
                        <input
                          type="password"
                          class="form-control"
                          className="form-control"
                          name="newpassword"
                          onChange={formik.handleChange}
                          value={formik.values.newpassword}
                          onBlur={formik.handleBlur}
                        />
                        
                      
                   
                        {formik.touched.newpassword &&
                          formik.errors.newpassword && (
                            <p style={{ color: "red", marginBottom: "-8px" }}>
                              {formik.errors.newpassword}
                            </p>
                          )}
                      </div>
                      <div className="col-6">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          
                          className="form-control"
                          name="confirmPassword"
                          onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.confirmPassword &&
                          formik.errors.confirmPassword && (
                            <p
                              class="error"
                              style={{ color: "red", marginBottom: "-8px" }}
                            >
                              {formik.errors.confirmPassword}
                            </p>
                          )}
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
