import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id:"id1", title:"강아지 키링", userId: "MinYoung", detail:"멍멍이 소리가 나요", imgUrl: "https://onemorebag.kr/web/upload/NNEditor/20230410/IMG_4258.jpg" },
        {id:"id2", title:"고양이 키링", userId: "MinYoung", detail:"야옹이 소리가 나요", imgUrl: "https://onemorebag.kr/web/upload/NNEditor/20230410/IMG_4258.jpg" },
      ]
    };
  }

  render() {
    var keyRingItems = this.state.items.map(
      (item, index) => (
        <KeyRing item={item} />
      )
    );

    return (
      <div className='App'>
        <Menu />
        {keyRingItems}
      </div>
      );
    }
  }

export default App;
