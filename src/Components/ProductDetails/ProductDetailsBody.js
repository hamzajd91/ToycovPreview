import React from 'react'
import {  SubHeading2 } from '../../Reuseable Components/Headings'
import { Text1, Text2 } from '../../Reuseable Components/Typography'
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReviewBar from './ReviewBar';
import ReviewCard from './ReviewCard';
import RelatedProductCard from './RelatedProductCard';

const ProductDetailsBody = () => {

    const Dot = styled(FiberManualRecordIcon)`
  width: 10px !important;
  padding-block: 7px
`;
    return (
        <div className='PD-Body'>
            <div className='PD-bodySplit'>

                <div className='PD-bodyLeft'>

                    <div className='DetailsSection'>
                        <SubHeading2>Details:</SubHeading2>

                        <br />
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                        <Text2> <Dot /> Multifunction Style Function: 120 kinds musics, light, learn to speak, record, dance</Text2>
                    </div>

                    <div className='returnPolicy'>

                        <Accordion sx={{ boxShadow: "none !important" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <SubHeading2>Return policy:</SubHeading2>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='py-2'>
                                    <Text2>You have <strong> {" 15" + "days "} </strong> to return the item(s) using any of the following methods:</Text2>
                                </div>
                                <Text2> <Dot /> Free store return</Text2>
                                <Text2> <Dot /> Free returns via USPS Dropoff Service</Text2>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='Reviews'>
                        <SubHeading2>Customer Reviews:</SubHeading2>

                        <div className='PD-rating-overview'>
                            <div className='rating-number flex-center'>
                                <h4>4.6 <span>/5</span></h4>
                                <Text1 style={{ color: "var(--text0secondary)" }}>20 images</Text1>
                            </div>
                            <div className='review-bar-section'>
                                <ReviewBar complete={"50%"} />
                                <ReviewBar complete={"20%"} />
                                <ReviewBar complete={"60%"} />
                                <ReviewBar complete={"10%"} />
                                <ReviewBar complete={"35%"} />
                            </div>
                        </div>

                        <div className='py-3'>
                            <ReviewCard
                                reviewStars="2"
                                name="John Doe"
                                date="14 Dec, 2022"
                                reviewText="Lorem ipsum dolor sit amet consectetur. Ligula sapien consectetur sed consectetur tincidunt tempor ac purus commodo. Auctor mauris aliquam elementum sed."
                            />

                            <ReviewCard
                                reviewStars="4"
                                name="Max"
                                date="14 Dec, 2022"
                                reviewText="Lorem ipsum dolor sit amet consectetur. Ligula sapien consectetur sed consectetur tincidunt tempor ac purus commodo. Auctor mauris aliquam elementum sed."
                            />

                            <ReviewCard
                                reviewStars="5"
                                name="Rick"
                                date="14 Dec, 2012"
                                reviewText="Lorem ipsum dolor sit amet consectetur. Ligula sapien consectetur sed consectetur tincidunt tempor ac purus commodo. Auctor mauris aliquam elementum sed."
                            />
                        </div>
                    </div>

                </div>
                <div className='PD-bodyRight'>
                    <SubHeading2>People also viewed:</SubHeading2>

                    <div className='related-products'>
                        <RelatedProductCard
                            image=""
                            name="Teddy"
                            price="200"
                        />

                        <RelatedProductCard
                            image=""
                            name="Teddy"
                            price="100"
                        />

                        <RelatedProductCard
                            image=""
                            name="Teddy"
                            price="100"
                        />
                        <RelatedProductCard
                            image=""
                            name="Teddy"
                            price="100"
                        />
                        <RelatedProductCard
                            image=""
                            name="Teddy"
                            price="100"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsBody