import React from "react";
import { Checkbox, Grid, TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import "./publicproduct.scss";
const PublishProduct = (props) => {
  const handleTabChange = (tab) => {
    props.setChange(tab);
  };
  return (
    <div className="container">
      <section className="publish-product">
        {/* <a onClick={() => handleTabChange(0)}>
          <Icon icon="mingcute:left-line" />
          <span>Batch tool</span>
        </a> */}
        <div className="heading">
          <h2>Batch Publish Products</h2>
          <button onClick={() => handleTabChange(2)}>Download Template</button>
        </div>
        <div className="content">
          <h3>Upload Template</h3>
          <div className="upload-div">
            <label htmlFor="template">
              Drag and drop your excel file here or <span>Select a file</span>
            </label>
            <Icon
              icon="material-symbols:download"
              color="#6a6a6a"
              width="24"
              height="24"
            />
            <input type="file" id="template" className="d-none" />
          </div>
          <h3>Uploaded Records</h3>
          <div className="table-outer">
            <div className="publishproduct-table">
              <Grid container className="publishproductHeader">
                <Grid item className="ist-div">
                  Educational
                </Grid>
                <Grid item className="second-div">
                  Products
                </Grid>
                <Grid item className="third-div">
                  Promotions
                </Grid>
                <Grid item className="forth-div">
                  Bundle status
                </Grid>
                <Grid item className="fifth-div">
                  Action
                </Grid>
              </Grid>

              <div className="publishproductRow">
                <img src="/assets/Videos/searchanimation.gif" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishProduct;
