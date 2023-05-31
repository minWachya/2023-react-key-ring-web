import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';
import { call, signout } from "./service/ApiService";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Paper, List, Grid, Toolbar, Typography, CssBaseline} from "@mui/material";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import { Copyright } from "./ui/Copyright";
import { KeyRingAppBar } from "./ui/KeyRingAppBar";
import { MenuDrawer } from "./ui/MenuDrawer";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 키링 아이템 배열
    this.state = {
      items: [],
      loading: true,
      open: true,
    };
    this.setOpen = this.setOpen.bind(this);
  }

  // 슬라이드 메뉴 열고닫기 관리
  setOpen() {
    this.setState({open: !this.state.open})
}

  componentDidMount() {
    // 키링 목록 불러오기
    call("/keyring", "GET", null).then((response) => 
      this.setState({items: response.data, loading: false})
    );
  }

  // 키링 추가: Menu의 AddKeyRing에 전달
  add = (item) => {
    call("/keyring", "POST", item).then((response) => 
      this.setState({items: response.data})
    );
  };

  // 키링 수정: Menu의 ModifyKeyRing에 전달
  modify = (item) => {
    call("/keyring", "PUT", item).then((response) => 
      this.setState({items: response.data})
    ).then((response) => {
      call("/keyring", "GET", null).then((response) => 
      this.setState({items: response.data})
    );
    });
  };

  // 키링 삭제: Menu의 DeleteKeyRing에 전달
  delete = (item) => {
    call("/keyring", "DELETE", item).then((response) => 
      this.setState({items: response.data})
    );
  };

  render() {
    // MUI 키링 아이템
    var keyRingItems = this.state.items.length > 0 && (
      <List>
          {this.state.items.map((item, idx) => (
            <Paper style={{margin: 16}}>
              <KeyRing 
                item={item} 
                key={item.id} 
                delete={this.delete}
                update={this.update}
                />
              </Paper>
            ))}
        </List>
    );

    // 테이블 키링 아이템
    var tableItems = this.state.items.length > 0 ? this.state.items.map((item, idx) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.detail}</td>
            <td><img src={item.imgUrl} 
                    alt={item.title} 
                    width="50" 
                    height="50" /></td>
          </tr>
          )) : [];  

    var navigationBar = (
      <KeyRingAppBar position="absolute" open={this.state.open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.setOpen}
              sx={{
                marginRight: '36px',
                ...(this.state.open && { display: 'none' }),
              }}
            >

              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              키링 쇼핑몰: 20190054 이민영
            </Typography>
            <IconButton color="inherit" onClick={signout}>
              <LogoutIcon />  
            </IconButton>
          </Toolbar>
        </KeyRingAppBar>
        );

    var keyringListPage = (
      <div>
        {navigationBar}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            {/* MUI 키링 아이템 */}
            {keyRingItems}
          </Grid>
          
          <Grid item xs={12} sm={4}>
            {/* 테이블 키링 아이템 */}
            <table border="1">
              <caption>KeyRing item table</caption>
              <thead>
                <th>id</th>
                <th>userId</th>
                <th>title</th>
                <th>detail</th>
                <th>imgUrl</th>
              </thead>
              <tbody>
                {tableItems}
              </tbody>
            </table>
          </Grid>

      </Grid>
      </div>
    );

    // 로딩 중일 때: 로딩 화면
    var loadingPage = <h1>로딩중...</h1>;

    // 기본 컨텐츠를 로딩 화면으로 초기화
    var content = loadingPage;

    if(!this.state.loading) {
      content = keyringListPage;
    }

    const defaultTheme = createTheme();

    return (
      <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <MenuDrawer variant="permanent" open={this.state.open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={this.setOpen}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Menu 
             add={this.add}
             modify={this.modify}
             delete={this.delete}/>
          </List>
        </MenuDrawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* 아이템 리스트 */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {content}
                </Paper>
              </Grid>
              {/* 메뉴 */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {tableItems}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
      </ThemeProvider>
      // <div className='App'>
      //   {content}
      // </div>
    );
    }
  }

export default App;
