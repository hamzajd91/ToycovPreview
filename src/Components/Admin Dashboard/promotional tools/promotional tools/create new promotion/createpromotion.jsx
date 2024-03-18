import "./createpromotion.scss";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Checkbox, Grid, TextField } from "@mui/material";
function Createpromotion(props) {
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler for when the dropdown selection changes
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const cncl = () => {
    props.abc("tab2-eb");
  };
  const pblsh = () => {
    props.abc("tab2-ed");
  };
  return (
    <section className="create-promotion">
      <h2>Create new promotion</h2>
      <div className="info">
        <h3>Basic information</h3>
        <div className="name">
          <h4>Promotion Name</h4>
          <div className="select-div">
            <select id="mySelect">
              <option value="option1">Discount 10/07/2023</option>
              <option value="option2">Discount 10/06/2023</option>
            </select>
          </div>
        </div>
        <div className="period">
          <h4>Promotion period</h4>
          <div className="date-section">
            <div className="date-left">
              <input type="date" />
            </div>
            <div className="date-right">
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="discount">
          <h4>Discount type</h4>
          <form>
            <label>
              <input type="radio" name="option" value="option1" /> Percentage
              off
            </label>
            <label>
              <input type="radio" name="option" value="option2" />
              Fixed price
            </label>
          </form>
        </div>
      </div>
      <div className="products">
        <h4>Products</h4>
        <form>
          <label>
            <input type="radio" name="option" value="option1" /> Product level
          </label>
          <label>
            <input type="radio" name="option" value="option2" /> Variation level
          </label>
        </form>
        <button data-toggle="modal" data-target="#exampleModal">
          Select Products
        </button>
      </div>
      <div className="buttons">
        <button className="cancel-btn" onClick={cncl}>
          Cancel
        </button>
        <button className="publish-btn" onClick={pblsh}>
          Publish
        </button>
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
                  <select value={selectedOption} onChange={handleSelectChange}>
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
              <button className="close-btn" type="button" data-dismiss="modal">
                Cancel
              </button>
              <button className="save-btn" type="button">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Createpromotion;

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
