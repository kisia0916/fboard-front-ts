import React, { useEffect, useRef, useState } from 'react'
import "./HomeScreen.css"
import HomeIcon from '@mui/icons-material/Home';
import ThreadMain from '../../Thread/ThreadMain';
import HomeScreenCreateMain from './HomeScreenCreate/HomeScreenCreateMain';
import GetThreadData from './loadFun/GetThreadData';
import LoadAni from '../../amimations/Load/LoadAni';
import MkPostWindowMain from '../../MkPostWindow/MkPostWindowMain';
import InfiniteScroll from 'react-infinite-scroller';
import { checkJoined, getThreadList } from './loadFun/getThreadFun';
import { useCookies } from 'react-cookie';

const getThreadNum:number = 15

function HomeScreen() {
  const [threadTimeStamp,setThreadTimeStamp] = useState<string>("")
  const [loadThreadDone,setThreadDone] = useState<boolean>(false)
  const [loadNextTimeStampDone,setLoadNextTimeStampDone] = useState<boolean>(false)
  const [loadStart,setLoadStart] = useState<boolean>(false)
  const [threadList,setThreadList] = useState<any[]>([])
  const [rastFlg,setRastFlg] = useState<boolean>(false)
  const [joinLoadDone,setJoinLoadDone] = useState<boolean>(false)
  const [checkJoinedList,setCheckJoinedList] = useState<any>([])
                                          const [cookies,setCookie] = useCookies() 

  const scrollRef = useRef(null) 
  const scrollFun = ()=>{
    const sc:any = scrollRef.current
    console.log(sc.scrollTop)
    if((sc.scrollTop/(sc.scrollHeight - sc.clientHeight))*100>90 && !loadStart && !rastFlg){
      console.log("load")
      setLoadStart(true)
      setLoadNextTimeStampDone(true)
      console.log(threadTimeStamp)
      getThreadList(threadTimeStamp,threadList,setThreadList,setThreadDone,setLoadNextTimeStampDone,setLoadStart,setThreadTimeStamp,setRastFlg)
    }
  }
  useEffect(()=>{

    getThreadList("",threadList,setThreadList,setThreadDone,false,false,setThreadTimeStamp)

  },[])
  useEffect(()=>{
    if(loadThreadDone && threadList.length > 0 ){
      const userId = cookies.userId
      checkJoined(threadList.slice(-getThreadNum,threadList.length),userId,setJoinLoadDone,setCheckJoinedList)
    }
  },[loadThreadDone,threadList])
  return (
    <div className='MainScreen'>
      <div className='MainScreenTop'>
        <div className='MainScreenTopTexts'>
          {/* <HomeIcon style={{fontSize:"208%"}} className='MainScreenIcon'/> */}
          <span className='MainScreenTitle'>Home</span>
        </div>
      </div>
      <div className='MainScreenMainWarpp'ref={scrollRef} onScroll={scrollFun}>
        <HomeScreenCreateMain/>
        <div className='MainScreenMainSpace' >
          {/*こに新しく追加され他スレっ度を入れる*/}
          {loadThreadDone && joinLoadDone?<></>:<LoadAni size='30px' top='30px'/>}
          {loadThreadDone && joinLoadDone?<GetThreadData threadList={threadList} checkJoinedList={checkJoinedList}/*TimeStampNum={threadTimeStamp} loadDone={setThreadDone} setLoadStart={setLoadStart}*//>:<></>}
          {loadNextTimeStampDone && joinLoadDone?<LoadAni size='30px' top='10px'/>:<></>}
          {/*こに新しく読み込まれてスレッドを入れる*/}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen