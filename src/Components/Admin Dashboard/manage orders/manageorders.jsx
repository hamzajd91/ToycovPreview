import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./manageorders.scss";
import All from "./all/all";
import Unpaid from "./Unpaid/Unpaid";
import Toship from "./Toship/Toship";
import Shipped from "./Shipped/Shipped";
import Complete from "./Complete/Complete";
import Cancelled from "./Cancelled/Cancelled";
function Manageorders() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="container">
      <div className="manage-orders">
        <div className="head">
          <h2>Manage Orders</h2>
          <div className="buttons">
            <button className="btn1">Batch Print</button>
            <button className="btn2">Batch Shipping</button>
          </div>
        </div>
        <div className="tab-section">
          <Tabs
            selectedIndex={selectedTabIndex}
            onSelect={(index) => setSelectedTabIndex(index)}
          >
            <div className="tabs-out">
              <TabList className="tab-head">
                <Tab className="tab">All </Tab>
                <Tab className="tab">Unpaid</Tab>
                <Tab className="tab">To ship </Tab>
                <Tab className="tab">Shipped</Tab>
                <Tab className="tab">Completed </Tab>
                <Tab className="tab">Cancelled</Tab>
              </TabList>
            </div>

            <TabPanel>
              {" "}
              <All />{" "}
            </TabPanel>
            <TabPanel>
              <Unpaid />{" "}
            </TabPanel>
            <TabPanel>
              <Toship />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Shipped />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Complete />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Cancelled />{" "}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Manageorders;
