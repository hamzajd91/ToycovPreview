import "./AdminHome.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

const AdminHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const Dropdown = () => {
    setIsOpen(!isOpen);
  };
  const Dropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const Dropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const closeDropdown1 = () => {
    setIsOpen1(false);
  };
  const closeDropdown2 = () => {
    setIsOpen2(false);
  };
  return (
    <>
      <div className="adminHome main-container">
        <div className="left-side">
          <div className="top">
            <div className="dropdown">
              <button className="dropdown-btn" onClick={Dropdown}>
                Missions
                <Icon
                  icon="teenyicons:down-outline"
                  color="black"
                  width="16"
                  height="16"
                  className="dropdown-icon ml-2"
                />
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  <a href="#" onClick={closeDropdown}>
                    Item 1
                  </a>
                  <a href="#" onClick={closeDropdown}>
                    Item 2
                  </a>
                  <a href="#" onClick={closeDropdown}>
                    Item 3
                  </a>
                </div>
              )}
            </div>

            <div className="top-bg">
              <div className="left-top">
                <div className="june">
                  <div className="june-left">
                    {" "}
                    <span className="payday">June payday campaign</span>{" "}
                  </div>
                  <div className="june-right">
                    {" "}
                    <span className="days-left">
                      {" "}
                      <Icon
                        icon="iconamoon:clock-duotone"
                        color="#363636"
                        width="16"
                        height="16"
                        className="mb-1"
                      />{" "}
                      3 Days left
                    </span>{" "}
                  </div>
                </div>
                <p className="june-paragraph ">
                  Complete 1 livestream for 40 minutes or post 2 short videos or
                  create 3 affiliate open plans.
                </p>
                <div className="voucher">
                  <div className="voucher-leftside">
                    {" "}
                    <p className="june-last">
                      {" "}
                      Get RM200 in vouchers{" "}
                      <span className="remaining">
                        Remaining: RM196.87k
                      </span>{" "}
                    </p>{" "}
                  </div>
                  <div className="voucher-rightside">
                    {" "}
                    <button className="start-btn">Start</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-bg">
              <div className="left-top">
                <div className="june">
                  <div className="june-left">
                    {" "}
                    <span className="payday">June payday campaign</span>{" "}
                  </div>
                  <div className="june-right">
                    {" "}
                    <span className="days-left">
                      {" "}
                      <Icon
                        icon="iconamoon:clock-duotone"
                        color="#363636"
                        width="16"
                        height="16"
                        className="mb-1"
                      />{" "}
                      3 Days left
                    </span>{" "}
                  </div>
                </div>
                <p className="june-paragraph ">
                  Complete 1 livestream for 40 minutes or post 2 short videos or
                  create 3 affiliate open plans.
                </p>
                <div className="voucher">
                  <div className="voucher-leftside">
                    {" "}
                    <p className="june-last">
                      {" "}
                      Get RM200 in vouchers{" "}
                      <span className="remaining">
                        Remaining: RM196.87k
                      </span>{" "}
                    </p>{" "}
                  </div>
                  <div className="voucher-rightside">
                    {" "}
                    <button className="start-btn">Start</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={Dropdown1}>
              Campaigns{" "}
              <Icon
                icon="teenyicons:down-outline"
                color="black"
                width="16"
                height="16"
                className="dropdown-icon ml-2"
              />
            </button>
            {isOpen1 && (
              <div className="dropdown-content">
                <a href="#" onClick={closeDropdown1}>
                  Item 1
                </a>
                <a href="#" onClick={closeDropdown1}>
                  Item 2
                </a>
                <a href="#" onClick={closeDropdown1}>
                  Item 3
                </a>
              </div>
            )}
          </div>

          <div className="bottom">
            <div className="border-bottom">
              <div className="bottom-main">
                <div className="bottom-left">
                  <div className="left-img">
                    <img src="..\assets\images\activityicon\Mega.png" />
                  </div>
                  <div className="text-content">
                    <h6 className="crazy-heading mt-3">
                      Crazy Friday sale ending on 30th june
                    </h6>
                    <span className="campain-date">
                      <Icon
                        icon="iconamoon:clock-duotone"
                        color="#363636"
                        width="16"
                        height="16"
                      />
                      Campaign dates: 23/06/2023 08:00 AM - 24/06/2023 08:00 PM
                    </span>{" "}
                    <span className="registeration-date">
                      <Icon
                        icon="iconamoon:clock-duotone"
                        color="#363636"
                        width="16"
                        height="16"
                      />
                      Registration dates ends on: 22/06/2023 12:00 PM
                    </span>
                  </div>
                </div>

                <div className="bottom-right">
                  <button className="Join-Now">Join Now</button>
                </div>
                <hr className="hr" />
              </div>
              <div className="bottom-main">
                <div className="bottom-left">
                  <div className="left-img">
                    <img src="..\assets\images\activityicon\Mega.png" />
                  </div>
                  <div className="text-content">
                    <h6 className="crazy-heading mt-3">
                      Crazy Friday sale ending on 30th june
                    </h6>
                    <span className="campain-date">
                      <Icon
                        icon="iconamoon:clock-duotone"
                        color="#363636"
                        width="16"
                        height="16"
                      />
                      Campaign dates: 23/06/2023 08:00 AM - 24/06/2023 08:00 PM
                    </span>{" "}
                    <span className="registeration-date">
                      <Icon
                        icon="iconamoon:clock-duotone"
                        color="#363636"
                        width="16"
                        height="16"
                      />
                      Registration dates ends on: 22/06/2023 12:00 PM
                    </span>
                  </div>
                </div>
                <div className="bottom-right">
                  <button className="Join-Now">Join Now</button>
                </div>
                <hr className="hr" />
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={Dropdown2}>
              Data Compass{" "}
              <Icon
                icon="teenyicons:down-outline"
                color="black"
                width="16"
                height="16"
                className="dropdown-icon ml-2"
              />
            </button>
            {isOpen2 && (
              <div className="dropdown-content">
                <a href="#" onClick={closeDropdown2}>
                  Item 1
                </a>
                <a href="#" onClick={closeDropdown2}>
                  Item 2
                </a>
                <a href="#" onClick={closeDropdown2}>
                  Item 3
                </a>
              </div>
            )}
          </div>
          <div className="bottom-main">
            <div className="bottom-primary">
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Revenue</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">RM 0</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Orders</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">RM 0</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Buyers</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">RM 0</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Visitors</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">RM 0</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Views</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">721K</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Visits</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">367K</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">New Users</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">1,156</span>
                </div>
              </div>
              <div className="revenue">
                <div className="revenue-top">
                  <span className="revenue-spantop">Active Users</span>
                </div>
                <div className="revenue-bottom">
                  <span className="revenue-spanbottom">239K</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="right-toggle">
            <span className="Notifications">Notifications</span>
          </div>
          <ul className="bullet">
            <li className="first1">You have a Restock list.</li>
            <span className="child1">Just now</span>
            <li className="first1">New user registered</li>
            <span className="child1">59 minutes ago</span>
            <li className="first1">You have a restock list.</li>
            <span className="child1">12 hours ago</span>
            <li className="first1">you have a restock list.</li>
            <span className="child1">Today, 11:59 AM</span>
          </ul>
          <h6 className="Activities">Activities</h6>
          <div className="second-bullet">
            <div className="b1">
              <p>
                <img
                  src="..\assets\images\activityicon\1.png"
                  className="imggg"
                />{" "}
                New user registered <br />{" "}
                <span className="secondline">Just now</span> <br />
                <span className="new-user"> </span>
              </p>
            </div>
            <div className="b1">
              <p>
                <img
                  src="..\assets\images\activityicon\2.png"
                  className="imggg"
                />{" "}
                Annie buy a product <br />{" "}
                <span className="secondline">59 minutes ago</span> <br />
                <span className="new-user"> </span>
              </p>
            </div>
            <div className="b1">
              <p>
                <img
                  src="..\assets\images\activityicon\3.png"
                  className="imggg"
                />{" "}
                New user registered <br />{" "}
                <span className="secondline"> 12 hours ago</span> <br />
                <span className="new-user"></span>
              </p>
            </div>
            <div className="b1">
              <p>
                <img
                  src="..\assets\images\activityicon\4.png"
                  className="imggg"
                />{" "}
                john login to toy’s cove
                <br /> <span className="secondline">Today, 11:59 AM</span>{" "}
                <br /> <span className="new-user"> </span>
              </p>
            </div>
            <div className="b1">
              <p>
                <img
                  src="..\assets\images\activityicon\5.png"
                  className="imggg"
                />{" "}
                New user registered <br />{" "}
                <span className="secondline">Feb 2, 2023</span> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
