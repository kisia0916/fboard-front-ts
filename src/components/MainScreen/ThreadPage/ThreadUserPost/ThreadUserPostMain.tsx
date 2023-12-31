import React, { useEffect, useRef, useState } from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import "./ThreadUserPostMain.css"
import ParseDate from '../../../../logics/ParseDate';
import ChangeLineParse from '../../../../logics/ChangeLineParse';
import RepryPostMain from '../RepryPost/RepryPostMain';

interface replyData{
  title:string,
  mess:string,
  icon:string,
  name:string,
  photo:string
  createdAt:string
} 

function ThreadUserPostMain(props:{userName:String,date:String,title:String,icon:string,imgPath:String,postId:string,reply:any,setReply:React.Dispatch<React.SetStateAction<any>>,changeReply:any,loadReply:number,setLoadReply:any,loadReplyCom:any,firstScrollDone:boolean,potoInfoImg:any}) {
  const [userLoadDone,setUserLoadDone] = useState<boolean>(true)
  const imgRef = useRef<any>()
  console.log(props.potoInfoImg)
  const loadDone = ()=>{
    setUserLoadDone(false)
    setImgDom(<></>)
  }
  const clickReply = ()=>{
    props.changeReply()
    props.setReply({userName:props.userName,postId:props.postId})
  }
  console.log(props.potoInfoImg)
  const [isImgFlg,setIsImgFlg] = useState<boolean>(false)
  const [ImgDom,setImgDom] = useState<JSX.Element>(<div className='ThreadUserPostLoading' style={{width:"80%",height:props.potoInfoImg,borderRadius:"20px",marginLeft:"12px"}}></div>)
  // useEffect(()=>{
  //   if(props.potoInfoImg){
  //     if(props.potoInfoImg.height<300){
  //       setImgDom(<div className='ThreadUserPostLoading' style={{width:"80%",height:`${props.potoInfoImg.height}px`,borderRadius:"20px",marginLeft:"12px"}}></div>)
  //     }else{
  //       setImgDom(<div className='ThreadUserPostLoading' style={{width:"80%",height:`300px`,borderRadius:"20px",marginLeft:"12px"}}></div>)
  //     }
  //   }
  // },[])

  return (
    <div className='ThreadUserPostMain'>
        <img src="/photos/zbnU2dcD_400x400.jpg" className='ThreadUserPostUserIcon' alt=''/>
        <div className='ThreadUserPostUserRight'>
            <div className='ThreadUserPostRightTop' style={{display:"flex"}}>
                <div className="ThreadUserPostNames">
                  <span className='ThreadUserPostUserName'>{props.userName}</span>
                  <span className='ThreadUserPostDate'> - {<ParseDate data={props.date}></ParseDate>}</span>
                </div>
                <button className='ThreadUserPostPropaty ThreadUserPostProButton' onClick={clickReply}>
                  <span>
                  {/* <span className='ThreadUserPostProButton'> */}
                    <ReplyIcon className='ThreadUserPostProIcon' style={{fontSize:"125%"}}/>
                    </span>
                  {/* </span> */}
                </button>
            </div>
            <div className='ThreadRepryPostWarpp'>
              {props.reply?<RepryPostMain title={props.reply.mess} name={props.reply.userName} icon={props.reply.userIcon} photo={props.reply.postImg} createdAt={props.reply.createdAt} loadReplyCom={props.loadReplyCom}/>:<></>}
            </div>
            <div className='ThreadUserPostTextWarpp'>
              <span className='ThreadUserPostText'><ChangeLineParse text={props.title as string}/></span>
            </div>

                {props.imgPath?<div className='ThradUserPostImageWarpp'>
                    {props.imgPath?ImgDom:<></>}
                    {props.imgPath?<img src={props.imgPath as string} alt='' ref ={imgRef} className='ThradUserPostImage' onLoad={loadDone} ></img>:<></>}{/* 無限スクロールでスクロールが完了した時にdisply none解除してImgDom削除*/}
                  {/* {props.firstScrollDone?<img src={props.imgPath as string} alt='' ref ={imgRef} className='ThradUserPostImage' onLoad={loadDone} style={{position:"relative"}}></img>:<></>} */}
                </div>:<></>}
        </div>

    </div>
  )
}

export default ThreadUserPostMain