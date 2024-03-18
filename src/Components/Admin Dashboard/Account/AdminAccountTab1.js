import { useState } from "react";
import "./AdminAccount.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const AdminAccountTab1 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClose = () => {
    setClicked(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  // verification modal box code
  const [shows, setShows] = useState(false);

  const handleClosed = () => setShows(false);
  const handleShowed = () => setShows(true);
  //

  return (
    <>
      <div className="tab1-main">
        <div className="tab-primary">
          <div className="primary-top">
            <div className="primary-heading">
              <span className="log-info">Log in information</span>
            </div>
            <div className="login-content">
              <div className="content-mail">
                <span className="login-label">Login Email</span>
                <span className="login-email">Toyscove7@gmail.com</span>
                <span className="login-change" onClick={handleShow}>
                  Change
                </span>
              </div>
              <div className="content-mail">
                <span className="login-label">Login Phone number</span>
                <span className="login-email">+6276346634</span>
                <span className="login-change">Change</span>
              </div>
              <div className="content-mail">
                <span className="login-label">Login Password</span>
                <span className="login-email">********</span>
                <span className="login-change">Change</span>
              </div>
            </div>
          </div>
        </div>
        <div className="primary-bottom">
          <div className="bottom-content">
            <div className="bottom-heading">
              <span className="Account-Security">Account Security</span>
            </div>
          </div>
          <div className="radio-button">
            <label className="two-step">2-step verification</label>
            <label className="radio-label">
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Text message
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Email
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Authenticator App
            </label>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered className="email-model">
        <Modal.Header closeButton>
          <Modal.Title className="modelbox-title">
            Change Email Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="stepverification">
            <a className="step-verification1" onClick={() => setClicked(false)}>
              Step 1- Verification
            </a>
            <a className="step-verification2" onClick={() => setClicked(true)}>
              Step 2- Add New Email
            </a>
          </div>

          <div className="account-modal-content">
            {clicked ? (
              <>
                <div className="current-email">
                  <label className="cmail-label">New Email</label>
                  <input
                    type="email"
                    placeholder="Please enter new email address"
                    className="modal-input"
                  />
                </div>
                <div className="current-email">
                  <label className="cmail-label">Confirm New Email</label>
                  <input
                    type="email"
                    placeholder="Please Re-enter the New email address"
                    className="modal-input"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="input-container">
                  <label className="cmail-label">Current Email</label>
                  <input type="text" className="input-with-placeholder" />
                  <span className="left-placeholder">toyscove7@gmail.com</span>
                </div>
                <div className="input-container">
                  <label className="cmail-label">Verification code</label>
                  <input type="text" className="input-with-placeholder" />
                  <span className="left-placeholder">
                    Please enter the verification code
                  </span>
                  <span className="right-placeholder">Send Code</span>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="Cancel" onClick={() => setClicked(false)}>
            Cancel
          </button>
          <button className="Next" onClick={() => setClicked(true)}>
            Next
          </button>
        </Modal.Footer>
      </Modal>
      {/* second modal box */}
      <Button variant="primary" onClick={handleShowed}>
        verification mail message
      </Button>

      <Modal show={shows} onHide={handleClosed}>
        <Modal.Header closeButton>
          <Modal.Title className="verif-code">Verification Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mail-content">
            <div className="content-heading">
              <p className="content-first">
                A verification code will be sent to{" "}
                <span className="content-number"> +63726236263</span>
              </p>
              <div className="input-container">
                <label className="vf-code">Verification code</label>
                <input type="text" className="input-with-placeholder" />
                <span className="left-placeholders">
                  Please enter the verification code
                </span>
                <span className="right-placeholders">Send Code</span>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="Cancel" onClick={() => setClicked(false)}>
            Cancel
          </button>
          <button className="Next" onClick={() => setClicked(true)}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminAccountTab1;
