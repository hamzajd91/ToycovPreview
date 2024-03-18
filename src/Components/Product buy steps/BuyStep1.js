import React from 'react'
import { SubHeading3 } from '../../Reuseable Components/Headings'
import { Text1 } from '../../Reuseable Components/Typography'
import { InputSecondary } from '../../Reuseable Components/Textfields'
import { Button_p_l } from '../../Reuseable Components/Butons'
import "./Steps.css"

const BuyStep1 = (props) => {



    return (
        <div className='steps-space'>
            <SubHeading3>
                Account details
            </SubHeading3>

            <div className='inputSection'>
                <div>
                    <Text1>Email address</Text1>
                    <InputSecondary type='text' placeholder=' Email ' />
                </div>
                <div>
                    <Text1>Password</Text1>
                    <InputSecondary type='password' placeholder=' Password ' />
                </div>
            </div>

            <div className='step1Buttons'>
                <a className='steps-btn-space'>
                    Cancel Order
                </a>

                <Button_p_l className='steps-btn-space' onClick={props.nextPage}>
                    Shipping Details
                </Button_p_l>
            </div>
        </div>
    )
}

export default BuyStep1