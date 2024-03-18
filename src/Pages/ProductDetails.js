import React from 'react'
import { Breadcrumb } from '../Reuseable Components/Typography'
import ProductDetailsHeader from '../Components/ProductDetails/ProductDetailsHeader'
import ProductDetailsBody from '../Components/ProductDetails/ProductDetailsBody'

const ProductDetails = () => {
    return (
        <div className='ProductDetails container'>
            <div>
                <Breadcrumb>
                    Home /7 in 1 set of cars
                </Breadcrumb>
            </div>

            <ProductDetailsHeader />
            <ProductDetailsBody/>
        </div>
    )
}

export default ProductDetails