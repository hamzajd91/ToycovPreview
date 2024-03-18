import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Checkbox, Grid, TextField } from "@mui/material";

import "./editimage.scss";
import { Icon } from "@iconify/react";

const EditImage = (props) => {
  // const back = () => {
  //   props.abc("tab2-e");
  // };
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler for when the dropdown selection changes
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="container">
      <section className="editImage">
        {/* <a onClick={back}>
          <Icon icon="mingcute:left-line" />
          <span>Batch tool</span>
        </a> */}
        <h2>Batch Edit Images</h2>
        <div className="content">
          <button
            className="select-product"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Select Products
          </button>
          <div className="inner">
            <img src="/assets/Videos/searchanimation.gif" alt="..." />
          </div>
          {/* <div className="bottom">
            <div className="product-images">
              <div className="bottom-head">
                <h3>Product Images</h3>
              </div>

              <div className="right-sec">
                <img src="/assets/images/bulkimages/1.png" alt="..." />
                <img src="/assets/images/bulkimages/2.png" alt="..." />
                <img src="/assets/images/bulkimages/3.png" alt="..." />
                <img src="/assets/images/bulkimages/4.png" alt="..." />
                <img src="/assets/images/bulkimages/5.png" alt="..." />
                <img src="/assets/images/bulkimages/6.png" alt="..." />
                <label htmlFor="bulkimage">
                  <Icon
                    icon="ic:baseline-plus"
                    color="#4a4a4a"
                    width="24"
                    height="24"
                  />
                  <span>Image</span>
                </label>
                <input type="file" className="d-none" id="bulkimage" />
              </div>
            </div>
            <div className="product-videos">
              <h3>
                Video <span>(optional)</span>
              </h3>
              <div className="right-sec">
                <img src="/assets/images/bulkimages/1.png" alt="..." />
                <label htmlFor="bulkimage">
                  <Icon
                    icon="ic:baseline-plus"
                    color="#4a4a4a"
                    width="24"
                    height="24"
                  />
                  <span>Image</span>
                </label>
                <input type="file" className="d-none" id="bulkimage" />
              </div>
            </div>
            <div className="product-spec">
              <h3>
                Specifications <span>(optional)</span>
              </h3>
              <div className="right-sec">
                <img src="/assets/images/bulkimages/1.png" alt="..." />
                <label htmlFor="bulkimage">
                  <Icon
                    icon="ic:baseline-plus"
                    color="#4a4a4a"
                    width="24"
                    height="24"
                  />
                  <span>Image</span>
                </label>
                <input type="file" className="d-none" id="bulkimage" />
              </div>
            </div>
          </div> */}
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Stock History
                </h5>
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
                  <div className="active-btn">
                    <p>Active</p>
                  </div>
                  <div className="catagories-dropdown">
                    <select
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option value="">All Categories</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="search-div">
                    <input type="text" placeholder="Product ID" />
                    <img src="/assets/images/icons/search.svg" alt="..." />
                  </div>
                </div>
                <div className="modaltable-outer">
                  <div className="modal-table">
                    <Grid container className="ModalTableHeader">
                      <Grid item className="ist-div">
                        Product
                      </Grid>
                      <Grid item className="second-div">
                        Price
                      </Grid>
                      <Grid item className="third-div">
                        Stock
                      </Grid>
                    </Grid>

                    {data.map((data, index) => {
                      return (
                        <Grid container className="ModalTableRows" key={index}>
                          <Grid item className="ist-div">
                            <div className="ModalImagediv">
                              <input type="checkbox" />
                              <img src={data.image} />
                              <div>
                                {data.Product}
                                <span> ID:{data.id} </span>
                              </div>
                            </div>
                          </Grid>

                          <Grid item className="second-div">
                            {data.Price}
                          </Grid>
                          <Grid item className="third-div">
                            {" "}
                            {data.Quantity}
                          </Grid>
                        </Grid>
                      );
                    })}
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
                <button className="save-butn" type="button">
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

export default EditImage;

const data = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "universal deformation bumbleebee robot toys with music and light",
    ID: 234763462784624,
    Quantity: 60,
    Price: "RM 60",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "universal deformation bumbleebee robot toys with music and light",
    ID: 234763462784624,
    Quantity: 30,
    Price: "RM 60",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "universal deformation bumbleebee robot toys with music and light",
    ID: 234763462784624,
    Quantity: 20,
    Price: "RM 60",
  },
];
