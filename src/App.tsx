import React, { useState,useEffect } from 'react';
import Home from './pages/Home';
import "./App.css"
import LeftBar from './components/LeftSpace/LeftBar';
import RightBar from './components/RightSpace/RightBar';
import ThreadPage from './pages/ThreadPage';
import ProfileMain from './components/MainScreen/Profile/ProfileMain';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { BrowserRouter,Navigate,Route, Router, Routes } from 'react-router-dom';
import CheckCookieLogin from './logics/CheckCookieLogin';
import ProfileSeMain from './components/MainScreen/Profile2/ProfileSeMain';

function App() {
  const [loginState,setLoginState] = useState<boolean>(true)//ここ本当はfalse
  const [loadState,setLoadState] = useState<boolean>(true)//ここ本当はfalse
  return (
    <div className="App">
      <CheckCookieLogin setStateFun={setLoginState} setLoadStateFun={setLoadState}/>
      <div className='AppWarpp'>
          {/* <LeftBar/> */}
          {loadState?
            <BrowserRouter>
              {loginState?<LeftBar/>:<></>}
              <Routes>
                <Route path='/' element={loginState?<Navigate replace to="/home"/>:<Login setLoginState={setLoginState}/>}/>
                <Route path='/login' element={<Login setLoginState={setLoginState}/>} />
                <Route path='/home' element={loginState?<Home/>:<Navigate replace to="/login"/>}/>
                <Route path='/thread' element={<ThreadPage/>}/>
                <Route path='/profile' element={<ProfileSeMain/>}/>
              </Routes>
              {loginState?<RightBar/>:<></>}
            </BrowserRouter>:<></>}
          {/* <RightBar/> */}
      </div>
    </div>
  );
}

export default App;
