import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {id:"id", title:"강아지 키링", userId: "MinYoung", detail:"멍멍이 소리가 나요", imgUrl: "https://onemorebag.kr/web/upload/NNEditor/20230410/IMG_4258.jpg" },
    };
  }

  render() {
    return (
      <div className='App'>
        <Menu />
        <KeyRing item={this.state.item}/>
      </div>
      );
    }
  }

export default App;
