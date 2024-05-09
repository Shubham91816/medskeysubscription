import React, { Component, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import BaseUrl from "./BaseUrl";
let count = 0;
export default function Navbar({ username }) {
  const location = useLocation();
  const [name, setName] = useState("");
  const status = localStorage.getItem("SubscriptionStatus");
  const hasAccess = status === "1";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsDropdownOpen(!isDropdownOpen);
    dashboardData();
  };


  const dashboardData = async () => {
    const id = localStorage.getItem("ID");
    const jwttoken = localStorage.getItem("Token");
    const apiEndpoint = `${BaseUrl}dashboard`;
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventID: "1001",
          addInfo: {
            _user_id: id,
          },
        }),
      });
      const resData = await response.json();
      if (resData.rData.rCode == 0) {
        setName(resData.rData.rData[0]._name);
      }
    } catch (error) {
      console.log("function in catch block", "update");
      console.log(error, "Update");
    }
  };

  useEffect(() => {
    console.log("Mounted ", count);
    return () => {
      count += 1;
    };
  }, []);

  const toggleOffcanvasnew = () => {
    const body = document.body;
    body.classList.toggle("offcanvas-active");
  };

  return (
    <div id="left-sidebar" class="sidebar">
      <div class="user-account p-3 mb-3">
        <div class="d-flex mb-3 pb-3 border-bottom align-items-center">
          <img
            src="../../../assets/images/user.png"
            class="avatar lg rounded me-3"
            alt="User Profile Picture"
          />
          <div class="dropdown flex-grow-1 show ">
            <span>Welcome</span>
            <a
              href="#"
              class="dropdown-toggle user-name"
              onClick={toggleOffcanvas}
            ></a>
            <ul
              class={`dropdown-menu p-2 shadow-sm ${
                isDropdownOpen ? "show" : ""
              }`}
              style={{
                position: "absolute",
                top: "100%",
                right: "-20px",
                zIndex: 1000,
              }}
            >
              <li>
                <a>
                  <strong>{name}</strong>
                </a>
              </li>
              <li class="divider"></li>
              {/* Add other menu items as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div class="tab-content px-0">
        <div class="tab-pane fade show active" id="hr_menu" role="tabpanel">
          <nav class="sidebar-nav">
            <ul class="metismenu list-unstyled">
              {/* Dashboard */}

              <li class={location.pathname === "/dashboard" ? "active" : ""}
              onClick={toggleOffcanvasnew}
              >
                <Link to="/dashboard">
                  <i class="fa fa-tachometer" />
                  <span>Dashboard</span>
                  
                </Link>
              </li>

              {/* Hospital List */}
              <li class={location.pathname === "/HospitalList" ? "active" : ""}
                onClick={toggleOffcanvasnew}>
                <Link to="/HospitalList">
                  <i class="fa fa-hospital-o" />
                  <span>Hospital List</span>
                </Link>
              </li>

              {/* Subscribed Hospital List */}

              <li
                class={
                  location.pathname === "/HosSubscriptionList" ? "active" : ""
                }
                onClick={toggleOffcanvasnew}
              >
                <Link to="/HosSubscriptionList">
                  <i class="fa fa-user-md" />

                  <span>Subscribed Hospital List</span>
                </Link>
              </li>

              {/* Update Profile */}

              <li class={location.pathname === "/Update" ? "active" : ""}
                onClick={toggleOffcanvasnew}>
                <Link to="/Update">
                  {/* <i class="fa fa-tachometer" /> */}
                  <i class="fa fa-pencil" />
                  <span>Update Profile</span>
                </Link>
              </li>

              {/* Change Password */}
              <li
                className={
                  location.pathname === "/change-password" ? "active" : ""
                }
                onClick={toggleOffcanvasnew}
              >
                <Link to="/change-password">
                  {/* <i className="fa fa-edit" /> */}
                  <i className="fa fa-key"></i>
                  <span>Change Password</span>
                </Link>
              </li>

              {/* Subscription */}
              <li
                class={
                  location.pathname === "/subscription" ||
                  location.pathname === "/subscriptionform"
                    ? "active"
                    : ""
                }
                onClick={toggleOffcanvasnew}
              >
                <Link to="/subscription">
                  <i class="fa fa-tags"></i>

                  <span>Subscription</span>
                </Link>
              </li>
              {/* Order History */}
              <li class={location.pathname === "/orderhistory" ? "active" : ""}  onClick={toggleOffcanvasnew}>
                <Link to="/orderhistory">
                  <i class="fa fa-history"></i>

                  <span>Order History</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
