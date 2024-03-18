import React, { useState } from "react";
import "./managesize.scss";
import { Icon } from "@iconify/react";
import { Checkbox, Grid, TextField } from "@mui/material";

const ManageSize = (props) => {
  // const back = () => {
  //   props?.abc("tab2-e");
  // };
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler for when the dropdown selection changes
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="container">
      <section className="manage-size">
        {/* <a onClick={back}>
          <Icon icon="mingcute:left-line" />
          <span>Batch tool</span>
        </a> */}
        <div className="heading">
          <h2>Bulk Manage Size Charts</h2>
          <button
            className="addSize-chart"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add New Size Chart
          </button>
        </div>
        <div className="content">
          <div className="size-head">
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">Size chart name</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <div className="search-div">
              <input type="text" placeholder="Please enter" />
              <img src="/assets/images/icons/search.svg" alt="..." />
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
        <div
          class="modal fade "
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div className="head-left">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add New Size Chart
                  </h5>
                  <p>
                    Fill in size information to provide a size chart to
                    customers
                  </p>
                </div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="modal-top">
                  <div className="product-type">
                    <h4>Product type</h4>
                    <div className="search-div">
                      <input type="text" placeholder="Please select" />
                      <img src="/assets/images/icons/search.svg" alt="..." />
                    </div>
                  </div>
                  <div className="detail">
                    <div className="chart-name">
                      <h4>Size chart name</h4>
                      <input type="text" placeholder="Please enter" />
                    </div>
                    <div className="desc">
                      <h4>Description</h4>
                      <input type="text" placeholder="Please enter" />
                    </div>
                  </div>
                  <div className="option-div">
                    <h4>Options</h4>
                    <select></select>
                  </div>
                  <div className="toggle-div">
                    <h4>One Size</h4>
                    <img
                      src="/assets/images/icons/Switch.svg"
                      width="35"
                      height="20"
                      alt="..."
                    />
                    {/* <Icon
                      icon="bi:toggle2-on"
                      color="#284a96"
                      width="35"
                      height="20"
                    /> */}
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  className="close-butn"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="save-butn"
                  type="button"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSize;
