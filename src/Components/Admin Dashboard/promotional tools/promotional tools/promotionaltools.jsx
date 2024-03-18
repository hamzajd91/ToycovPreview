import { useState } from "react";
import "./promotionaltools.scss";
function Promotionaltools(props) {
  const [selectOptship, setSelectshipOpt] = useState("yes");
  const shipChange = (event) => {
    setSelectshipOpt(event.target.value);
  };
  const mypromot = () => {
    props.abc("tab5-bc");
  };
  const creat = () => {
    props.abc("tab5-bd");
  };

  return (
    <section className="Sales-promotion">
      <h2 className="heading">Sales Promotions</h2>
      <div className="sales-top">
        <div className="head-section">
          <h3>Sales Promotions Data</h3>
          <div className="top-right">
            <input
              type="radio"
              id="ship"
              name="switch-two"
              value="ship"
              checked={selectOptship === "ship"}
              onChange={shipChange}
              className="radio-buttons"
              style={{ display: "none" }}
            />
            <label
              htmlFor="ship"
              style={{
                backgroundColor: selectOptship === "ship" ? "white" : "white",
                border: selectOptship === "ship" ? " 0.75px solid #FF7D05" : "",
                color: selectOptship === "ship" ? "#FF7D05" : "#494949",
              }}
            >
              Last 7 Days
            </label>

            <input
              type="radio"
              id="s"
              name="s"
              value="s"
              checked={selectOptship === "s"}
              onChange={shipChange}
              className="radio-buttons"
              style={{ display: "none" }}
            />
            <label
              htmlFor="s"
              style={{
                backgroundColor: selectOptship === "s" ? "white" : "white",
                border: selectOptship === "s" ? " 0.75px solid #FF7D05" : "",
                color: selectOptship === "s" ? "#FF7D05" : "#494949",
              }}
            >
              Last 28 Days
            </label>

            <input
              type="radio"
              id="day"
              name="switch-two"
              value="day"
              checked={selectOptship === "day"}
              onChange={shipChange}
              className="radio-buttons"
              style={{ display: "none" }}
            />
            <label
              htmlFor="day"
              style={{
                backgroundColor: selectOptship === "day" ? "white" : "white",
                border: selectOptship === "day" ? " 0.75px solid #FF7D05" : "",
                color: selectOptship === "day" ? "#FF7D05" : "#494949",
              }}
            >
              Day
            </label>

            <input
              type="radio"
              id="week"
              name="week"
              value="week"
              checked={selectOptship === "week"}
              onChange={shipChange}
              className="radio-buttons"
              style={{ display: "none" }}
            />
            <label
              htmlFor="week"
              style={{
                backgroundColor: selectOptship === "week" ? "white" : "white",
                border: selectOptship === "week" ? " 0.75px solid #FF7D05" : "",
                color: selectOptship === "week" ? "#FF7D05" : "#494949",
              }}
            >
              Week
            </label>

            <input
              type="radio"
              id="month"
              name="month"
              value="month"
              checked={selectOptship === "month"}
              onChange={shipChange}
              className="radio-buttons"
              style={{ display: "none" }}
            />
            <label
              htmlFor="month"
              style={{
                backgroundColor: selectOptship === "month" ? "white" : "white",
                border:
                  selectOptship === "month" ? " 0.75px solid #FF7D05" : "",
                color: selectOptship === "month" ? "#FF7D05" : "#494949",
              }}
            >
              Month
            </label>
          </div>
        </div>
        <div className="div-section">
          <div className="tabs">
            <h4>Revenue</h4>
            <span>--</span>
            <p>Last 7 days</p>
          </div>
          <div className="tabs">
            <h4>Orders</h4>
            <span>--</span>
            <p>Last 7 days</p>
          </div>
          <div className=" tabs">
            <h4>Buyers</h4>
            <span>--</span>
            <p>Last 7 days</p>
          </div>
        </div>
      </div>
      <div className="sales-bottom">
        <h2>Promotional Tools</h2>
        <div className="content">
          <div className="ist-content">
            <img src="/assets/images/campaign/megasale.png" alt="..." />
            <div className="right-content">
              <h3>Product Discount</h3>
              <p>Set daily discounts to generate interest and boost sales</p>
              <div className="btn-div">
                <button className="ist-btn" onClick={mypromot}>
                  My Promotions
                </button>
                <button className="second-btn" onClick={creat}>
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="second-content">
            <img src="/assets/images/campaign/megasale.png" alt="..." />
            <div className="right-content">
              <h3>Product Discount</h3>
              <p>Set daily discounts to generate interest and boost sales</p>
              <div className="btn-div">
                <button className="ist-btn" onClick={mypromot}>
                  My Promotions
                </button>
                <button className="second-btn" onClick={creat}>
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="third-content">
            <img src="/assets/images/campaign/megasale.png" alt="..." />
            <div className="right-content">
              <h3>Product Discount</h3>
              <p>Set daily discounts to generate interest and boost sales</p>
              <div className="btn-div">
                <button className="ist-btn" onClick={mypromot}>
                  My Promotions
                </button>
                <button className="second-btn" onClick={creat}>
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="forth-content">
            <img src="/assets/images/campaign/megasale.png" alt="..." />
            <div className="right-content">
              <h3>Product Discount</h3>
              <p>Set daily discounts to generate interest and boost sales</p>
              <div className="btn-div">
                <button className="ist-btn" onClick={mypromot}>
                  My Promotions
                </button>
                <button className="second-btn" onClick={creat}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotionaltools;
