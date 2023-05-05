import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';
import { call } from "./service/ApiService";
import {Paper, List, Grid} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 키링 아이템 배열
    this.state = {
      items: [],
    };

  }

  componentDidMount() {
    // 키링 목록 불러오기
    call("/keyring", "GET", null).then((response) => 
      this.setState({items: response.data})
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

    return (
      <div className='App'>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            {/* 생성/수정/삭제/검색 UI */}
            <Menu 
              add={this.add}
              modify={this.modify}
              delete={this.delete}
            />
          </Grid>

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
    }
  }

export default App;
