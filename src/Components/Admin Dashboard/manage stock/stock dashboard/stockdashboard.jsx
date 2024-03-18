import React, { useState } from "react";
import "./stockdashboard.scss";
import { Grid } from "@mui/material";
import { useTabContext } from "@mui/lab";

function Stockdashboard() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState({});

  // const updateQuanity = index => {
  //   setQuantity({ [index]: true });
  //   console.log(quantity);
  // };
  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  const [showEditSec, setShowEditSec] = useState(
    new Array(data.length).fill(false)
  );

  // Function to toggle the visibility of edit
  const toggleEditSec = index => {
    const newShowEditSec = [...showEditSec];
    newShowEditSec[index] = !newShowEditSec[index];
    setShowEditSec(newShowEditSec);
  };

  // Function to handle quantity updates (You can customize this as needed)
  const updateQuantity = () => {

  };

  return (
    <section className="stock-dashboard">
      <div className="top">
        <h3>Stock dashboard</h3>
        <div className="divs">
          <div className="ist">
            <p>Products out of stock</p>
            <span>0</span>
          </div>
          <div className="second">
            <p>Products in low stock</p>
            <span>2</span>
          </div>
          <div className="second">
            <p>Products in stock</p>
            <span>190</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="div-section">
          <div className="search-div">
            <input type="text" placeholder="Search by product name or ID" />
            <img src="/assets/images/icons/search.svg" alt="..." />
          </div>
          <div className="select-div">
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">Category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        <div className="table-outer">
          <div className="optimizer-table">
            <Grid container className="OptimizerTableHeader">
              <Grid item className="ist-div">
                Product
              </Grid>
              <Grid item className="second-div">
                Quantity
              </Grid>
              <Grid item className="third-div">
                Price
              </Grid>
              <Grid item className="forth-div"></Grid>
            </Grid>

            {data.map((data, index) => {
              return (
                <Grid container className="OptimizerTableRows" key={index}>
                  <Grid item className="ist-div">
                    <div className="OptimizerImagediv">
                      <img src={data.image} />
                      <div>
                        {data.Product}
                        <span> ID:{data.id} </span>
                      </div>
                    </div>
                  </Grid>

                  <Grid item className="second-div">
                    {/* {quantity ? (
                      <>
                        {data.Quantity}
                        <img
                          className="edit-img"
                          src="/assets/images/icons/edit.svg"
                          alt="..."
                          onClick={updateQuanity}
                        />
                      </>
                    ) : (
                      <div className="edit-sec">
                        <input min={0} type="number" name="" id="" />
                        <button onClick={updateQuanity} className="tick">
                          <img src="/assets/images/icons/tick.svg" alt="..." />
                        </button>
                        <button onClick={updateQuanity} className="cross">
                          <img src="/assets/images/icons/cross.svg" alt="..." />
                        </button>
                      </div>
                    )} */}

                    {!showEditSec[index] && (
                      <div>
                        {data.Quantity}
                        <img
                          className="edit-img"
                          src="/assets/images/icons/edit.svg"
                          alt="..."
                          onClick={() => toggleEditSec(index)}
                        />
                      </div>
                    )}

                    {/* Conditional rendering of edit-sec component for the specific row */}
                    {showEditSec[index] && (
                      <div className="edit-sec">
                        <input min={0} type="number" name="" id=""  />
                        <button onClick={updateQuantity} className="tick">
                          <img src="/assets/images/icons/tick.svg" alt="..." />
                        </button>
                        <button
                          onClick={() => toggleEditSec(index)}
                          className="cross">
                          <img src="/assets/images/icons/cross.svg" alt="..." />
                        </button>
                      </div>
                    )}
                  </Grid>
                  <Grid item className="third-div">
                    {data.Price}
                  </Grid>
                  <Grid item className="Optimizerbutton forth-div">
                    <a href="#">History</a>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stockdashboard;

const data = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "universal deformation bumbleebee robot toys with music and light",
    ID: 234763462784624,
    Quantity: 30,
    Price: 12.33,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "Barbie Dreamhouse",
    Quantity: 55,
    Price: 12.33,
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "Hot Wheels 20 Car Gift Pack",
    Quantity: 103,
    Price: 12.33,
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Product: "Nerf N-Strike Elite Disruptor Blaster",
    Quantity: 409,
    Price: 12.33,
  },
];
