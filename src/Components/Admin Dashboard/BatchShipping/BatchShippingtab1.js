import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const BatchShippingtab1 = () => {
  const [selectedOption, setSelectedOption] = useState("yes");
  const [selectedOption1, setSelectedOption1] = useState("yes");
  const [selectedOption2, setSelectedOption2] = useState("yes");
  const packageTypeRef = useRef();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const handleOverlayClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOverlayClick1 = () => {
    setIsOpen1(!isOpen);
  };

  const closeoverlay2 = () => {
    setIsOpen1(false);
  };

  const handleClickOutside = (event) => {
    if (
      packageTypeRef.current &&
      !packageTypeRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="arrangeshipping-container">
        <div className="a-shippingcontent">
          <div className="ashippingcontent-title">
            <span className="Select-Packagestitle">
              Step 1: Select Packages
            </span>
          </div>
          <div className="radiobtn-content">
            <div className="radiobtn-left">
              <span className="Shipping-provider">Shipping provider</span>
            </div>
            <div className="radiobtn-right ">
              <div className="Express-standard ">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="radio-three"
                    name="switch-two"
                    value="yes"
                    checked={selectedOption === "yes"}
                    onChange={handleOptionChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-three"
                    style={{
                      backgroundColor:
                        selectedOption === "yes" ? "#ff7d05" : "",
                      border:
                        selectedOption === "yes" ? "1px solid #ff7d05" : "",
                      color: selectedOption === "yes" ? "white" : "black",
                    }}
                  >
                    J&T Express Standard Shipping
                  </label>
                  <input
                    type="radio"
                    id="radio-four"
                    name="switch-two"
                    value="maybe"
                    checked={selectedOption === "maybe"}
                    onChange={handleOptionChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-four"
                    style={{
                      backgroundColor:
                        selectedOption === "maybe" ? "#ff7d05" : "",
                      border:
                        selectedOption === "maybe" ? "1px solid #ff7d05" : "",
                      color: selectedOption === "maybe" ? "white" : "black",
                    }}
                  >
                    Malaysia standard shipping
                  </label>
                  <input
                    type="radio"
                    id="radio-five"
                    name="switch-two"
                    value="no"
                    checked={selectedOption === "no"}
                    onChange={handleOptionChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-five"
                    style={{
                      backgroundColor: selectedOption === "no" ? "#ff7d05" : "",
                      border:
                        selectedOption === "no" ? "1px solid #ff7d05" : "",
                      color: selectedOption === "no" ? "white" : "black",
                    }}
                  >
                    Best express standard shipping
                  </label>
                  <input
                    type="radio"
                    id="radio-six"
                    name="switch-two"
                    value="last"
                    checked={selectedOption === "last"}
                    onChange={handleOptionChange}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-six"
                    style={{
                      backgroundColor:
                        selectedOption === "last" ? "#ff7d05" : "",
                      border:
                        selectedOption === "last" ? "1px solid #ff7d05" : "",
                      color: selectedOption === "last" ? "white" : "black",
                    }}
                  >
                    Flash express Malaysia standard shipping
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="radiobtn-content">
            <div className="radiobtn-left">
              <span className="Shipping-provider">Urgent</span>
            </div>
            <div className="radiobtn-right ">
              <div className="Express-standard ">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="radio-seven"
                    name="switch-two"
                    value="urgent-a"
                    checked={selectedOption1 === "urgent-a"}
                    onChange={handleOptionChange1}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-seven"
                    style={{
                      backgroundColor:
                        selectedOption1 === "urgent-a" ? "#ff7d05" : "",
                      border:
                        selectedOption1 === "urgent-a"
                          ? "1px solid #ff7d05"
                          : "",
                      color: selectedOption1 === "urgent-a" ? "white" : "black",
                    }}
                  >
                    To ship within 24 hours
                  </label>
                  <input
                    type="radio"
                    id="radio-eight"
                    name="switch-two"
                    value="urgent-b"
                    checked={selectedOption1 === "urgent-b"}
                    onChange={handleOptionChange1}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-eight"
                    style={{
                      backgroundColor:
                        selectedOption1 === "urgent-b" ? "#ff7d05" : "",
                      border:
                        selectedOption1 === "urgent-b"
                          ? "1px solid #ff7d05"
                          : "",
                      color: selectedOption1 === "urgent-b" ? "white" : "black",
                    }}
                  >
                    Shipment overdue
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="radiobtn-content">
            <div className="radiobtn-left">
              <span className="Shipping-provider">Order Exclusion</span>
            </div>
            <div className="radiobtn-right ">
              <div className="Express-standard ">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="radio-nine"
                    name="switch-two"
                    value="order-exclusion"
                    checked={selectedOption2 === "order-exclusion"}
                    onChange={handleOptionChange2}
                    className="radio-buttons"
                  />
                  <label
                    htmlFor="radio-nine"
                    style={{
                      backgroundColor:
                        selectedOption2 === "order-exclusion" ? "#ff7d05" : "",
                      border:
                        selectedOption2 === "order-exclusion"
                          ? "1px solid #ff7d05"
                          : "",
                      color:
                        selectedOption2 === "order-exclusion"
                          ? "white"
                          : "black",
                    }}
                  >
                    Pre-order
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="selectpackage-lastsection">
            <div className="first-selectpackage">
              <div className="selectpackage-input">
                <div className=" selectpack-firstcontent">
                  <div className=" selectpack-searchdiv">
                    <input
                      type="text"
                      placeholder="Enter product name or ID"
                      className="select-p-searchplaceholder"
                    />
                    <div className="selectp-searchicon">
                      <Icon
                        icon="circum:search"
                        color="#969696"
                        width="14"
                        height="14"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="package-type" ref={packageTypeRef}>
              <div className="packtype">
                <div className="packtype-overlay" onClick={handleOverlayClick}>
                  <span className="Package-type">Package type</span>
                  <div className="arrow-icon">
                    <Icon
                      icon="ep:arrow-down-bold"
                      color="black"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
                {isOpen && (
                  <div className="bdiv-section">
                    <div className="bd-sess">1 item in 1 package</div>
                    <div className="bd-sess">Combined Package</div>
                    <div className="bd-sess">Split order package</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="order-section">
          <div className="order-primary">
            <div className="order-left">
              <span o-orders>0 orders</span>
            </div>
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

export default BatchShippingtab1;
