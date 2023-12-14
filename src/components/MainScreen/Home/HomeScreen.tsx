import React, { useState } from 'react'
import "./HomeScreen.css"
import HomeIcon from '@mui/icons-material/Home';
import ThreadMain from '../../Thread/ThreadMain';
import HomeScreenCreateMain from './HomeScreenCreate/HomeScreenCreateMain';
import GetThreadData from './loadFun/GetThreadData';
import LoadAni from '../../amimations/Load/LoadAni';
import MkPostWindowMain from '../../MkPostWindow/MkPostWindowMain';

function HomeScreen() {
  const [threadPage,setThreadPage] = useState<number>(0)
  const [loadThreadDone,setThreadDone] = useState<boolean>(false)
  return (
    <div className='MainScreen'>
      <div className='MainScreenTop'>
        <div className='MainScreenTopTexts'>
          {/* <HomeIcon style={{fontSize:"208%"}} className='MainScreenIcon'/> */}
          <span className='MainScreenTitle'>Home</span>
        </div>
      </div>
      <div className='MainScreenMainWarpp'>
        <HomeScreenCreateMain/>
        <div className='MainScreenMainSpace'>
          {/*こに新しく追加され他スレっ度を入れる*/}
          {loadThreadDone?<></>:<LoadAni/>}
          <GetThreadData pageNum={threadPage} loadDone={setThreadDone}/>
          {/*こに新しく読み込まれてスレッドを入れる*/}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen