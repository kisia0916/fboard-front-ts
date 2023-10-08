import React from 'react';
import Home from './pages/Home';
import "./App.css"
import LeftBar from './components/LeftSpace/LeftBar';
import RightBar from './components/RightSpace/RightBar';
import ThreadPage from './pages/ThreadPage';
import ProfileMain from './components/MainScreen/Profile/ProfileMain';
import Login from './pages/Login';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <div className='AppWarpp'>
          {/* レフトバー */}
          <LeftBar/>
          <Home/>
          {/* <Profile/> */}
          {/* <ThreadPage/> */}
          <RightBar/>
          {/* ライトバー */}
          {/* <Login/> */}
      </div>
    </div>
  );
}

export default App;
