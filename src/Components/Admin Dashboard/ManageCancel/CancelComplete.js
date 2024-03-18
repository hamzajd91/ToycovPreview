import React, { useState } from "react";
import { Icon } from "@iconify/react";
import GIF from "./gifimage.gif";
import "./ManageCancel.css";

const CancelComplete = () => {
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
      {" "}
      <div className="managecancel-homesection">
        <div className="managecancel-primarysection">
          <div className="manage-radiobtn">
            <div className="platform-invented">
              <div className="radiobtncontent-cancel">
                <div className="managecancel-left">
                  {/* <span className="Platform-intervened">Urgent</span> */}
                </div>
                <div className="radiobtnright-cancel ">
                  <div className="Express-standard ">
                    <div className="switch-fieldscancel">
                      <input
                        type="radio"
                        id="a"
                        name="switch-two"
                        value="a"
                        checked={selectOpt === "a"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="a"
                        style={{
                          backgroundColor: selectOpt === "a" ? "#ff7d05" : "",
                          border: selectOpt === "a" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "a" ? "white" : "black",
                        }}
                      >
                        To ship within 24 hours
                      </label>
                      <input
                        type="radio"
                        id="b"
                        name="switch-two"
                        value="b"
                        checked={selectOpt === "b"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="b"
                        style={{
                          backgroundColor: selectOpt === "b" ? "#ff7d05" : "",
                          border: selectOpt === "b" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "b" ? "white" : "black",
                        }}
                      >
                        To be cancelled within 24 hours
                      </label>
                      <input
                        type="radio"
                        id="c"
                        name="switch-two"
                        value="c"
                        checked={selectOpt === "c"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="c"
                        style={{
                          backgroundColor: selectOpt === "c" ? "#ff7d05" : "",
                          border: selectOpt === "c" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "c" ? "white" : "black",
                        }}
                      >
                        Shipment overdue
                      </label>
                      <input
                        type="radio"
                        id="d"
                        name="switch-two"
                        value="d"
                        checked={selectOpt === "d"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="d"
                        style={{
                          backgroundColor: selectOpt === "d" ? "#ff7d05" : "",
                          border: selectOpt === "d" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "d" ? "white" : "black",
                        }}
                      >
                        Collection overdue
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="radiobtn-left">
              <span className="Shipping-provider">0 orders</span>
            </div>
            <div className="radiobtnright-cancel  ">
              <div className="Express-standard ">
                <div className="switch-fieldscancel">
                  <input
                    type="radio"
                    id="complete-e"
                    name="switch-two"
                    value="complete-e"
                    checked={selectedOptnsorder === "complete-e"}
                    onChange={handleOptChangeorder}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="complete-e"
                    style={{
                      backgroundColor:
                        selectedOptnsorder === "complete-e" ? "#ff7d05" : "",
                      border:
                        selectedOptnsorder === "complete-e"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnsorder === "complete-e" ? "white" : "black",
                    }}
                  >
                    Export orders
                  </label>
                  <input
                    type="radio"
                    id="complete-f"
                    name="switch-two"
                    value="complete-f"
                    checked={selectedOptnsorder === "complete-f"}
                    onChange={handleOptChangeorder}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="complete-f"
                    style={{
                      backgroundColor:
                        selectedOptnsorder === "complete-f" ? "#ff7d05" : "",
                      border:
                        selectedOptnsorder === "complete-f"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnsorder === "complete-f" ? "white" : "black",
                    }}
                  >
                    Export History
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="m-returnlastdivcancel">
            <div className="order-rightcancel">
              <div className="order-type">
                <div className="ordertest">
                  <div className="order-overlay" onClick={handleOverlayClick1}>
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
          </div> */}
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

export default CancelComplete;
