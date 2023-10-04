import React from 'react'
import "./ThreadUserPostMain.css"
function ThreadUserPostMain() {
  return (
    <div className='ThreadUserPostMain'>
        <img src="/photos/zbnU2dcD_400x400.jpg" className='ThreadUserPostUserIcon' alt=''/>
        <div className='ThreadUserPostUserRight'>
            <div style={{display:"flex"}}>
                <span className='ThreadUserPostUserName'>fumi</span>
                <span className='ThreadUserPostDate'> - 2023/10/3</span>
            </div>
            <span className='ThreadUserPostText'>まず、学校内での問題はエナドリに起因するものだから、明</span>
        </div>
    </div>
  )
}

export default ThreadUserPostMain