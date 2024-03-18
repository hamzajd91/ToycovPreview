import React, { useState } from "react";
import "./pscampaign.scss";
import { Icon } from "@iconify/react";

function Pscampaign() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <section className="pscampaign">
      <a href="#">
        <Icon icon="mingcute:left-line" />
        <span>Batch tool</span>
      </a>
      <h2>Product/Shop Campaigns</h2>
      <div className="content">
        <img src="/assets/images/campaign/megasale.png" alt="..." />
        <div className="right-content">
          <div className="details">
            <h3>Crazy Friday sale ending on 30th june</h3>
            <h5>Only for products with very high discounts</h5>
            <p className="ps-id">ID:8934736426496</p>
            <p>Campaign dates: 23/06/2023 08:00 AM - 24/06/2023 08:00 PM</p>
            <p>Registration dates ends on: 22/06/2023 12:00 PM</p>
            <p>
              Eligibility: <span>Eligible</span>
            </p>
          </div>
          <div className="main-btn">
            <button onClick={toggleDropdown}>Register and Add Products</button>
            {showDropdown && (
              <div className="dropdown-content">
                <a>Select from list</a>
                <a>Import using excel</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pscampaign;
