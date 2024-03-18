import React from 'react'
import "./HomeCard.css"

const HomeCard = () => {
    return (
        <div className='Card-Main'>
            <div className='Image-container'>
                <div className='flex-center'> 10%</div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
            </div>

            <div className='cardText'>
                <p>Talking cactus</p>
                <p>(2 items left)</p>
            </div>
            <p className='cardPrice'>RM. 2,500 <span>Rm. 3500</span></p>
            <div className='card-text-bottom'>
                <div>start</div>
                <div>1.2k Sold</div>
            </div>

            <button className='homeCard_btn'>
                Add to Cart
            </button>
        </div>
    )
}

export default HomeCard