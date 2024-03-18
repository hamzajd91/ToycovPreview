import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const Container = styled(Grid)`
border : 3px solid lime
  @media (max-width: 600px) {
    border: 2px solid red;
  }
`;