import React, { useState } from "react";
import { Heading3 } from "../../../Reuseable Components/Headings";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedBrands.css";
const FeaturedBrands = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [position, setPosition] = useState(0);

  const slideLeft = () => {};

  const slideRight = () => {};
  return (
    <div className="featuredBrands container container-space">
      <Heading3 className="headings">FeaturedBrands</Heading3>

      <div className="main">
        <Slider {...settings}>
          {/* Frame 1 */}
          <div className="listDiv">
            <div className="listOne">
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image19.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image18.png"
                  className="image"
                />
              </div>

              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image13.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image15.png"
                  className="image"
                />
              </div>
              <div className="imageDivTwo">
                <img
                  src="..\assets\images\FeaturedBrands\image12.png"
                  className="image"
                />
              </div>
            </div>
            <div className="listTwo">
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image16.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image21.png"
                  className="image"
                />
              </div>

              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image20.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image14.png"
                  className="image"
                />
              </div>
              <div className="imageDivTwo">
                <img
                  src="..\assets\images\FeaturedBrands\image22.png"
                  className="image"
                />
              </div>
            </div>
          </div>

          {/* Frame 2 */}
          <div className="listDiv">
            <div className="listOne">
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image19.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image18.png"
                  className="image"
                />
              </div>

              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image13.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image15.png"
                  className="image"
                />
              </div>
              <div className="imageDivTwo">
                <img
                  src="..\assets\images\FeaturedBrands\image12.png"
                  className="image"
                />
              </div>
            </div>
            <div className="listTwo">
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image16.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image21.png"
                  className="image"
                />
              </div>

              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image20.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image14.png"
                  className="image"
                />
              </div>
              <div className="imageDivTwo">
                <img
                  src="..\assets\images\FeaturedBrands\image22.png"
                  className="image"
                />
              </div>
            </div>
          </div>
        </Slider>
        <div className="buttons">
          <button className="left" onClick={slideRight}>
            <Icon
              icon="ph:arrow-left-bold"
              color="white"
              width="25"
              height="25"
            />
          </button>
          <button className="right" onClick={slideLeft}>
            <Icon
              icon="ph:arrow-right-bold"
              color="white"
              width="25"
              height="25"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;

{
  /* <div className="listOne">
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image19.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image18.png"
                  className="image"
                />
              </div>

              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image13.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image15.png"
                  className="image"
                />
              </div>
              <div className="imageDivTwo">
                <img
                  src="..\assets\images\FeaturedBrands\image12.png"
                  className="image"
                />
              </div>
            </div>

            <div className="listTwo">
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image16.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image21.png"
                  className="image"
                />
              </div>

              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image20.png"
                  className="image"
                />
              </div>
              <div className="imageDiv">
                <img
                  src="..\assets\images\FeaturedBrands\image14.png"
                  className="image"
                />
              </div>
              <div className="imageDivTwo">
                <img
                  src="..\assets\images\FeaturedBrands\image22.png"
                  className="image"
                />
              </div>
            </div> */
}
