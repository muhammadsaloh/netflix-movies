import { styled, TextField, Typography } from '@mui/material';

export const List = styled('ul')`
  padding: 20px;
`;

export const Item = styled('li')`
  display: inline-block;
  padding: 0px 20px 20px 0px;
`;

export const CategoryList = styled('div')`
  margin-top: 32px;
`;

export const StyledTypography = styled(Typography)`
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s ease;
  color: white;
  padding: 0px 15px;

  &&:hover {
    color: red;
  }
`;

export const ActiveTypography = styled(Typography)`
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s ease;
  color: red;
  padding: 0px 15px;
`;

export const SearchInput = styled(TextField)`
  background-color: #fff;
  outline: none;
  width: 375px;

  input {
    outline: none;
  }
`;
