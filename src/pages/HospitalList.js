import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./FacilityListNew.css";
import { IoClose } from "react-icons/io5";
import BaseUrl from "../components/BaseUrl";
import moment from "moment";
import { CSVLink } from "react-csv";
export default function HospitalList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");
  const [handleApi, setHandleApi] = useState(0);

  // for Subscribing list

  const handleAddPopup = () => {
    Swal.fire({
      title: "Are you sure you want to Add?",

      showCancelButton: true,
      confirmButtonText: "ADD",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#204e79",
      customClass: {
        confirmButton: "custom-confirm-button",
        title: "custom-title-class",
        content: "custom-text-class",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleUpdateClick();
      }
    });
  };
  const handleRemovePopup = () => {
    Swal.fire({
      title: "Are you sure you want to Remove?",

      showCancelButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#204e79",
      customClass: {
        confirmButton: "custom-confirm-button",
        title: "custom-title-class",
        content: "custom-text-class",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemove();
      }
    });
  };
  const handleUpdateClick = async () => {
    const ID = localStorage.getItem("ID");

    const apidata = {
      eventID: "1001",
      addInfo: {
        user_id: ID,
        hospital_id: form._id,
        _from_Date: moment().format("L"),
        _to_Date: "12/12/2024",
        Status: "1",
      },
    };

    try {
      // const url = "http://localhost:5209/subscribedHospitalList";
      const url = `${BaseUrl}hospitaladd`;
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apidata),
      });
      const response = await result.json();
      console.log(response, "add hospital");
      if (response.rData.rCode == "0") {
        setHandleApi(handleApi + 1);
        Swal.fire({
          title: "Hospital has been added!",
          text: "Thank you for Subscribing The Hospital.",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
        setShowPopup(!showPopup);
      }

      if (response.rData.rCode == "1") {
        Swal.fire({
          title: "Please First buy the Subscription Plan",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
        setShowPopup(!showPopup);
      }
      if (response.rData.rCode == "2") {
        Swal.fire({
          title: response.rData.rMessage,
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
        setShowPopup(!showPopup);
      }
    } catch (error) {
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
  const handleRemove = async () => {
    const ID = localStorage.getItem("ID");

    const apidata = {
      eventID: "1003",
      addInfo: {
        _user_id: ID,
        _id: form._id,
      },
    };

    try {
      // const url = "http://localhost:5209/subscribedHospitalList";
      const url = `${BaseUrl}subscribedHospitalList`;
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apidata),
      });
      const response = await result.json();

      if (response.rData.rCode == "0") {
        setHandleApi(handleApi + 1);
        Swal.fire({
          title: "Hospital has been Removed Successfully!",

          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
        setShowPopup(!showPopup);
      }
    } catch (error) {
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

  const handleClick = (val) => {
    setForm(val);
    setShowPopup(!showPopup);
  };

  // popup state state for adding

  const [showPopup, setShowPopup] = useState(false);

  // Other state

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  };

  const dataLength = data.length;

  let index = 1;
  const newData = data.map((obj) => {
    const newObj = { Id: index, ...obj };
    index++;
    return newObj;
  });

  const filteredData = newData.filter((val) => {
    return (
      val.Facility_Name.toLowerCase().includes(searchInput.toLowerCase()) ||
      val.Mobile_Number.includes(searchInput) ||
      val.Hospital_Name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    HospitalList();
  }, [handleApi]);

  const HospitalList = async () => {
    const id = localStorage.getItem("ID");
    setLoading(false);

    const apidata = {
      eventID: "1002",
      addInfo: {},
    };

    try {
      // const url = "http://localhost:5209/hospitalList";
      const url = `${BaseUrl}hospitaladd`;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apidata),
      });
      const res = await result.json();
      console.log(res);
      if (res.rData.rCode == 0) {
        setData(res.rData.rData);
        setLoading(true);
      }
    } catch (error) {
      console.log("function in catch block", "hospital list");
      console.log(error, "hospital list");
    }
  };

  return (
    <div id="layout" class="theme-cyan">
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
                    Total Hospital List
                  </h2>
                </div>
              </div>
            </div>

            <div class="row g-3">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h6 class="card-title">Total Hospital List</h6>
                  </div>
                  <div class="card-body" style={{ padding: "0px" }}>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="container-fluid">
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                          class="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <form class="d-flex">
                            <input
                              class="form-control me-2"
                              type="search"
                              placeholder="Search Hospital..."
                              aria-label="Search"
                              value={searchInput}
                              onChange={handleSearchInputChange}
                            />
                          </form>
                        </div>
                        <div class="csv-link-container">
                        <CSVLink
                          data={currentData}
                          filename={"medsKey-Doctor-List.csv"}
                          className="btn btn-primary"
                        >
                          <i className="fas fa-cloud-download-alt">
                            {" "}
                            Export Hospital List
                          </i>
                        </CSVLink>
                        </div>
                      </div>
                    </nav>

                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th> Facility Name</th>
                              <th>Mobile Number</th>
                              <th>Email Id</th>
                              <th>RC Name</th>
                              <th> Hospital Name</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading &&
                              currentData.map((val, index) => {
                                const {
                                  Facility_Name,
                                  Mobile_Number,
                                  Email_Id,
                                  _id,
                                  Hospital_Name,
                                  RC_Name,
                                  Id,
                                  Status,
                                } = val;

                                return (
                                  <tr key={_id} class="table-hover">
                                    <td>{Id}</td>
                                    <td>{Facility_Name}</td>
                                    <td>{Mobile_Number}</td>
                                    <td>{Email_Id}</td>
                                    <td>{RC_Name}</td>
                                    <td>{Hospital_Name}</td>

                                    {Status === "0" && (
                                      <td>
                                        <i
                                          class="fas fa-cloud-download-alt btn btn-primary "
                                          style={{ color: "white" }}
                                          onClick={() => handleClick(val)}
                                        >
                                          Add
                                        </i>
                                      </td>
                                    )}

                                    {Status === "1" && (
                                      <td>
                                        <i
                                          class="fas fa-cloud-download-alt btn btn-primary "
                                          style={{ color: "white" }}
                                        >
                                          Subscribed
                                        </i>
                                      </td>
                                    )}
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                        {!loading && (
                          <h6 class="text-center" style={{ color: "black" }}>
                            No data available
                          </h6>
                        )}
                        {!loading && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              }}
                          >
                            <div class="custom-loader text-center"></div>
                          </div>
                        )}

                        <div
                          class="pagination"
                          style={{
                            marginTop: "25px",
                            float: "right",
                            marginRight: "3%",
                          }}
                        >
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            class="prev-btn"
                            style={{
                              cursor: "pointer",
                              color: "black",
                              padding: "8px 16px",
                              textDecoration: "none",
                              transition: "backgroundColor 0.3s",
                              border: "1px solid #ddd",
                            }}
                          >
                            <i class="fa fa-chevron-left"></i>
                          </button>
                          {Array.from({
                            length: Math.ceil(
                              filteredData.length / itemsPerPage
                            ),
                          }).map((_, index) => (
                            <button
                              key={index}
                              onClick={() => handlePageChange(index + 1)}
                              class={`pagination-button ${
                                currentPage === index + 1 ? "active" : ""
                              }`}
                              style={{
                                cursor: "pointer",
                                color:
                                  currentPage === index + 1 ? "white" : "black",
                                padding: "8px 16px",
                                textDecoration: "none",
                                transition: "background-color 0.3s",
                                border: "1px solid #ddd",
                                backgroundColor:
                                  currentPage === index + 1
                                    ? "#204e79"
                                    : "initial",
                              }}
                            >
                              {index + 1}
                            </button>
                          ))}
                          <button
                            disabled={endIndex >= filteredData.length}
                            style={{
                              cursor: "pointer",
                              color: "black",
                              padding: "8px 16px",
                              textDecoration: "none",
                              transition: "backgroundColor 0.3s",
                              border: "1px solid #ddd",
                            }}
                          >
                            <i class="fa fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {showPopup && (
                      <div class="popup-container container-fluid">
                        <div
                          class="popup2"
                          style={{ width: "60%", padding: 20 }}
                        >
                          {/* CLOSE BUTTON */}
                          <div class=" d-flex justify-content-end">
                            <IoClose
                              style={{
                                fontSize: "30px",
                                cursor: "pointer",
                              }}
                              onClick={() => setShowPopup(!showPopup)}
                            />
                          </div>

                          {/* FIRST ROW */}
                          <div>
                            {/* FIRST ROW */}
                            <div class="row">
                              <div class=" mb-1 col">
                                <label class="mx-2 fw-bold fs-6 mb-1">
                                  Facility List
                                </label>
                                <input
                                  type="text"
                                  class="form-control mb-3"
                                  placeholder="Facility List"
                                  value={form.Facility_Name}
                                />
                              </div>
                              <div class=" mb-1 col">
                                <label class="mx-2 fw-bold fs-6 mb-1">
                                  Mobile Number
                                </label>
                                <input
                                  type="tel"
                                  placeholder="Mobile Number"
                                  class="form-control mb-3"
                                  value={form.Mobile_Number}
                                />
                              </div>
                            </div>

                            {/* SECOND ROW */}
                            <div class="row">
                              <div class=" mb-1 col">
                                <label class="mx-2 fw-bold fs-6 mb-1">
                                  Email Id
                                </label>
                                <input
                                  type="email"
                                  class="form-control mb-3"
                                  placeholder="Email Id"
                                  value={form.Email_Id}
                                />
                              </div>
                              <div class=" mb-1 col">
                                <label class="mx-2 fw-bold fs-6 mb-1">
                                  RC NAME
                                </label>
                                <input
                                  type="text"
                                  class="form-control mb-3"
                                  placeholder="RC Name"
                                  value={form.RC_Name}
                                />
                              </div>
                            </div>

                            {/* THIRD ROW */}
                            <div class="row">
                              <div class=" mb-1 col">
                                <label class="mx-2 fw-bold fs-6 mb-1">
                                  Hospital Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control mb-3"
                                  placeholder="Hospital Name"
                                  value={form.Hospital_Name}
                                />
                              </div>
                              <div class=" mb-1 col">
                                <label class="mx-2 fw-bold fs-6 mb-1">
                                  Date & Time
                                </label>
                                <input
                                  type="text"
                                  class="form-control mb-3"
                                  placeholder="Date & Time"
                                  value={form.From_Date}
                                />
                              </div>
                            </div>

                            <div class=" mt-3 ">
                              <div>
                                {form.Status === "0" && (
                                  <button
                                    type="button"
                                    class="btn btn-primary "
                                    // onClick={handleUpdateClick}
                                    onClick={handleAddPopup}
                                  >
                                    Update
                                  </button>
                                )}
                                {form.Status === "1" && (
                                  <button
                                    type="button"
                                    class="btn btn-primary "
                                    // onClick={handleRemove}
                                    onClick={handleRemovePopup}
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
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
      </div>
    </div>
  );
}
