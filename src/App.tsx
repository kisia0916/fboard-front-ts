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
import MoveProfile from './pages/MoveProfile';
export const mkPostWindowContext:any = createContext({})
export const nowJoinPageSetFn:any = createContext(()=>{})
export const socket = io("localhost:5000")

interface pageStateType {
  page:string,
  value:string
}

function App() {
  const [loginState,setLoginState] = useState<boolean>(false)//ここ本当はfalse
  const [loadState,setLoadState] = useState<boolean>(false)//ここ本当はfalse
  const [mkPostWindowState,setMkPostWindowState] = useState<string>("")
  const [mkPostTitle,setMkPostTitle] = useState("")
  const [cookies,setCookie] = useCookies()
  const [firstSocketFlg,setFirstSocketFlg] = useState<boolean>(false)
  const [nowJoinPageId,setNowJoinPageId] = useState<pageStateType>({page:"",value:""})
  const [beforeJoinPageId,setBeforeJoinPageId] = useState<pageStateType>({page:"",value:""})

  useEffect(()=>{
    if (loginState){
      const status = analyzeStatus(window)
      socket.emit("user_connection",{name:cookies.name,icon:cookies.icon, status:status,userId:cookies.userId})
    }
  },[loginState])
  useEffect(()=>{
    if (beforeJoinPageId.page === "thread" && beforeJoinPageId !== nowJoinPageId){
      socket.emit("leave_thread_room",beforeJoinPageId.value)
    }else if (beforeJoinPageId.page == "home" && beforeJoinPageId !== nowJoinPageId){
      socket.emit("leave_room",beforeJoinPageId.value)
    }
    if (nowJoinPageId.page == "thread" && beforeJoinPageId !== nowJoinPageId){
      setBeforeJoinPageId(nowJoinPageId)
      socket.emit("join_thread_room",nowJoinPageId.value)
    }else if (nowJoinPageId.page == "home" && beforeJoinPageId !== nowJoinPageId){
      setBeforeJoinPageId(nowJoinPageId)
      socket.emit("join_room",nowJoinPageId.value)
    }
  },[nowJoinPageId])
  socket.on("user_connection_res",(data)=>{setFirstSocketFlg(true)})
  return (
    <>    
    <CheckCookieLogin setStateFun={setLoginState} setLoadStateFun={setLoadState}/>
      <mkPostWindowContext.Provider value={{mkPostWindowState,setMkPostWindowState,mkPostTitle,setMkPostTitle}}>
        <nowJoinPageSetFn.Provider value={setNowJoinPageId}>
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
                      <Route path='/move/profile/:id' element={<MoveProfile/>}/>
                      <Route path='/search/:word' element={<SearchPage/>}/>
                  </Routes>
                  {loginState && firstSocketFlg?<RightBar/>:<></>}
                </BrowserRouter>:<></>}
              {/* <RightBar/> */}
          </div>
       <div/>
       </div>
       </nowJoinPageSetFn.Provider>
       </mkPostWindowContext.Provider>
       </>

  );
}

export default App;
