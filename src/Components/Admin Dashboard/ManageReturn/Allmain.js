import { useState } from "react";
import "./ManageReturn.css";

const Allmain = () => {
  const [selectedOpt, setSelectedOpt] = useState("yes");
  const OptionChange = (event) => {
    setSelectedOpt(event.target.value);
  };
  const [selectedOptionid, setSelectedOptionid] = useState("");
  const handleSelectChangeid = (event) => {
    setSelectedOptionid(event.target.value);
  };
  const [isBottomDivOpen, setIsBottomDivOpen] = useState(false);

  const handleAllTimeClick = () => {
    setIsBottomDivOpen(!isBottomDivOpen);
  };
  const [selectedOptns, setSelectedOptns] = useState("yes");
  const handleOptChange = (event) => {
    setSelectedOptns(event.target.value);
  };
  return (
    <>
      <div className="managereturn-homesection">
        <div className="managereturn-primarysection">
          <div className="manage-radiobtn">
            <div className="platform-invented">
              <div className="radiobtn-content pt-2">
                <div className="managereturn-left">
                  <span className="Platform-intervened">
                    Platform intervened
                  </span>
                </div>
                <div className="managereturn-right ">
                  <div className="Express-standard ">
                    <div className="switch-field">
                      <input
                        type="radio"
                        id="manage-return"
                        name="switch-two"
                        value="manage-return"
                        checked={selectedOpt === "manage-return"}
                        onChange={OptionChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="manage-return"
                        className="auto-approved"
                        style={{
                          backgroundColor:
                            selectedOpt === "manage-return" ? "#ff7d05" : "",
                          border:
                            selectedOpt === "manage-return"
                              ? "1px solid #ff7d05"
                              : "",
                          color:
                            selectedOpt === "manage-return" ? "white" : "black",
                        }}
                      >
                        Platform auto-approved
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
            <div className="from-calender">
              <input type="date" className="from-calender" />
            </div>
            <div className="to-calender">
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
          <div className="managereturn-content">
            <div className="managereturn-left">
              <span className="Shipping-provider">0 orders</span>
            </div>
            <div className="managereturn-right ">
              <div className="Express-standard ">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="exportorder"
                    name="switch-two"
                    value="exportorder"
                    checked={selectedOptns === "exportorder"}
                    onChange={handleOptChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exportorder"
                    style={{
                      backgroundColor:
                        selectedOptns === "exportorder" ? "#ff7d05" : "",
                      border:
                        selectedOptns === "exportorder"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptns === "exportorder" ? "white" : "black",
                    }}
                  >
                    Export orders
                  </label>
                  <input
                    type="radio"
                    id="exporthistory"
                    name="switch-two"
                    value="exporthistory"
                    checked={selectedOptns === "exporthistory"}
                    onChange={handleOptChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exporthistory"
                    style={{
                      backgroundColor:
                        selectedOptns === "exporthistory" ? "#ff7d05" : "",
                      border:
                        selectedOptns === "exporthistory"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptns === "exporthistory" ? "white" : "black",
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
    </>
  );
};

export default Allmain;
