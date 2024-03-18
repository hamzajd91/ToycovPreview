import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import Upgrade from "../Components/DashboardComponent/Upgrade/Upgrade";
import Topup from "../Components/DashboardComponent/Topup Credit/Topup";
import Profile from "../Components/DashboardComponent/Profile/Profile";
import Wallet from "../Components/DashboardComponent/Wallet/Wallet";
import Orders from "../Components/DashboardComponent/Orders/Orders";
import Wishlist from "../Components/DashboardComponent/Wishlist/Wishlist";
import Referrals from "../Components/DashboardComponent/Referrals/Referrals";
import ProfileRouting from "../Components/DashboardComponent/Profile Routng/ProfileRouting";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [mobileWidth, setMobileWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  let arr = []

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };




  useEffect(() => {
    const handleResize = () => {
      setMobileWidth(window.innerWidth);
    };

    handleResize(); // Set initial mobileWidth value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(mobileWidth && mobileWidth >= 800);
  }, [mobileWidth]);

  const handleDrawer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="dashboard container container-space ">
      <div className="menuDiv">
        <IconButton onClick={handleDrawer}>
          <Icon
            className="menuIcon"
            icon="mingcute:menu-fill" color="black" width="20" height="20" />
        </IconButton>
      </div>

      <div className={isVisible ? "left trans-0" : "left trans-100"}>
        <div className="headingBack">
          <p className="heading">Dashboard</p>
          <div className="backBtn-div" onClick={handleDrawer}>
            <IconButton>
              <Icon
                icon="formkit:arrowleft"
                color="black"
                width="25"
                height="25"
              />
            </IconButton>

          </div>
        </div>
        <ul className="sidebarPAdding">

          <li
            className={`${activeTab === "tab1" ? "tab subHeading activetab" : "tab subHeading"}`}
            onClick={() => handleTabChange("tab1")}>
            Profile
          </li>

          <li
            className={`${activeTab === "tab2" ? "tab subHeading activetab" : "tab subHeading"}`}
            onClick={() => handleTabChange("tab2")}>
            Orders
          </li>

          <li
            className={`${activeTab === "tab3" ? "tab subHeading activetab" : "tab subHeading"}`}
            onClick={() => handleTabChange("tab3")}>
            My Wallet
          </li>

          <li
            className={`${activeTab === "tab4" ? "tab subHeading activetab" : "tab subHeading"}`}
            onClick={() => handleTabChange("tab4")}>
            Wishlist
          </li>

          <li
            className={`${activeTab === "tab5" ? "tab subHeading activetab" : "tab subHeading"}`}
            onClick={() => handleTabChange("tab5")}>
            My Referrals
          </li>

          <li
            className={`${activeTab === "tab6" ? "tab subHeading activetab" : "tab subHeading"}`}
            onClick={() => handleTabChange("tab6")}>
            <div className="logoutDiv">
              <Icon
                icon="ant-design:logout-outlined"
                color="black"
                width="20"
                height="20"
              />

              <p className="subHeadingLogout">Logout</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="right">

        {activeTab === "tab1" && <ProfileRouting/> }  {/* profile */}
        {activeTab === "tab2" && <Orders />}  {/* orders */}
        {activeTab === "tab3" && <Wallet />}  {/* My wallet */}
        {activeTab === "tab4" && <Wishlist />}  {/* wishlist */}
        {activeTab === "tab5" && <Referrals />}  {/* referrals */}

      </div>
    </section>
  );
};

export default Dashboard;

