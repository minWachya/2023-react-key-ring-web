import React from 'react';
import './App.css';
import KeyRing from './KeyRing';
import AddKeyRing from './AddKeyRing';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <AddKeyRing />
        <KeyRing />
      </div>
      );
    }
  }

export default App;
