import { TextField, styled } from "@mui/material";

export const InputTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#6F6D6D',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#ff8849',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#6F6D6D',
        },
        '&:hover fieldset': {
          borderColor: '#6F6D6D',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ff8849',
        },
    }
  });