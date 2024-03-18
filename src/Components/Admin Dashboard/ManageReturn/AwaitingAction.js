import { useState } from "react";
import "./ManageReturn.css";
import { Icon } from "@iconify/react";

const AwaitingAction = () => {
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
      <div className="managereturn-homesection">
        <div className="managereturn-primarysection">
          <div className="manage-radiobtn">
            <div className="platform-invented">
              <div className="radiobtn-content">
                <div className="managereturn-left">
                  <span className="Platform-intervened">Actions</span>
                </div>
                <div className="radiobtn-right ">
                  <div className="Express-standard ">
                    <div className="switch-field">
                      <input
                        type="radio"
                        id="return"
                        name="switch-two"
                        value="return"
                        checked={selectOpt === "return"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="return"
                        style={{
                          backgroundColor:
                            selectOpt === "return" ? "#ff7d05" : "",
                          border:
                            selectOpt === "return" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "return" ? "white" : "black",
                        }}
                      >
                        Authorize return
                      </label>
                      <input
                        type="radio"
                        id="refund"
                        name="switch-two"
                        value="refund"
                        checked={selectOpt === "refund"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="refund"
                        style={{
                          backgroundColor:
                            selectOpt === "refund" ? "#ff7d05" : "",
                          border:
                            selectOpt === "refund" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "refund" ? "white" : "black",
                        }}
                      >
                        Authorize refund
                      </label>
                      <input
                        type="radio"
                        id="evidence"
                        name="switch-two"
                        value="evidence"
                        checked={selectOpt === "evidence"}
                        onChange={OptChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="evidence"
                        style={{
                          backgroundColor:
                            selectOpt === "evidence" ? "#ff7d05" : "",
                          border:
                            selectOpt === "evidence" ? "1px solid #ff7d05" : "",
                          color: selectOpt === "evidence" ? "white" : "black",
                        }}
                      >
                        Upload evidence
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="radiobtn-content">
                <div className="managereturn-left">
                  <span className="Platform-intervened">Urgent</span>
                </div>
                <div className="radiobtn-right ">
                  <div className="Express-standard ">
                    <div className="switch-field">
                      <input
                        type="radio"
                        id="ship"
                        name="switch-two"
                        value="ship"
                        checked={selectOptship === "ship"}
                        onChange={shipChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="ship"
                        style={{
                          backgroundColor:
                            selectOptship === "ship" ? "#ff7d05" : "",
                          border:
                            selectOptship === "ship" ? "1px solid #ff7d05" : "",
                          color: selectOptship === "ship" ? "white" : "black",
                        }}
                      >
                        To ship within 24 hours
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="orderid-search">
            <div className="orderid-head">
              <select value={selectedOptionid} onChange={handleSelectChangeid}>
                <option value="">Order ID</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <div className="search-div">
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
            <div className="all-time">
              <div className="all-times" onClick={handleAllTimeClick}>
                <span className="alltime-text">All Time</span>
              </div>
              {isBottomDivOpen && (
                <div className="bottom-dives">
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
      <div className="managereturn-lastdiv">
        <div className="managereturn-lastdivprimary">
          <div className="radiobtn-content">
            <div className="radiobtn-left">
              <span className="Shipping-provider">0 orders</span>
            </div>
            <div className="radiobtn-right ">
              <div className="Express-standard ">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="export-order"
                    name="switch-two"
                    value="export-order"
                    checked={selectedOptnsorder === "export-order"}
                    onChange={handleOptChangeorder}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="export-order"
                    style={{
                      backgroundColor:
                        selectedOptnsorder === "export-order" ? "#ff7d05" : "",
                      border:
                        selectedOptnsorder === "export-order"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnsorder === "export-order"
                          ? "white"
                          : "black",
                    }}
                  >
                    Export orders
                  </label>
                  <input
                    type="radio"
                    id="export-history"
                    name="switch-two"
                    value="export-history"
                    checked={selectedOptnsorder === "export-history"}
                    onChange={handleOptChangeorder}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="export-history"
                    style={{
                      backgroundColor:
                        selectedOptnsorder === "export-history"
                          ? "#ff7d05"
                          : "",
                      border:
                        selectedOptnsorder === "export-history"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnsorder === "export-history"
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
          <div className="m-returnlastdiv">
            <div className="order-right">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AwaitingAction;
