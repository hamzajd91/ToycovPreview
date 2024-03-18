import React, { useState, useEffect, useRef } from "react";
import "./ManageProducts.css";
import { AdminHeading } from "../../../Reuseable Components/Headings";
import {
  ButtonFull_P,
  Button_p_s_a,
} from "../../../Reuseable Components/Butons";
import { Checkbox, Grid, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "@iconify/react";
const ManageProducts = (props) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [priceModal, setpriceModal] = useState(true);
  const [minPrice, setminPrice] = useState();
  const [maxState, setmaxState] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Toys"); // Set initial value to 'Toys' or any valid option
  const handlePriceModal = (event) => {
    setpriceModal(!priceModal);
    console.log("priceModal", priceModal);
  };
  const handlePreventDefault = (event) => {
    event.preventDefault();
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
  };
  const handleCheckboxChange = (event, productId) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        productId,
      ]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== productId)
      );
    }
  };
  const [isBottomDivOpen, setIsBottomDivOpen] = useState(false);
  const [isBottomDivOpen0, setIsBottomDivOpen0] = useState(false);
  const [isBottomDivOpen1, setIsBottomDivOpen1] = useState(false);
  const handleButtonClick = () => {
    setIsBottomDivOpen(false);
  };
  const handleButtonClick0 = () => {
    setIsBottomDivOpen0(false);
  };
  const handleButtonClick1 = () => {
    setIsBottomDivOpen1(false);
  };
  const handleOverlayClick = () => {
    setIsBottomDivOpen(!isBottomDivOpen);
  };
  const handleOverlayClick0 = () => {
    setIsBottomDivOpen0(!isBottomDivOpen0);
  };
  const handleOverlayClick1 = () => {
    setIsBottomDivOpen1(!isBottomDivOpen1);
  };
  const addProduct = () => {
    props.abc("tab2-d");
  };

  const bottomDivRef1 = useRef();
  const bottomDivRef2 = useRef();
  const bottomDivRef3 = useRef();
  useEffect(() => {
    // Function to handle clicks outside the bottom-divaddproduct
    const handleClickOutside = (event) => {
      if (
        bottomDivRef1.current &&
        !bottomDivRef1.current.contains(event.target)
      ) {
        setIsBottomDivOpen(false);
      }
      if (
        bottomDivRef2.current &&
        !bottomDivRef2.current.contains(event.target)
      ) {
        setIsBottomDivOpen0(false);
      }
      if (
        bottomDivRef3.current &&
        !bottomDivRef3.current.contains(event.target)
      ) {
        setIsBottomDivOpen1(false);
      }
    };
    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="flex-space">
        <AdminHeading>Add New Product </AdminHeading>
        <Button_p_s_a onClick={addProduct}> Add new product </Button_p_s_a>
      </div>
      <div className="manageproducts-topbar">
        <div className="manageproducts-topbarmain">
          <div>
            <div className="ratinginput-addproduct">
              <div className="first-content">
                <div className="search-divaddproduct">
                  <input
                    type="text"
                    placeholder="Enter product name or ID"
                    className="search-placeholderaddproduct"
                  />
                  <div className="search-iconaddproduct">
                    <Icon
                      icon="circum:search"
                      color="#969696"
                      width="14"
                      height="14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="inputmain-divproductfirst">
              <div className="primary-divaddproduct">
                <div
                  className="overlayadd"
                  onClick={handleOverlayClick}
                  ref={bottomDivRef1}
                ></div>
                <input
                  type="text"
                  placeholder="Category"
                  className="inputadd"
                />
                <div className="icon-containeraddproduct">
                  <Icon icon="ep:arrow-down" width="16" height="16" />
                </div>
                {isBottomDivOpen ? (
                  <div className="bottom-divaddproduct">
                    <div className="links">
                      <div className="first" onClick={handleButtonClick}>
                        No brand
                      </div>
                      <div className="first" onClick={handleButtonClick}>
                        Marvel
                      </div>
                      <div className="first" onClick={handleButtonClick}>
                        Naruto
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <div className="inputmain-divproductsecond">
              <div className="primary-divaddproduct">
                <div
                  className="overlayadd"
                  onClick={handleOverlayClick0}
                  ref={bottomDivRef2}
                ></div>
                <input type="text" placeholder="Price" className="inputadd" />
                <div className="icon-containeraddproduct">
                  <Icon icon="ep:arrow-down" width="16" height="16" />
                </div>
                {isBottomDivOpen0 ? (
                  <div className="bottom-divaddproductbox">
                    <div className="links">
                      <div className="firstbox" onClick={handleButtonClick0}>
                        <p className="RMlast">
                          RM <span className="Max-price">Min price</span>
                        </p>
                      </div>
                      <div className="firstbox" onClick={handleButtonClick0}>
                        <p className="RMlast">
                          RM <span className="Max-price">Max price</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <div className="inputmain-divproductthird">
              <div className="primary-divaddproduct">
                <div
                  className="overlayadd"
                  onClick={handleOverlayClick1}
                  ref={bottomDivRef3}
                ></div>
                <input type="text" placeholder="Filter" className="inputadd" />
                <div className="icon-containeraddproduct">
                  <Icon icon="ep:arrow-down" width="16" height="16" />
                </div>
                {isBottomDivOpen1 ? (
                  <div className="bottom-divaddproduct">
                    <div className="links">
                      <div className="first" onClick={handleButtonClick1}>
                        No brand
                      </div>
                      <div className="first" onClick={handleButtonClick1}>
                        Marvel
                      </div>
                      <div className="first" onClick={handleButtonClick1}>
                        Naruto
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Grid container className="ProductsTableHeader">
        <Grid item md={0.5}>
          <Checkbox checked={selectAll} onChange={handleSelectAll} />
        </Grid>
        <Grid item md={4.9}>
          Product
        </Grid>
        <Grid item md={0.9}>
          Quantity
        </Grid>
        <Grid item md={0.9}>
          Price
        </Grid>
        <Grid item md={1.4}>
          Updated on
        </Grid>
        <Grid item md={1.4}>
          Status
        </Grid>
        <Grid item md={1.9}></Grid>
      </Grid>
      {data.map((data, index) => {
        return (
          <Grid container className="ProductsTableRows" key={index}>
            <Grid item md={0.5}>
              <Checkbox
                checked={selectedItems.includes(data.id)}
                onChange={(event) => handleCheckboxChange(event, data.id)}
              />
            </Grid>
            <Grid item md={4.9}>
              <div className="productImgDiv">
                <img src={data.image} />
                <div>
                  {data.Product}
                  <span> ID:{data.id} </span>
                </div>
              </div>
            </Grid>
            <Grid item md={0.9}>
              {data.Quantity}
            </Grid>
            <Grid item md={0.9}>
              {data.Price}
            </Grid>
            <Grid item md={1.4}>
              {data.Updated} on
            </Grid>
            <Grid item md={1.4}>
              {data.Status}
            </Grid>
            <Grid item md={1.9} className="ProductButtons">
              <div>
                <span>Edit</span>
                <span>Deactivate</span>
              </div>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};
export default ManageProducts;
const currencies = [
  { value: "Toys" },
  { value: "Sports" },
  { value: "Games" },
  { value: "Rattles" },
];
const data = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "LEGO Classic Creative Bricks Set",
    Quantity: 10,
    Price: 29.99,
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
