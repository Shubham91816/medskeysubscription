

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import "./FacilityListNew.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import BaseUrl from "../components/BaseUrl";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Registeration = () => {
  const navigate = useNavigate();
  const [documentError, setDocumentError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [rowError, setRowError] = useState("");
  const [certificateData, setCertificateData] = useState([]);
  const [fileValue, setFileValue] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [curSelectedImg, setCurSelectedImg] = useState("");

  const formikcertificate = useFormik({
    enableReinitialize: true,
    initialValues: {
      certificateType: "",
      certificateBase64: "",
      certificateNumber: "",
    },
  });
  const obj = formikcertificate.values;
  const hasEmptyValue = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === "") {
        return true;
      }
    }
    return false;
  };

  const handleAddButtonClick = () => {
    if (hasEmptyValue(obj)) {
      console.log("Error: Please fill in all the fields.");
      setRowError("Error: Please fill in all the fields");
    } else {
      const index = certificateData.findIndex(
        (item) => item.certificateType === obj.certificateType
      );

      if (index !== -1) {
        const updatedData = [...certificateData];
        updatedData[index] = obj;
        setCertificateData(updatedData);

        formik.setFieldValue("document", updatedData);
      } else {
        setCertificateData((prevData) => [...prevData, obj]);
        formik.setFieldValue("document", [...formik.values.document, obj]);
      }
      formikcertificate.setFieldValue("certificateType", "");
      setFileValue(null);
      formikcertificate.setFieldValue("certificateNumber", "");
      formikcertificate.setFieldValue("certificateBase64", "");
      setRowError("");
    }
    console.log(certificateData);
  };

  const removeCertificateByType = (typeToRemove) => {
    const updatedCertificateData = certificateData.filter(
      (certificate) =>
        certificate.certificateType !== typeToRemove.certificateType
    );
    setCertificateData(updatedCertificateData);
    formik.setFieldValue("document", updatedCertificateData);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: "",
      contactNumber: "",
      emailId: "",
      pinCode: "",
      document: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      userName: yup
        .string()
        .matches(
          /^[A-Za-z\s]+$/,
          "Name should not start with a number or contain special characters"
        )
        .required("Please enter username"),
      contactNumber: yup
        .string()
        .matches(
          /^\d{10}$/,
          "Contact number must contain exactly 10 Numeric digits"
        )
        .required("Please enter contact number"),
      emailId: yup
        .string()
        .email("Please provide a valid email")
        .required("Please enter email"),
      pinCode: yup
        .string()
        .matches(/^\d{6}$/, "Pin code must contain exactly 6 digits")
        .required("Please enter pin code"),

  
      document: yup.mixed().required("Certificate is required"),
      address: yup.string().required("Please enter address"),
      password: yup
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
          [yup.ref("password"), null],
          "Passwords & Confirm password must be same"
        )
        .required("Please enter confirm password"),
    }),
    onSubmit: (values) => {
      console.log("function called");
      Register(values);
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedFileTypes = ["image/jpeg", "image/png"];
      if (!allowedFileTypes.includes(file.type)) {
        setDocumentError(" Allowed types: JPEG, PNG");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const { name, size, type } = file;
        const base64Content = reader.result;
        const fileInfo = {
          name,
          size,
          type,
          base64Content,
        };
        formikcertificate.setFieldValue("certificateBase64", fileInfo);
        setDocumentError("");
      };
      reader.readAsDataURL(file);
      setFileValue(file);
    }
  };

  const Register = async (values) => {
    const apidata = {
      eventID: "1002",
      addInfo: {
        _name: values.userName,
        _mobile_no: values.contactNumber,
        _email_id: values.emailId,
        _pin_code: values.pinCode,
        document: values.document,
        _address: values.address,
        _password: values.password,
      },
    };

    try {
      // const url = "http://localhost:5209/registration";
      const url = `${BaseUrl}registration`;
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apidata),
      });
      const response = await result.json();
      if (response.rData.rCode == "0") {
        Swal.fire({
          title: "Registration Successful!",
          text: "Thank you for registering. You can now log in to your account.",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
        navigate("/");
      }
      if (response.rData.rCode == "2") {
        Swal.fire({
          title: "Registration Unsuccessful!",
          text: "The mobile number or email address you provided is already in use. Please choose a different one",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
      }
    } catch (error) {
      console.log("function in catch block", "Registeration");
      console.log(error, "Registeration");
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
    <div id="layout" class="theme-cyan">
      <div id="wrapper">
     
        <div  class="d-flex  align-items-center justify-content-center auth-main w-100" style={{ minHeight: '100vh', overflowY: 'auto' }}  >
          <div
            class="w-100"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflowY: 'auto',
             
            }}
          >
            <div
              class="card shadow p-lg-4  "
              
            >
             
              <div class="card-body " >
                <form onSubmit={formik.handleSubmit}>
                  <div class="card-header">
                    <div class="logo text-center">
                      <img
                        src="assets/images/medsKeylogonew.jpeg"
                        class="avatar lg rounded me-3"
                        alt="medskey"
                      />
                    </div>
                    <p class="fs-5 mb-0 text-center"> Registration Form</p>
                  </div>
                  {/* FIRST ROW */}

                  <div class="row">
                    <div class="form-floating mb-2 col-12 col-md-6">
                      <input
                        type="text"
                        class="form-control "
                        placeholder=""
                        name="userName"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                        onBlur={formik.handleBlur}
                      />
                      <label class="mx-2">Enter Name</label>
                      {formik.touched.userName && formik.errors.userName && (
                        <p class="error" style={{ color: "red" }}>
                          {formik.errors.userName}
                        </p>
                      )}
                    </div>

                    <div class="form-floating mb-2 col-12  col-md-6 ">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder=""
                        name="contactNumber"
                        onChange={formik.handleChange}
                        value={formik.values.contactNumber}
                        onBlur={formik.handleBlur}
                        maxLength={10}
                      />

                      <label class="mx-2">Contact No</label>
                      {formik.touched.contactNumber &&
                        formik.errors.contactNumber && (
                          <p class="error" style={{ color: "red" }}>
                            {formik.errors.contactNumber}
                          </p>
                        )}
                    </div>
                  </div>

                  {/* SECOND ROW */}
                  <div class="row">
                    <div class="form-floating mb-2 col-12  col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        name="emailId"
                        onChange={formik.handleChange}
                        value={formik.values.emailId}
                        onBlur={formik.handleBlur}
                      />
                      <label class="mx-2">Email Address</label>
                      {formik.touched.emailId && formik.errors.emailId && (
                        <p class="error" style={{ color: "red" }}>
                          {formik.errors.emailId}
                        </p>
                      )}
                    </div>
                    <div class="form-floating mb-2 col-12  col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        name="pinCode"
                        onChange={formik.handleChange}
                        value={formik.values.pinCode}
                        onBlur={formik.handleBlur}
                        maxLength={6}
                      />
                      <label class="mx-2">Pin Code</label>

                      {formik.touched.pinCode && formik.errors.pinCode && (
                        <p class="error" style={{ color: "red" }}>
                          {formik.errors.pinCode}
                        </p>
                      )}
                    </div>
                  </div>

                  

                  {/* FOURTH ROW */}
                  <div class="row">
                 

                    <div class="form-floating mb-2 col-12  col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        onBlur={formik.handleBlur}
                      />
                      <label class="mx-2">Address</label>
                      {formik.touched.address && formik.errors.address && (
                        <p class="error" style={{ color: "red" }}>
                          {formik.errors.address}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* FIFTH ROW  password & confirm password*/}
                  <div class="row">
                    <div class="form-floating mb-2 col-12  col-md-6 password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        class="form-control"
                        placeholder=""
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                      />
                      <label class="mx-2">Password</label>
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
                    <div class="form-floating mb-2 col-12  col-md-6 password-input-container">
                      <input
                        type={showPasswordConfirm ? "text" : "password"}
                        class="form-control"
                        placeholder=""
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        onBlur={formik.handleBlur}
                      />
                      <label class="mx-2">Confirm Password</label>
                      <button
                        type="button"
                        class="toggle-password-button"
                        onClick={() =>
                          setShowPasswordConfirm(!showPasswordConfirm)
                        }
                      >
                        {showPasswordConfirm ? <FaEyeSlash /> : <FaRegEye />}
                      </button>

                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword && (
                          <p class="error" style={{ color: "red" }}>
                            {formik.errors.confirmPassword}
                          </p>
                        )}
                    </div>
                  </div>

                  {/* NEW ROW */}
                  <div class="row ">
                    <label htmlFor="certificateType">Add Certificate</label>
                    <br />
                  </div>
                  {/* Documents */}
                  <div>
                    <div class="row">
                      {/* option */}
                      <div class="form-floating   col-md-6  col-lg-4 mb-2">
                        <select
                          class="form-select"
                          aria-label="Floating label select example"
                          name="certificateType"
                          onChange={formikcertificate.handleChange}
                          onBlur={formikcertificate.handleBlur}
                          value={formikcertificate.values.certificateType}
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="NABL">NABL</option>
                          <option value="NABH">NABH</option>
                          <option value="JCl">JCl</option>
                          <option value="QCI">QCI</option>
                        </select>
                        <label class="mx-2">Certificate Type</label>
                      </div>
                      {/* certificate Number */}
                      <div class="form-floating   col-md-6 col-lg-4 mb-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          name="certificateNumber"
                          onChange={formikcertificate.handleChange}
                          value={formikcertificate.values.certificateNumber}
                          onBlur={formikcertificate.handleBlur}
                        />

                        <label class="mx-2">Certificate Number</label>
                      </div>
                      {/* upload Document */}
                      <div class="form-floating  col-md-6 col-lg-3 mb-2">
                        <input
                          type="file"
                          class="form-control"
                          placeholder=""
                          onChange={handleFileChange}
                          value={fileValue ? undefined : ""}
                        />
                        <label class="mx-2">Upload Document</label>
                        <p class="error" style={{ color: "red" }}>
                          {documentError}
                        </p>
                      </div>

                      {/* ADD */}

                      <div
                        class="  col-md-6 mt-2 col-lg-1
                       mb-2"
                      >
                        <button
                          class="btn btn-primary  "
                          type="button"
                         
                           style={{ paddingVertical: "50px",}}
                          onClick={handleAddButtonClick}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                    {/* Error Message */}
                    <p
                      class="error"
                      style={{ color: "red", marginTop: "-10px" }}
                    >
                      {rowError}
                    </p>
                    {/* Row Error */}
                    {formik.touched.document && (
                      <p
                        class="error"
                        style={{ color: "red", marginTop: "-10px" }}
                      >
                        {formik.errors.document}
                      </p>
                    )}
                  </div>

                  {/* list of selected documents */}

                  {certificateData.length > 0 && (
                    <div class="card-body" style={{ padding: 0 }}>
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>certificateType</th>
                              <th>Certificate Number</th>
                              <th>File Name</th>
                              <th>View Document</th>
                              <th>Remove Document</th>
                            </tr>
                          </thead>
                          <tbody>
                            {certificateData.map((val, index) => {
                              const {
                                certificateType,
                                certificateBase64,
                                certificateNumber,
                              } = val;
                              return (
                                <tr key={index} class="table-hover">
                                  <td>{index + 1}</td>
                                  <td>{certificateType}</td>
                                  <td>{certificateNumber}</td>
                                  <td>{certificateBase64.name}</td>
                                  <td>
                                    <div>
                                      <FaRegEye
                                        onClick={() => {
                                          setShowPopup(true);
                                          setCurSelectedImg(
                                            certificateBase64.base64Content
                                          );
                                        }}
                                        style={{
                                          marginLeft: "45px",
                                          cursor: "pointer",
                                        }}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <MdDelete
                                        onClick={() =>
                                          removeCertificateByType(val)
                                        }
                                        style={{
                                          marginLeft: "45px",
                                          cursor: "pointer",
                                        }}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                 

                  {/* login */}
                  <p class="fs-6 text mb-0" style={{ textAlign: "center" }}>
                    Already have an account?
                    <span
                      class="fw-semibold"
                      style={{ color: "#204e79", cursor: "pointer" }}
                      onClick={() => navigate("/")}
                    >
                      {" "}
                      Login
                    </span>
                  </p>
                  <div class="form-check my-1"></div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      class="btn btn-primary  px-5 py-2 ms-0"
                    >
                      Registration
                    </button>
                  </div>
                </form>
                {showPopup && (
                  <div class="popup-container container-fluid">
                    <div
                      class="popup"
                      // style={{ width: "40%", padding: 20, paddingTop: 20 }}
                    >
                      {/* CLOSE BUTTON */}
                      <div class="d-flex justify-content-end">
                      
                        <IoClose
                          style={{
                            fontSize: "30px",
                            cursor: "pointer",
                          }}
                          onClick={() => setShowPopup(!showPopup)}
                        />
                      </div>

                      {/* Image tag */}
                      <div
                        style={{
                         
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width:'100%',
                          height: "100%",
                        }}
                      >
                        <img
                          src={curSelectedImg}
                          alt="Italian Trulli"
                          style={{
                            width:'100%',
                            height: "100%",
                            resize:'contain'
                          }}
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registeration;
