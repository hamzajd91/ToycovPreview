import React, { useState } from "react";
import AllCancel from "./AllCancel";
import ProcessCancel from "./ProcessCancel";
import CancelComplete from "./CancelComplete";
import CancelClosed from "./CancelClosed";

const ManageCancel = () => {
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
                  To process
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
                  Closed
                </a>
              </div>
              {/* </div> */}
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
                  <AllCancel />
                </div>
                <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
                  <ProcessCancel />
                </div>
                <div className={`tab-pane ${activeTab === 2 ? "active" : ""}`}>
                  <CancelComplete />
                </div>
                <div className={`tab-pane ${activeTab === 3 ? "active" : ""}`}>
                  <CancelClosed />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCancel;
