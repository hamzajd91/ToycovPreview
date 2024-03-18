import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Text_s_p, Text_s_s } from '../../../Reuseable Components/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProgressStatus = () => {
    return (
        <div className='status status-progress'>
            <img src="..\assets\images\orders\progress.png" />
            <Text_s_p>In Progress</Text_s_p>
        </div>
    )
}

const DeliveredStatus = () => {
    return (
        <div className='status status-delivered'>
            <img src="..\assets\images\orders\delivered.png" />
            <Text_s_p>Delivered</Text_s_p>
        </div>
    )
}

const ShippedStatus = () => {
    return (
        <div className='status status-shipping'>
            <img src="..\assets\images\orders\shipping.png" />
            <Text_s_p>Shipping</Text_s_p>
        </div>
    )
}

const ReceiveStatus = () => {
    return (
        <div className='status status-receive'>
            <img src="..\assets\images\orders\receive.png" />
            <Text_s_p>To Receive</Text_s_p>
        </div>
    )
}

const CancelledStatus = () => {
    return (
        <div className='status status-cancelled'>
            <img src="..\assets\images\orders\cancelled.png" />
            <Text_s_p>Cancelled</Text_s_p>
        </div>
    )
}

const DisplayOrders = (props) => {
    const { flag } = props

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='setWidth'>
                            <TableCell> </TableCell>
                            <TableCell></TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Payment </TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* map data here ================================ */}
                        {/* ============================================== */}


                        {/* ========== map all =================== */}
                        {flag === 1 && (
                            <TableRow className='setWidth'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='p-0'><img className='Tableimage' src="..\assets/images/Categories/1.png" alt="" /></TableCell>
                                <TableCell>
                                    <div className='titleFlex'>
                                        <Text_s_p>Helicopter toy</Text_s_p>
                                        <Text_s_s>#1736363636</Text_s_s>
                                    </div>
                                </TableCell>
                                <TableCell>  <Text_s_p> RM 15.50 </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Electric Avenue street 12   </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Cash </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> 1 </Text_s_p> </TableCell>
                                <TableCell> <ProgressStatus />  </TableCell>
                                <TableCell> <MoreVertIcon /></TableCell>
                            </TableRow>
                        )}

                        {/* ========== map In Progress =================== */}
                        {flag === 2 && (
                            <TableRow className='setWidth'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='p-0'><img className='Tableimage' src="..\assets/images/Categories/1.png" alt="" /></TableCell>
                                <TableCell>
                                    <div className='titleFlex'>
                                        <Text_s_p>Helicopter toy</Text_s_p>
                                        <Text_s_s>#1736363636</Text_s_s>
                                    </div>
                                </TableCell>
                                <TableCell>  <Text_s_p> RM 15.50 </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Electric Avenue street 12   </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Cash </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> 1 </Text_s_p> </TableCell>
                                <TableCell> <ProgressStatus />  </TableCell>
                                <TableCell> <MoreVertIcon /></TableCell>
                            </TableRow>
                        )}

                        {/* ========== map To ship =================== */}
                        {flag === 3 && (
                            <TableRow className='setWidth'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='p-0'><img className='Tableimage' src="..\assets/images/Categories/1.png" alt="" /></TableCell>
                                <TableCell>
                                    <div className='titleFlex'>
                                        <Text_s_p>Helicopter toy</Text_s_p>
                                        <Text_s_s>#1736363636</Text_s_s>
                                    </div>
                                </TableCell>
                                <TableCell>  <Text_s_p> RM 15.50 </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Electric Avenue street 12   </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Cash </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> 1 </Text_s_p> </TableCell>
                                <TableCell> <ShippedStatus />  </TableCell>
                                <TableCell> <MoreVertIcon /></TableCell>
                            </TableRow>
                        )}

                        {/* ========== map To Pay/receive =================== */}
                        {flag === 4 && (
                            <TableRow className='setWidth'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='p-0'><img className='Tableimage' src="..\assets/images/Categories/1.png" alt="" /></TableCell>
                                <TableCell>
                                    <div className='titleFlex'>
                                        <Text_s_p>Helicopter toy</Text_s_p>
                                        <Text_s_s>#1736363636</Text_s_s>
                                    </div>
                                </TableCell>
                                <TableCell>  <Text_s_p> RM 15.50 </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Electric Avenue street 12   </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Cash </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> 1 </Text_s_p> </TableCell>
                                <TableCell> <ReceiveStatus />  </TableCell>
                                <TableCell> <MoreVertIcon /></TableCell>
                            </TableRow>
                        )}

                        {/* ========== map Cancelled =================== */}
                        {flag === 5 && (
                            <TableRow className='setWidth'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='p-0'><img className='Tableimage' src="..\assets/images/Categories/1.png" alt="" /></TableCell>
                                <TableCell>
                                    <div className='titleFlex'>
                                        <Text_s_p>Helicopter toy</Text_s_p>
                                        <Text_s_s>#1736363636</Text_s_s>
                                    </div>
                                </TableCell>
                                <TableCell>  <Text_s_p> RM 15.50 </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Electric Avenue street 12   </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Cash </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> 1 </Text_s_p> </TableCell>
                                <TableCell> <CancelledStatus />  </TableCell>
                                <TableCell> <MoreVertIcon /></TableCell>
                            </TableRow>
                        )}

                        {/* ========== map Delivered =================== */}
                        {flag === 6 && (
                            <TableRow className='setWidth'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='p-0'><img className='Tableimage' src="..\assets/images/Categories/1.png" alt="" /></TableCell>
                                <TableCell>
                                    <div className='titleFlex'>
                                        <Text_s_p>Helicopter toy</Text_s_p>
                                        <Text_s_s>#1736363636</Text_s_s>
                                    </div>
                                </TableCell>
                                <TableCell>  <Text_s_p> RM 15.50 </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Electric Avenue street 12   </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> Cash </Text_s_p> </TableCell>
                                <TableCell>  <Text_s_p> 1 </Text_s_p> </TableCell>
                                <TableCell> <DeliveredStatus />  </TableCell>
                                <TableCell> <MoreVertIcon /></TableCell>
                            </TableRow>
                        )}



                    </TableBody>
                </Table>
            </TableContainer>









        </div>
    )
}

export default DisplayOrders