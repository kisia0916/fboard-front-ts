import React from 'react';
import Home from './pages/Home';
import "./App.css"
import LeftBar from './components/LeftSpace/LeftBar';
import RightBar from './components/RightSpace/RightBar';
import ThreadPage from './pages/ThreadPage';
function App() {
  return (
    <div className="App">
      <div className='AppWarpp'>
          {/* レフトバー */}
          <LeftBar/>
          {/* <Home/> */}
          <ThreadPage/>
          <RightBar/>
          {/* ライトバー */}
      </div>
    </div>
  );
}

export default App;
