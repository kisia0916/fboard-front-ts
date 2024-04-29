import React, { useEffect, useRef, useState } from 'react'
import "./ProfileSeMain.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextsmsIcon from '@mui/icons-material/Textsms';
import EmailIcon from '@mui/icons-material/Email';
import ThreadUserPostMain from '../ThreadPage/ThreadUserPost/ThreadUserPostMain';
import ThreadMain from '../../Thread/ThreadMain';
import { Router, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import { Console, timeStamp } from 'console';
import LoadAni from '../../amimations/Load/LoadAni';
import LoadMiniMain from '../../amimations/LoadMini/LoadMiniMain';
import { getThreadInterface } from '../../../interface/getThreadInterface';
import { socket } from '../../../App';
import { homeScreenSocketMain } from '../Home/SocketFun/socketMain';

function ProfileSeMain(props:any) {
  const profileImgRef = useRef<any>()
  const [headerImgWidth,setHeaderImgWidth] = useState<any>()
  const [cookies,setCookie] = useCookies()
  const [userName,setUserName] = useState<string>("")
  const [icon,setIcon] = useState<string>("")
  const [header,setHeader] = useState<string>("")
  const [profile,setProfile] = useState<string>("")
  const [profileUserId,setProfileUserId] = useState<string>("")
  const [myPostList,setMyPostList] =  useState<any>([])
  const [checkPostList,setCheckPostList] =  useState<any>([])
  const [myPostLoadDone,setMyPostLoadDone] = useState<boolean>(false)
  const [profileLoadDone,setProfileLoadDone] = useState<boolean>(false)
  const [myPostCheckLoadDone,setMyCheckPostLoadDone] = useState<boolean>(false)
  const [isWriteProfileButton,setIsWriteProfileButton] = useState<boolean>(false)
  const [followButtonText,setFollorButtonText] = useState<string>("") 
  const profileUserName:string = useParams().id as string
  const [friendReqLoadFlg,setFriendReqFlg] = useState<boolean>(false)
  const [userStatus,setUserStatus] = useState<"online"|"offline"|"">("")

  const scrollRef = useRef(null)
  const [loadStartNextPage,setLoadStartNextPage] = useState<boolean>(false) 
  const [nowTimeStamp,setNowTimeStamp] = useState<string>("")
  const [allLoadDone,setAllLoadDone] = useState<boolean>(false)
  const scrollFun = ()=>{
    const sc:any = scrollRef.current
    if((sc.scrollTop/(sc.scrollHeight - sc.clientHeight))*100>90 && !loadStartNextPage && !allLoadDone){
        setLoadStartNextPage(true)
        axios.post("http://localhost:5000/user/profile/getmythread",{
            userId:cookies.userId,
            timeStamp:nowTimeStamp
        }).then((res:AxiosResponse<getThreadInterface[]>)=>{
          const threadIdList:string[] = res.data.map((i)=>{
            return i.theradId
        })
        socket.emit("join_some_threads",{threadId:threadIdList})
            if (res.data.length === 0){
                setAllLoadDone(true)
                setLoadStartNextPage(false)
            }
            setMyPostList([...myPostList,...res.data])
            setNowTimeStamp(res.data[res.data.length-1].createdAt)
            setLoadStartNextPage(false)
        }).catch((error:any)=>{
            console.log(error)
        })
      }
}

  const pushFollow = ()=>{
    if (!friendReqLoadFlg){
      if(followButtonText === "Friend Reqest"){
      setFriendReqFlg(true)

        console.log(cookies.userId)
        console.log(profileUserId)
        axios.post("http://localhost:5000/user/data/addfriend",{
          userId:cookies.userId,
          otheruserId:profileUserId,
          pass:cookies.pass,
          hashFlg:false,
        }).then((res)=>{
          console.log(res.data)
          if (res.data === "sendReqest"){
            setFollorButtonText("Reqested")
            setFriendReqFlg(false) 
          }
        }).catch((error)=>{console.log(error)})
      }else if(followButtonText === "Delete Friend"){
      setFriendReqFlg(true)

        axios.post("http://localhost:5000/user/data/deletefriend",{
          userId:cookies.userId,
          otheruserId:profileUserId,
          pass:cookies.pass
        }).then((res)=>{
          setFollorButtonText("Friend Reqest")
          setFriendReqFlg(false)
        })
      }else if (followButtonText === "Approval Reqest"){
      setFriendReqFlg(true)

        axios.post("http://localhost:5000/user/data/addfriend",{
          userId:cookies.userId,
          otheruserId:profileUserId,
          pass:cookies.pass
        }).then((res)=>{
          setFollorButtonText("Delete Friend")
          setFriendReqFlg(false)
        })
      }else if(followButtonText === "Requested"){
        
      }
    }
  }
  useEffect(()=>{
    socket.on("res_check_online",(data)=>{
      setUserStatus(data.status)
    })
  },[userStatus])
  useEffect(()=>{
    setHeaderImgWidth(profileImgRef.current.offsetWidth)
    socket.emit("check_online",{find_name:profileUserName})
    socket.emit("change_status",{userId:cookies.userId,status:"Fboardを探索中"})
    axios.post("http://localhost:5000/user/profile/getprofiledata",{
      userName:profileUserName,
      myUserId:cookies.userId
    }).then((res)=>{
      console.log(res)
      setUserName(res.data.userName)
      setIcon(res.data.icon)
      setHeader(res.data.header)
      setProfile(res.data.profile)
      setProfileUserId(res.data.userId)
      if(res.data.friendInfo.isFriend !== -1){
        setFollorButtonText("Delete Friend")
      }else if(res.data.friendInfo.isReqeston !== -1){
        setFollorButtonText("Approval Reqest")
      }else if(res.data.friendInfo.isSended !== -1){
        setFollorButtonText("Requested")
      }else{
        setFollorButtonText("Friend Reqest")
      }
      setProfileLoadDone(true)
      if(cookies.name !== profileUserName){
        setIsWriteProfileButton(true)
      }
    }).catch(()=>{})

  },[])
  
  useEffect(()=>{
    if(profileLoadDone){
      axios.post("http://localhost:5000/user/profile/getmythread",{
        userId:profileUserId,
        timeStamp:""
      }).then((res:AxiosResponse<getThreadInterface[]>)=>{
        const threadIdList:string[] = res.data.map((i)=>{
          return i.theradId
      })
      socket.emit("join_some_threads",{threadId:threadIdList})
        console.log(res.data)
        setMyPostList(res.data)
        setMyPostLoadDone(true)
        setNowTimeStamp(res.data[res.data.length-1].createdAt)
      }).catch((error)=>{console.log(error)})
    }
  },[profileLoadDone])
  useEffect(()=>{
    console.log("yomikomi")
    console.log(profileUserId)
    console.log(myPostList)

    if(myPostLoadDone){
      console.log(myPostList)
      const postIdList = myPostList.map((i:any)=>{
        console.log(i)
        return i.theradId

      })
      console.log(postIdList)
      axios.post("http://localhost:5000/thread/data/checkjoined",{
          userId:cookies.userId,
          threadList:postIdList
      }).then((res:any)=>{
          console.log(res)
          setCheckPostList(res.data)
          setMyCheckPostLoadDone(true)
      }).catch((error)=>{console.log(error)})
    }
  },[myPostLoadDone])

  useEffect(()=>{
    socket.on("add_join_num",(data)=>{
        let mainThread = [...myPostList]
        const targetIndex = mainThread.findIndex((i)=>i.theradId === data.threadId)
        if (targetIndex !== -1){
            mainThread[targetIndex] = {...mainThread[targetIndex],joinNum:mainThread[targetIndex].joinNum+1}
            console.log(mainThread[targetIndex])
            setMyPostList(mainThread)
        }

    })
    socket.on("delete_join_num",(data)=>{
        let mainThread = [...myPostList]
        const targetIndex = mainThread.findIndex((i)=>i.theradId === data.threadId)
        if (targetIndex !== -1){
            mainThread[targetIndex] = {...mainThread[targetIndex],joinNum:mainThread[targetIndex].joinNum-1}
            console.log(mainThread[targetIndex])
            setMyPostList(mainThread)
        }
    })
    socket.on("changeThreadInfo",(data:{id:string,type:string,data:JSON})=>{
        homeScreenSocketMain(data,myPostList,setMyPostList,cookies.userId)
      })
},[myPostList])

  return (
    <div className='ProfileSeMain'>
        <div className='ProfileSeTopBar'>
          <div className='ProfileSeTopBarLeft'>
              <ArrowBackIosNewIcon className='ProfileSeBackIcon' style={{fontSize:"150%"}}/>
              <span className='ProfileSeTopBarUserName'>{userName}</span>
              <div className='ProfileUserState'>
                  {userStatus === "online"?<div className='ProfileUserStateIcon' style={{backgroundColor:"#edff49"}}></div>:<div className='ProfileUserStateIcon' style={{backgroundColor:"#868686"}}></div>}
                  <span className='ProfileUserStateText'>{userStatus}</span>
              </div>
          </div>
          <div className='ProfileSeTopBarRight'>
            <TextsmsIcon className='ProfileUserNumIcon' style={{fontSize:"160%"}}/>
            <span className='ProfileUserNumText'>12</span>
          </div>
        </div>
        <div className='ProfileSeMainWarpp'  ref={scrollRef} onScroll={scrollFun} style={{height:"calc(100vh - 48px)", width:"100%",position:"absolute",overflowX:"hidden",overflowY:"scroll"}}>
          <div className='ProfileSeTopSpace' ref={profileImgRef}>
              <img src='/photos/1500x500.jpg' alt='' className='ProfileSeTopHeaderImg' style={{width:"100%"}}/>
              <div className='ProfileSeTopIconWarpp'></div>
              <div className='ProfileSeTopUserText'>
                <span className='ProfileSeTopUserName'>{userName}</span>
                {profileLoadDone && isWriteProfileButton?<button className='ProfileSeTopUserFollowButton' onClick={pushFollow}>
                  <span className='ProfileSeTopUserFollowButtonText'>{friendReqLoadFlg?<LoadMiniMain color="white"/>:followButtonText}</span>
                </button>:<></>}
              </div>
              <img src='/photos/zbnU2dcD_400x400.jpg' alt='' className='ProfileSeTopIconImg'/>

          </div>
          <div className='ProfileSeMainSpace'>
            <div className='ProfileSeMainProfileSpace'>
              <div className='ProfileSeMainProfileSpaceWarpp'>
                <span className='ProfileSeMainProfileSpaceText'>{profile}</span>
              </div>
              <div className='ProfileSeMainProfileSpaceSendMessIconWarpp'>
                <EmailIcon className='ProfileSeMainProfileSpaceSendMessIcon' style={{fontSize:"180%"}}/>
              </div>
            </div>
            <div className='ProfileSeMainSelectContentBar'>
                <div className='ProfileSeMainSelectContentBarWarpp'>
                  <span className='ProfileSeMainSelectContentBarTitle'>All Post</span>
                  <div className='ProfileSeMainSelectContentBarSelected'></div>
                </div>
                <div className='ProfileSeMainSelectContentBarWarpp'>
                  <span className='ProfileSeMainSelectContentBarTitle'>Thread</span>
                </div>
                <div className='ProfileSeMainSelectContentBarWarpp'>
                  <span className='ProfileSeMainSelectContentBarTitle'>Blog</span>
                </div>
                <div className='ProfileSeMainSelectContentBarWarpp'>
                  <span className='ProfileSeMainSelectContentBarTitle'>Joined</span>
                </div>
            </div>
            <div className='ProfileSeMainCons'>
              {console.log(myPostList.length)}
            {myPostCheckLoadDone && myPostLoadDone && profileLoadDone?myPostList.map((i:any)=>{
              console.log(i)
              console.log(myPostList)
              console.log(checkPostList)
              let checkFlg:boolean = false
              checkPostList.forEach((item:any)=>{
                if (item.threadId === i.theradId){
                  checkFlg = item.flg
                }
              })
              
              return <ThreadMain threadTitle={i.title} threadId={i.theradId} joinNum={i.joinNum} userNum={30} postNum={i.messNum}createUserName={i.userName} createdDate={i.createdAt} tagList={i.tags} titleIcon={i.threadPhoto} userIcon='' isJoined={checkFlg}/>
            }):<LoadAni size='30px' top='30px'/>}
            {/* <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["プログラミング","卒論","開発テスト"]} titleIcon='http://localhost:5000/public/img/thread/c4c24eae-8088-4bc2-a707-bdc6fa420b83.png' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='SNSを個人で開発してみた' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["Node.js","React","プログラミング"]} titleIcon='http://localhost:3000/photos/zbnU2dcD_400x400.jpg' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='アドベントカレンダーを描いてみたい' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["卒論","プログラミング","雑談"]} titleIcon='http://localhost:5000/public/img/f9a0a103-9421-473b-8de3-1bdddb676f3a.jpg' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='自作PCにつけられるグラボを探そう' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["自作PC","GPU","雑談"]} titleIcon='http://localhost:5000/public/img/b379be33-d3d1-4c9b-afd4-4513a5d88720.jpg' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon=''isJoined={false}/>
            <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon='' isJoined={false}/>
            <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon='' isJoined={false}/> */}
            {loadStartNextPage?<LoadAni size='30px' top='10px'/>:<></>}

            </div>
          </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default ProfileSeMain