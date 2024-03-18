import React from 'react'
import { SubHeading3 } from "../../../Reuseable Components/Headings";
import { Link1, Text3, Text4 } from "../../../Reuseable Components/Typography"
import { InputSecondary } from "../../../Reuseable Components/Textfields"
import "./Topup.css"
import { ButtonFull_P, Outline_Button_s_l } from '../../../Reuseable Components/Butons';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Topup = (props) => {

  
  const NextStep = () => {
    props?.setstep(1)
};
  return (
    <div className='Topup container container-space'>
      <div className='Topup-split'>
        <div className='Topup-left'>
          <SubHeading3>Be our Partner</SubHeading3>
          <InputSecondary placeholder='Enter top up amount' />

          <div className='topup-pkg'>
            <div className='topup-pkgItem'>
              <Text4> RM 10.00 </Text4>
              <Link1> Price: 10.000 </Link1>
            </div>

            <div className='topup-pkgItem'>
              <Text4> RM 10.00 </Text4>
              <Link1> Price: 10.000 </Link1>
            </div>

            <div className='topup-pkgItem'>
              <Text4> RM 10.00 </Text4>
              <Link1> Price: 10.000 </Link1>
            </div>

            <div className='topup-pkgItem'>
              <Text4> RM 10.00 </Text4>
              <Link1> Price: 10.000 </Link1>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <ButtonFull_P onClick={NextStep}>
              Top Up
            </ButtonFull_P>
          </div>


        </div>

        <div className='Topup-right'>
          <SubHeading3>Payment Method</SubHeading3>

          <Text3> Credit Cards </Text3>
          <hr className='m-0' />
          <InputSecondary placeholder='Enter top up amount' />
          <InputSecondary placeholder='Enter top up amount' />

          <div className='AddCard-btn'>
            <Outline_Button_s_l>
              <AddCircleIcon />
              Add New Card
            </Outline_Button_s_l>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topup