import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BaseUrl from "../components/BaseUrl";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Dashboard({ username }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalSubscribed, setTotalSubscribed] = useState("");

  useEffect(() => {
    SubscribedHospitalList();
  }, []);

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
      const response = res.rData.rData.filter((item) => item._status === "1")

      if (response.length > 5) {
       setData(response.slice(response.length - 5));
       setLoading(true);
      }
      if (response.length > 0 && response.length < 6) {
        setData(response);
        setLoading(true);
      }
    } catch (error) {
      console.log("function in catch block", "dashboard");
      console.log(error, "dashboard");
    }
    TotalPlans();
  };

  const TotalPlans = async () => {
    const id = localStorage.getItem("ID");
    const apidata = {
      eventID: "1005",
      addInfo: {
        user_id: id,
      },
    };
    try {
      // const url = `${BaseUrl}subscribedHospitalList`;
      const url = `${BaseUrl}hospitaladd`;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apidata),
      });
      const res = await result.json();


      if (res.rData.rCode == 0) {
        setTotalSubscribed(res.rData.rData);
      }
    } catch (error) {
      console.log("function in catch block", "dashboard plains");
      console.log(error, "dashboard plains");
    }
  };

  const result = (
    (totalSubscribed.SubscribedPlans / totalSubscribed.TotalSubscriptionPlans) *
    100
  ).toFixed(2);

  const data1 = [
    { name: "Remaining", value: totalSubscribed.RemainingSubscribedPlans },
    { name: "Subscribed", value: totalSubscribed.SubscribedPlans },
  ];

  const COLORS1 = ["#999999", "#204e79"];

  const DoughnutCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataItem = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          {`${dataItem.name}`}
        </div>
      );
    }
    return null;
  };

  const data2 = [
    { month: "Jan", Subscribed: 3 },
    { month: "Feb", Subscribed: 5 },
    { month: "Mar", Subscribed: 10 },
    { month: "Apr", Subscribed: 2 },
    { month: "May", Subscribed: 15 },
    { month: "Jun", Subscribed: 5 },
    { month: "Jul", Subscribed: 13 },
    { month: "Aug", Subscribed: 10 },
    { month: "Sep", Subscribed: 5 },
    { month: "Oct", Subscribed: 17 },
    { month: "Nov", Subscribed: 5 },
    { month: "Dec", Subscribed: 10 },
  ];
  const COLORS2 = ["#204e79"];

  const StackedCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload.reduce((total, entry) => total + entry.value, 0);
      return (
        <div
          style={{
            height: 40,
            backgroundColor: "#204e79",
            border: "1px solid #ccc",
            padding: 2,
            borderRadius: "4px",
          }}
        >
          <p style={{ color: "white", marginTop: 7 }}>Subscribed: {value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="layout" className="theme-cyan">
      <div id="wrapper">
        <Header />
        <Navbar username={username} />
        <div id="main-content">
          <div className="container-fluid">
            <div className="block-header py-lg-4 py-3">
              <div className="row g-3">
                <div className="col-md-6 col-sm-12">
                  <h2 className="m-0 fs-5">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"
                    >
                      {/* <i className="fa fa-arrow-left" /> */}
                    </a>{" "}
                    Dashboard
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-2 clearfix row-deck">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card top_counter">
                  <div className="list-group list-group-custom list-group-flush">
                    <div className="list-group-item d-flex align-items-center py-5">
                      <div className="icon text-center me-3">
                        <i className="fa fa-hospital-o" />{" "}
                      </div>
                      <div className="content">
                        <div style={{ fontSize: 16 }}>
                          Total Subscription Plans
                        </div>
                        <h5 className="mb-0">
                          {totalSubscribed.TotalSubscriptionPlans}
                        </h5>
                      </div>
                    </div>

                    <div className="list-group-item d-flex align-items-center py-5">
                      <div className="icon text-center me-3">
                        <i className="fa fa-user-md" />{" "}
                      </div>
                      <div className="content">
                        <div style={{ fontSize: 16 }}>Subscribed Plans</div>
                        <h5 className="mb-0">
                          {totalSubscribed.SubscribedPlans}
                        </h5>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center py-5">
                      <div className="icon text-center me-3">
                        <i className="fa fa-calendar" />{" "}
                      </div>
                      <div className="content">
                        <div style={{ fontSize: 16 }}>
                          Remaining Subscription Plans
                        </div>
                        <h5 className="mb-0">
                          {totalSubscribed.RemainingSubscribedPlans}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card incomecardwidth">
                  <div className="card-header border-0">
                    <h6 className="card-title">Total Subscription Plans</h6>
                  </div>
                  <div className="card-body">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 300,
                      }}
                    >
                      <PieChart width={300} height={300}>
                        <Pie
                          data={data1}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={120}
                          fill="#8884d8"
                          startAngle={90}
                          endAngle={-270}
                        >
                          {data1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS1[index]} />
                          ))}
                        </Pie>
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          Total Plans {`\n`}
                          {totalSubscribed.TotalSubscriptionPlans}
                        </text>

                        <Tooltip content={<DoughnutCustomTooltip />} />
                      </PieChart>
                    </div>
                    <div className="stats-report text-center">
                      <div className="stat-item d-inline-block px-2 mt-2">
                        <h5 className="mb-0 fw-normal fs-6">Subscribed</h5>
                        <strong>
                          
                          {result}%
                        </strong>
                      </div>
                      <div className="stat-item d-inline-block px-2 mt-2">
                        <h5 className="mb-0 fw-normal fs-6">Remaining</h5>
                        <strong>{100 - result}%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="card salarycardwidth">
                  <div className="card-header border-0">
                    <h6 className="card-title">Subscribed Plans Per Months</h6>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BarChart
                      width={800}
                      height={320}
                      data={data2}
                      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<StackedCustomTooltip />} />
                      {/* <Legend /> */}
                      <Bar
                        dataKey="Subscribed"
                        stackId="a"
                        fill={COLORS2[0]}
                      ></Bar>
                    </BarChart>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Recent Subscriber List</h6>
                  </div>

                 

                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
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
                            data.map((val, index) => {
                              const {
                                Facility_Name,
                                Mobile_Number,
                                Email_Id,
                                RC_Name,
                                Hospital_Name,
                                _from_Date,
                                  _to_Date,
                              
                              } = val;

                              return (
                                <tr key={val.Id} className="table-hover">
                                  <td>{index + 1}</td>
                                  <td>{Facility_Name}</td>
                                  <td>{Mobile_Number}</td>
                                  <td>{Email_Id}</td>
                                  <td>{RC_Name}</td>
                                  <td>{Hospital_Name}</td>
                                  <td>{_from_Date}</td>
                                  <td>{_to_Date}</td>

                                  <td>
                                    <i
                                      className="fas fa-cloud-download-alt btn btn-primary "
                                      style={{ color: "white" }}
                                    >
                                      Subscribed
                                    </i>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
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
