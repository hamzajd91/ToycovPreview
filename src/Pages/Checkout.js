import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
// import CheckoutImage from "/assets/images/CheckoutItem.png"; // Import the image file
const Checkout = () => {
  const [listData, setListData] = useState(["Item 1", "Item 2"]);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="Checkout container container-space">
      <p className="deliveryAddress">Delivery Address</p>

      <div className="heading">
        <div className="left">
          <div className="first">
            <input
              type="radio"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="p1">Allen tan chee hoe</p>
            <div className="homeDiv">
              <p className="p2">Home</p>
            </div>
          </div>
          <p className="p3">1131 Dusty Townline, Jacksonville, TX 40322</p>
          <div className="second">
            <p className="p4">Contact</p>
            <p className="p5">(+60) 361-0310</p>
          </div>
        </div>

        <div className="right">
          <div className="first">
            <p className="p4">Edit</p>
            <p className="p5">Remove</p>
          </div>
          <div className="second">
            <IconButton>
              <Icon
                className="menuIcon"
                icon="charm:plus"
                color="#DD7D05"
                width="20"
                height="20"
              />
            </IconButton>
            <p className="p6">Add New Address</p>
          </div>
        </div>
      </div>

      <div className="itemListDiv">
        <div className="selectAll ">
          <div className="select">
            <p className="orderHeading">Ordered Products</p>
          </div>

          <div className="selectAllText">
            <p>Address</p>
          </div>
          <div className="selectAllText">
            <p>Qty</p>
          </div>

          <div className="selectAllText">
            <p>Price</p>
          </div>
          <div className="selectAllText">
            <p>Total</p>
          </div>
        </div>
        {/* CheckoutItemList */}
        {listData.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </div>

      <div className="bottomDiv">
        <div className="summary">
          <p className="p1">Order Summary</p>
          <div className="first">
            <p className="p2">Total(Item)</p>
            <p className="p3">RM200</p>
          </div>
          <div className="second">
            <p className="p4">Delivery Charges</p>
            <p className="p5">RM5</p>
          </div>
          <div className="third">
            <p className="p6">Total</p>
            <p className="p7">RM205</p>
          </div>
        </div>

        <div className="payment">
          <div className="payButton">
            <p className="p10">Continue to Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const List = (props) => {
  const [itemAmmount, setitemAmmount] = useState(0);
  return (
    <div className="CheckoutAll">
      <div className="extraDiv">
        <div className="select">
          <img
            src="..\assets\images\CartItem.png"
            alt="Example"
            className="CheckoutItemImage"
          />
          <div className="nameId">
            <p className="name">Helicopter toy for toddler’s</p>
            <p className="id">#1736363636</p>
          </div>
        </div>

        <div className="addressText">
          <p>Electric Avenue</p>
          <p>street 12</p>
        </div>
        <div className="itemAmount">{itemAmmount}</div>
        <div className="priceText">
          <p>RM15.50</p>
        </div>

        <div className="removeText">
          <p>RM15.50</p>
        </div>
      </div>

      <div className="addMore">
        <div>
          <p className="boldText">Delivery </p>
          <p className="unboldText">Received by 11-15 july</p>
        </div>
        <p className="unboldText">RM 1.50</p>
      </div>
    </div>
  );
};

export default Checkout;
