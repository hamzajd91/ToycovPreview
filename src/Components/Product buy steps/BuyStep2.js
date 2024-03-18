import React from 'react'
import { SubHeading3 } from '../../Reuseable Components/Headings'
import { Text1 } from '../../Reuseable Components/Typography'
import { InputSecondary } from '../../Reuseable Components/Textfields'
import { Button_p_l } from '../../Reuseable Components/Butons'
import Dropdown1_2 from '../../Reuseable Components/Dropdown1_2'
import "./Steps.css"

const BuyStep2 = (props) => {
    return (
        <div className='steps-space'>
            <SubHeading3>
                Shipping details
            </SubHeading3>

            <div className='buy-top-row pt-3'>
                <Text1>Use saved address</Text1>
                <Dropdown1_2
                    // title="123 , Electric avenue"
                    options={["Option 1", "Option 2", "Option 3"]}
                />

            </div>

            <div className='inputSection'>
                <div>
                    <Text1>First line of address</Text1>
                    <InputSecondary type='text' />
                </div>
                <div>
                    <Text1>Street name</Text1>
                    <InputSecondary type='text' />
                </div>
            </div>

            <div className=' step2-postcode-row '  >
                <div>
                    <Text1>Postcode</Text1>
                    <InputSecondary type='text' />
                </div>

                <div>
                    <Text1>Select shipping</Text1>
                    <Dropdown1_2
                        fullwidth
                        options={["Option 1", "Option 2", "Option 3"]}
                    />
                </div>

            </div>

            <div className='step1Buttons'>
                <a className='steps-btn-space'>
                    Cancel Order
                </a>

                <Button_p_l className='steps-btn-space' onClick={props.nextPage}>
                    Payment
                </Button_p_l>
            </div>
        </div>
    )
}

export default BuyStep2