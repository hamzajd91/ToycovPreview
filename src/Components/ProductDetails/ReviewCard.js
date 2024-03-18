import React from 'react'
import "./ReviewCard.css"
import { SubHeading1 } from '../../Reuseable Components/Headings'
import { Text1, Text3 } from '../../Reuseable Components/Typography'

const ReviewCard = (props) => {

    let reviewStars = props?.reviewStars

    const starCount = Math.floor(reviewStars); // Round down the stars to a whole number
    const starArray = Array.from({ length: starCount }, (_, index) => index); // Create an array of star indices



    return (
        <div className='reviewCard-Main'>
            <img className='review-profile' src={props.image? props.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={props?.name} />
            <div className='w-100'>
                <div className='review-top'>
                    <SubHeading1> {props?.name} </SubHeading1>
                    <Text1> {props?.date} </Text1>
                </div>

                <div className='review-stars'>
                    {starArray.map((index) => (
                        <img key={index} src="..\assets\images\starOrange.png" alt="Star" />
                    ))}
                </div>

                <div className='verify'> <img src="..\assets\images\verify.png" alt="" />Verified Purchase </div>

                <div className='Review-text'>
                    <Text3>
                        {props?.reviewText}
                    </Text3>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard