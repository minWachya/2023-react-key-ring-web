import React from "react";
import { signup } from "../service/ApiService";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Copyright } from "../component/Copyright";
import { InputTextField } from "../component/style/InputTextField";

class SignUp extends React.Component {
    constructor(props) {
        super(props);  
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 작성된 이메일, 비밀번호를 가지고 회원가입 요청
    handleSubmit(event) {
        // submit 클릭 시 고유 동작 막아줌
        event.preventDefault();
        // 데이터 가져오기
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        // 요청
        var response = signup({email: email,  username: username, password: password}).then((response) => {
          // 회원가입 성공 시 로그인 화면으로 이동
          window.location.href = "/login";
        });
        if(response.data === undefined) alert('회원가입에 실패했습니다.');
    }

    render() {
        return (
            <Grid container component="main" sx={{ height: '100vh' }}>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(https://onemorebag.kr/web/product/medium/202303/05c958ec0df831aa86a88a647111dbc4.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: '#69BE28' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    회원가입
                  </Typography>
                  <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                  <InputTextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="사용자 이름"
                      name="username"
                      autoComplete="fname"
                      autoFocus
                    />
                    <InputTextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="이메일 주소"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <InputTextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="비밀번호"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ backgroundColor: "#ff8849" }} 
                      color="secondary" 
                    >
                      회원가입
                    </Button>
                    <Grid container>
                      <Grid item xs>
                      </Grid>
                      <Grid item>
                        <Link href="/login" variant="body2">
                          {"로그인"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
        );
    }
}

export default SignUp;