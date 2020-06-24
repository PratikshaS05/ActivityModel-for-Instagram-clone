import React from 'react';
import logo from './logo.svg';
import './App.css';
import Follow from './components/Follow';
import Following from './components/Following';
import Following1 from './components/Follower1';
import Following2 from './components/Following2';
import Following3 from './components/Following3';

function App() {
  return (
    <div className="App">
      <Follow />
       <Following />
       <Following1 />
       <Following2 />
       <Following3 />
    </div>
  );
}

export default App;
