import React from "react";
import "./AdminAccount.css";
import Grid from "@mui/material/Grid";

const AdminAccountTab2 = () => {
  return (
    <>
      <div className="seller-information">
        <div className="seller-primary">
          <div className="sellerinfo">
            <span className="seller-heading">Seller Information</span>
          </div>

          <div className="shop-details">
            <div className="shop-logo logo">
              <span className="slogo">Shop Logo</span>
              <img
                src="..\assets\images\activityicon\sellerlogo.png"
                alt="logo"
              />
              <button className="upload-btn">Upload</button>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  {" "}
                  <div className="shop-div">
                    <span className="Shop-Name">
                      {" "}
                      Shop Name <br />
                      <span className="toys-cove"> Toys Cove</span>{" "}
                      <h6 className="change">Change</h6>{" "}
                    </span>
                  </div>
                </div>
                <div class="col-md-4">
                  {" "}
                  <div className="shop-div">
                    <span className="Shop-Name">
                      {" "}
                      Phone number <br />
                      <span className="shop-number"> +6276346634</span>{" "}
                    </span>
                  </div>
                </div>
                <div class="col-md-4">
                  {" "}
                  <div className="shop-div">
                    <span className="Shop-Name">
                      {" "}
                      Shop Email <br />
                      <span className="shop-number">
                        {" "}
                        Toyscove7@gmail.com
                      </span>{" "}
                    </span>
                  </div>
                </div>
                <div class="col-md-4">
                  {" "}
                  <div className="shop-div">
                    <span className="Shop-Name">
                      {" "}
                      Seller Type <br />
                      <span className="shop-number">Local Seller</span>{" "}
                    </span>
                  </div>
                </div>
                <div class="col-md-4">
                  {" "}
                  <div className="shop-div">
                    <span className="Shop-Name">
                      {" "}
                      Shop code <br />
                      <span className="shop-number"> 73473846264</span>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAccountTab2;
