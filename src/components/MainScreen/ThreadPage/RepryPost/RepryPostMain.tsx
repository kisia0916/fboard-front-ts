import React, { useEffect, useRef, useState } from 'react'
import "./RepryPostMain.css"
import axios from 'axios'

function RepryPostMain(props:{replyId:string}) {

  const heightRef = useRef<any>()
  const [userLoadDone,setUserLoadDone] = useState<boolean>(true)
  const [replyIcon,setReplyIcon] = useState<string>("")
  const [replyName,setReplyName] = useState<string>("")
  const [replyTitle,setReplyTitle] = useState<string>("")
  const [replyImg,setReplyImg] = useState<string>("")
  const [postloadDone,setpostLoadDone] = useState<boolean>(false)

  const getReplyPost = ()=>{
    axios.post("http://localhost:5000/threadpost/data//getonethreadpost",{
      postId:props.replyId
    }).then((res)=>{
      if(res){
        setReplyIcon(res.data.userIcon)
        setReplyName(res.data.userName)
        setReplyImg(res.data.postImg)
        setReplyTitle(res.data.mess)
        setpostLoadDone(true)
      }
    }).catch((error:Error)=>{
      console.log(error)
    })
  }
  const loadDone = ()=>{
    setUserLoadDone(false)
  }
  const [ImgDom,setImgDom] = useState<JSX.Element>(<div className="RepryPostLoading" style={{width:"300px",height:"60px",borderRadius:"20px",marginLeft:"12px"}}></div>)

  useEffect(()=>{
    if(true){
      if(!userLoadDone){
        setImgDom(<></>)
      }
    }
  },[userLoadDone])
  useEffect(()=>{
    getReplyPost()
  },[])
  
  return (////////////////////////////////loadFunで返信も取得しとく
    <>
      {postloadDone?<div className='RepryPostMain'>
          <div className='RepryLeft'></div>
          <div className='RepryMainContent'>
              <div className='RepryPostTop'>
                  <img src={replyIcon} alt='' className='RepryPostIcon'/>
                  <span className='RepryPostName'>{replyName}</span>
                  <div className='RepryPostIcon2'>
                      <span className='RepryIcon2Text'>re</span>
                  </div>
              </div>
              <div>
                <span className='RepryPostTitle'>{replyTitle}</span>
              </div>
              {true?ImgDom:<></>}
              {replyImg?<img src={replyImg} onLoad={loadDone} alt='' className='ReryPostImg'/>:<></>}
          </div>
      </div>:<div className='RepryPostLoading' style={{height:""}}></div>}
    </>
  )
}

export default RepryPostMain