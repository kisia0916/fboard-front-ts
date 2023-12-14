import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import "./ThreadUserPostMain.css"
import ParseDate from '../../../../logics/ParseDate';
import ChangeLineParse from '../../../../logics/ChangeLineParse';
function ThreadUserPostMain(props:{userName:String,date:String,title:String,icon:string}) {
  return (
    <div className='ThreadUserPostMain'>
        <img src="/photos/zbnU2dcD_400x400.jpg" className='ThreadUserPostUserIcon' alt=''/>
        <div className='ThreadUserPostUserRight'>
            <div className='ThreadUserPostRightTop' style={{display:"flex"}}>
                <div className="ThreadUserPostNames">
                  <span className='ThreadUserPostUserName'>{props.userName}</span>
                  <span className='ThreadUserPostDate'> - {<ParseDate data={props.date}></ParseDate>}</span>
                </div>
                <div className='ThreadUserPostPropaty'>
                  <span className='ThreadUserPostProButton'>
                    <ReplyIcon className='ThreadUserPostProIcon' style={{fontSize:"125%"}}/>
                  </span>
                </div>
            </div>
            <div className='ThreadUserPostTextWarpp'>
              <span className='ThreadUserPostText'><ChangeLineParse text={props.title as string}/></span>
            </div>
        </div>

    </div>
  )
}

export default ThreadUserPostMain