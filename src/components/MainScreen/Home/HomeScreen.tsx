import React, { useEffect, useRef, useState } from 'react'
import "./HomeScreen.css"
import HomeIcon from '@mui/icons-material/Home';
import ThreadMain from '../../Thread/ThreadMain';
import HomeScreenCreateMain from './HomeScreenCreate/HomeScreenCreateMain';
import GetThreadData from './loadFun/GetThreadData';
import LoadAni from '../../amimations/Load/LoadAni';
import MkPostWindowMain from '../../MkPostWindow/MkPostWindowMain';
import InfiniteScroll from 'react-infinite-scroller';
import { getThreadList } from './loadFun/getThreadFun';

function HomeScreen() {
  const [threadPage,setThreadPage] = useState<number>(0)
  const [loadThreadDone,setThreadDone] = useState<boolean>(false)
  const [loadNextPageDone,setLoadNextPageDone] = useState<boolean>(false)
  const [loadStart,setLoadStart] = useState<boolean>(false)
  const [threadList,setThreadList] = useState<any[]>([])
  const [rastFlg,setRastFlg] = useState<boolean>(false)
  const scrollRef = useRef(null)
  const scrollFun = ()=>{
    const sc:any = scrollRef.current
    console.log(sc.scrollTop)
    if((sc.scrollTop/(sc.scrollHeight - sc.clientHeight))*100>90 && !loadStart && !rastFlg){
      console.log("load")
      setLoadStart(true)
      setLoadNextPageDone(true)
      console.log(threadPage)
      getThreadList(threadPage,threadList,setThreadList,setThreadDone,setLoadNextPageDone,setLoadStart,setThreadPage,setRastFlg)
    }
  }
  useEffect(()=>{

    getThreadList(0,threadList,setThreadList,setThreadDone,false,false,setThreadPage)
  },[])
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
          {loadThreadDone?<></>:<LoadAni size='30px' top='30px'/>}
          <GetThreadData threadList={threadList} /*pageNum={threadPage} loadDone={setThreadDone} setLoadStart={setLoadStart}*//>
          {loadNextPageDone?<LoadAni size='30px' top='10px'/>:<></>}
          {/*こに新しく読み込まれてスレッドを入れる*/}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen