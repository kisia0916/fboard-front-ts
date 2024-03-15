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
import FriendList from './pages/FriendList';
import JoinedThread from './pages/JoinedThread';
import SearchPage from './pages/SearchPage';
import io from "socket.io-client";
import { useCookies } from 'react-cookie';
import { analyzeStatus } from './socket/analyzeStatus';
export const mkPostWindowContext:any = createContext({})
export const socket = io("localhost:5000")
function App() {
  const [loginState,setLoginState] = useState<boolean>(false)//ここ本当はfalse
  const [loadState,setLoadState] = useState<boolean>(false)//ここ本当はfalse
  const [mkPostWindowState,setMkPostWindowState] = useState<string>("")
  const [mkPostTitle,setMkPostTitle] = useState("")
  const [cookies,setCookie] = useCookies()
  const [firstSocketFlg,setFirstSocketFlg] = useState<boolean>(false)
  useEffect(()=>{
    if (loginState){
      const status = analyzeStatus(window)
      socket.emit("user_connection",{name:cookies.name,icon:cookies.icon, status:status,userId:cookies.userId})
    }
  },[loginState])
  socket.on("user_connection_res",(data)=>{setFirstSocketFlg(true)})
  return (
    <>    <CheckCookieLogin setStateFun={setLoginState} setLoadStateFun={setLoadState}/>
      <mkPostWindowContext.Provider value={{mkPostWindowState,setMkPostWindowState,mkPostTitle,setMkPostTitle}}>
        <MkPostWindowMain mkstate={mkPostWindowState}/>
        <div className="App">

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
                      <Route path='/friendlist' element={<FriendList/>}/>
                      <Route path='/jointhread' element={<JoinedThread/>}/>
                      <Route path='/thread/:id' element={<ThreadPage/>}/>
                      <Route path='/profile/:id' element={<ProfileSeMain/>}/>
                      <Route path='/search/:word' element={<SearchPage/>}/>
                  </Routes>
                  {loginState && firstSocketFlg?<RightBar/>:<></>}
                </BrowserRouter>:<></>}
              {/* <RightBar/> */}
          </div>
       <div/>
       </div>
       </mkPostWindowContext.Provider>
       </>

  );
}

export default App;
