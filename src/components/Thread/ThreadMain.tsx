import React, { useEffect, useState } from 'react'
import "./ThreadMain.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThreadTagMain from './ThreadTag/ThreadTagMain';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link, useParams } from 'react-router-dom';
import ParseDate from '../../logics/ParseDate';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import LoadMiniMain from '../amimations/LoadMini/LoadMiniMain';
import LoadMiniMini from '../amimations/LoadMiniMini/LoadMiniMini';
import { socket } from '../../App';
function ThreadMain(props:{topFlg?:boolean,profileFlg?:boolean,threadId:string,threadTitle:string,joinNum:number,userNum:number,postNum:number,createUserName:string,createdDate:string,tagList:string[],titleIcon:string,userIcon:string,isJoined:any}) {
  const [cookies,setCookie] = useCookies()
  const [canPushJoinButton,setCanPushJoinButton] = useState<boolean>(true)
  let radStyle:string = ""
  let leftSpace:string = ""
  let fontSize:string = ""
  let fontTop:string = ""

  if(props.topFlg){
    // radStyle = "10px 10px 0 0"
  }
  if(props.profileFlg){
    leftSpace = "36px"
    fontSize = "153%"
    fontTop = "17px"
  }
  const [joinedColor,setJoinedColor] = useState<string>("white")
  // const [joinNum,setJoinNum] = useState(props.joinNum)
  const [joinedBorderColor,setJoinedBorderColor] = useState<string>("rgba(0,0,0,0)")

  const pusjJoin = (e:any)=>{
    e.preventDefault();
    if(canPushJoinButton){
      setCanPushJoinButton(false)
      axios.post("http://localhost:5000/thread/data/threadjoin",{
        userId:cookies.userId,
        threadId:props.threadId,////////////////////ここまで書いた
        pass:cookies.pass,
        hashFlg:false
      }).then((res)=>{
        if(res.data === "join"){
          socket.emit("send_join",{threadId:props.threadId,userId:cookies.userId})
          setJoinedBorderColor("#edff49")

        }else if(res.data === "delete"){
          socket.emit("delete_join",{threadId:props.threadId})
          setJoinedBorderColor("rgba(0,0,0,0)")
        }
        setCanPushJoinButton(true)
      })
    }
  }
  useEffect(()=>{
    if(props.isJoined){
      setJoinedColor("#edff49")
      setJoinedBorderColor("#edff49")
    }
  },[props.isJoined])
  return (
    <Link to={`/thread/${props.threadId}`} style={{ textDecoration: "none" }}>
    <div className='ThreadMain' style={{borderRadius:radStyle}}>
    <div className='ThreadMainLeft' style={{marginLeft:leftSpace}}>
          <img src={props.titleIcon}  alt='logo' className='ThreadTitleIcon'/>
      </div>
      <div className='ThreadMainRight'>
        <div className='ThreadRightTop'>
        {/* <div className='ThreadMainTagList'>

            {props.tagList.map((i)=><ThreadTagMain title={i}/>)}
          </div> */}
          <div className='ThreadMainTitleWarpp'>
            
            <span className='ThreadMainTitleText' style={{fontSize:fontSize,marginTop:fontTop}}>{props.threadTitle}</span>
            <div className='ThreadMainPostType'><span className='ThreadMainPostTypeText'>Thread</span></div>
          </div>
          <div className='ThreadMainTagList'>

{props.tagList.map((i)=><ThreadTagMain title={i}/>)}
</div>
        </div>
        <div className='ThreadMainRightBottom'>
        <div style={{display:"flex"}}>
          <button className='ThreadMainLike' style={{border:`solid 1px ${joinedBorderColor}`}} onClick={pusjJoin}>
              {canPushJoinButton?<>
                <PersonAddIcon className='ThreadMainLikeIcon' style={{fontSize:"145%"}}/>
              <span className='ThreadMainLikeNum' >{props.joinNum}</span></>:<LoadMiniMini/>}
          </button>
          <div className='ThreadMainMess'>
              <ChatBubbleIcon className='ThreadMainMessIcon' style={{fontSize:"140%"}}/>
              <span className='ThreadMainMessNum'>{props.postNum}</span>
              
          </div>
          <div className='ThreadMainPerson'>
              <PersonIcon className='ThreadMainPersonIcon' style={{fontSize:"160%"}}/>
              <span className='ThreadMainPersonText'>10</span>
          </div>
        </div>
          <div className='ThreadMainRightBottom2'>
            <img src='/photos/zbnU2dcD_400x400.jpg'  alt='logo' className='ThreadCreateUserIcon'/>
            <span className='ThreadCreateUserName'>{props.createUserName}</span>
            <span className='ThreadCreateDataText'> - {<ParseDate data={props.createdDate}></ParseDate>}</span>
          </div>
        </div>
      </div>

    </div>
    </Link>
  )
}

export default ThreadMain