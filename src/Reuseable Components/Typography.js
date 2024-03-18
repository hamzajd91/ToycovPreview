import styled from "styled-components";

export const Breadcrumb = styled('a')`
font-family: var(--font2);
font-weight: 400;
font-size:14px;
// line-height: 24px;
padding:0px;
margin:0px;
// letter-spacing: 0.5px;
text-transform: capitalize;

color: var(--text-secondary);
  @media (max-width: 600px) {
  
  }
`;

// product details title 
export const ItemTitle = styled('h3')`
font-family: var(--font2);
font-weight: 500;
font-size:30px;
font-size: clamp(20px, 5vw, 30px);
// line-height: 24px;
padding:0px;
margin:0px;
// letter-spacing: 0.5px;
text-transform: capitalize;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;

export const ItemPrice = styled('h3')`
font-family: var(--font3);
font-weight: 700;
font-size:30px;
font-size: clamp(20px, 5vw, 35px);
width:fit-content;
// line-height: 24px;
padding:0px;
margin:0, 0;
// letter-spacing: 0.5px;
text-transform: capitalize;

color: var(--primary);
  @media (max-width: 600px) {
  
  }
`;

export const ItemPriceCut = styled('h3')`
font-family: var(--font3);
font-weight: 400;
font-size:30px;
font-size: clamp(16px, 5vw, 18px);
width:fit-content;
// line-height: 24px;
padding:0px;
margin:0px;
// letter-spacing: 0.5px;
text-transform: capitalize;
text-decoration-line: line-through;

color: var(--text-secondary);
  @media (max-width: 600px) {
  
  }
`;

// footer links
export const Link1 = styled('a')`
font-family: var(--font1);
font-weight: 500;
font-size: clamp(16px, 5vw, 18px);
// line-height: 24px;
padding:0px;
margin:0px;
// letter-spacing: 0.5px;
text-transform: capitalize;

color: var(--text-secondary);
  @media (max-width: 600px) {
  
  }
`;


// grey text small
export const Text1 = styled('p')`
font-family: var(--font3);
font-weight: 400;
font-size: clamp(16px, 5vw, 16px);
// line-height: 24px;
padding:0px;
margin:0px;
// letter-spacing: 0.5px;
text-transform: capitalize;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;
// product details with dot
export const Text2 = styled('p')`
font-family: var(--font3);
font-weight: 400;
line-height: 215%;
font-size: clamp(16px, 5vw, 20px);
// font-size: 20px;
padding:0px;
margin:0px;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;
// Review text
export const Text3 = styled('p')`
font-family: var(--font2);
font-weight: 400;
font-size: 16px;
line-height: 28px;
padding:0px;
margin:0px;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;

export const Text4 = styled('p')`
font-family: var(--font2);
font-weight: 500;
font-size: 18px;
padding:0px;
margin:0px;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;

export const Text5 = styled('p')`
font-family: var(--font2);
width:fit-content;
font-weight: 400;
font-size: 18px;
font-weight: 300;
line-height: 22px;
letter-spacing: 0.5px;
text-transform: capitalize;

padding:0px;
margin:0px;

color: var(--text-secondary);
  @media (max-width: 600px) {
  
  }
`;


export const Admin_s = styled('p')`
font-family: var(--font3);
font-weight: 400;
// font-size: 14px !important;
font-size:  clamp(14px, 5vw,16px) !important;
padding-inline:30px;
padding-block: 5px;
margin:0px;
display:flex;
align-items:center;
gap:5px;

color: var(--text-secondary);
  @media (max-width: 600px) {
  
  }
`;


export const Text_s_p = styled('p')`
font-family: var(--font2);
font-weight: 500;
font-size: 14px;
padding:0px;
margin:0px;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;

export const Text_s_s = styled('p')`
font-family: var(--font2);
font-weight: 400;
font-size: 14px;
padding:0px;
margin:0px;

color: var(--text-secondary);
  @media (max-width: 600px) {
  
  }
`;

export const Text_s_bold = styled('p')`
font-family: var(--font1);
font-weight: 600;
font-size: 14px;
padding:0px;
margin:0px;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;

export const Error_s = styled('p')`
font-family: var(--font1);
font-weight: 400;
font-size: 10px;
padding:0px;
margin:0px;
color: var(--error)
`;
