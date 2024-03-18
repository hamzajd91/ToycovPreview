import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
// import cartImage from "/assets/images/cartItem.png"; // Import the image file
const Cart = () => {
  const [listData, setListData] = useState(["Item 1", "Item 2"]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleRemoveItem = (index) => {
    setListData((prevData) => {
      const newData = prevData.filter((_, i) => i !== index);
      return newData;
    });
  };
  return (
    <section className="cart container container-space">
      <div className="heading">
        <Icon icon="mdi:voucher" color="#FFCB45" width="25" height="25" />
        <p>Select available vouchers below to enjoy discounts</p>
      </div>

      <div className="itemListDiv">
        <div className="selectAll ">
          <div className="select">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p>Select All</p>
          </div>

          <div className="selectAllText1">
            <p>Address</p>
          </div>
          <div className="selectAllText2">
            <p>Price</p>
          </div>
          <div className="selectAllText3">
            <p>Qty</p>
          </div>
        </div>
        {/* cartItemList */}
        {listData.map((item, index) => (
          <List
            key={index}
            item={item}
            onRemove={() => handleRemoveItem(index)}
          />
        ))}

        <div className="addMore">
          <Icon
            icon="mdi:voucher-outline"
            color="#FF7D05"
            width="25"
            height="25"
          />
          <div>
            <p className="boldText">Add RM15 more to get free delivery</p>
            <p className="unboldText">valid till 03.05.2023</p>
          </div>
        </div>
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
          <p className="p8">Select or enter voucher code</p>
          <div className="applyDiv">
            <div className="applyInput"></div>
            <div className="applyButton">
              <p className="p9">Apply</p>
            </div>
          </div>

          <div className="payButton">
            <p className="p10">Continue to Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const List = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [itemAmmount, setitemAmmount] = useState(0);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const addItem = () => {
    setitemAmmount(itemAmmount + 1);
  };
  const minusItem = () => {
    setitemAmmount(itemAmmount - 1);
  };
  return (
    <div className="cartAll">
      <div className="select">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <img
          src="..\assets\images\cartItem.png"
          alt="Example"
          className="cartItemImage"
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
      <div className="priceText">
        <p>RM15.50</p>
      </div>
      <div className="itemAmount">
        <div className="minus" onClick={minusItem}>
          -
        </div>
        <div className="showAmount">{itemAmmount}</div>
        <div className="add" onClick={addItem}>
          +
        </div>
      </div>
      <div className="removeText" onClick={props.onRemove}>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default Cart;
