import React, { useState } from "react";
import "./productdiscount.scss";
import { Checkbox, Grid, TextField } from "@mui/material";
import { Icon } from "@iconify/react";

function Productdiscount() {
  function handleTabClick(event) {
    // Remove the "active" class from all tabs
    const tabs = document.querySelectorAll(".pd-tabs a");
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add the "active" class to the clicked tab
    const clickedTab = event.target;
    clickedTab.classList.add("active");
  }

  // Add click event listeners to each tab
  const tabs = document.querySelectorAll(".pd-tabs a");
  tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="container">
      <section className="product-discount">
        <h2>Product Discount</h2>
        <div className="content">
          <div className="content-top">
            <div className="tabs-outer">
              <div className="pd-tabs">
                <a href="#" id="tab-all">
                  All
                </a>
                <a href="#" id="tab-ongoing" class="active">
                  Ongoing
                </a>
                <a href="#" id="tab-upcoming">
                  Upcoming
                </a>
                <a href="#" id="tab-deactivated">
                  Deactivated
                </a>
                <a href="#" id="tab-ended">
                  Ended
                </a>
              </div>
            </div>
            <div className="size-head">
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Promotion Name</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <div className="search-div">
                <input type="text" placeholder="Enter promotion Name" />
                <img src="/assets/images/icons/search.svg" alt="..." />
              </div>
            </div>
          </div>
          <div className="table-outer">
            <div className="managesize-table">
              <Grid container className="managesizeHeader">
                <Grid item className="ist-div">
                  Size chart name/ID
                </Grid>
                <Grid item className="second-div">
                  Description
                </Grid>
                <Grid item className="third-div">
                  Linked products
                </Grid>
                <Grid item className="forth-div">
                  Updated at
                </Grid>
              </Grid>

              <div className="managesizeRow">
                <img src="/assets/Videos/searchanimation.gif" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productdiscount;
