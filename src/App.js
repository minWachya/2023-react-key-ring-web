import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';
import { call } from "./service/ApiService";
import {Paper, List, Grid} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

  }

  componentDidMount() {
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
  
  // 키링 삭제: Menu의 DeleteKeyRing에 전달
  delete = (item) => {
    call("/keyring", "DELETE", item).then((response) => 
      this.setState({items: response.data})
    );
  };

  render() {
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

    return (
      <div className='App'>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Menu 
              add={this.add}
              delete={this.delete}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={1}>
              {keyRingItems}
            </Grid>
          </Grid>
      </Grid>
      </div>
      );
    }
  }

export default App;
