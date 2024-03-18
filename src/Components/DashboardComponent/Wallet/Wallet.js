import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Wallet.css";
import { Icon } from "@iconify/react";
import SelectCard from "../../../Reuseable Components/Card Select/SelectCard";
function Wallet() {
  return (

    <div className="toycove-wallet">
      <div className="left-content">
        <div className="coupon-banner">
          <img
            src="..\assets\images\Wallet\coupon.png"
            alt="wallet banner"
            className="img-100 "
          />
        </div>
        <div className="coupon-cards">
          <div>
            <img src="..\assets\images\Wallet\coupencard.png" alt="" />
            <img src="..\assets\images\Wallet\coupencard.png" alt="" />
          </div>

          <div>
            <img src="..\assets\images\Wallet\coupencard.png" alt="" />
            <img src="..\assets\images\Wallet\coupencard.png" alt="" />
          </div>
        </div>

        <div className="topup">
          <span>Other</span>
          <div className="topup-btn">
            <input type="number" name="" id="" placeholder="Enter Amount" />
            <button>Top Up Now</button>
          </div>
        </div>
      </div>
      {/* Right */}

      <div className="right-content">
        <div className="avail-balance">
          <p>Available Balance</p>
          <h2>RM 136.25</h2>
        </div>
        <div className="payment-method">
          <h2>Payment Method</h2>
          <h3>Credit Cards</h3>

          <SelectCard/>

        </div>
      </div>
    </div>
  );
}

export default Wallet;
