import React from 'react'
import "./Footer.css"
import { Grid, Typography } from '@mui/material'
import Footerlogo from "./FooterLogo.png"
import { Link1 } from '../../Reuseable Components/Typography'
import addressIcon from "./address.png"
import phodeIcon from "./phone.png"
import mailIcon from "./mail.png"

import heliImg from "./heli.png"
import train from "./train.png"
import puzzle1 from "./puzzle1.png"
import puzzle2 from "./puzzle2.png"
import puzzle3 from "./puzzle3.png"
import { Heading4 } from '../../Reuseable Components/Headings'

const Footer = () => {
    return (
        <div className='Footer-main'>

<img src={ heliImg } alt="" />
<img src={ train } alt="" />
<img src={ puzzle1 } alt="" />
<img src={ puzzle1 } alt="" />
<img src={ puzzle2 } alt="" />
<img src={ puzzle3 } alt="" />

            <div className='container footercheck'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <img src={Footerlogo} alt='Footerlogo' />

                        <div className='FooterCol1'>
                            <div className=''>
                                <img src={addressIcon} alt="address" />
                                <Link1>Street 16, Park Avenue</Link1>
                            </div>

                            <div className=''>
                                <img src={phodeIcon} alt="phone" />
                                <Link1>092-12345678</Link1>
                            </div>

                            <div className=''>
                                <img src={mailIcon} alt="mail" />
                                <Link1>www.Toyscove.com</Link1>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={2.2}>
                        <Heading4>Information</Heading4>
                        <div className='midColumn'>
                            <Link1>Overview</Link1>
                            <Link1>Features</Link1>
                            <Link1>Solutions</Link1>
                            <Link1>Tutorials</Link1>
                            <Link1>Pricing</Link1>
                            <Link1>Releases</Link1>
                        </div>


                    </Grid>
                    <Grid item xs={12} sm={2.2}>
                        <Heading4>My Account</Heading4>
                        <div className='midColumn'>
                            <Link1>About us</Link1>
                            <Link1>Careers</Link1>
                            <Link1>Press</Link1>
                            <Link1>News</Link1>
                            <Link1>Media kit</Link1>
                            <Link1>Contact</Link1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={2.2}>
                        <Heading4>Services</Heading4>
                        <div className='midColumn'>
                            <Link1>Blog</Link1>
                            <Link1>Newsletter</Link1>
                            <Link1>Events</Link1>
                            <Link1>Help centre</Link1>
                            <Link1>Tutorials</Link1>
                            <Link1>Support</Link1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={2.2}>
                        <Heading4>Follow Us</Heading4>
                        <div className='FooterCol1'>
                            <div className=''>
                                <img src={addressIcon} alt="address" />
                                <Link1>Facebook</Link1>
                            </div>

                            <div className=''>
                                <img src={phodeIcon} alt="phone" />
                                <Link1>Twitter</Link1>
                            </div>

                            <div className=''>
                                <img src={mailIcon} alt="mail" />
                                <Link1 href="">Instagram</Link1>
                            </div>
                        </div>

                    </Grid>
                </Grid>

                <p className='flex-center footerCopyRight'>Copyright © 2020. LogoIpsum. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer   