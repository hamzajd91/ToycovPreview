import { useState } from "react";
import "./ManageReturn.css";

const Completed = () => {
  const [selectedOpta, setSelectedOpta] = useState("yes");
  const OptionChangea = (event) => {
    setSelectedOpta(event.target.value);
  };
  const [selectedOptionid, setSelectedOptionid] = useState("");
  const handleSelectChangeid = (event) => {
    setSelectedOptionid(event.target.value);
  };
  const [isBottomDivOpen, setIsBottomDivOpen] = useState(false);

  const handleAllTimeClick = () => {
    setIsBottomDivOpen(!isBottomDivOpen);
  };
  const [selectedOptnse, setSelectedOptnse] = useState("yes");
  const handleOptChangee = (event) => {
    setSelectedOptnse(event.target.value);
  };
  return (
    <>
      <div className="managereturn-homesection">
        <div className="managereturn-primarysection">
          <div className="manage-radiobtn">
            <div className="platform-invented">
              <div className="radiobtn-content">
                <div className="managereturn-left">
                  <span className="Platform-intervened">Refund status</span>
                </div>
                <div className="radiobtn-right ">
                  <div className="Express-standard ">
                    <div className="switch-field">
                      <input
                        type="radio"
                        id="manage-returna"
                        name="switch-two"
                        value="manage-returna"
                        checked={selectedOpta === "manage-returna"}
                        onChange={OptionChangea}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="manage-returna"
                        style={{
                          backgroundColor:
                            selectedOpta === "manage-returna" ? "#ff7d05" : "",
                          border:
                            selectedOpta === "manage-returna"
                              ? "1px solid #ff7d05"
                              : "",
                          color:
                            selectedOpta === "manage-returna"
                              ? "white"
                              : "black",
                        }}
                      >
                        To settle
                      </label>
                      <input
                        type="radio"
                        id="Settled"
                        name="switch-two"
                        value="Settled"
                        checked={selectedOpta === "Settled"}
                        onChange={OptionChangea}
                        className="radio-buttons"
                      />
                      <label
                        htmlFor="Settled"
                        style={{
                          backgroundColor:
                            selectedOpta === "Settled" ? "#ff7d05" : "",
                          border:
                            selectedOpta === "Settled"
                              ? "1px solid #ff7d05"
                              : "",
                          color: selectedOpta === "Settled" ? "white" : "black",
                        }}
                      >
                        Settled
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
                    id="exportordere"
                    name="switch-two"
                    value="exportordere"
                    checked={selectedOptnse === "exportordere"}
                    onChange={handleOptChangee}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exportordere"
                    style={{
                      backgroundColor:
                        selectedOptnse === "exportordere" ? "#ff7d05" : "",
                      border:
                        selectedOptnse === "exportordere"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnse === "exportordere" ? "white" : "black",
                    }}
                  >
                    Export orders
                  </label>
                  <input
                    type="radio"
                    id="exporthistorye"
                    name="switch-two"
                    value="exporthistorye"
                    checked={selectedOptnse === "exporthistorye"}
                    onChange={handleOptChangee}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="exporthistorye"
                    style={{
                      backgroundColor:
                        selectedOptnse === "exporthistorye" ? "#ff7d05" : "",
                      border:
                        selectedOptnse === "exporthistorye"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOptnse === "exporthistorye" ? "white" : "black",
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

export default Completed;
