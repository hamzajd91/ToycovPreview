import React from 'react'
import { SubHeading3 } from '../../Reuseable Components/Headings'
import { Text1 } from '../../Reuseable Components/Typography'
import { InputSecondary } from '../../Reuseable Components/Textfields'
import { Button_p_l } from '../../Reuseable Components/Butons'
import Dropdown1_2 from '../../Reuseable Components/Dropdown1_2'
import "./Steps.css"

const BuyStep3 = (props) => {
    return (
        <div className='steps-space'>
            <SubHeading3>
                Payment Details
            </SubHeading3>

            <div className='buy-top-row pt-3'>
                <Text1>Use saved card</Text1>
                <Dropdown1_2
                    // title="123 , Electric avenue"
                    options={["Option 1", "Option 2", "Option 3"]}
                />

            </div>

            <div className='inputSection'>
                <div>
                    <Text1>Name on card</Text1>
                    <InputSecondary type='text' />
                </div>
                <div>
                    <Text1>Card number</Text1>
                    <InputSecondary type='text' />
                </div>
            </div>

            <div className=' step2-postcode-row '  >
                <div>
                    <Text1>Expiration</Text1>
                    <div className='step3-expire-row'>
                        <InputSecondary
                            type='text'
                            pattern='^(0[1-9]|1[0-2])$'
                            placeholder='mm'
                            maxLength='2' />
                        <span>{"/"}</span>
                        <InputSecondary
                            type='text'
                            pattern='^\d{2}$'
                            placeholder='yy'
                            maxLength='2' />
                    </div>
                </div>

                <div>
                    <Text1>CVC</Text1>
                    <InputSecondary type='text' />
                </div>

            </div>

            <div className='step1Buttons'>
                <a className='steps-btn-space'>
                    Cancel Order
                </a>

                <Button_p_l className='steps-btn-space' onClick={props.nextPage}>
                Confirm Order
                </Button_p_l>
            </div>
        </div>
    )
}

export default BuyStep3