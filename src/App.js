import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {id:"d", title:"dd", detail:"asd", imgUrl: "https://onemorebag.kr/web/upload/NNEditor/20230410/IMG_4258.jpg" },
    };
  }

  render() {
    return (
      <div className='App'>
        <Menu item={this.state.item}/>
        <KeyRing />
      </div>
      );
    }
  }

export default App;
