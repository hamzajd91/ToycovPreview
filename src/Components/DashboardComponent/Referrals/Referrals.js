import React from 'react'
import "./Referrals.css"
import { SubHeading3 } from '../../../Reuseable Components/Headings'
import { Link1, Text_s_s } from '../../../Reuseable Components/Typography'
import SendIcon from '@mui/icons-material/Send';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { InputSecondary } from '../../../Reuseable Components/Textfields'
import { IconButton } from '@mui/material';
import ReferralsCard from './ReferralsCard';
const Referrals = () => {
    return (
        <div className='referrals'>
            <div>
                <SubHeading3 style={{ fontSize: "30px" }}>Referrals</SubHeading3>
                <Text_s_s>Send your referral link to your friends and tell them how cool toy’s cove is!</Text_s_s>
            </div>

            <div className='ref-row2'>
                <SubHeading3>Invite them by email</SubHeading3>
                <Text_s_s>Send invitation to your friends and ask them to join toys cove</Text_s_s>
                <div className='ref-Email-input'>
                    <InputSecondary placeholder='Email Address' />
                    <IconButton>
                        <SendIcon />
                    </IconButton>
                </div>
            </div>

            <div className='ref-row3'>
                <SubHeading3>Share Referral link</SubHeading3>
                <Text_s_s>Copy the referral code and send it to your friends, let them register using your referral link or code</Text_s_s>
                <div className='ref-share-input'>
                    <InputSecondary placeholder='#TC34872462613614' />
                    <IconButton>
                        <Link1>COPY CODE</Link1>
                    </IconButton>

                    <div>
                        <IconButton>
                            <ShareOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='ref-sharebuttons'>
                    <button className='ref-whatsapp'>
                        <img src="../assets/images/icons/whatsapp.png" alt="whatsapp" />
                        Share on whatsapp
                    </button>

                    <button className='ref-facebook'>
                        <img src="../assets/images/icons/facebook.png" alt="facebook" />
                        Share on facebook
                    </button>

                </div>

            </div>


            <SubHeading3>Members</SubHeading3>

            <div className='ref-cardList'>
                <ReferralsCard />
                <ReferralsCard />
                <ReferralsCard />
                <ReferralsCard />
                <ReferralsCard />
            </div>
        </div>
    )
}

export default Referrals