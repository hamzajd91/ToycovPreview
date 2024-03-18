import { useState } from "react";
import "./ManageReturn.css";

const Disputed = () => {
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
              <div className="radiobtn-content">
                <div className="managereturn-left">
                  <span className="Platform-intervened">Dispute Status</span>
                </div>
                <div className="radiobtn-right ">
                  <div className="Express-standard ">
                    <div className="switch-field">
                      <input
                        type="radio"
                        id="Progress"
                        name="switch-two"
                        value="Progress"
                        checked={selectedOpt === "Progress"}
                        onChange={OptionChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="Progress"
                        style={{
                          backgroundColor:
                            selectedOpt === "Progress" ? "#ff7d05" : "",
                          border:
                            selectedOpt === "Progress"
                              ? "1px solid #ff7d05"
                              : "",
                          color: selectedOpt === "Progress" ? "white" : "black",
                        }}
                      >
                        In Progress
                      </label>
                      <input
                        type="radio"
                        id="Completed"
                        name="switch-two"
                        value="Completed"
                        checked={selectedOpt === "Completed"}
                        onChange={OptionChange}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="Completed"
                        style={{
                          backgroundColor:
                            selectedOpt === "Completed" ? "#ff7d05" : "",
                          border:
                            selectedOpt === "Completed"
                              ? "1px solid #ff7d05"
                              : "",
                          color:
                            selectedOpt === "Completed" ? "white" : "black",
                        }}
                      >
                        Completed
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
          <div className="radiobtn-content">
            <div className="radiobtn-left">
              <span className="Shipping-provider">0 orders</span>
            </div>
            <div className="radiobtn-right ">
              <div className="Express-standard ">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="exportorder2"
                    name="switch-two"
                    value="exportorder2"
                    checked={selectedOptns === "exportorder2"}
                    onChange={handleOptChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exportorder2"
                    style={{
                      backgroundColor:
                        selectedOptns === "exportorder2" ? "#ff7d05" : "",
                      border:
                        selectedOptns === "exportorder2"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptns === "exportorder2" ? "white" : "black",
                    }}
                  >
                    Export orders
                  </label>
                  <input
                    type="radio"
                    id="exporthistory2"
                    name="switch-two"
                    value="exporthistory2"
                    checked={selectedOptns === "exporthistory2"}
                    onChange={handleOptChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exporthistory2"
                    style={{
                      backgroundColor:
                        selectedOptns === "exporthistory2" ? "#ff7d05" : "",
                      border:
                        selectedOptns === "exporthistory2"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptns === "exporthistory2" ? "white" : "black",
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

export default Disputed;
