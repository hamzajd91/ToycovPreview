import React from "react";
import "../../../Styles/Header.css";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <div className=" container-space container ">
      <div className="Header-Main flex-center">
        <div className="HeaderSlider">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..\assets\images\Header\headerSlide1.png" />
              </div>
              <div class="carousel-item">
                <img src="..\assets\images\Header\headerSlide2.png" />
              </div>
              <div class="carousel-item">
                <img src="..\assets\images\Header\headerSlide3.png" />
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="headerSubs">
          <img src="..\assets\images\Header\Headersub1.png" />
          <img src="..\assets\images\Header\Headersub2.png" />

        </div>
      </div>
    </div>
  );
};

export default Header;
