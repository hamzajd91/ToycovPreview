import { useState } from "react";
import "./batchShipping.css";
import BatchShippingtab1 from "./BatchShippingtab1";
import BatchShippingtab2 from "./BatchShippingtab2";

const BatchShipping = () => {
  const [Tabactive, setTabActive] = useState(0);
  const TabClick = (index) => {
    setTabActive(index);
  };
  return (
    <>
      <div className="Batchshipping-title">
        <span className="Batch-Shipping">Batch Shipping</span>
      </div>
      <div className="shiping-main">
        <div className="shipping-primary">
          <div className=" shipping-tabscontent">
            <div className="shipping-tabscontainer">
              <div className="shippingtabs mb-2">
                <a
                  className={`tab ${Tabactive === 0 ? "active" : ""} `}
                  onClick={() => TabClick(0)}
                >
                  Arrange Shipping
                </a>
                <a
                  className={`tab ${Tabactive === 1 ? "active" : ""}`}
                  onClick={() => TabClick(1)}
                >
                  Generate Documents
                </a>
              </div>
              <div className="tab-content">
                <div className={`tab-pane ${Tabactive === 0 ? "active" : ""}`}>
                  <BatchShippingtab1 />
                </div>
                <div className={`tab-pane ${Tabactive === 1 ? "active" : ""}`}>
                  <BatchShippingtab2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchShipping;
