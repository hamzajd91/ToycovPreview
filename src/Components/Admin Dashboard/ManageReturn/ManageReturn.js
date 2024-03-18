import React, { useState } from "react";
import AwaitingAction from "./AwaitingAction";
import Completed from "./Completed";
import Disputed from "./Disputed";
import Allmain from "./Allmain";
import "./ManageReturn.css";

const ManageReturn = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="main-profile">
        <div className="main-primary">
          <div className="Manage-Returns">
            <span className="Manage-Return">Manage Returns</span>
          </div>
          <div className="tabs-content">
            <div className="tabs-container">
              {/* <div className="tabs-scroll"> */}
              <div className="tabs mb-2">
                <a
                  className={`tab ${activeTab === 0 ? "active" : ""} `}
                  onClick={() => handleTabClick(0)}
                >
                  All
                </a>
                <a
                  className={`tab ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(1)}
                >
                  Awaiting Action
                </a>
                <a
                  className={`tab ${activeTab === 2 ? "active" : ""}`}
                  onClick={() => handleTabClick(2)}
                >
                  Completed
                </a>
                <a
                  className={`tab ${activeTab === 3 ? "active" : ""}`}
                  onClick={() => handleTabClick(3)}
                >
                  Disputed
                </a>
              </div>
              {/* </div> */}
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
                  <Allmain />
                </div>
                <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
                  <AwaitingAction />
                </div>
                <div className={`tab-pane ${activeTab === 2 ? "active" : ""}`}>
                  <Completed />
                </div>
                <div className={`tab-pane ${activeTab === 3 ? "active" : ""}`}>
                  <Disputed />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageReturn;
