import React from 'react'
import "./Wishlist.css"
import WishlistCard from './WishlistCard'
const Wishlist = () => {
    return (
        <div className='Wishlist'>

<div className='wishCardlist'>
     <WishlistCard
                image="..\assets\images\wishlist\1.png"
                title="Penguin"
                fav={true}
            />

            <WishlistCard
                image="..\assets\images\wishlist\2.png"
                title="Penguin"
                fav={false}
            />

            <WishlistCard
                image="..\assets\images\wishlist\3.png"
                title="Penguin"
                fav={true}
            />

            <WishlistCard
                image="..\assets\images\wishlist\4.png"
                title="Penguin"
                fav={true}
            />

            <WishlistCard
                image="..\assets\images\wishlist\1.png"
                title="Penguin"
                fav={false}
            />
</div>
           

        </div>
    )
}

export default Wishlist