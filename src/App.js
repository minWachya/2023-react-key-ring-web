import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
    var keyRingItems = this.state.items.map(
      (item, index) => (
        <KeyRing item={item} />
      )
    );

    return (
      <div className='App'>
        <Menu 
          add={this.add}
          delete={this.delete}
        />
        {keyRingItems}
      </div>
      );
    }
  }

export default App;
