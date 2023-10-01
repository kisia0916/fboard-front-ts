import React from 'react';
import Home from './pages/Home';
import "./App.css"
import LeftBar from './components/LeftSpace/LeftBar';
import RightBar from './components/RightSpace/RightBar';
function App() {
  return (
    <div className="App">
      <div className='AppWarpp'>
          {/* レフトバー */}
          <LeftBar/>
          <Home/>
          <RightBar/>
          {/* ライトバー */}
      </div>
    </div>
  );
}

export default App;
