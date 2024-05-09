import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import BaseUrl from "../components/BaseUrl";
import Swal from "sweetalert2";

const SubscriptionForm = () => {
  const navigate = useNavigate();

  const cartdata = useSelector((state) => state.cart.cart);
  console.log(cartdata);

  const [placeorder, setPlaceorder] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [choseamount, setChoseAmount] = useState("");
  const [chosemethod, setChoseMethod] = useState("");

  const handleFormSubmit = () => {
    if (choseamount === "") {
      setPlaceorder(placeorder);
      setChoseMethod("Select One Payment Method");
    } else {
      setChoseMethod("");
      setPlaceorder(!placeorder);
    }
  };

  const handlePopup = () => {
    setShowPopup(false);
    navigate("/Dashboard");
  };

  useEffect(() => {
    dashboardData();
  }, []);

  const [userDetail, setUserDetail] = useState("");

  const dashboardData = async () => {
    const id = localStorage.getItem("ID");
    const jwttoken = localStorage.getItem("Token");

    // const apiEndpoint = "http://localhost:5209/subscription";
    const apiEndpoint = `${BaseUrl}subscription`;
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventID: "1004",
          addInfo: {
            id: id,
          },
        }),
      });

      if (response.ok) {
        const resData = await response.json();
        setUserDetail(resData.rData.rData);
      }
    } catch (error) {
      console.log("function in catch block", "Subscription Form");
      console.log(error, "Subscription Form");
    }
  };


  const subscribe = async () => {
    const id = localStorage.getItem("ID");
    const ServiceId = localStorage.getItem("ServiceId");
    const jwttoken = localStorage.getItem("Token");
    const apidata = {
      eventID: "1007",
      addInfo: {
        _user_id: id,
        _plan_id: ServiceId,
        _start_date: moment().format("L"),
        _end_date: moment().add(1, "year").format("L"),
        _entry_date: moment().add(1, "year").format("L"),
      },
    };

    const url = `${BaseUrl}subscription`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apidata),
      });

      const resData = await response.json();
      console.log(resData, "planSubscription");
      if (resData.rData.rCode == 0) {
        console.log("subscribe");

        Swal.fire({
          title: "Subscription Successful!",
          text: "Thank you for Subscribing",
          confirmButtonColor: "#204e79",
          customClass: {
            confirmButton: "custom-confirm-button",
            title: "custom-title-class",
            content: "custom-text-class",
          },
        });
      }
      navigate("/dashboard");
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
      <div id="wrapper">
        <Header />
        <Navbar />
        <div id="main-content">
          <div class="container-fluid">
            <h2 class="m-0 fs-5" style={{ padding: 30 }}>
              <a
                href="javascript:void(0);"
                class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"
              >
                <i
                  class="fa fa-arrow-left"
                  onClick={() => navigate("/subscription")}
                />
              </a>{" "}
              Select Plan
            </h2>


            <div class="row g-3" 
            style={{marginLeft: "8px"}}
            >
              <div
                class="col-md-7 "
                style={{
                  padding: 20,
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                }}
              >
                <form class="row g-3 needs-validation" novalidate >
                  <p
                    style={{
                      color: "black",
                      fontSize: 20,
                      fontWeight: 700,
                      padding: 20,
                    }}
                  >
                    Select Your Plan
                  </p>
                  <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip01"
                      value={userDetail._name}
                      required
                    />
                  </div>
                  <div class="col-md-6 position-relative">
                    <label for="validationTooltip02" class="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip02"
                      value={userDetail._mobile_no}
                      required
                    />
                  </div>
                  <div class="col-md-6 position-relative">
                    <label for="validationTooltip03" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="validationTooltip03"
                      value={userDetail._email_id}
                      required
                    />
                    <div class="invalid-tooltip">
                      Please provide a valid Email.
                    </div>
                  </div>
                  <div class="col-md-6 position-relative">
                    <label for="validationTooltip04" class="form-label">
                      Payment
                    </label>
                    <select
                      class="form-select"
                      id="validationTooltip04"
                      onChange={(event) => setChoseAmount(event.target.value)}
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>UPI</option>
                      <option>ABC</option>
                      <option>Db card</option>
                    </select>
                    <div class="invalid-tooltip">
                      Please select a valid Method.
                    </div>
                    <p style={{ fontSize: 12, color: "red", paddingTop: 5 }}>
                      {chosemethod}
                    </p>
                  </div>
                  <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">
                      Certificate Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip01"
                      value={userDetail._certificate_no}
                    />
                  </div>
                  <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip01"
                      value={userDetail._address}
                    />
                  </div>

                  <div class="d-grid justify-content-end">
                    <button
                      class="btn btn-primary"
                      type="button"
                      style={{
                        backgroundColor: "#204e79",
                        color: "white",
                        marginTop: 20,
                      }}
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>

               
              </div>
              {placeorder && (
                <div class="col-md-5 ">
                  <div
                    style={{
                      boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                      padding: 20,
                      backgroundColor: "white",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: 800,
                        // paddingLeft: 20,
                      }}
                    >
                      Your Subscription
                    </p>
                    <ul>
                      <li style={{ fontSize: 20, color: "black" }}>
                        Name: {userDetail._name}{" "}
                      </li>
                      <li style={{ fontSize: 20, color: "black" }}>
                        Email: {userDetail._email_id}
                      </li>
                      <li style={{ fontSize: 20, color: "black" }}>
                        Payment type: {choseamount}
                      </li>
                      <li style={{ fontSize: 20, color: "black" }}>
                       
                        Rs: {cartdata.total_amount}
                      </li>
                      <li style={{ fontSize: 20, color: "black" }}>
                        Services : {cartdata.quantity}
                      </li>
                    </ul>
                    <div class="d-grid gap-2 col-12 mx-auto">
                      <button
                        class="btn btn-primary"
                        type="button"
                        style={{
                          backgroundColor: "#204e79",
                          color: "white",
                          marginTop: 20,
                        }}
                        onClick={subscribe}
                      >
                        Place to Order
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
};

export default SubscriptionForm;
