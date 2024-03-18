import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

let fullw



const DropdownSize = styled('button')`
  width: 200px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;
  height: 50px;
  border: none;
  background: var(--bg-secondary);
  color: var(--text-primary);
  @media (max-width: 600px) {
  }
`;

const DropdownFull = styled('button')`
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;
  height: 50px;
  border: none;
  background: var(--bg-secondary);
  color: var(--text-primary);
  @media (max-width: 600px) {
  }
`;

const Dropdown1_2 = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.placeholder ? props.placeholder : "");
  fullw = props?.fullwidth

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className="btn-group">

      {props.fullwidth ?
        <>
          <DropdownFull
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {selectedOption}
            {/* <KeyboardArrowDownIcon style={{ transform: 'scale(0.9)' }} /> */}
          </DropdownFull>
        </> :
        <>
          <DropdownSize
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {selectedOption}
            {/* <KeyboardArrowDownIcon style={{ transform: 'scale(0.9)' }} /> */}
          </DropdownSize>
        </>}

      <div className="dropdown-menu dropdown-menu-right" style={{ width: '100%', position:"absolute" }}>
        {props.options.map((option, index) => (
          <button
            key={index}
            className="dropdown-item"
            type="button"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown1_2;
