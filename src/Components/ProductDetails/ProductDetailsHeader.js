import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { ItemPrice, ItemPriceCut, ItemTitle, Text1 } from '../../Reuseable Components/Typography'
import { SubHeading1 } from '../../Reuseable Components/Headings'
import { Button_p_l, Outline_Button_p_l } from '../../Reuseable Components/Butons'


const ProductDetailsHeader = () => {

    const [selectedColor, setSelectedColor] = useState('');
    const [count, setcount] = useState(1)

    const setColor = (id) => {
        setSelectedColor(id)
    }

    return (
        <div className='PD-Header'>
            <div className='PD-Header-split'>
                {/* image Left side */}
                <div>
                    <img className='displayImg' src="..\assets\images\ProductDetails\DisplayImg.png " alt="" />
                    <div className='PD-smallImages'>

                        <img className='smallimage' src="..\assets\images\ProductDetails\smallImg.png " alt="" />
                        <img className='smallimage' src="..\assets\images\ProductDetails\smallImg.png " alt="" />
                        <img className='smallimage' src="..\assets\images\ProductDetails\smallImg.png " alt="" />
                        <img className='smallimage' src="..\assets\images\ProductDetails\smallImg.png " alt="" />
                        <img className='smallimage' src="..\assets\images\ProductDetails\smallImg.png " alt="" />

                    </div>
                </div>

                {/* Details Right side */}
                <div>

                    <div className='PD-ItemName'>
                        <ItemTitle>7 in 1 set of cars</ItemTitle>
                        <div className='PD-share flex-center'>
                            <IconButton>
                                <img src="..\assets\images\share.png" alt="share" />
                            </IconButton>
                            <IconButton>
                                <img src="..\assets\images\heart.png" alt="heart" />
                            </IconButton>

                            <div >-50%</div>
                        </div>
                    </div>

                    <div className='flex-center justify-content-start my-2' style={{ gap: "10px" }}>
                        <ItemPrice>{"RM" + "15.50"}</ItemPrice><ItemPriceCut>RM31.00</ItemPriceCut>
                    </div>

                    <div className='flex-center justify-content-start' style={{ gap: "10px", paddingTop: "0px", paddingBottom: "40px" }}>
                        <img src="../assets/images/star.png" />
                        <Text1>5.0
                            <span style={{ color: "var(--text-secondary)" }}>
                                (600 items sold)
                            </span>
                        </Text1>
                    </div>

                    <div className='pt-2'>
                        <SubHeading1>Color</SubHeading1>
                        <div className='colorSelect'>
                            <IconButton onClick={() => setColor("1")}>
                                <div
                                    id="1"
                                    style={{ background: "gold" }}
                                    className={`${selectedColor === "1" ? "colorButton selectedColor" : "colorButton"}`}
                                >

                                </div>
                            </IconButton>
                            <IconButton onClick={() => setColor("2")}>
                                <div
                                    id="2"
                                    style={{ background: "pink" }}
                                    className={`${selectedColor === "2" ? "colorButton selectedColor" : "colorButton"}`}
                                >

                                </div>
                            </IconButton>
                            <IconButton onClick={() => setColor("3")}>
                                <div
                                    id="3"
                                    style={{ background: "silver" }}
                                    className={`${selectedColor === "3" ? "colorButton selectedColor" : "colorButton"}`}
                                >

                                </div>
                            </IconButton>
                            <SubHeading1>Color</SubHeading1>
                        </div>

                    </div>

                    <div className='qty-section'>
                        Quanntity

                        <IconButton>
                            <button className='QtyBtn flex-center' onClick={() => setcount(count > 1 ? count - 1 : 1)}>-</button>
                        </IconButton>
                        <SubHeading1>{count}</SubHeading1>
                        <IconButton>
                            <button className='QtyBtn flex-center' onClick={() => setcount(count + 1)}>+</button>
                        </IconButton>

                        <Text1>
                            {"2967" + "pieces available"}
                        </Text1>
                    </div>

                    <div className='PD-buttons'>
                        <Button_p_l> BUY NOW </Button_p_l>
                        <Outline_Button_p_l>  <img src="..\assets\images\cart.png" alt="" /> Add to cart </Outline_Button_p_l>
                    </div>

                    <div className='PD-properties'>
                        <div>
                            <img src="..\assets\images\ProductDetails\Icon1.png" alt="heart" />
                            <Text1>Size: 1 ft </Text1>
                        </div>

                        <div>
                            <img src="..\assets\images\ProductDetails\Icon2.png" alt="heart" />
                            <Text1>Play time: 3 Hours </Text1>
                        </div>

                        <div>
                            <img src="..\assets\images\ProductDetails\Icon3.png" alt="heart" />
                            <Text1>Charging: 1 Hour </Text1>
                        </div>

                        <div>
                            <img src="..\assets\images\ProductDetails\Icon4.png" alt="heart" />
                            <Text1>Weight: 1.5 Kg </Text1>
                        </div>

                        <div>
                            <img src="..\assets\images\ProductDetails\Icon5.png" alt="heart" />
                            <Text1>Age: 3-5 years </Text1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailsHeader