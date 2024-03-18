import "./Campaigns.scss";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import New from "./new/new";
function Campaigns(props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const view = () => {
    props.abc("tab5-ba");
  };

  return (
    <div className="container">
      <section className="Campaigns">
        <h2 className="heading">Campaigns</h2>
        <div className="top">
          <div className="product-shop">
            <img src="/assets/images/icons/shop.svg" alt="..." />
            <div className="right-content">
              <h3>Product Shop Campaigns</h3>
              <p>Manage saved size chart templates and their linked products</p>
              <button onClick={view}>View Details</button>
            </div>
          </div>
          <div className="short-video">
            <img src="/assets/images/icons/tv.svg" alt="..." />
            <div className="right-content">
              <h3>Short video campaigns</h3>
              <p>Manage saved size chart templates and their linked products</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h2>Recommended</h2>

          <Tabs
            selectedIndex={selectedTabIndex}
            onSelect={(index) => setSelectedTabIndex(index)}
          >
            <TabList className="tab-head">
              <Tab className="tab">New</Tab>
              <Tab className="tab">Invited</Tab>
            </TabList>

            <TabPanel>
              <New />
            </TabPanel>
            <TabPanel>
              <New />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default Campaigns;
