import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import Menu from './component/Menu';

class App extends React.Component {


  render() {
    return (
      <div className='App'>
          <Menu />
      
        <KeyRing />
      </div>
      );
    }
  }

export default App;
