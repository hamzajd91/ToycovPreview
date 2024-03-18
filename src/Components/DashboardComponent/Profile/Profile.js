import React, { useState } from 'react'
import "./Profile.css"
import { SubHeading1, SubHeading3 } from '../../../Reuseable Components/Headings'
import { ButtonFull_P, Outline_Button_s_s } from '../../../Reuseable Components/Butons'
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Text1, Text_s_s } from '../../../Reuseable Components/Typography';
import { InputSecondary } from '../../../Reuseable Components/Textfields';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { styled } from "@mui/material/styles";

const StyledRadio = styled(Radio)(({ theme }) => ({
    // color: 'pink',
    '&.Mui-checked': {
        color: 'var(--primary)',
    },
}));

const StyledDate = styled(DatePicker)(({ theme }) => ({
    color: 'pink',
    background: "var(--bg-secondary)",
    width: "30px",

    '&.MuiTextField-root': {
        Width: '100px',
        minWidth: '100px',
    },

}));



const Profile = (props) => {
    const [edit, setedit] = useState(false)
    const [value, setValue] = React.useState('male');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const NextStep = () => {
       props.setstep(2)
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function toggleEdit() {
        setedit(!edit)
    }


    return (
        <div className='Profile container container-space'>
            <div className='ProfileTitle'>
                <SubHeading3>Profile information</SubHeading3>
                {
                    !edit && (
                        <Outline_Button_s_s onClick={toggleEdit}>
                            Edit Profile
                            <EditIcon className='editIcon' />
                        </Outline_Button_s_s>
                    )
                }
            </div>

            <div className='AvatarSection'>
                <div className='avatar-left'>
                    <div className='imgblock'>
                        <img src="" alt="" className='avatarImg' />
                    </div>
                    <div className='profileDetails'>
                        <SubHeading3>Zaire Korsgaard <CheckCircleIcon /> </SubHeading3>
                        <Text_s_s> Customer </Text_s_s>
                        <Text_s_s> leeds, Malaysia </Text_s_s>
                    </div>
                </div>

                {
                    edit && (
          
                            <div className='Upgradebtn-solo'>
                                <img src="..\assets\images\icons\upgrade.png" />
                                <SubHeading1 onClick={NextStep}> Upgrade Account</SubHeading1>
                            </div>
         

                    )
                }

                {
                    !edit && (
                        <div className='avatar-right'>

                            <div className='upgrade-left'>
                                <div>
                                    <Text_s_s> Account type </Text_s_s>
                                    <SubHeading1> Customer Account</SubHeading1>
                                </div>

                                <div>
                                    <Text_s_s> Points earned </Text_s_s>
                                    <SubHeading1> RM 300</SubHeading1>
                                </div>
                            </div>

                            <div className='upgrade-right'>
                                <div className='Upgradebtn'>
                                    <img src="..\assets\images\icons\upgrade.png" />
                                    <SubHeading1 onClick={NextStep}> Upgrade Account</SubHeading1>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>


            <SubHeading3 className='personalInfo' >Personal Information</SubHeading3>

            {/* display info */}
            {
                !edit && (
                    <div className='displayInfo'>
                        <div className='displayInfo-row row'>
                            <div className='col-md-4 col-sm-12'>
                                <Text_s_s> First Name </Text_s_s>
                                <SubHeading1> Zairet</SubHeading1>
                            </div>

                            <div className='col-md-4 col-sm-12'>
                                <Text_s_s> Last Name </Text_s_s>
                                <SubHeading1> Korsgaardt</SubHeading1>
                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-md-4 col-sm-12'>
                                <Text_s_s> Email address </Text_s_s>
                                <SubHeading1> Email@myemail.com <CheckCircleIcon style={{ color: "#2074fb", marginleft: "10px", width: "15px" }} /></SubHeading1>
                            </div>

                            <div className='col-md-4 col-sm-12'>
                                <Text_s_s> Phone number </Text_s_s>
                                <SubHeading1> +444-123456789</SubHeading1>
                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-md-4 col-sm-12'>
                                <Text_s_s> Gender </Text_s_s>
                                <SubHeading1> Male</SubHeading1>
                            </div>

                            <div className='col-md-4 col-sm-12'>
                                <Text_s_s> Date of birth </Text_s_s>
                                <SubHeading1> 27/06/1996</SubHeading1>
                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-sm-12'>
                                <Text_s_s> Address </Text_s_s>
                                <SubHeading1> Electric Avenue street 12  </SubHeading1>
                            </div>
                        </div>

                    </div>
                )
            }

            {/* Edit info */}
            {
                edit && (
                    <div className='displayInfo'>
                        <div className='displayInfo-row row'>
                            <div className='col-md-6 col-sm-12'>
                                <Text1> First Name </Text1>
                                <InputSecondary />
                            </div>

                            <div className='col-md-6 col-sm-12'>
                                <Text1> Last Name </Text1>   <InputSecondary />
                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-md-6 col-sm-12'>
                                <Text1> Email address </Text1>
                                <InputSecondary />
                            </div>

                            <div className='col-md-6 col-sm-12'>
                                <Text1 typeof='password'> Password </Text1>
                                <InputSecondary />
                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-md-6 col-sm-12'>
                                <Text1> Address </Text1>
                                <InputSecondary />
                            </div>

                            <div className='col-md-6 col-sm-12'>
                                <Text1> Phone Number </Text1>
                                <InputSecondary />
                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-sm-12'>
                                <Text1> Gender </Text1>

                                <FormControl>
                                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
                                        <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
                                        <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                        </div>

                        <div className='displayInfo-row row'>
                            <div className='col-sm-12'>
                                <Text1> Date of birth </Text1>



                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <StyledDate label={'"MM"'} openTo="month" views={['month']} onChange={(date) => setMonth(date.format('MM'))} />
                                        <StyledDate label={'"DD"'} openTo="day" views={['day']} onChange={(date) => setDay(date.format('DD'))} />
                                        <StyledDate disableFuture="true" label={'"YY"'} openTo="year" views={['year']} onChange={(date) => setYear(date.format('YY'))} />
                                    </DemoContainer>

                                </LocalizationProvider>

                                <div>

                                </div>

                            </div>
                        </div>

                        <div className='col-md-5 col-sm-12'>
                            <ButtonFull_P onClick={toggleEdit}> Save </ButtonFull_P>
                        </div>

                    </div>
                )
            }

        </div >
    )
}

export default Profile