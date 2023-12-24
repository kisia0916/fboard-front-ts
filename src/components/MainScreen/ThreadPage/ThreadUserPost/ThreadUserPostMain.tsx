import React, { useEffect, useState } from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import "./ThreadUserPostMain.css"
import ParseDate from '../../../../logics/ParseDate';
import ChangeLineParse from '../../../../logics/ChangeLineParse';
import RepryPostMain from '../RepryPost/RepryPostMain';
function ThreadUserPostMain(props:{userName:String,date:String,title:String,icon:string,imgPath:String,reply:string}) {
  const [userLoadDone,setUserLoadDone] = useState<boolean>(true)
  const loadDone = ()=>{
    setUserLoadDone(false)
  }
  const [ImgDom,setImgDom] = useState<JSX.Element>(<div className='ThreadUserPostLoading' style={{width:"80%",height:"300px", backgroundColor:"#353845",borderRadius:"20px",marginLeft:"12px"}}></div>)

  useEffect(()=>{
    if(props.imgPath){
      if(!userLoadDone){
        setImgDom(<></>)
      }
    }
  },[userLoadDone])

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
            <div className='ThreadRepryPostWarpp'>
              {/*props.reply*/true?<RepryPostMain replyId={"8ffc409d-fb16-4d20-914d-45b37b50ff76"}/>:<></>}
            </div>
            <div className='ThreadUserPostTextWarpp'>
              <span className='ThreadUserPostText'><ChangeLineParse text={props.title as string}/></span>
            </div>

            <div className='ThradUserPostImageWarpp' >
                {props.imgPath?ImgDom:<></>}
                {/* <div className='ThreadUserPostLoading' style={{width:"80%",height:"300px", backgroundColor:"#353845",}}></div> */}
                {props.imgPath?<img src={props.imgPath as string} alt='' className='ThradUserPostImage' onLoad={loadDone}></img>:<></>}
            </div>
        </div>

    </div>
  )
}

export default ThreadUserPostMain