import React from 'react';
import './App.css';
import KeyRing from './KeyRing';
import AddKeyRing from './AddKeyRing';
import SearchKeyRing from './SearchKeyRing';

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
