import React from 'react'
import { Heading1 } from '../../../Reuseable Components/Headings'
import { PrimaryBtn_pill, SecondaryBtn_pill } from '../../../Reuseable Components/Butons'
import HomeCard from './HomeCard'
import { Grid } from '@mui/material'

const HotSelling = () => {
    return (
        <div className='container container-space'>

            <p className='trending-txt'>Trending </p>

            <Heading1 className='HotsellingTxt'>
                Hot selling
                <img src='..\assets\images\Header\flame.png' />
            </Heading1>



            <div className='filters'>
                <p>Sort By</p>

                <PrimaryBtn_pill>Latest</PrimaryBtn_pill>
                <SecondaryBtn_pill>Top sales</SecondaryBtn_pill>
            </div>

            <div className='CardsContainer'>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>



        </div>
    )
}

export default HotSelling