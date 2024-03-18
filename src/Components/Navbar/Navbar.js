import React, { useState } from 'react'
import "./Navbar.css"
import SeractIcon from "./Search.png"
import FilterIcon from "./Filter.png"
import CartIcon from "./Cart.png"
import flag1 from "./flag_malaysia.png"
import flag2 from "./flag_english.png"
import Dropdown1_2 from '../../Reuseable Components/Dropdown1_2'
import FilterModal from './FilterModal'

const Navbar = () => {

    const [OpenFilter, setOpenFilter] = useState(false)
    const handleOpen = () => {
        setOpenFilter(true);
    }

    return (
        <div className='navMain'>

            <FilterModal OpenFilter={OpenFilter} setOpenFilter={setOpenFilter} />

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <a class="navbar-brand" href="#">
                        <img className="navLogo" src="..\assets\images\toucove.png" alt="Toys cove" />
                    </a>

                    <div>
                        <ul className='navbar-nav nav-phone-icons'>
                            <li className='CartIcon'>
                                <div> 0 </div>
                                <img src={CartIcon} />
                            </li>
                            <li> <img src="..\assets\images\toucove.png" className='profileImg' /> {/* prifile icon*/}</li>


                        </ul>
                    </div>

                    <div class="collapse navbar-collapse nav-split" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto navSearch-div" >
                            <li class="nav-item">
                                <input className='navSearch' placeholder='What are you looking for' />
                                <button className='navBtn'>
                                    <img src={SeractIcon} alt="Search" />
                                </button>
                            </li>
                            <li class="nav-item">
                                <button className='navBtn' onClick={handleOpen}>
                                    <img src={FilterIcon} alt="Filter" />
                                    <span>Filter</span>
                                </button>
                            </li>
                        </ul>

                        <div className='navRight'>
                            <ul className='navbar-nav mr-auto'>
                                <li> <img src="..\assets\images\toucove.png" className='profileImg nav-large-icons' /> {/* prifile icon*/}</li>
                                <li className='CartIcon nav-large-icons'>
                                    <div> 0 </div>
                                    <img src={CartIcon} />
                                </li>

                                <li class="nav-item dropdown">

                                    <Dropdown1_2
                                        placeholder="Language"
                                        options={[
                                            <div className='labelFlag'> <img src={flag1} alt="malaysia" /> Malaysia</div>,
                                            <div className='labelFlag'> <img src={flag2} alt="English" /> English</div>
                                        ]}
                                    />


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar