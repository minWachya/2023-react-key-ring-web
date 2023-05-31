import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';
import { call, signout } from "./service/ApiService";
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],        // 키링 아이템 배열
      loading: true,    // 로딩 여부
      open: true,       // 드로어 여닫힘 여부
    };
    // 드로어 열고닫는 함수
    this.setOpen = this.setOpen.bind(this);
  }

  // 드로어 열고닫기 관리
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
    var keyRingTable = (
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            KeyRing item table
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>UserId</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell align="right">ImgUrl</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{
            this.state.items.length > 0 ? this.state.items.map((item, idx) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.userId}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.detail}</TableCell>
                  <TableCell><img src={item.imgUrl}  alt={item.title} width="50" height="50" /></TableCell>
                 </TableRow>
                  )) : [] }
          </TableBody>
        </Table>
      </Paper>
    ); 

      

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
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* 네비게이션: 메뉴 드로어 열고 닫기 + 로그아웃 버튼 */}
        {navigationBar}
        {/* 키링 생성/검색/수정/삭제 메뉴 드로어 */}
        <MenuDrawer variant="permanent" open={this.state.open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={this.setOpen}> <ChevronLeftIcon /> </IconButton>
          </Toolbar>
          <Divider />
          <Menu 
             add={this.add}
             modify={this.modify}
             delete={this.delete}/>
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
          }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              {/* 아이템 리스트 */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  {keyRingItems}
                </Paper>
              </Grid>

               {/* 아이템 테이블 */}
              <Grid item xs={12}>
                {keyRingTable}
              </Grid>
            </Grid>

            {/* 저작권 표시 코드 */}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    );

    // 로딩 중일 때: 로딩 화면
    var loadingPage = <h1>로딩중...</h1>;

    // 기본 컨텐츠를 로딩 화면으로 초기화
    var content = loadingPage;

    if(!this.state.loading) {
      content = keyringListPage;
    }

    return (
      <div>
        {content}
      </div>
    );
    }
  }

export default App;
