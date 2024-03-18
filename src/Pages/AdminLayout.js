import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdminHeading, SubHeading5 } from "../Reuseable Components/Headings";
import { Admin_s, Text_s_s } from "../Reuseable Components/Typography";
import ManageProducts from "../Components/Admin Dashboard/Manage Products/ManageProducts";
import AdminHome from "../Components/Admin Dashboard/HomePage/AdminHome";
import AdminAccount from "../Components/Admin Dashboard/Account/AdminAccount";
import ProductBundles from "../Components/Admin Dashboard/Product Bundles/ProductBundles";
import ProductOptimizer from "../Components/Admin Dashboard/productOptimizer/productOptimizer";
import Batchtool from "../Components/Admin Dashboard/batch tool/batchtool";
import NewProduct from "../Components/Admin Dashboard/NewProduct/NewProduct";
import Managestock from "../Components/Admin Dashboard/manage stock/managestock";
import ProductRating from "../Components/Admin Dashboard/ProductRating/ProductRating";
import BatchShipping from "../Components/Admin Dashboard/BatchShipping/BatchShipping";
import ManageReturn from "../Components/Admin Dashboard/ManageReturn/ManageReturn";
import ManageCancel from "../Components/Admin Dashboard/ManageCancel/ManageCancel";
import Manageorders from "../Components/Admin Dashboard/manage orders/manageorders";
import ShippingOption from "../Components/Admin Dashboard/Shipping Options/ShippingOption";
import All from "../Components/Admin Dashboard/manage orders/all/all";
import Campaigns from "../Components/Admin Dashboard/Campaigns/Campaigns/Campaigns";
import Promotionaltools from "../Components/Admin Dashboard/promotional tools/promotional tools/promotionaltools";
import Psmain from "../Components/Admin Dashboard/ps main/psmain";
import Pscampaign from "../Components/Admin Dashboard/promotional tools/promotional tools/ps campaign/pscampaign";
import Productdiscount from "../Components/Admin Dashboard/product discount/productdiscount";
import Createpromotion from "../Components/Admin Dashboard/promotional tools/promotional tools/create new promotion/createpromotion";
import EditProduct from "../Components/Admin Dashboard/batch tool/EditProduct";
import ManageSize from "../Components/Admin Dashboard/batch tool/ManageSize";
import PublishProduct from "../Components/Admin Dashboard/batch tool/PublishProduct";
import EditImage from "../Components/Admin Dashboard/batch tool/EditImage";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [mobileWidth, setMobileWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  let arr = [];

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
    <div className="admin ">
      <div className="container">
        <section className="AdminDashboard ">
          <div className="menuDiv">
            <IconButton onClick={handleDrawer}>
              <Icon
                className="menuIcon"
                icon="mingcute:menu-fill"
                color="black"
                width="20"
                height="20"
              />
            </IconButton>
          </div>

          <div className={isVisible ? "left trans-0" : "left trans-100"}>
            <div>
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
                className={`${
                  activeTab === "tab1"
                    ? "tab flex-centered  activetab"
                    : "tab flex-centered"
                }`}
                onClick={() => handleTabChange("tab1")}
                style={{ minHeight: "40px" }}
              >
                <SubHeading5>
                  <img
                    src="..\assets\images\Admin\Dashboard\homeicon.png"
                    className="producticons"
                  />
                  Homepage
                </SubHeading5>
              </li>

              <li style={{ minHeight: "40px" }}>
                <Accordion className="AdminDashTab">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ minHeight: "40px", paddingLeft: "0px" }}
                  >
                    <SubHeading5
                      className={`${
                        activeTab.includes("tab2")
                          ? "tab  activetab adminProductsTab"
                          : "tab adminProductsTab"
                      }`}
                      style={{ paddingLeft: "0px !important" }}
                    >
                      <img
                        src="..\assets\images\Admin\Dashboard\productsicon.png"
                        className="producticons"
                      />
                      Products
                    </SubHeading5>
                  </AccordionSummary>
                  <AccordionDetails className="p-1 px-4">
                    <Admin_s
                      onClick={() => handleTabChange("tab2-a")}
                      className={`${
                        activeTab === "tab2-a" ? "tab activetab" : "tab"
                      }`}
                    >
                      Manage products
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab2-b")}
                      className={`${
                        activeTab === "tab2-b" ? "tab activetab" : "tab"
                      }`}
                    >
                      Product bundles
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab2-c")}
                      className={`${
                        activeTab === "tab2-c" ? "tab activetab" : "tab"
                      }`}
                    >
                      Product optimizer
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab2-d")}
                      className={`${
                        activeTab === "tab2-d" ? "tab activetab" : "tab"
                      }`}
                    >
                      Add new Product
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab2-e")}
                      className={`${
                        activeTab === "tab2-e" ? "tab activetab" : "tab"
                      }`}
                    >
                      Batch Tool
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab2-f")}
                      className={`${
                        activeTab === "tab2-f" ? "tab activetab" : "tab"
                      }`}
                    >
                      Manage Stock
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab2-g")}
                      className={`${
                        activeTab === "tab2-g" ? "tab activetab" : "tab"
                      }`}
                    >
                      Product Rating
                    </Admin_s>
                  </AccordionDetails>
                </Accordion>
              </li>

              <li style={{ minHeight: "40px" }}>
                <Accordion className="AdminDashTab">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ minHeight: "40px", paddingLeft: "0px" }}
                  >
                    <SubHeading5
                      className={`${
                        activeTab.includes("tab3")
                          ? "tab  activetab adminProductsTab"
                          : "tab adminProductsTab"
                      }`}
                      style={{ paddingLeft: "0px !important" }}
                    >
                      <img
                        src="..\assets\images\Admin\Dashboard\ordersicon.png"
                        className="producticons"
                      />
                      Orders
                    </SubHeading5>
                  </AccordionSummary>
                  <AccordionDetails className="p-1 px-4">
                    <Admin_s
                      onClick={() => handleTabChange("tab3-a")}
                      className={`${
                        activeTab === "tab3-a" ? "tab activetab" : "tab"
                      }`}
                    >
                      Manage Orders
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab3-b")}
                      className={`${
                        activeTab === "tab3-b" ? "tab activetab" : "tab"
                      }`}
                    >
                      Manage Cancellations
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab3-c")}
                      className={`${
                        activeTab === "tab3-c" ? "tab activetab" : "tab"
                      }`}
                    >
                      Manage Returns
                    </Admin_s>
                  </AccordionDetails>
                </Accordion>
              </li>

              <li style={{ minHeight: "40px" }}>
                <Accordion className="AdminDashTab">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ minHeight: "40px", paddingLeft: "0px" }}
                  >
                    <SubHeading5
                      className={`${
                        activeTab.includes("tab4")
                          ? "tab  activetab adminProductsTab"
                          : "tab adminProductsTab"
                      }`}
                      style={{ paddingLeft: "0px !important" }}
                    >
                      <img
                        src="..\assets\images\Admin\Dashboard\shippingicon.png"
                        className="producticons"
                      />
                      Shipping
                    </SubHeading5>
                  </AccordionSummary>
                  <AccordionDetails className="p-1 px-4">
                    <Admin_s
                      onClick={() => handleTabChange("tab4-a")}
                      className={`${
                        activeTab === "tab4-a" ? "tab activetab" : "tab"
                      }`}
                    >
                      Batch Shipping
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab4-b")}
                      className={`${
                        activeTab === "tab4-b" ? "tab activetab" : "tab"
                      }`}
                    >
                      Shipping Options
                    </Admin_s>
                  </AccordionDetails>
                </Accordion>
              </li>

              <li style={{ minHeight: "40px" }}>
                <Accordion className="AdminDashTab">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ minHeight: "40px", paddingLeft: "0px" }}
                  >
                    <SubHeading5
                      className={`${
                        activeTab.includes("tab5")
                          ? "tab  activetab adminProductsTab"
                          : "tab adminProductsTab"
                      }`}
                      style={{ paddingLeft: "0px !important" }}
                    >
                      <img
                        src="..\assets\images\Admin\Dashboard\promotionsicon.png"
                        className="producticons"
                      />
                      Promotions
                    </SubHeading5>
                  </AccordionSummary>
                  <AccordionDetails className="p-1 px-4">
                    <Admin_s
                      onClick={() => handleTabChange("tab5-a")}
                      className={`${
                        activeTab === "tab5-a" ? "tab activetab" : "tab"
                      }`}
                    >
                      Campaigns
                    </Admin_s>
                    <Admin_s
                      onClick={() => handleTabChange("tab5-b")}
                      className={`${
                        activeTab === "tab5-b" ? "tab activetab" : "tab"
                      }`}
                    >
                      Promotional Tools
                    </Admin_s>
                  </AccordionDetails>
                </Accordion>
              </li>

              <li
                className={`${
                  activeTab === "tab6"
                    ? "tab flex-centered  activetab"
                    : "tab flex-centered"
                }`}
                onClick={() => handleTabChange("tab6")}
                style={{ minHeight: "40px" }}
              >
                <SubHeading5>
                  <img
                    src="..\assets\images\Admin\Dashboard\accounticon.png"
                    className="producticons"
                  />
                  My Account
                </SubHeading5>
              </li>
            </ul>
          </div>

          <div className="right">
            {activeTab === "tab1" && <AdminHome />} {/* homepage */}
            {activeTab === "tab2-a" && (
              <ManageProducts abc={setActiveTab} />
            )}{" "}
            {/* products > Manage products */}
            {activeTab === "tab2-b" && <ProductBundles />}{" "}
            {/* products >  Product bundles*/}
            {activeTab === "tab2-c" && <ProductOptimizer />}{" "}
            {/* products > Product optimizer */}
            {activeTab === "tab2-d" && <NewProduct />}{" "}
            {/* products > Add new Product */}
            {activeTab === "tab2-e" && <Batchtool />}{" "}
            {/* products >  Batch Tool */}
            {activeTab === "tab2-ea" && (
              <PublishProduct abc={setActiveTab} />
            )}{" "}
            {/* products >  Batch Tool >Edit Product */}
            {activeTab === "tab2-eb" && <EditProduct abc={setActiveTab} />}
            {/* products >  Batch Tool >Edit Product */}
            {activeTab === "tab2-ec" && <EditImage abc={setActiveTab} />}{" "}
            {/* products >  Batch Tool >ManageSize */}
            {activeTab === "tab2-ed" && <ManageSize abc={setActiveTab} />}{" "}
            {/* products >  Batch Tool >ManageSize */}
            {activeTab === "tab2-f" && <Managestock />}{" "}
            {/* products > Manage Stock */}
            {activeTab === "tab2-g" && <ProductRating />}{" "}
            {/* products > Product Rating */}
            {activeTab === "tab3-a" && <Manageorders />} {/* Orders > Orders */}
            {activeTab === "tab3-b" && <ManageCancel />}
            {/* Orders > Cancellations */}
            {activeTab === "tab3-c" && <ManageReturn />}{" "}
            {/* Orders > Returns */}
            {activeTab === "tab4-a" && <BatchShipping />}
            {/* Shipping > Batch Shipping */}
            {activeTab === "tab4-b" && <ShippingOption />}{" "}
            {/* Shipping > Shipping Options */}
            {activeTab === "tab5-a" && <Campaigns abc={setActiveTab} />}{" "}
            {/* Promotions > Campaigns */}
            {activeTab === "tab5-b" && (
              <Promotionaltools abc={setActiveTab} />
            )}{" "}
            {/* Promotions > Promotional Tools */}
            {activeTab === "tab5-ba" && <Psmain abc={setActiveTab} />}
            {/* Promotions > Promotional Tools >Psmain */}
            {activeTab === "tab5-bb" && <Pscampaign />}
            {/* Promotions > Promotional Tools >Pscampaign */}
            {activeTab === "tab5-bc" && <Productdiscount />}
            {/* Promotions > Promotional Tools >Productdiscount */}
            {activeTab === "tab5-bd" && <Createpromotion abc={setActiveTab} />}
            {/* Promotions > Promotional Tools >Createpromotion */}
            {activeTab === "tab6" && <AdminAccount />} {/* account */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminLayout;
