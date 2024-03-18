
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

export const S_Button = styled("button")`
  color: white;
  font-size: 20px;
  padding: 5px 60px;
  margin: 10px 0px;
  cursor: pointer;
  font-family: var(--font1);
//   width: 100%;
//   background: #c2a367 0% 0% no-repeat padding-box !important;
  background: var(--primary);
  border-radius: 100px;
  opacity: 1;
  text-transform: none;
  font-weight: 600;
  border:none;
  &:hover {
    background: var(--secondary);
  }
  @media (max-width: 600px) {
    /* Apply the desired color for 600px screen width */
  }
`;

export const Button_p_l = styled("button")`
  color: white;
  font-size: 14px;
  padding: 8px 60px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font3);
//   width: 100%;
  background: var(--primary);
  border-radius: 4px;
  font-weight: 700;
  border:none;
  @media (max-width: 600px) {
  }
`;

export const Button_p_s = styled("button")`
  color: white;
  font-size: 14px;
  padding: 5px 30px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font3);
  background: var(--primary);
  border-radius: 4px;
  font-weight: 700;
  border:none;
  @media (max-width: 600px) {
  }
`;

export const Button_p_s_a = styled("button")`
  color: white;
  font-size: 14px;
  padding: 5px 30px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font1);
  background: var(--primary);
  border-radius: 4px;
  font-weight: 500;
  border:none;
  @media (max-width: 600px) {
  }
`;

export const Button_s_s = styled("button")`
  color: var(--text-secondary);
  font-size: 14px;
  padding: 5px 30px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font3);
  background: var(--secondary);
  border-radius: 4px;
  font-weight: 700;
  border:none;
  @media (max-width: 600px) {
  }
`;

export const ButtonFull_P = styled("button")`
  font-size: 16px;
  padding: 8px 60px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font2);
  width: 100%;
  color:white;
  background: var(--primary);
  border-radius: 4px;
  font-weight: 600;
  border:none;
  @media (max-width: 600px) {
  }
`;

export const Outline_Button_p_l = styled("button")`
  color: var(--primary);
  font-size: 14px;
  padding: 8px 60px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font3);
//   width: 100%;
  background: transparent;
  border-radius: 4px;
  font-weight: 700;
  border:2px solid var(--primary);
  @media (max-width: 600px) {
  }
`;

export const Outline_Button_s_l = styled("button")`
  color: var(--text-primary);
  font-size: 14px;
  padding: 8px 60px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font2);
//   width: 100%;
  background: transparent;
  border-radius: 4px;
  font-weight: 700;
  border:2px solid var(--secondary);
  @media (max-width: 600px) {
  }
`;

export const Outline_Button_p_s = styled("button")`
  color: var(--primary);
  font-size: 14px;
  padding: 8px 30px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font3);
//   width: 100%;
  background: transparent;
  border-radius: 4px;
  font-weight: 700;
  border:2px solid var(--primary);
  @media (max-width: 600px) {
  }
`;

export const Outline_Button_s_s = styled("button")`
  color: var(--text-primary);
  font-size: 14px;
  padding: 8px 30px;
  margin: 0px;
  cursor: pointer;
  font-family: var(--font3);
//   width: 100%;
  background: transparent;
  border-radius: 4px;
  font-weight: 700;
  border:1px solid var(--text-secondary);
  @media (max-width: 600px) {
  }
`;

export const PrimaryBtn_pill = styled("button")`
  color: white;
  border-radius: 25px;

  font-family: var(--font2);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border:none;
  padding: 5px 20px;
  cursor: pointer;
  background: var(--primary);
  &:hover {
    // background: var(--secondary);
  }
  @media (max-width: 600px) {

  }
`;

export const SecondaryBtn_pill = styled("button")`
  color: var(--text-primary);
  border-radius: 25px;

  font-family: var(--font2);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border:none;
  padding: 5px 20px;
  cursor: pointer;
  background: var(--secondary);
  &:hover {
    // background: var(--secondary);
  }
  @media (max-width: 600px) {

  }
`;