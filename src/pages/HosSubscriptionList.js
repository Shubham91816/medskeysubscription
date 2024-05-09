import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./FacilityListNew.css";
import BaseUrl from "../components/BaseUrl";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Slice/CartReducer";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";

export default function HosSubscriptionList() {
  const navigate = useNavigate();

  // Other state
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [handleApi, setHandleApi] = useState(0);
  const handleRemovePopup = (_id) => {
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
        handleRemove(_id);
      }
    });
  };

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
    SubscribedHospitalList();
  }, [handleApi]);

  const SubscribedHospitalList = async () => {
    const id = localStorage.getItem("ID");
    setLoading(false);

    const apidata = {
      eventID: "1003",
      addInfo: {
        _user_id: id,
      },
    };

    try {
      // const url = "http://localhost:5209/subscribedHospitalList";
      const url = `${BaseUrl}hospitaladd`;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apidata),
      });
      const res = await result.json();
      console.log(res, "subscribed Hospital list");
      if (res.rData.rCode == 0) {
        setData(res.rData.rData.filter((item) => item._status === "1"));
        setLoading(true);
      }
    } catch (error) {
      console.log("function in catch block", "hotSubscriptionlist");
      console.log(error, "hotSubscriptionlist");
    }
  };

  const handleRemove = async (val) => {
    const ID = localStorage.getItem("ID");
    console.log(val);
    const apidata = {
      eventID: "1004",
      addInfo: {
        user_id: ID,
        hospitalid: val._id,
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

      if (response.rData.rCode == "0") {
        Swal.fire({
          title: "Hospital has been Removed Successfully!",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
        setHandleApi(handleApi + 1);
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

  return (
    <div id="layout" class="theme-cyan">
      <Header />
      <Navbar />
      <div id="wrapper">
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
                    Subscribed Hospital List
                  </h2>
                </div>
              </div>
            </div>

            <div class="row g-3">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h6 class="card-title">Subscribed Hospital List</h6>
                  </div>
                  <div class="card-body">
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
                              placeholder="Search Subscribed Hospital..."
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
                            Export Subscribed Hospital List
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
                              <th> From Date </th>
                              <th> To Date </th>
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
                                  RC_Name,
                                  Hospital_Name,
                                  _from_Date,
                                  _to_Date,
                                  Id,
                                  _id,
                                } = val;

                                return (
                                  <tr key={val.Id} class="table-hover">
                                    <td>{Id}</td>
                                    <td>{Facility_Name}</td>
                                    <td>{Mobile_Number}</td>
                                    <td>{Email_Id}</td>
                                    <td>{RC_Name}</td>
                                    <td>{Hospital_Name}</td>
                                    <td>{_from_Date}</td>
                                    <td>{_to_Date}</td>

                                    <td>
                                      <i
                                        class="fas fa-cloud-download-alt btn btn-primary "
                                        style={{ color: "white" }}
                                        onClick={() => handleRemovePopup(val)}
                                      >
                                        Unsubscribe
                                      </i>
                                    </td>
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
                            // onClick={() => handlePageChange(currentPage + 1)}
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
