import React, { useEffect, useState } from 'react'
import "./OnlineListSpace.css"
import PersonIcon from '@mui/icons-material/Person';
import OnLineUser from './OnlineListUser/OnlineUser';
import { socket } from '../../../App';
import LoadAni from '../../amimations/Load/LoadAni';
import { useCookies } from 'react-cookie';
interface onlineUser {
  name:string,
  icon:string,
  status:string,
  userId:string
}
function OnlineListSpace() {
  const [cookies,setCookie] = useCookies()
  const [onlienFriend,setOnlineFriend] = useState<onlineUser[]>([])
  const [loadDoneFlg,setLoadDoneFlg] = useState<boolean>(false)
  const [flg,setFlg] = useState<boolean>(false)
  socket.on("get_online_user_res",(data)=>{
    console.log(data.data)
    setOnlineFriend(data.data)
    setLoadDoneFlg(true)
  })
  useEffect(()=>{
    socket.emit("get_online_user_req",{userId:cookies.userId,getNum:3})

  },[])
  socket.on("change_friend_status",(data)=>{
    const friendIndex = onlienFriend.findIndex((i)=>i.userId === data.friendUserId)
      console.log(data.friendUserId)
      console.log(data.status)
      console.log(onlienFriend)

    if (friendIndex !== -1){
      console.log("move")
      let nowList = onlienFriend

      nowList[friendIndex].status = data.status
      nowList[friendIndex].name = "unnkoman"
      console.log(nowList)
      setOnlineFriend(nowList)
    }
  })
  return (
        <div className='OnlineListSpace'>
        <div className='OnlineListTitle'>
            <PersonIcon className='OnlineListIcon'/>
            <span className='OnlineListText'>Online Friends</span>
        </div>
        <div className='OnlineList'>
          {loadDoneFlg?onlienFriend.map((i)=>
            <OnLineUser userName={i.name} status={i.status}/>
          )
          :<LoadAni size='30px' top="30px"/>}
            {/* <OnLineUser userName='fumi'/>
            <OnLineUser userName='kisia0916'/>
            <OnLineUser userName='c++絶殺'/>
            <OnLineUser userName='いけんと'/> */}
        </div>
    </div>
  )
}

export default OnlineListSpace