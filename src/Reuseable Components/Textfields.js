import styled from "styled-components";
import OutlinedInput from "@mui/material/OutlinedInput";

export const InputSecondary = styled('input')`
font-family: var(--font1);
padding:10px;
width:100%;
height:50px;
border-radius:4px;
outline:0px;
border:none;
background:var(--bg-secondary);
color: var(--text-primary);

  @media (max-width: 600px) {
  
  }
`;



export const InputPrimary = styled(OutlinedInput)`
font-family: var(--font1);
padding:0px; 
width:100%;
height:50px;
border-radius:4px;
outline:0px;
border:none;
background:var(--bg-primary);
margin-bottom:10px;

&.Mui-focused {
  border: none !important;
  outline: none !important;
}

  @media (max-width: 600px) {
  
  }
`;

