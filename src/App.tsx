import React, { useState,useEffect, useContext, createContext } from 'react';
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
import MkPostWindowMain from './components/MkPostWindow/MkPostWindowMain';
export const mkPostWindowContext:any = createContext({})
function App() {
  const [loginState,setLoginState] = useState<boolean>(false)//ここ本当はfalse
  const [loadState,setLoadState] = useState<boolean>(false)//ここ本当はfalse
  const [mkPostWindowState,setMkPostWindowState] = useState<string>("")
  const [mkPostTitle,setMkPostTitle] = useState("")
  return (
    <div className="App">
      <CheckCookieLogin setStateFun={setLoginState} setLoadStateFun={setLoadState}/>
      <mkPostWindowContext.Provider value={{mkPostWindowState,setMkPostWindowState,mkPostTitle,setMkPostTitle}}>
          <MkPostWindowMain mkstate={mkPostWindowState}/>
          <div className='AppWarpp'>
          {/* <MkPostWindowMain/> */}
              {/* <LeftBar/> */}
              {loadState?
                <BrowserRouter>
                  {loginState?<LeftBar/>:<></>}
                  <Routes>
                    <Route path='/' element={loginState?<Navigate replace to="/home"/>:<Login setLoginState={setLoginState}/>}/>
                    <Route path='/login' element={loadState?<Navigate replace to="/home"/>:<Login setLoginState={setLoginState}/>} />
                    <Route path='/home' element={loginState?<Home/>:<Navigate replace to="/login"/>}/>
                    <Route path='/thread/:id' element={<ThreadPage/>}/>
                    <Route path='/profile' element={<ProfileSeMain/>}/>
                  </Routes>
                  {loginState?<RightBar/>:<></>}
                </BrowserRouter>:<></>}
              {/* <RightBar/> */}
          </div>
       </mkPostWindowContext.Provider>
    </div>
  );
}

export default App;
