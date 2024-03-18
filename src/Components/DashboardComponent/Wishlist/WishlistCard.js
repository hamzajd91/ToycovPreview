import React from 'react'
import "./Wishlist.css"
import { Text_s_bold, Text_s_s } from '../../../Reuseable Components/Typography'
import { ButtonFull_P } from '../../../Reuseable Components/Butons'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const WishlistCard = (props) => {

    const [checked, setChecked] = React.useState(props?.fav);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <div className='WishlistCard'>
            <div className='wishImage-div'>

                <Checkbox 
                // {...label} 
                className='Wish-heart'
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />} 
                 checked={checked}
                    onChange={handleCheck}
                    sx={{
                        color: 'var(--primary)',
                        '&.Mui-checked': {
                            color: 'var(--primary)',
                        },

                    }}
                />

                <img className='wishItem'
                    src={props?.image}
                    alt={props?.title}                    
                />
            </div>

            <div className='wishTitle'>
                <Text_s_bold>{props?.title}</Text_s_bold>
                <Text_s_s style={{ color: "var(--primary)" }}> (2 items left) </Text_s_s>
            </div>

            <div className='wishPrice'>
                <Text_s_bold style={{ color: "var(--primary)" }}>  Rs. 2,500 </Text_s_bold>
                <Text_s_bold style={{ textDecorationLine: "line-through" }}>  Rs. 2,500 </Text_s_bold>

            </div>

            <ButtonFull_P>
                Add to Cart
            </ButtonFull_P>

        </div>
    )
}

export default WishlistCard