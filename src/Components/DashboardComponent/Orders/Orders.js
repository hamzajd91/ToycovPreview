import React from 'react'
import "./orders.css"
import { SubHeading3 } from '../../../Reuseable Components/Headings'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { styled } from "@mui/material/styles";
import DisplayOrders from './DisplayOrders';

const Badge = styled("div")`
  color: var(--text-primary);
  font-size: 14px;
  padding: 8px 10px;
  margin: 0px;
//   cursor: pointer;
  font-family: var(--font1;
  width: 21px;
  height: 21px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: var(--secondary);
  border-radius: 100px;
  font-weight: 600;
  border:none;
`;

const Title = styled("div")`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  @media (max-width: 600px) {
  }
`;

const Orders = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='Orders'>
            <SubHeading3>Be Orders</SubHeading3>

            <div>

                <TabContext value={value}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{ borderBottom: 1, borderColor: 'divider' }}
                        >
                            <Tab label="All Orders" value="1" />
                            <Tab label={<Title>  <img src="..\assets\images\orders\1.png" /> In Progress <Badge>2</Badge>  </Title>} value="2" />
                            <Tab label={<Title>  <img src="..\assets\images\orders\2.png" /> To ship <Badge>3</Badge>  </Title>} value="3" />
                            <Tab label={<Title>  <img src="..\assets\images\orders\3.png" /> To Pay/receive <Badge>4</Badge>  </Title>} value="4" />
                            <Tab label={<Title>  <img src="..\assets\images\orders\3.png" /> Cancelled <Badge>5</Badge>  </Title>} value="5" />
                            <Tab label={<Title>  <img src="..\assets\images\orders\3.png" /> Delivered <Badge>6</Badge>  </Title>} value="6" />
                        </TabList>
                    </Box>


                    <TabPanel value="1"><DisplayOrders flag={1}/></TabPanel>
                    <TabPanel value="2"><DisplayOrders flag={2}/></TabPanel>
                    <TabPanel value="3"><DisplayOrders flag={3}/></TabPanel>
                    <TabPanel value="4"><DisplayOrders flag={4}/></TabPanel>
                    <TabPanel value="5"><DisplayOrders flag={5}/></TabPanel>
                    <TabPanel value="6"><DisplayOrders flag={6}/></TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default Orders