import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./psmain.scss";
import { Icon } from "@iconify/react";
function Psmain(props) {
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
  //
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const join = () => {
    props.abc("tab5-bb");
  };
  return (
    <div className="container">
      <section className="ps-main">
        <a href="#" className="back-btn">
          <Icon icon="mingcute:left-line" />
          <span>Batch tool</span>
        </a>
        <h2>Product/Shop Campaigns</h2>
        <div className="content">
          <div className="content-top">
            <div className="tabs-outer">
              <div className="pd-tabs">
                <a href="#" id="tab-all" class="active">
                  Major Campaigns
                </a>
                <a href="#" id="tab-ongoing">
                  Everyday Campaigns
                </a>
                <a href="#" id="tab-upcoming">
                  Special Campaigns
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
            <div className="ps-table">
              <Grid container className="psHeader">
                <Grid item className="ist-div">
                  Campaign information
                </Grid>
                <Grid item className="second-div">
                  Eligibility
                </Grid>
                <Grid item className="third-div">
                  Registration type
                </Grid>
                <Grid item className="forth-div">
                  Campaign Dates
                </Grid>
                <Grid item className="fifth-div">
                  Action
                </Grid>
              </Grid>

              {info.map((info, index) => {
                return (
                  <Grid container className="psTableRows" key={index}>
                    <Grid item className="ist-div">
                      <div className="psImagediv">
                        <img src={info.image} />
                        <div>
                          <p>{info.Product}</p>
                          <span> ID:{info.Detail} </span>
                        </div>
                      </div>
                    </Grid>

                    <Grid item className="second-div">
                      {info.Eligibility}
                    </Grid>
                    <Grid item className="third-div">
                      {" "}
                      {info.Type}{" "}
                    </Grid>
                    <Grid item className="forth-div">
                      {" "}
                      {info.Dates}{" "}
                    </Grid>
                    <Grid item className=" fifth-div">
                      <button onClick={join}>Join Now</button>
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Psmain;

const info = [
  {
    id: 1,
    image: "https://i.ibb.co/1Ksr2b9/megasale.png",
    Product: "Crazy Friday sale ending on 30th june",
    Detail: "Only for products with very high discounts",
    Eligibility: "Eligible",
    Type: "Product Campaign",
    Dates: " 23/06/2023 08:00 AM",
  },
  {
    id: 2,
    image: "https://i.ibb.co/1Ksr2b9/megasale.png",
    Product: "Crazy Friday sale ending on 30th june",
    Detail: "Only for products with very high discounts",
    Eligibility: "Eligible",
    Type: "Product Campaign",
    Dates: " 23/06/2023 08:00 AM",
  },
  {
    id: 3,
    image: "https://i.ibb.co/1Ksr2b9/megasale.png",
    Product: "Crazy Friday sale ending on 30th june",
    Detail: "Only for products with very high discounts",
    Eligibility: "Eligible",
    Type: "Product Campaign",
    Dates: " 23/06/2023 08:00 AM",
  },
];
