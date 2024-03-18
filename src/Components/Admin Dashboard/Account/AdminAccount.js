import "./AdminAccount.css";
import React, { useState } from "react";
import AdminAccountTab1 from "./AdminAccountTab1";
import AdminAccountTab2 from "./AdminAccountTab2";

const AdminAccount = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="main-profile">
        <div className="main-primary">
          <div className="profile-heading">
            <span className="SellerProfile">Seller Profile</span>
          </div>
          <div className="tabs-content">
            <div className="tabs-container">
              <div className="tabs mb-2">
                <a
                  className={`tab ${activeTab === 0 ? "active" : ""} `}
                  onClick={() => handleTabClick(0)}
                >
                  Account information
                </a>
                <a
                  className={`tab ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(1)}
                >
                  Seller information
                </a>
              </div>
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
                  <AdminAccountTab1 />
                </div>
                <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
                  <AdminAccountTab2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAccount;
