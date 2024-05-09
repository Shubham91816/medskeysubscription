import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../components/BaseUrl";
function OrderHistory() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
                        onClick={() => navigate("/Subscription")}
                      ></i>
                    </a>{" "}
                    Order History
                  </h2>
                </div>
              </div>
            </div>

            <div class="row g-3">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h6 class="card-title">Order History List</h6>
                  </div>
                  <div class="card-body">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Plan Type</th>
                              {/* <th>Plan Result</th> */}
                              <th>Services</th>
                              <th>Validity</th>
                              <th>From Date</th>
                              <th>Till Date</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading && 
                              data.map((val, index) => {
                                const {
                                  validity,
                                  amount_per_user_yearly,
                                  plan_type,

                                  quantity,
                                  plan_detail,
                                  total_amount,
                                  _start_date,
                                  _end_date,
                                } = val;

                                return (
                                  <tr key={index} class="table-hover">
                                    <td>{index + 1}</td>
                                    <td>{plan_type}</td>
                                    <td>{quantity}</td>
                                    <td>{validity}</td>
                                    <td>{_start_date}</td>
                                    <td>{_end_date}</td>
                                    <td>{total_amount}</td>
                                  </tr>
                                );
                              })
                            
                             
                            }

                          </tbody>
                        </table>
                        {!loading && <h6
                                class="text-center"
                                style={{  color: "black" }}
                              >
                                No Active Plan
                              </h6>
                        }

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

export default OrderHistory;
