import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#204e79",

      customClass: {
        confirmButton: "custom-confirm-button",
        title: "custom-title-class",
        content: "custom-text-class",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };

  const toggleOffcanvas = () => {
    const body = document.body;
    body.classList.toggle("offcanvas-active");
  };

  return (
    <nav class="navbar navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-btn">
          <button
            type="button"
            class="btn-toggle-offcanvas"
            onClick={toggleOffcanvas}
          >
            <i class="fa fa-bars" />
          </button>
        </div>

       
        <div
          className="navbar-brand ps-2"
          style={{ maxWidth: "150px", height: "45px", boxSizing: "border-box" }}
        >
          <Link
            to="/dashboard"
            className="d-flex"
            style={{
              maxWidth: "150px",
              height: "60px",
              boxSizing: "border-box",
              position: "absolute",
              bottom: "3px",
            }}
          >
            <img
              src="assets/images/medsKeylogonew6.jpeg"
              alt="User Profile Picture"
            />
          </Link>
        </div>

        <div class="d-flex flex-grow-1 align-items-center">
          <div class="d-flex"></div>
          <div class="flex-grow-1">
            <ul class="nav navbar-nav flex-row justify-content-end align-items-center">
              <div style={{ fontWeight: "bold" }}>logout</div>
              <li>
                <a onClick={handleLogout} class="icon-menu">
                  <i class="fa fa-sign-out" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
