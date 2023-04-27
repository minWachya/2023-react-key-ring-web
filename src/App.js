import React from 'react';
import './App.css';
import KeyRing from './component/KeyRing';
import AddKeyRing from './component/AddKeyRing';
import SearchKeyRing from './component/SearchKeyRing';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div>
          <AddKeyRing />
          <SearchKeyRing />
        </div>
      
        <KeyRing />
      </div>
      );
    }
  }

export default App;
