import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Text1 } from "../Reuseable Components/Typography"
import styled from "styled-components";
import { SubHeading1, SubHeading2, SubHeading3 } from '../Reuseable Components/Headings';
import { IconButton } from '@mui/material';
import { InputSecondary } from '../Reuseable Components/Textfields';
import { Outline_Button_p_s } from '../Reuseable Components/Butons';
import BuyStep1 from '../Components/Product buy steps/BuyStep1';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BuyStep2 from '../Components/Product buy steps/BuyStep2';
import BuyStep3 from '../Components/Product buy steps/BuyStep3';

const BuyProduct = () => {

    const [count, setcount] = useState(1)
    const [step, setstep] = useState(1)

    function previousPage() {
        if (step > 1) {
            setstep(step - 1);
        }
    }

    function nextPage() {
        if (step < 3) {
            setstep(step + 1);
        }
    }

    const Check = styled(CheckCircleIcon)`
    width: 20px !important;
    color:#808191
  `;

    return (
        <div className=' container-space container'>
            <div className='buyLayout layout-space'>
                <div className='buy-space buy-left'>
                    <div className='back-btn'>
                        <IconButton onClick={previousPage}>
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                    <div className='w-100'>
                        <div className='buy-Stepper'>
                            <Text1 className={`${step === 1 ? "activeStep" : ""}`}>Account</Text1>
                            <hr />
                            <Check className={`${step === 2 || step === 3 ? "active-icon" : ""}`} />
                            <hr />
                            <Text1 className={`${step === 2 ? "activeStep" : ""}`}>Shipping</Text1>
                            <hr />
                            <Check className={`${step === 3 ? "active-icon" : ""}`} />
                            <hr />
                            <Text1 className={`${step === 3 ? "activeStep" : ""}`}>Payment</Text1>
                        </div>

                        <div className='steps-area'>

                            {
                                step === 1 ? <BuyStep1 nextPage={nextPage} /> : null ||
                                    step === 2 ? <BuyStep2 nextPage={nextPage} /> : null ||
                                        step === 3 ? <BuyStep3 nextPage={nextPage} /> : null
                            }

                        </div>
                    </div>

                </div>

                <div className='buy-space buy-right'>
                    <SubHeading3>
                        Order Summary
                    </SubHeading3>

                    <img src="..\assets\images\buy-product\buy.png" alt="" className='buy-image' />

                    <div className='buy-product-name-section'>
                        <div>
                            <SubHeading3>
                                7 in 1 set of cars
                            </SubHeading3>

                            <SubHeading3 style={{ color: "var(--primary)" }}>
                                <strong>
                                    RM 15.50
                                </strong>
                            </SubHeading3>
                        </div>

                        <div>
                            <div className='qty-section p-0'>
                                <IconButton>
                                    <button className='QtyBtn flex-center' onClick={() => setcount(count > 1 ? count - 1 : 1)}>-</button>
                                </IconButton>
                                <SubHeading1>{count}</SubHeading1>
                                <IconButton>
                                    <button className='QtyBtn flex-center' onClick={() => setcount(count + 1)}>+</button>
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <Text1 style={{ color: "var(--text-secondary)", paddingBlock: "20px 15px" }}>
                        Gift Card / Discount code
                    </Text1>

                    <div className='d-flex' style={{ gap: "20px" }}>
                        <InputSecondary />
                        <Outline_Button_p_s>
                            Apply
                        </Outline_Button_p_s>
                    </div>

                    <div className='buy-details'>
                        <div>
                            <Text1 >Sub total</Text1>
                            <Text1 >RM15.50</Text1>
                        </div>

                        <div>
                            <Text1 >Tax</Text1>
                            <Text1 >RM3.45</Text1>
                        </div>

                        <div>
                            <Text1 >Shipping</Text1>
                            <Text1 >Free</Text1>
                        </div>

                        <div>
                            <Text1 ><strong> Total </strong></Text1>
                            <Text1 >RM 18.60</Text1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BuyProduct