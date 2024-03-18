import React, { useState } from "react";
import "./stockalert.scss";
import { Icon } from "@iconify/react";
import { Grid } from "@mui/material";
import Modal from "react-bootstrap/Modal";

function Stockalert() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section className="stock-alert">
      <div className="top">
        <div className="top-left">
          <button onClick={handleShow}>Batch Edit Stock Alert Value</button>
          <p>Generate Restock List</p>
        </div>
        <div className="top-right">
          <Icon icon="bi:toggle2-on" color="#ff7d05" width="35" height="20" />
          {/* <Icon icon="bi:toggle2-off" color="#ff7d05" width="35" height="20" /> */}
          <p>Restock notification</p>
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
                    {" "}
                    {data.Quantity}
                    <img
                      className="edit-img"
                      src="/assets/images/icons/edit.svg"
                      alt="..."
                    />
                  </Grid>
                  <Grid item className="third-div">
                    {" "}
                    {data.Price}{" "}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-head">
            Batch edit stock alert value
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="content">
          <div className="empty-div"></div>
          <div className="bottom">
            <img src="/assets/images/icons/alert.svg" alt="..." />
            <p>
              You will recieve message when your stock <br /> reaches the alert
              value
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Stockalert;

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
