import React, { useState } from "react";
import { Icon } from "@iconify/react";
import GIF from "./gifimage.gif";

const AllCancel = () => {
  const [selectOpt, setSelectOpt] = useState("yes");
  const [selectOptship, setSelectshipOpt] = useState("yes");
  const OptChange = (event) => {
    setSelectOpt(event.target.value);
  };
  const shipChange = (event) => {
    setSelectshipOpt(event.target.value);
  };
  const [selectedOptionid, setSelectedOptionid] = useState("");
  const handleSelectChangeid = (event) => {
    setSelectedOptionid(event.target.value);
  };
  const [isBottomDivOpen, setIsBottomDivOpen] = useState(false);

  const handleAllTimeClick = () => {
    setIsBottomDivOpen(!isBottomDivOpen);
  };

  const [selectedOptnsorder, setSelectedOptnsorder] = useState("yes");
  const handleOptChangeorder = (event) => {
    setSelectedOptnsorder(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const handleOverlayClick1 = () => {
    setIsOpen1(!isOpen);
  };
  const closeoverlay2 = () => {
    setIsOpen1(false);
  };
  return (
    <>
      <div className="managecancel-homesection">
        <div className="managecancel-primarysection">
          <div className="orderidcancel-search">
            <div className="orderidcancel-head">
              <select value={selectedOptionid} onChange={handleSelectChangeid}>
                <option value="">Order ID</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <div className="searchcancel-div">
                <input type="text" placeholder="Enter an order ID" />
                <img src="/assets/images/icons/search.svg" alt="..." />
              </div>
            </div>
            <div className="from-calendermanage">
              <input type="date" className="from-calender" />
            </div>
            <div className="to-calendermanage">
              <input type="date" className="from-calender" />
            </div>
            <div className="all-timecancel">
              <div className="all-times" onClick={handleAllTimeClick}>
                <span className="alltime-text">All Time</span>
              </div>
              {isBottomDivOpen && (
                <div className="bottom-divescancel">
                  <div className="div-weekdropdown">
                    <span className="bottomdiv-week">1 week</span>
                  </div>
                  <div className="div-weekdropdown">
                    <span className="bottomdiv-week">2 weeks</span>
                  </div>
                  <div className="div-weekdropdown">
                    <span className="bottomdiv-week">3 weeks</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="managereturn-lastdivcancel">
        <div className="managecancel-lastdivprimary">
          <div className="radiobtn-contentcancel">
            <div className="radiobtn-leftcancel">
              <span className="Shipping-provider">0 orders</span>
            </div>
            <div className="radiobtnright-cancel  ">
              <div className="Express-standard ">
                <div className="switch-fieldscancel">
                  <input
                    type="radio"
                    id="exportcancel-order"
                    name="switch-two"
                    value="exportcancel-order"
                    checked={selectedOptnsorder === "exportcancel-order"}
                    onChange={handleOptChangeorder}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exportcancel-order"
                    style={{
                      backgroundColor:
                        selectedOptnsorder === "exportcancel-order"
                          ? "#ff7d05"
                          : "",
                      border:
                        selectedOptnsorder === "exportcancel-order"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnsorder === "exportcancel-order"
                          ? "white"
                          : "black",
                    }}
                  >
                    Export orders
                  </label>
                  <input
                    type="radio"
                    id="exportcancel-history"
                    name="switch-two"
                    value="exportcancel-history"
                    checked={selectedOptnsorder === "exportcancel-history"}
                    onChange={handleOptChangeorder}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exportcancel-history"
                    style={{
                      backgroundColor:
                        selectedOptnsorder === "exportcancel-history"
                          ? "#ff7d05"
                          : "",
                      border:
                        selectedOptnsorder === "exportcancel-history"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnsorder === "exportcancel-history"
                          ? "white"
                          : "black",
                    }}
                  >
                    Export History
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cancel-orderlastdiv">
        <div className="cancel-ordermain">
          <div className="cancelorder-heading">
            <div className="cancel-orderid cancel">Order ID</div>
            <div className="cancel-orderstatus cancel">Order status</div>
            <div className="cancel-orderdelivery cancel">Delivery</div>
            <div className="cancel-orderpayment cancel">Payment Method</div>
          </div>
          <div className="cancelorder-lastimg">
            <div className="cancel-orderimgdiv">
              <img src={GIF} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCancel;
