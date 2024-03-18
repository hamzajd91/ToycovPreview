import "./Complete.css";
import GIF from "./gifimage.gif";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Complete = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  //
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler for when the dropdown selection changes
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [isBottomDivOpen, setIsBottomDivOpen] = useState(false);
  const [isBottomDivOpe1, setIsBottomDivOpe1] = useState(false);
  const [isBottomDivOpe2, setIsBottomDivOpe2] = useState(false);
  const [isBottomDivOpe3, setIsBottomDivOpe3] = useState(false);
  const [isBottomDivOpe4, setIsBottomDivOpe4] = useState(false);

  const handleAllTimeClick = () => {
    setIsBottomDivOpen(!isBottomDivOpen);
  };
  const handleClick1 = () => {
    setIsBottomDivOpe1(!isBottomDivOpe1);
  };
  const handleClick2 = () => {
    setIsBottomDivOpe2(!isBottomDivOpe2);
  };
  const handleClick3 = () => {
    setIsBottomDivOpe3(!isBottomDivOpe3);
  };
  const handleClick4 = () => {
    setIsBottomDivOpe4(!isBottomDivOpe4);
  };
  const [selectedOptionid, setSelectedOptionid] = useState("");
  const handleSelectChangeid = (event) => {
    setSelectedOptionid(event.target.value);
  };
  const [selectedValue, setSelectedValue] = useState(null);
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
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
                <Icon
                  icon="ep:arrow-down"
                  color="rgba(0, 0, 0, 0.71)"
                  width="12"
                  height="12"
                />
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
        <div className="managecancel-primarysection">
          <div className="orderidcancel-search">
            <div className="all-timeorderfirst">
              <div className="all-timesorder" onClick={handleClick1}>
                <span className="alltime-text">All Time</span>
                <Icon
                  icon="ep:arrow-down"
                  color="rgba(0, 0, 0, 0.71)"
                  width="12"
                  height="12"
                />
              </div>
              {isBottomDivOpe1 && (
                <div className="bottom-divordera">
                  <div className="div-weekdropdown">
                    <span className="bottomdiv-week1">Standard shipping</span>
                  </div>
                </div>
              )}
            </div>
            <div className="all-timeorderfirst">
              <div className="all-timesorder" onClick={handleClick2}>
                <span className="alltime-text">Logistics issue</span>
                <Icon
                  icon="ep:arrow-down"
                  color="rgba(0, 0, 0, 0.71)"
                  width="12"
                  height="12"
                />
              </div>
              {isBottomDivOpe2 && (
                <div className="bottom-divordera">
                  <div className="div-weekdropdown2">
                    <label>
                      <input
                        type="checkbox"
                        value="1 week"
                        checked={selectedValue === "1 week"}
                        onChange={handleCheckboxChange}
                      />
                      <span className="bottomdiv-week2">
                        Returning to seller
                      </span>
                    </label>
                  </div>
                  <div className="div-weekdropdown2">
                    <label>
                      <input
                        type="checkbox"
                        value="2 weeks"
                        checked={selectedValue === "2 weeks"}
                        onChange={handleCheckboxChange}
                      />
                      <span className="bottomdiv-week2">Delivery failed</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="all-timeorderthird">
              <div className="all-timesorderthird" onClick={handleClick3}>
                <span className="alltime-text">Order Tag</span>
                <Icon
                  icon="ep:arrow-down"
                  color="rgba(0, 0, 0, 0.71)"
                  width="12"
                  height="12"
                />
              </div>
              {isBottomDivOpe3 && (
                <div className="bottom-divordera">
                  <div className="div-weekdropdown3">
                    <span className="bottomdiv-week3">Pre Order</span>
                  </div>
                  <div className="div-weekdropdown3">
                    <span className="bottomdiv-week3">48hr Dispatch</span>
                  </div>
                </div>
              )}
            </div>
            <div className="all-timeorderthird">
              <div className="all-timesorderthird" onClick={handleClick4}>
                <span className="alltime-text">Flag</span>
                <Icon
                  icon="ep:arrow-down"
                  color="rgba(0, 0, 0, 0.71)"
                  width="12"
                  height="12"
                />
              </div>
              {isBottomDivOpe4 && (
                <div className="bottom-divordera">
                  <div className="div-weekdropdown3">
                    <span className="bottomdiv-week3">1 week</span>
                  </div>
                  <div className="div-weekdropdown3">
                    <span className="bottomdiv-week3">2 weeks</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="managereturn-lastdivcancel">
          <div className="managecancel-lastdivprimary">
            <div className="radiobtn-contentcancel">
              <div className="radiobtn-left">
                <span className="Shipping-provider">0 orders</span>
              </div>
              <div className="radiobtnright-cancel  ">
                <div className="Express-standard ">
                  <div className="switch-fieldscancel">
                    <input
                      type="radio"
                      id="process-a"
                      name="switch-two"
                      value="process-a"
                      checked={selectedOptnsorder === "process-a"}
                      onChange={handleOptChangeorder}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="process-a"
                      style={{
                        backgroundColor:
                          selectedOptnsorder === "process-a" ? "#ff7d05" : "",
                        border:
                          selectedOptnsorder === "process-a"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptnsorder === "process-a"
                            ? "white"
                            : "black",
                      }}
                    >
                      Export orders
                    </label>
                    <input
                      type="radio"
                      id="process-b"
                      name="switch-two"
                      value="process-b"
                      checked={selectedOptnsorder === "process-b"}
                      onChange={handleOptChangeorder}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="process-b"
                      style={{
                        backgroundColor:
                          selectedOptnsorder === "process-b" ? "#ff7d05" : "",
                        border:
                          selectedOptnsorder === "process-b"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptnsorder === "process-b"
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
            <div className="m-returnlastdivcancel">
              <div className="order-rightcancel">
                <div className="order-type">
                  <div className="ordertest">
                    <div
                      className="order-overlay"
                      onClick={handleOverlayClick1}
                    >
                      <span className="Package-type">
                        Time Paid (oldest first)
                      </span>
                      <div className="arrow-icon">
                        <Icon
                          icon="ep:arrow-down-bold"
                          color="black"
                          width="16"
                          height="16"
                        />
                      </div>
                    </div>
                    {isOpen1 && (
                      <div className="orderdiv-section">
                        <div className="bd-sess" onClick={closeoverlay2}>
                          Time Paid (oldest first)
                        </div>
                        <div className="bd-sess" onClick={closeoverlay2}>
                          Time Paid (newest first)
                        </div>
                      </div>
                    )}
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
      </div>
    </>
  );
};

export default Complete;
