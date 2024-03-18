import React from "react";
import "./batchhome.scss";
const BatchHome = (props) => {
  const handleTabChange = (tab) => {
    props.setChange(tab);
  };

  return (
    <div className="container">
      <div className="batchhome-main">
        <h1>Batch Tool</h1>
        <section className="BatchHome">
          <div className="ist" onClick={() => handleTabChange(1)}>
            <img src="/assets/images/icons/bulkpublish.svg" alt="..." />
            <div>
              <h2>Bulk publish products</h2>
              <p>Manage saved size chart templates and their linked products</p>
            </div>
          </div>
          <div className="second" onClick={() => handleTabChange(2)}>
            <img src="/assets/images/icons/bulkedit.svg" alt="..." />
            <div>
              <h2>Bulk edit products</h2>
              <p>Manage saved size chart templates and their linked products</p>
            </div>
          </div>
          <div className="third" onClick={() => handleTabChange(3)}>
            <img src="/assets/images/icons/bulkimg.svg" alt="..." />
            <div>
              <h2>Bulk edit product images</h2>
              <p>Manage saved size chart templates and their linked products</p>
            </div>
          </div>
          <div className="forth" onClick={() => handleTabChange(4)}>
            <img src="/assets/images/icons/bulkmanage.svg" alt="..." />
            <div>
              <h2>Bulk manage size charts</h2>
              <p>Manage saved size chart templates and their linked products</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BatchHome;
