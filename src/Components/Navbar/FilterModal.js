import React, { useState } from 'react'
import "./FilterModal.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SubHeading4 } from '../../Reuseable Components/Headings';
import { Error_s, Text5 } from '../../Reuseable Components/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button_p_s, Button_s_s } from '../../Reuseable Components/Butons';



const FilterModal = (props) => {

    const { OpenFilter, setOpenFilter } = props

    const [category, setcategory] = useState('')
    const [Condition, setCondition] = useState('')
    const [payment, setPayment] = useState('')
    const [maxPrice, setMaxPrice] = useState()
    const [minPrice, setMinPrice] = useState()
    const [errorMsg, seterrorMsg] = useState('')

    const handleClose = () => setOpenFilter(false);

    const handleCategoryChange = (event) => {
        setcategory(event.target.value);
    };

    const handleConditionChange = (event) => {
        setCondition(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const clearall = () => {
        setcategory('')
        setCondition('')
        setPayment('')
        setMinPrice('')
        setMaxPrice('')
    }

    const applyFilters = () => {
        if (maxPrice <= 0 || minPrice <= 0) {
            seterrorMsg('Error: Maximum and minimum values must be greater than 0');
        } else {
            seterrorMsg('')
            handleClose();
        }
    };

    return (
        <div>
            <Modal
                open={OpenFilter}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='FilterModal'>
                    <SubHeading4>Filter</SubHeading4>
                    <div className='filtersDiv-split'>
                        <div className='w-100'>
                            <div>
                                <SubHeading4>By Category</SubHeading4>

                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'Games'}
                                            onChange={handleCategoryChange} value="Games" />}
                                        label={<Text5>Games</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'Arts and crafts'}
                                            onChange={handleCategoryChange} value="Arts and crafts" />}
                                        label={<Text5>Arts and crafts</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'Stuffed toys'}
                                            onChange={handleCategoryChange} value="Stuffed toys" />}
                                        label={<Text5>Stuffed toys</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'Car toys'}
                                            onChange={handleCategoryChange} value="Car toys" />}
                                        label={<Text5>Car toys</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'dolls'}
                                            onChange={handleCategoryChange} value="dolls" />}
                                        label={<Text5>dolls</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'Vehicles'}
                                            onChange={handleCategoryChange} value="Vehicles" />}
                                        label={<Text5>Vehicles</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'puzzle Games'}
                                            onChange={handleCategoryChange} value="puzzle Games" />}
                                        label={<Text5>puzzle Games</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={category === 'Educational Games'}
                                            onChange={handleCategoryChange} value="Educational Games" />}
                                        label={<Text5>Educational Games</Text5>}
                                    />
                                </FormGroup>
                            </div>

                            <div className='pricingDiv'>
                                <SubHeading4>Price Range</SubHeading4>
                                <Text5>
                                    <input type='number' value={minPrice} onChange={handleMinPriceChange} />
                                    Minimum Price
                                </Text5>
                                <Text5>
                                    <input type='number' value={maxPrice} onChange={handleMaxPriceChange} />
                                    Maximum Price
                                </Text5>
                            </div>
                        </div>
                        <div className='w-100'>
                            <div>
                                <SubHeading4>Condition</SubHeading4>

                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={Condition === 'New'}
                                            onChange={handleConditionChange} value="New" />}
                                        label={<Text5>New</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={Condition === 'Used'}
                                            onChange={handleConditionChange} value="Used" />}
                                        label={<Text5>Used</Text5>}
                                    />
                                </FormGroup>
                            </div>

                            <div>
                                <SubHeading4>Payment Option</SubHeading4>

                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={payment === 'Cash On delivery'}
                                            onChange={handlePaymentChange} value="Cash On delivery" />}
                                        label={<Text5>Cash On delivery</Text5>}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={payment === 'Bank Tranfer'}
                                            onChange={handlePaymentChange} value="Bank Tranfer" />}
                                        label={<Text5>Bank Tranfer</Text5>}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>

                    <div className='FilterButtons'>
                        <Button_s_s onClick={clearall}>
                            Clear All
                        </Button_s_s>

                        <Button_p_s onClick={applyFilters}>
                            Apply Filter
                        </Button_p_s>

                        <Error_s style={{ fontSize: "15px" }}> {errorMsg} </Error_s>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default FilterModal