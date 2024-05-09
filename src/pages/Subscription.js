import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Slice/CartReducer";
import BaseUrl from "../components/BaseUrl";
function Subscription() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMonthly, setIsMonthly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [yearloading, setYearLoading] = useState(false);
  const [data, setData] = useState([]);
  const [yearly, setYearly] = useState("");
  const [update, setUpdate] = useState(false);

  const handleCheckboxChange = () => {
    setIsMonthly(!isMonthly);
  };

  const Yearly = [
    {
      plantype: "Basic",
      planresult: "Rs. 24,000 / User",
      planpeople: "2-10 User",
      price: "2,40,000 ",
      plainvalidity: "Yearly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
    {
      plantype: "Standard",
      planresult: "Rs. 21,600 / User",
      planpeople: "11-50 User",
      price: "10,80,00 ",
      plainvalidity: "Yearly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
    {
      plantype: "Basic",
      planresult: "Starter",
      planpeople: "60",
      price: "43,20,000 ",
      plainvalidity: "Yearly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
    {
      plantype: "Premium",
      planresult: "Go all in one",
      planpeople: "80",

      price: "91000",
      plainvalidity: "Yearly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
  ];
  const Monthly = [
    {
      plantype: "Basic",
      planresult: "Starter",
      planpeople: "20",
      price: "2100",
      plainvalidity: "Monthly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
    {
      plantype: "Standard",
      planresult: "Betterresult",
      planpeople: "40",
      price: "5100",
      plainvalidity: "Monthly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
    {
      plantype: "Basic",
      planresult: "Starter",
      planpeople: "60",
      price: "7100",
      plainvalidity: "Monthly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
    {
      plantype: "Premium",
      planresult: "Go all in one",
      planpeople: "80",
      price: "9100",
      plainvalidity: "Monthly",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828743.png",
      plandetail: "Internal Medicine Review",
    },
  ];

  useEffect(() => {
    OrderHistory();
  }, []);

  const OrderHistory = async () => {
    const id = localStorage.getItem("ID");
    setLoading(false);
    const apidata = {
      eventID: "1008",
      addInfo: {
        userId: id,
      },
    };
    try {
      const url = `${BaseUrl}subscription`;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apidata),
      });
      const res = await result.json();

      if (res.rData.rCode == "0") {
        setData(res.rData.rData);
        setLoading(true);
      }
    } catch (error) {
      console.log("function in catch block", "Order History");
      console.log(error, "Order History");
    }
  };

  const SubscriptionPlan = async () => {
    setYearLoading(false);
    const apidata = {
      eventID: "1006",
      addInfo: {},
    };
    try {
      const url = `${BaseUrl}subscription`;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apidata),
      });
      const res = await result.json();

      if (res.rData.rCode == "0") {
        setYearly(res.rData.rData);
        setYearLoading(true);
      }
    } catch (error) {
      console.log("function in catch block", "Order History");
      console.log(error, "Order History");
    }
  };
  useEffect(() => {
    SubscriptionPlan();
  }, []);

  return (
    <>
      {update ? (
        <div id="layout" class="theme-cyan">
          <div id="wrapper">
            <Header />
            <Navbar />
            <div id="main-content">
              <div
                class="container-fluid"
                style={{ backgroundColor: "#f9fbfd" }}
              >
                <h2
                  class="m-0 fs-5"
                  style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"
                  >
                    <i
                      class="fa fa-arrow-left"
                      onClick={() => navigate("/dashboard")}
                    />
                  </a>{" "}
                  Active Plan
                </h2>

                <div class="block-header">
                  <div class="row d-flex justify-content-center">
                    <div
                      class="col text-center"
                      style={{
                        backgroundColor: "white",
                        paddingTop: 10,
                        boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      <h2 style={{ color: "black" }}>Subscription Plan</h2>
                    </div>
                  </div>
                  <div class="row  d-flex justify-content-center">
                    <div
                      class="col text-center"
                      style={{
                        backgroundColor: "white",
                        marginBottom: 10,
                        boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      <div
                        class="form-check form-switch d-flex d-flex justify-content-center"
                        style={{ border: "none !important" }}
                      >
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          <p
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              paddingRight: 65,

                              color: update ? "black" : "#204e79",
                            }}
                          >
                            Active
                          </p>
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked={update}
                          onChange={() => setUpdate(!update)}
                          style={{
                            fontSize: 22,
                            outline: "none",
                            borderColor: "#204e79",
                            boxShadow: "none",
                          }}
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          <p
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              paddingLeft: 10,
                              color: update ? "#204e79" : "black",
                            }}
                          >
                            Upgrade
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row g-1 clearfix row-deck d-flex justify-content-center">
                  {yearloading &&
                    yearly.map((plan, index) => (
                      <div class=" col-md-3">
                        <div
                          class="card h-100"
                          style={{
                            backgroundColor: "white",
                            boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div class="card-body text-center">
                            <h3 class="card-title">{plan.plan_type}</h3>
                            <h6 class="card-title">
                              {" "}
                              Rs {plan.amount_per_user_yearly} / User
                            </h6>
                            <br />
                            <div>
                              <h4 class="card-text" style={{ color: "black" }}>
                                Rs {plan.total_amount}/ Rate per annum
                              </h4>
                            </div>
                            <div style={{ marginTop: 30 }}>
                              <p
                                style={{
                                  fontSize: 30,
                                  color: "black",
                                  fontWeight: 500,
                                }}
                              >
                                {plan.quantity}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                            </div>
                          </div>
                          <div class="d-grid gap-2 col-6 mx-auto">
                            <button
                              class="btn btn-primary"
                              type="button"
                              style={{ marginBottom: 20 }}
                              onClick={() => {
                                dispatch(addToCart(plan));
                                localStorage.setItem("ServiceId", plan._id);
                                navigate("/subscriptionform");
                              }}
                            >
                              Choose Plan
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="layout" class="theme-cyan">
          <div id="wrapper">
            <Header />
            <Navbar />
            <div id="main-content">
              <div
                class="container-fluid"
                style={{ backgroundColor: "#f9fbfd" }}
              >
                <h2
                  class="m-0 fs-5"
                  style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"
                  >
                    <i
                      class="fa fa-arrow-left"
                      onClick={() => navigate("/dashboard")}
                    />
                  </a>{" "}
                  Active Plan
                </h2>

                <div class="block-header">
                  <div class="row d-flex justify-content-center">
                    <div
                      class="col text-center"
                      style={{
                        backgroundColor: "white",
                        paddingTop: 10,
                        boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      <h2 style={{ color: "black" }}>Active Plan</h2>
                    </div>
                  </div>
                  <div class="row  d-flex justify-content-center">
                    <div
                      class="col text-center"
                      style={{
                        backgroundColor: "white",
                        marginBottom: 10,
                        boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      <div class="form-check form-switch d-flex d-flex justify-content-center">
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          <p
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              paddingRight: 65,
                              color: update ? "black" : "#204e79",
                            }}
                          >
                            Active
                          </p>
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked={update}
                          onChange={() => setUpdate(!update)}
                          style={{
                            fontSize: 22,
                            outline: "none",
                            boxShadow: "none",
                            borderColor: "#204e79",
                          }}
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckChecked"
                        >
                          <p
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              paddingLeft: 10,
                              color: update ? "#204e79" : "black",
                            }}
                          >
                            Upgrade
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="row g-1 clearfix row-deck 
                "
                >
                  {loading ? (
                    data.map((plan, index) => (
                      <div class="col-md-3 ">
                        <div
                          class="card h-100"
                          style={{
                            backgroundColor: "white",
                            boxShadow: "0 2px 4px  rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div class="card-body text-center">
                            <h3 class="card-title">{plan.plan_type}</h3>
                            <h6 class="card-title">
                              {" "}
                              Rs {plan.amount_per_user_yearly} / User
                            </h6>
                            <br />
                            <div>
                              <h4 class="card-text" style={{ color: "black" }}>
                                Rs {plan.total_amount}/ Rate per annum
                              </h4>
                            </div>
                            <div style={{ marginTop: 30 }}>
                              <p
                                style={{
                                  fontSize: 25,
                                  color: "black",
                                  fontWeight: 500,
                                }}
                              >
                                {plan.quantity}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                              <p
                                style={{
                                  fontSize: 15,
                                  color: "black",
                                  fontWeight: 600,
                                }}
                              >
                                <img
                                  src={plan.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  style={{ paddingRight: 5 }}
                                />
                                {plan.plan_detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h5 class="text-center" style={{ color: "black" }}>
                      No Active Plan 
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Subscription;
