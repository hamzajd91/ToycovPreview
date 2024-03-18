import React from 'react'
import { SubHeading1 } from '../../Reuseable Components/Headings'

const ReviewBar = (props) => {
    return (
        <div className='review-bar-group'>
            <SubHeading1>5</SubHeading1>
            <div className='review-bar'>
                <div style={{ width: props.complete }}></div>
            </div>
            <SubHeading1> {props.complete}</SubHeading1>
        </div>
    )
}

export default ReviewBar