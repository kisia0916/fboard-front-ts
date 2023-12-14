import React, { useContext, useState } from 'react'
import "./HomeScreenCreateMain.css"
import MkPostWindowMain from '../../../MkPostWindow/MkPostWindowMain'
import { mkPostWindowContext } from '../../../../App'
function HomeScreenCreateMain() {
  const mkPostWindowFun:any = useContext(mkPostWindowContext)
  const pushEnter = ()=>{
    mkPostWindowFun.setMkPostWindowState("select")
  }
  return (
    <div className='HomeScreenCreateMain'>
        <img src='/photos/zbnU2dcD_400x400.jpg'  alt='logo' className='HomeScreenCreateUserIcon'/>
        <div className='HomeScreenCreateBox'>
            {/* <span className='HomeScreenCreateBoxText'>Post Title</span> */}
            
            <input type='text' className='HomeScreenCreateInput' placeholder='Post Title' value={mkPostWindowFun.mkPostTitle} onChange={(e)=>{mkPostWindowFun.setMkPostTitle(e.target.value)}}></input>
        </div>
        <button className='HomeScreenCreateSendButton' onClick={pushEnter}>
            <span className='HomeScreenCreateSendButtonText'>Make Post</span>
        </button>
    </div>
  )
}
export default HomeScreenCreateMain