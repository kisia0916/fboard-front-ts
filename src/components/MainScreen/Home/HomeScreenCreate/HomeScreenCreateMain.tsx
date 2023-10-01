import React from 'react'
import "./HomeScreenCreateMain.css"
function HomeScreenCreateMain() {
  return (
    <div className='HomeScreenCreateMain'>
        <img src='/photos/zbnU2dcD_400x400.jpg'  alt='logo' className='HomeScreenCreateUserIcon'/>
        <div className='HomeScreenCreateBox'>
            <span className='HomeScreenCreateBoxText'>Post Title</span>
        </div>
        <button className='HomeScreenCreateSendButton'>
            <span className='HomeScreenCreateSendButtonText'>Make Post</span>
        </button>
    </div>
  )
}

export default HomeScreenCreateMain