import React, { useEffect, useRef, useState } from 'react'
import "./RepryPostMain.css"
import axios from 'axios'
import ParseDate from '../../../../logics/ParseDate'

function RepryPostMain(props:{title:string,icon:string,name:string,photo:string,createdAt:string,loadReplyCom:any}) {
  const [userLoadDone,setUserLoadDone] = useState<boolean>(true)
  const [replyIcon,setReplyIcon] = useState<string>(props.icon)
  const [replyName,setReplyName] = useState<string>(props.name)
  const [replyTitle,setReplyTitle] = useState<string>(props.title)
  const [replyImg,setReplyImg] = useState<string>(props.photo)
  const [postloadDone,setpostLoadDone] = useState<boolean>(false)

  const loadDone = ()=>{
    setUserLoadDone(false)
    // setpostLoadDone(true)
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
    console.log("リプライが描画されました")
    console.log("リプライログ")
    // console.log(props.replyCounter)
    props.loadReplyCom()
    setpostLoadDone(true)
    // props.setReplyCounter(props.replyCounter+1)
  },[])

  return (////////////////////////////////loadFunで返信も取得しとく
    <>
      {postloadDone?<div className='RepryPostMain'>
          <div className='RepryLeft'></div>
          <div className='RepryMainContent'>
              <div className='RepryPostTop'>
                  <img src={replyIcon} alt='' className='RepryPostIcon'/>
                  <span className='RepryPostName'>{replyName}</span>
                  <div className='RepryPostDate'>
                    <> - </><ParseDate data={props.createdAt}/>
                  </div>
                  <div className='RepryPostIcon2'>
                      <span className='RepryIcon2Text'>re</span>
                  </div>
              </div>
              <div>
                <span className='RepryPostTitle'>{replyTitle}</span>
              </div>
              {replyImg?ImgDom:<></>}
              {replyImg?<img src={replyImg} onLoad={loadDone} alt='' className='ReryPostImg'/>:<></>}
          </div>
      </div>:<div className='RepryPostLoading' style={{height:""}}></div>}
    </>
  )
}

export default RepryPostMain