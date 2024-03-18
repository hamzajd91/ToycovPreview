import React from 'react'
import { Heading2 } from '../../../Reuseable Components/Headings'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <div className='container container-space'>
            <Heading2>
                Categories
            </Heading2>

            <div className='categoriesList'>
                <CategoryCard 
                background="#3ADA7A"
                category="Puzzles"
                image="..\assets\images\Categories\1.png" />
                
                <CategoryCard 
                background="#5793F4"
                category="Educational"
                 image="..\assets\images\Categories\2.png" />
                 
                <CategoryCard 
                background="#ECEF3E"
                category="Plush Toys"
                 image="..\assets\images\Categories\3.png" />
                 
                <CategoryCard 
                background="#F65A5A"
                category="Action Figures"
                 image="..\assets\images\Categories\4.png" />
                 
                <CategoryCard 
                background="#FD479E"
                category="Toddler’s Toys"
                 image="..\assets\images\Categories\5.png" />
                 
            </div>
        </div>
    )
}

export default Categories