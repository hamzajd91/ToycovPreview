import React from 'react'
import "./ProductBundles.css"
import { AdminHeading } from '../../../Reuseable Components/Headings'
import { ButtonFull_P, Button_p_s_a } from '../../../Reuseable Components/Butons'
import { Box, Grid, OutlinedInput } from '@mui/material'

const ProductBundles = () => {
    return (
        <div>
            <div className='flex-space'>
                <AdminHeading>Product Bundles  </AdminHeading>
                <Button_p_s_a> Create Bundle </Button_p_s_a>
            </div>

            <div className='BundlesContainer'>
                <Grid container className='BundleFilters'>
                    <Grid item md={4.9}>
                        <OutlinedInput
                            fullWidth
                            small
                            placeholder='Search Bundle ID'
                        >
                        </OutlinedInput>
                    </Grid>
                    <Grid item md={4.9}>
                        <OutlinedInput
                            fullWidth
                            small
                            placeholder='Bundle Status'
                        >
                        </OutlinedInput>
                    </Grid>
                    <Grid item md={1.9}>
                        <ButtonFull_P> Reset </ButtonFull_P>
                    </Grid>
                </Grid>

                <Box className="BundlesTable">
                    <Grid container className='BundlesTableHeader'>
                        <Grid item md={2.4}>
                            <p> Educational </p>
                        </Grid>

                        <Grid item md={2.4}>
                            <p> Products </p>
                        </Grid>

                        <Grid item md={2.4}>
                            <p> Promotions </p>
                        </Grid>

                        <Grid item md={2.4}>
                            <p> Bundle status </p>
                        </Grid>

                        <Grid item md={2.4}>
                            <p> Action </p>
                        </Grid>
                    </Grid>

                    {/*    body to map in  */}

                    <Grid container className='BundlesTableRow'>
                        <Grid container>
                            <Grid item md={2.4}>
                                <p> Educational </p>
                            </Grid>

                            <Grid item md={2.4}>
                                <p> Products </p>
                            </Grid>

                            <Grid item md={2.4}>
                                <p> Promotions </p>
                            </Grid>

                            <Grid item md={2.4}>
                                <p> Bundle status </p>
                            </Grid>

                            <Grid item md={2.4}>
                                <p> Action </p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </div>

        </div>
    )
}

export default ProductBundles