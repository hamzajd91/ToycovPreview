import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./managestock.scss";
import Stockdashboard from "./stock dashboard/stockdashboard";
import Stockalert from "./stock alert/stockalert";
function Managestock() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <div className="container">
      <section className="manage-stock">
        <h2>Manage Stock</h2>
        <Tabs
          selectedIndex={selectedTabIndex}
          onSelect={(index) => setSelectedTabIndex(index)}
        >
          <TabList className="tab-head">
            <Tab className="tab">Stock dashboard</Tab>
            <Tab className="tab">Stock Alert</Tab>
          </TabList>

          <TabPanel>
            <Stockdashboard />
          </TabPanel>
          <TabPanel>
            <Stockalert />
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
}

export default Managestock;
