import { useState } from "react";
import "./BatchShippingtab2.css";
import { Icon } from "@iconify/react";

const BatchShippingtab2 = () => {
  // const [selectedOption, setSelectedOption] = useState("yes");
  const [selectedOptiona, setSelectedOptiona] = useState("yes");
  const [selectedOptionb, setSelectedOptionb] = useState("yes");
  const [selectedOptionc, setSelectedOptionc] = useState("yes");
  const [selectedOptiond, setSelectedOptiond] = useState("yes");
  const [selectedOptione, setSelectedOptione] = useState("yes");
  const [isOpen, setIsOpen] = useState(false);
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  const handleOptionChangea = (event) => {
    setSelectedOptiona(event.target.value);
  };

  const handleOptionChangeb = (event) => {
    setSelectedOptionb(event.target.value);
  };
  const handleOptionChangec = (event) => {
    setSelectedOptionc(event.target.value);
  };
  const handleOptionChanged = (event) => {
    setSelectedOptiond(event.target.value);
  };
  const handleOptionChangee = (event) => {
    setSelectedOptione(event.target.value);
  };
  const handleOverlayClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="batchshipping-tab2">
        <div className="batchshipping-tabcontent2">
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
                      id="radio-twone"
                      name="switch-two"
                      value="radio-twone"
                      checked={selectedOptiona === "radio-twone"}
                      onChange={handleOptionChangea}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twone"
                      style={{
                        backgroundColor:
                          selectedOptiona === "radio-twone" ? "#ff7d05" : "",
                        border:
                          selectedOptiona === "radio-twone"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptiona === "radio-twone" ? "white" : "black",
                      }}
                    >
                      J&T Express Standard Shipping
                    </label>
                    <input
                      type="radio"
                      id="radio-twtwo"
                      name="switch-two"
                      value="radio-twtwo"
                      checked={selectedOptiona === "radio-twtwo"}
                      onChange={handleOptionChangea}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twtwo"
                      style={{
                        backgroundColor:
                          selectedOptiona === "radio-twtwo" ? "#ff7d05" : "",
                        border:
                          selectedOptiona === "radio-twtwo"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptiona === "radio-twtwo" ? "white" : "black",
                      }}
                    >
                      Malaysia standard shipping
                    </label>
                    <input
                      type="radio"
                      id="radio-twthree"
                      name="switch-two"
                      value="radio-twthree"
                      checked={selectedOptiona === "radio-twthree"}
                      onChange={handleOptionChangea}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twthree"
                      style={{
                        backgroundColor:
                          selectedOptiona === "radio-twthree" ? "#ff7d05" : "",
                        border:
                          selectedOptiona === "radio-twthree"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptiona === "radio-twthree"
                            ? "white"
                            : "black",
                      }}
                    >
                      Best express standard shipping
                    </label>
                    <input
                      type="radio"
                      id="radio-twfour"
                      name="switch-two"
                      value="radio-twfour"
                      checked={selectedOptiona === "radio-twfour"}
                      onChange={handleOptionChangea}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twfour"
                      style={{
                        backgroundColor:
                          selectedOptiona === "radio-twfour" ? "#ff7d05" : "",
                        border:
                          selectedOptiona === "radio-twfour"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptiona === "radio-twfour"
                            ? "white"
                            : "black",
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
                <span className="Shipping-provider">Package status</span>
              </div>
              <div className="radiobtn-right ">
                <div className="Express-standard ">
                  <div className="switch-field">
                    <input
                      type="radio"
                      id="radio-twfive"
                      name="switch-two"
                      value="radio-twfive"
                      checked={selectedOptionb === "radio-twfive"}
                      onChange={handleOptionChangeb}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twfive"
                      style={{
                        backgroundColor:
                          selectedOptionb === "radio-twfive" ? "#ff7d05" : "",
                        border:
                          selectedOptionb === "radio-twfive"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptionb === "radio-twfive"
                            ? "white"
                            : "black",
                      }}
                    >
                      Awaiting shipment
                    </label>
                    <input
                      type="radio"
                      id="radio-twsix"
                      name="switch-two"
                      value="radio-twsix"
                      checked={selectedOptionb === "radio-twsix"}
                      onChange={handleOptionChangeb}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twsix"
                      style={{
                        backgroundColor:
                          selectedOptionb === "radio-twsix" ? "#ff7d05" : "",
                        border:
                          selectedOptionb === "radio-twsix"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptionb === "radio-twsix" ? "white" : "black",
                      }}
                    >
                      Awaiting Collection
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="radiobtn-content">
              <div className="radiobtn-left">
                <span className="Shipping-provider">Collection method</span>
              </div>
              <div className="radiobtn-right ">
                <div className="Express-standard ">
                  <div className="switch-field">
                    <input
                      type="radio"
                      id="radio-twseven"
                      name="switch-two"
                      value="radio-twseven"
                      checked={selectedOptionc === "radio-twseven"}
                      onChange={handleOptionChangec}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twseven"
                      style={{
                        backgroundColor:
                          selectedOptionc === "radio-twseven" ? "#ff7d05" : "",
                        border:
                          selectedOptionc === "radio-twseven"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptionc === "radio-twseven"
                            ? "white"
                            : "black",
                      }}
                    >
                      Pick-up
                    </label>
                    <input
                      type="radio"
                      id="radio-tweight"
                      name="switch-two"
                      value="radio-tweight"
                      checked={selectedOptionc === "radio-tweight"}
                      onChange={handleOptionChangec}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-tweight"
                      style={{
                        backgroundColor:
                          selectedOptionc === "radio-tweight" ? "#ff7d05" : "",
                        border:
                          selectedOptionc === "radio-tweight"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptionc === "radio-tweight"
                            ? "white"
                            : "black",
                      }}
                    >
                      Drop-off
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
                      id="radio-twnine"
                      name="switch-two"
                      value="radio-twnine"
                      checked={selectedOptiond === "radio-twnine"}
                      onChange={handleOptionChanged}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twnine"
                      style={{
                        backgroundColor:
                          selectedOptiond === "radio-twnine" ? "#ff7d05" : "",
                        border:
                          selectedOptiond === "radio-twnine"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptiond === "radio-twnine"
                            ? "white"
                            : "black",
                      }}
                    >
                      To ship within 24 hours
                    </label>
                    <input
                      type="radio"
                      id="radio-twten"
                      name="switch-two"
                      value="radio-twten"
                      checked={selectedOptiond === "radio-twten"}
                      onChange={handleOptionChanged}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-twten"
                      style={{
                        backgroundColor:
                          selectedOptiond === "radio-twten" ? "#ff7d05" : "",
                        border:
                          selectedOptiond === "radio-twten"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptiond === "radio-twten" ? "white" : "black",
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
                      id="radio-tweleven"
                      name="switch-two"
                      value="radio-tweleven"
                      checked={selectedOptione === "radio-tweleven"}
                      onChange={handleOptionChangee}
                      className="radio-buttons"
                    />
                    <label
                      htmlFor="radio-tweleven"
                      style={{
                        backgroundColor:
                          selectedOptione === "radio-tweleven" ? "#ff7d05" : "",
                        border:
                          selectedOptione === "radio-tweleven"
                            ? "1px solid #ff7d05"
                            : "",
                        color:
                          selectedOptione === "radio-tweleven"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchShippingtab2;
