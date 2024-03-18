import styled from "styled-components";

export const Heading1 = styled('h2')`
font-family: var(--font1);
font-weight: 700;
font-size: 40px;
font-size: clamp(30px, 5vw, 40px);
// line-height: 22px;
padding:0px;
margin:0px;
letter-spacing: 0.5px;
text-transform: capitalize;

color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;

export const Heading2 = styled('h2')`
font-family: var(--font1);
font-weight: 700;
font-size: 40px;
font-size: clamp(25px, 5vw, 30px);
// line-height: 22px;
padding:0px;
margin:0px;
letter-spacing: 1px;
text-transform: capitalize;
color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;


export const Heading3 = styled('h2')`
font-family: var(--font1);
font-weight: 700;
font-size: 40px;
font-size: clamp(25px, 5vw, 30px);
// line-height: 22px;
padding:0px;
margin:0px;
letter-spacing: 1px;
text-transform: capitalize;
color: var(--text-primary);
  @media (max-width: 600px) {
  
  }
`;


export const Heading4 = styled('h2')`
  font-family: var(--font1);
  font-weight: 600;
  font-size: 20px;
  // font-size: clamp(17px, 5vw,201px);
  // line-height: 22px;
  padding: 0px;
  margin: 10px 0px;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: var(--text-primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary);
  }

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;



export const SubHeading1 = styled('h4')`
  font-family: var(--font3);
  font-weight: 500;
  font-size: 15px;
  padding: 0px;
  margin: 0px;
  text-transform: capitalize;
  color: var(--text-primary);

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;

export const SubHeading2 = styled('h4')`
  font-family: var(--font3);
  font-weight: 700;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  text-transform: capitalize;
  color: var(--text-primary);

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;

export const SubHeading3 = styled('h4')`
  font-family: var(--font2);
  font-weight: 500;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  color: var(--text-primary);

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;

export const SubHeading4 = styled('h4')`
  font-family: var(--font2);
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: capitalize;

  padding: 0px;
  margin-bottom: 15px;
  color: var(--text-primary);

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;

export const SubHeading5 = styled('p')`
  font-family: var(--font3);
  font-weight: 400;
  font-size: clamp(16px, 5vw,19px);
  letter-spacing: 0.5px;
  text-transform: capitalize;
  display:flex;
  align-items: center;
  gap:5px;

  padding: 0px;
  margin-bottom: 0px;
  color: var(--text-primary);

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;

export const AdminHeading = styled('h4')`
  font-family: var(--font1);
  font-weight: 600;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  text-transform: capitalize;
  color: var(--text-primary);

  @media (max-width: 600px) {
    // Additional responsive styles if needed
  }
`;