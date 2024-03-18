import React from 'react'
import styled from "styled-components";
import { SubHeading1 } from '../../Reuseable Components/Headings';

const Card = styled('div')`
display:flex;
flex-direction:column;
gap:10px;
  }
`;

const Cardimg = styled('img')`
filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
border-radius: 4px;
width:100%;
max-width: 234px;
min-height: 250px;
object-fit:cover;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;
const RelatedProductCard = (props) => {
    return (
        <Card>
            <Cardimg src={props.image? props.image : "https://cdn.shopify.com/s/files/1/0150/6767/6720/products/GUND-plush-stuffed-bear-with-velvet-box-front-view-IMG_57842.jpg?v=1609989406&width=1946"} />
            <SubHeading1> {props?.name} </SubHeading1>
            <SubHeading1 style={{color:"var(--primary)", marginTop:"-10px"}}> {"RM " + props?.price} </SubHeading1>
        </Card>
    )
}

export default RelatedProductCard