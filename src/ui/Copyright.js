import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://min-wachya.tistory.com/">
          20190054 이민영 
        </Link>
         {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }