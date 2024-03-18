import React from 'react'
import "./Referrals.css"
import { SubHeading3 } from '../../../Reuseable Components/Headings'
import { Text3 } from '../../../Reuseable Components/Typography'
import { Button_p_s } from '../../../Reuseable Components/Butons'

const ReferralsCard = () => {
    return (
        <div className='referralsCard'>
            <div className='refCard-row1'>
                <div className='refCard-title'>
                    <img src='' alt='' className='refCard-img' />
                    <SubHeading3>Kaylynn Aminoff</SubHeading3>
                </div>
                <Button_p_s> Level 1 </Button_p_s>
            </div>

            <div className='refCard-text-row'>
                <Text3>Members:</Text3>
                <SubHeading3>3</SubHeading3>
            </div>

            <div className='refCard-text-row'>
                <Text3>Commission made::</Text3>
                <SubHeading3>RM 30</SubHeading3>
            </div>


        </div>


    )
}

export default ReferralsCard
