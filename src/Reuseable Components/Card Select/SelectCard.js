import React, { useState } from 'react';
import "./SelectCard.css"
import { Icon } from "@iconify/react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Error_s, Link1, Text1 } from '../Typography';
import OutlinedInput from "@mui/material/OutlinedInput";
import { InputPrimary } from '../Textfields';
import { TextField } from '@mui/material';
import { ButtonFull_P } from '../Butons';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 0,
    p: 4,
};



const SelectCard = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [Expiry, setExpiry] = useState("")
    const [cvc, setcvc] = useState("")
    const [errors, setErrors] = useState({});

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};

        if (!cardNumber || cardNumber.length !== 16) {
            validationErrors.cardNumber = 'Please enter a valid 16-digit card number';
        }

        if (!cardHolder) {
            validationErrors.cardHolder = 'Please enter the card holder name';
        }

        if (!expiryMonth || !/^(0[1-9]|1[0-2])$/.test(expiryMonth)) {
            validationErrors.expiryMonth = 'Please enter a valid month (MM)';
        }

        if (!expiryYear || !/^\d{4}$/.test(expiryYear)) {
            validationErrors.expiryYear = 'Please enter a valid year (YYYY)';
        }

        if (!cvc || cvc.length !== 3 || isNaN(cvc)) {
            validationErrors.cvc = 'Please enter valid card cvc';
        }

        const expiryRegex = /^(0[1-9]|1[0-2])(\/\?)\d{2}$/; // Regular expression for MM/?YY format
        if (!expiryRegex.test(Expiry)) {
            validationErrors.Expiry = 'Please enter a valid expiry date (MM/YY)';
        }
        

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit the form or perform any other action
            console.log('Form submitted');
        }
    }


    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>

                            <form onSubmit={handleSubmit}>
                                <Text1>Credit Holder*</Text1>
                                <InputPrimary
                                    value={cardHolder}
                                    onChange={(e) => handleInputChange(e, setCardHolder)}
                                    error={!!errors.cardHolder}
                                    fullWidth
                                />
                                <Error_s> {errors.cardHolder} </Error_s>

                                <Text1>Credit/Debit card number*</Text1>
                                <InputPrimary
                                    value={cardNumber}
                                    onChange={(e) => handleInputChange(e, setCardNumber)}
                                    error={!!errors.cardNumber}
                                    helperText={errors.cardNumber}
                                    fullWidth
                                />
                                <Error_s> {errors.cardNumber} </Error_s>


                                <div className='CardSelectDate'>
                                    <div>
                                        <Text1>Expiry Cate*</Text1>
                                        <InputPrimary
                                            placeholder='MM/YY'
                                            value={Expiry}
                                            onChange={(e) => handleInputChange(e, setExpiry)}
                                            error={!!errors.Expiry}
                                            fullWidth
                                        />
                                        <Error_s> {errors.Expiry} </Error_s>
                                    </div>

                                    <div>
                                        <Text1>CVC*</Text1>
                                        <InputPrimary
                                        placeholder='***'
                                            value={cvc}
                                            onChange={(e) => handleInputChange(e, setcvc)}
                                            error={!!errors.cvc}
                                            fullWidth
                                        />
                                        <Error_s> {errors.cvc} </Error_s>
                                    </div>
                                </div>

                                <ButtonFull_P type="submit" variant="contained" color="primary">
                                Add Payment Method
                                </ButtonFull_P>
                            </form>
                        </div>
                    </Box>
                </Modal>
            </div>


            <div className="add-card">
                <div className="mastercard">

                    <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        checked
                    />
                    <label class="btn " for="option1">
                        <img
                            src="\assets\images\Wallet\mastercard.png"
                            alt="mastercard"
                        />
                        Axis Bank xxxx68
                        <Icon
                            icon="octicon:dot-fill-16"
                            className="SelectedDot" />
                    </label>

                    <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option2"
                        autocomplete="off"
                        checked
                    />
                    <label class="btn " for="option2">
                        <img
                            src="\assets\images\Wallet\mastercard.png"
                            alt="mastercard"
                        />
                        VYX Bank xxxx54
                        <Icon
                            icon="octicon:dot-fill-16"
                            className="SelectedDot" />
                    </label>
                </div>

                <button onClick={handleOpen}>
                    <Icon
                        icon="carbon:add-filled"
                        color="#ff7d05"
                        width="25"
                        height="25"
                        className="ico"
                    />
                    Add New Card

                </button>
            </div>
        </>
    )
}

export default SelectCard;