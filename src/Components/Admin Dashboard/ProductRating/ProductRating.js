import { useState } from "react";
import "./ProductRating.css";
import { Icon } from "@iconify/react";

const ProductRating = () => {
  const [isRangeOpen, setRangeOpen] = useState(false);

  const handleRangeClick = () => {
    setRangeOpen(!isRangeOpen);
  };
  const handleCloseRange = () => {
    setRangeOpen(false);
  };
  return (
    <>
      <div className="review-section">
        <div className="reviewtop-section">
          <div className="reviewtop-content">
            <div className="review-heading">
              <span className="Product-Rating">Product Rating</span>
            </div>
            <div className="ratingtable-main">
              <div className="ratingtop-table">
                <div className="toptable-left">
                  <p className="rdashboard-firstpart">
                    Review dashboard{" "}
                    <span className="rdashboard-secondpart">
                      (Updated Today)
                    </span>{" "}
                  </p>
                </div>
                <div className="toptable-right">
                  <p>
                    <button className="lastdays-btn">Last 7 days</button>{" "}
                    <span className="lastdays-text">Last 30 days</span>{" "}
                  </p>
                </div>
              </div>
              <div className="table-session">
                <div className="first-layout">
                  <div className="layout-paragraph">
                    {" "}
                    <p className="percentage">100%</p>{" "}
                  </div>
                  <div className="layout-line">
                    {" "}
                    <hr className="line" />{" "}
                  </div>
                </div>
                <div className="first-layout">
                  <div className="layout-paragraph">
                    {" "}
                    <p className="percentage">80%</p>{" "}
                  </div>
                  <div className="layout-line">
                    {" "}
                    <hr className="line" />{" "}
                  </div>
                </div>
                <div className="first-layout">
                  <div className="layout-paragraph">
                    {" "}
                    <p className="percentage">60%</p>{" "}
                  </div>
                  <div className="layout-line">
                    {" "}
                    <hr className="line" />{" "}
                  </div>
                </div>
                <div className="first-layout">
                  <div className="layout-paragraph">
                    {" "}
                    <p className="percentage">40%</p>{" "}
                  </div>
                  <div className="layout-line">
                    {" "}
                    <hr className="line" />{" "}
                  </div>
                </div>
                <div className="first-layout">
                  <div className="layout-paragraph">
                    {" "}
                    <p className="percentage">20%</p>{" "}
                  </div>
                  <div className="layout-line">
                    {" "}
                    <hr className="line" />{" "}
                  </div>
                </div>

                {/* <div className="last-layout">
                  <div className="layoutparagraph">
                    <p className="percentage">20%</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                  <div className="last-div">
                    <Icon
                      icon="icon-park-outline:dot"
                      color="#ff7d05"
                      width="20"
                      height="20"
                    />
                    <p className="month">July 1</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                  <div className="last-div">
                    <Icon
                      icon="icon-park-outline:dot"
                      color="#ff7d05"
                      width="20"
                      height="20"
                    />
                    <p className="month">July 2</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                  <div className="last-div">
                    <Icon
                      icon="icon-park-outline:dot"
                      color="#ff7d05"
                      width="20"
                      height="20"
                    />
                    <p className="month">July 3</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                  <div className="last-div">
                    <Icon
                      icon="icon-park-outline:dot"
                      color="#ff7d05"
                      width="20"
                      height="20"
                    />
                    <p className="month">July 4</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                  <div className="last-div">
                    <Icon
                      icon="icon-park-outline:dot"
                      color="#ff7d05"
                      width="20"
                      height="20"
                    />
                    <p className="month">July 5</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                  <div className="last-div">
                    <Icon
                      icon="icon-park-outline:dot"
                      color="#ff7d05"
                      width="20"
                      height="20"
                    />
                    <p className="month">July 6</p>
                  </div>
                  <div className="line-small">
                    <hr className="line2" />{" "}
                  </div>
                </div> */}
                <div className="lastline">
                  <div className="layoutparagraph">
                    <p className="percentage">0%</p>
                  </div>
                  <div className="last-primary">
                    <hr className="line2" />
                    {/* <div className="secondary">
                      <Icon
                        icon="icon-park-outline:dot"
                        color="#ff7d05"
                        width="20"
                        height="20"
                      />
                      <div className="date"></div>
                      <Icon
                        icon="icon-park-outline:dot"
                        color="#ff7d05"
                        width="20"
                        height="20"
                      />
                      <Icon
                        icon="icon-park-outline:dot"
                        color="#ff7d05"
                        width="20"
                        height="20"
                      />
                      <Icon
                        icon="icon-park-outline:dot"
                        color="#ff7d05"
                        width="20"
                        height="20"
                      />
                      <Icon
                        icon="icon-park-outline:dot"
                        color="#ff7d05"
                        width="20"
                        height="20"
                      />
                      <Icon
                        icon="icon-park-outline:dot"
                        color="#ff7d05"
                        width="20"
                        height="20"
                      />
                    </div> */}
                    <div className="third">
                      <div className="par">
                        <Icon
                          icon="icon-park-outline:dot"
                          color="#ff7d05"
                          width="20"
                          height="20"
                        />
                        <p className="month">July 1</p>
                      </div>
                      <div className="par">
                        <Icon
                          icon="icon-park-outline:dot"
                          color="#ff7d05"
                          width="20"
                          height="20"
                        />
                        <p className="month">July 2</p>
                      </div>
                      <div className="par">
                        <Icon
                          icon="icon-park-outline:dot"
                          color="#ff7d05"
                          width="20"
                          height="20"
                        />
                        <p className="month">July 3</p>
                      </div>
                      <div className="par">
                        <Icon
                          icon="icon-park-outline:dot"
                          color="#ff7d05"
                          width="20"
                          height="20"
                        />
                        <p className="month">July 4</p>
                      </div>
                      <div className="par">
                        <Icon
                          icon="icon-park-outline:dot"
                          color="#ff7d05"
                          width="20"
                          height="20"
                        />
                        <p className="month">July 5</p>
                      </div>
                      <div className="par">
                        <Icon
                          icon="icon-park-outline:dot"
                          color="#ff7d05"
                          width="20"
                          height="20"
                        />
                        <p className="month">July 6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rating-main">
            <div className="rating">
              <div className="rating-head">
                <span className="Rating">Rating</span>
              </div>
              <div className="rating-star">
                <div className="first-star">
                  <span className="numbr-star">1</span>
                  <Icon
                    icon="material-symbols:star"
                    color="#ffc240"
                    width="16"
                    height="16"
                  />
                </div>
                <div className="first-star">
                  <span className="numbr-star">2</span>
                  <Icon
                    icon="material-symbols:star"
                    color="#ffc240"
                    width="16"
                    height="16"
                  />
                </div>
                <div className="first-star">
                  <span className="numbr-star">3</span>
                  <Icon
                    icon="material-symbols:star"
                    color="#ffc240"
                    width="16"
                    height="16"
                  />
                </div>
                <div className="first-star">
                  <span className="numbr-star">4</span>
                  <Icon
                    icon="material-symbols:star"
                    color="#ffc240"
                    width="16"
                    height="16"
                  />
                </div>
                <div className="first-star">
                  <span className="numbr-star">5</span>
                  <Icon
                    icon="material-symbols:star"
                    color="#ffc240"
                    width="16"
                    height="16"
                  />
                </div>
              </div>
            </div>
            <div className="feild-main">
              <div className="first">
                <div className="rating-input">
                  <div className="first-content">
                    <div className="search-div">
                      <input
                        type="text"
                        placeholder="Enter product name or ID"
                        className="search-placeholder"
                      />
                      <div className="search-icon">
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
              <div className="first">
                <div className="date-check">
                  <input type="date" className="datetest" />
                </div>
              </div>
              <div className="first">
                {" "}
                <div className="date-check">
                  <input type="date" className="datetest" />
                </div>
              </div>
              <div className="first">
                <div className="range-div">
                  <div className="range-primary" onClick={handleRangeClick}>
                    <div className="range-secondary">
                      <span className="range-text">Date Range</span>

                      <Icon
                        icon="ep:arrow-down-bold"
                        color="#878787"
                        width="16"
                        height="16"
                      />
                    </div>
                  </div>
                  {isRangeOpen && (
                    <div className="range-bottom">
                      <div
                        className="range-bottomdiv"
                        onClick={handleCloseRange}
                      >
                        {" "}
                        1 week
                      </div>
                      <div
                        className="range-bottomdiv"
                        onClick={handleCloseRange}
                      >
                        {" "}
                        1 Month
                      </div>
                      <div
                        className="range-bottomdiv"
                        onClick={handleCloseRange}
                      >
                        {" "}
                        3 Months
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ratinglast-section">
          <div className="lastsection-primary">
            <div className="lastsection-pri">
              <p className="Ratings">
                Ratings<span className="rating-0">0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRating;
