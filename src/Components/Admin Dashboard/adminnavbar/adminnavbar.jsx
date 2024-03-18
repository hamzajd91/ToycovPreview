import React, { useState } from "react";
import "./adminnavbar.css";
import { Icon } from "@iconify/react";

function Adminnavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((prevState) => !prevState);
  };

  return (
    <div className="container">
      <section className="adminNavbar">
        <nav className="navbar navbar-expand-lg background-navbarcolor">
          <div className="container-fluid">
            <a className="navbar-brand brand-text" href="#">
              <img src="..\assets\images\activityicon\1.png" className="mr-2" />
              ByeWind
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
            >
              <Icon icon="pepicons-pop:menu" color="black" />
            </button>
            <div
              className={`collapse navbar-collapse ${showNavbar ? "show" : ""}`}
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarul">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <img
                      src="/assets/images/icons/contactLeft.svg"
                      alt="..."
                      className="img-fluid "
                    />
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      src="/assets/images/icons/Favourite.svg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                </li> */}

                <li className="nav-item">
                  <a className="nav-link navbar-dashboardtext " href="#">
                    Dashboard /<span className="Default">Default</span>
                  </a>
                </li>
              </ul>
              <form className="right" role="search">
                <div className="search-div">
                  <a href="#">
                    <img src="/assets/images/icons/search.svg" alt="..." />
                  </a>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <a href="#">
                    <img src="/assets/images/icons/shortcut.svg" alt="..." />
                  </a>
                </div>
                <div className="nav-icons">
                  <a href="#">
                    <img
                      src="/assets/images/icons/Brightness.svg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/images/icons/Clock.svg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/images/icons/Notification.svg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                  {/* <a href="#">
                    <img
                      src="/assets/images/icons/contact-right.svg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a> */}
                </div>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Adminnavbar;
