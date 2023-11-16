import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import "./ThreadUserPostMain.css"
function ThreadUserPostMain() {
  return (
    <div className='ThreadUserPostMain'>
        <img src="/photos/zbnU2dcD_400x400.jpg" className='ThreadUserPostUserIcon' alt=''/>
        <div className='ThreadUserPostUserRight'>
            <div className='ThreadUserPostRightTop' style={{display:"flex"}}>
                <div className="ThreadUserPostNames">
                  <span className='ThreadUserPostUserName'>fumi</span>
                  <span className='ThreadUserPostDate'> - 2023/10/3</span>
                </div>
                <div className='ThreadUserPostPropaty'>
                  <span className='ThreadUserPostProButton'>
                    <ReplyIcon className='ThreadUserPostProIcon' style={{fontSize:"125%"}}/>
                  </span>
                </div>
            </div>
            <span className='ThreadUserPostText'>まず、学校内での問題はエナドリに起因するものだから、明</span>
        </div>

    </div>
  )
}

export default ThreadUserPostMain