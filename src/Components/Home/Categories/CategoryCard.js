import React from 'react'
import "./CategoryCard.css"

const CategoryCard = (props) => {
    return (
        <div className='CategoryCard-main flex-center'
            style={{ background: props?.background }}>
            <img src={props?.image} />
            <p> {props?.category}</p>
        </div>
    )
}

export default CategoryCard