import React, { useState } from "react";
import { SubHeading2 } from "../../../Reuseable Components/Headings";
import "./productOptimizer.scss";
import { Icon } from "@iconify/react";
import { Checkbox, Grid, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DataGrid } from "@mui/x-data-grid";

import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

function ProductOptimizer() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  return (
    <div className="container">
      <section className="product-optimizer">
        <SubHeading2>Product optimizer</SubHeading2>

        <div className="top">
          <h2>Srock dashboard</h2>
          <div className="inner">
            <div className="inner-left">
              <div>
                <p>Good products</p>
                <span>0</span>
              </div>
              <div>
                <p>Products to be optimized</p>
                <span>2</span>
              </div>
            </div>
            <div className="Right">
              <h6>
                100% of availavle products need to be optimized. they may have a
                negative impact on the customers and store.
              </h6>
              <p>
                Insufficient information for buyers to make decision. Failed to
                visualize the product. weakened the product display image.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="dropdown-section">
            <div className="search-div">
              <input type="text" placeholder="Enter product name or ID" />
              <img src="/assets/images/icons/search.svg" alt="" />
            </div>
            <div class="dropdown-div ist" data-toggle="dropdown">
              <button type="button" aria-expanded="false">
                Category
                <Icon icon="mingcute:down-line" />
              </button>
              <div class="dropdown-menu">
                <div>
                  <input type="checkbox" />
                  <p>Insufficient information for buyers</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>failed to visualize the product</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Weakened the product display</p>
                </div>
              </div>
            </div>
            <div class="dropdown-div second" data-toggle="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                aria-expanded="false"
              >
                Pending optimization
                <Icon icon="mingcute:down-line" />
              </button>
              <div class="dropdown-menu">
                <div>
                  <input type="checkbox" />
                  <p>Insufficient information for buyers</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>failed to visualize the product</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Weakened the product display</p>
                </div>
              </div>
            </div>
            <div class="dropdown-div third" data-toggle="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                aria-expanded="false"
              >
                Scope of impact
                <Icon icon="mingcute:down-line" />
              </button>
              <div class="dropdown-menu">
                <div>
                  <input type="checkbox" />
                  <p>Insufficient information for buyers</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>failed to visualize the product</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Weakened the product display</p>
                </div>
              </div>
            </div>
          </div>

          <div className="table-outer">
            <div className="optimizer-table">
              <Grid container className="OptimizerTableHeader">
                <Grid item className="ist-div">
                  Product
                </Grid>
                <Grid item className="second-div">
                  To be optimized
                </Grid>
                <Grid item className="third-div">
                  Scope of impact
                </Grid>
                <Grid item className="forth-div"></Grid>
              </Grid>

              {data.map((data, index) => {
                return (
                  <Grid container className="OptimizerTableRows" key={index}>
                    <Grid item className="ist-div">
                      <div className="OptimizerImagediv">
                        <img src={data.image} />
                        <div>
                          {data.Product}
                          <span> ID:{data.id} </span>
                        </div>
                      </div>
                    </Grid>

                    <Grid item className="second-div">
                      {" "}
                      {data.Updated}
                    </Grid>
                    <Grid item className="third-div">
                      {" "}
                      {data.Status}{" "}
                    </Grid>
                    <Grid item className="Optimizerbutton forth-div">
                      <button>Optimize</button>
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

export default ProductOptimizer;

const data = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "universal deformation bumbleebee robot toys with music and light",
    ID: 234763462784624,
    Price: "main image has low resolution",
    Updated: "2023-07-12",
    Status: "Available",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "Barbie Dreamhouse",
    Quantity: 5,
    Price: 179.99,
    Updated: "2023-07-11",
    Status: "Available",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "Hot Wheels 20 Car Gift Pack",
    Quantity: 8,
    Price: 19.99,
    Updated: "2023-07-13",
    Status: "Available",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "Nerf N-Strike Elite Disruptor Blaster",
    Quantity: 12,
    Price: 9.99,
    Updated: "2023-07-10",
    Status: "Available",
  },
];
