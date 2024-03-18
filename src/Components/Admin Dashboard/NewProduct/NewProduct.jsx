import React, { useState } from "react";
import "./NewProduct.css";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";
const NewProduct = () => {
  const [isChecked, setIsChecked] = useState(true); // Set the default value here
  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };
  const [isBottomDivOpen, setIsBottomDivOpen] = useState(false);
  // const [isBottomDivOpen1, setIsBottomDivOpen1] = useState(false);
  const handleOverlayClick = () => {
    setIsBottomDivOpen(!isBottomDivOpen);
  };
  const handleButtonClick = () => {
    setIsBottomDivOpen(false);
  };
  // const handleOverlayClick1 = () => {
  //   setIsBottomDivOpen1(!isBottomDivOpen1);
  // };
  const handleLinkClick = () => {
    setIsBottomDivOpen(false);
  };
  // const handleLinkClick1 = () => {
  //   setIsBottomDivOpen1(false);
  // };
  return (
    <>
      <div className=" Add-Newproduct">
        <div className="new-productheading">
          <span className="newproduct">Add New Product</span>
        </div>
        <div className="newproduct-section">
          <div className="Bs-info">
            <span className="Basic-Information">Basic Information</span>
          </div>
          <div className="form-section">
            <div className="form-group form-div">
              <label className="exampletext1">Product Name</label>
              <input
                type="text"
                className="form-control textinput "
                placeholder="Please enter the product name"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group form-div">
              <label className="exampletext2">Product Name</label>
              <select className="form-select  select2" aria-label="">
                <option selected className="bydefaultselected">
                  Please select the category
                </option>
                <option value="1">Games</option>
                <option value="2">Arts And Crafts</option>
                <option value="3">Stuffed Toys</option>
                <option value="4">Car Toys</option>
                <option value="5">Dolls</option>
                <option value="6">Vehicles</option>
                <option value="7">Puzzle Games</option>
                <option value="8">Educational Games</option>
                <option value="9">Arts And Crafts</option>
                <option value="10">Stuffed Toys</option>
                <option value="11">Educational Games</option>
              </select>
            </div>
          </div>
          <div className="attribute-section">
            <div className="product-title">
              <span className="Product-Attributes">Product Attributes</span>
            </div>
            <div className="atribute-content">
              <div className="left-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">Brand</label>
                  <div className="inputmain-div">
                    <div className="primary-div">
                      <div
                        className="overlay"
                        onClick={handleOverlayClick}
                      ></div>

                      <input
                        type="text"
                        placeholder="Please select a brand"
                        className="input"
                      />
                      <div className="icon-container">
                        <Icon icon="ep:arrow-down" width="16" height="16" />
                      </div>
                      {isBottomDivOpen ? (
                        <div className="bottom-div">
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
                            <div className="last">
                              <div className="input-text">
                                <input className="add-text" />
                              </div>
                              <div className="button-text">
                                <button
                                  className="addbtn"
                                  onClick={handleButtonClick}
                                >
                                  Add New Brand
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">
                    Quantity per pack
                  </label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="atribute-content">
              <div className="left-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">Brand</label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="right-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">
                    Quantity per pack
                  </label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="atribute-content">
              <div className="left-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">Brand</label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="right-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">
                    Quantity per pack
                  </label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="atribute-content">
              <div className="left-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">Brand</label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="right-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">
                    Quantity per pack
                  </label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="atribute-content">
              <div className="left-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">Brand</label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="right-content">
                <div className="form-group form-divs">
                  <label className="productattribute-label">
                    Quantity per pack
                  </label>
                  <select className="form-select  select2" aria-label="">
                    <option selected className="bydefaultselected">
                      Enter a suggested or custom value
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productdetail-section">
          <div className="productdetail-content">
            <div className="productdetail-heading">
              <span className="pd-heading">Product Details</span>
            </div>
            <div className="imgupload-div">
              <div className="imgvedio-heading">
                <p className="img-heading">
                  {" "}
                  Product Image/video{" "}
                  <span className="imglast-heading">
                    (Upload atleast three images)
                  </span>{" "}
                </p>
              </div>
              <div className="upload-content">
                <div className="img-upload">
                  <span className="plus">
                    {" "}
                    + <br /> <span className="img-sign">Image</span>
                  </span>
                </div>
                <div className="upload-img">
                  <div className="uploadimg-div"></div>
                  <div className="choosen-file">
                    <span className="chosen-text ">No file choosen</span> <br />
                    <button className="Choose-File">Choose File</button>
                  </div>
                </div>
                <div className="img-upload">
                  <span className="plus">
                    {" "}
                    + <br /> <span className="img-sign">Vedio</span>
                  </span>
                </div>
                <div className="upload-img">
                  <div className="uploadimg-div"></div>
                  <div className="choosen-file">
                    <span className="chosen-text ">No file choosen</span> <br />
                    <button className="Choose-File">Choose File</button>
                  </div>
                </div>
              </div>
              <div className="imgvedio-heading">
                <p className="img-heading">
                  {" "}
                  Product Image/video{" "}
                  <span className="imglast-heading">
                    (Upload atleast three images)
                  </span>{" "}
                </p>
              </div>
              <div className="productdescription-content">
                <div className="productdescription-container">
                  <textarea
                    className="form-control textarea-property"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter a product description"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saleinfo-section">
          <div className="saleinformation-content">
            <div className="saleinfo-heading">
              <span className="Sales-information">Sales information</span>
            </div>
            <div className="enable-btn">
              <Form>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Label
                    style={{ marginRight: "30px" }}
                    className="enablebtn"
                  >
                    Enable variations
                  </Form.Label>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    checked={isChecked}
                    onChange={handleSwitchChange}
                  />
                </div>
              </Form>
            </div>
            <div className="variation-content">
              <div className="variation-firstheading">
                <span className="var-span">
                  You can add variations if this product has options like size
                  and color
                </span>
              </div>
              <div className="variation-selectbox">
                <div className="atribute-content test">
                  <div className="left-content">
                    <div className="form-group form-divs">
                      <label className="productattribute-label">
                        Variation name
                      </label>
                      <select className="form-select  select2" aria-label="">
                        <option selected className="bydefaultselected">
                          Colour
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="right-content">
                    <div className="form-group form-divs">
                      <label className="productattribute-label">Option</label>
                      <select className="form-select  select2" aria-label="">
                        <option selected className="bydefaultselected">
                          red
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sale-lastsection">
                <div className="img-upload">
                  <span className="plus">
                    {" "}
                    + <br /> <span className="img-sign">Image</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shippinginfo-section">
          <div className="shippinginformation-content">
            <div className="shippinginfo-heading">
              <span className="Shipping-information">Shipping information</span>
            </div>
            <div className="form-content">
              <div className="main-content">
                <div className="leftside-form">
                  <label className="weight-label">Weight with package</label>{" "}
                  <br />
                  <div className="kg-div">
                    <input
                      type="text"
                      placeholder="Enter the product weight"
                      className="weight-leftsideinput"
                    />
                    <select className="form-select weight-leftsideinput2">
                      <option selected>Choose...</option>
                      <option>Kg</option>
                    </select>
                  </div>
                </div>
                {/* <div className="rightside-form"></div> */}
              </div>
            </div>
            <div className="form-content">
              <div className="main-content">
                <div className="leftside-form">
                  <label className="weight-label">Weight with package</label>{" "}
                  <br />
                  <div className="kg-div">
                    <input
                      type="text"
                      placeholder="Enter the product weight"
                      className="weight-leftsideinput"
                    />
                    <input
                      type="text"
                      placeholder="Enter the product weight"
                      className="weight-leftsideinput"
                    />
                    <input
                      type="text"
                      placeholder="Enter the product weight"
                      className="weight-leftsideinput"
                    />
                  </div>
                </div>
                {/* <div className="rightside-form"></div> */}
              </div>
              <div className="delivery-options">
                <div className="delivery-opt">
                  <label className="radio-label">Delivery options</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label radio-labl"
                      for="flexRadioDefault1"
                    >
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label radio-labl"
                      for="flexRadioDefault2"
                    >
                      Default checked radio
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mewproduct-lastbtn">
          <button className="Discard-btn">Discard</button>
          <button className="Publish-btn">Publish</button>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
