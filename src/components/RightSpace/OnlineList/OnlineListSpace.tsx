import React, { useEffect, useState } from 'react'
import "./OnlineListSpace.css"
import PersonIcon from '@mui/icons-material/Person';
import OnLineUser from './OnlineListUser/OnlineUser';
import { socket } from '../../../App';
import LoadAni from '../../amimations/Load/LoadAni';
import { useCookies } from 'react-cookie';
import { Co2Sharp } from '@mui/icons-material';
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
  const [latestUserList,setLatestUserList] = useState<any>([])

  useEffect(()=>{
    socket.emit("get_online_user_req",{userId:cookies.userId,getNum:3})
    socket.on("friend_connection",(data:{userId:string,name:string,icon:string,status:string})=>{
      console.log("aa")
      let friendIndex = onlienFriend.findIndex((i)=>i.userId === data.userId)
      if (onlienFriend.length <3 && friendIndex === -1){
        socket.emit("join_friend_room",{userId:cookies.userId,friendId:data.userId})
        setOnlineFriend(friends=>[...friends,{name:data.name,icon:data.icon,status:data.status,userId:data.userId}])
      }
    })

  },[])
  useEffect(()=>{
    socket.on("change_friend_status",(data)=>{
      console.log(onlienFriend)
      setOnlineFriend(prevState => {
        const friendIndex = prevState.findIndex((i) => i.userId === data.friendUserId);
        if (friendIndex !== -1) {
          const newList = [...prevState];
          newList[friendIndex] = {...newList[friendIndex], status: data.status};
          return newList;
        }
        return prevState;
      })
    })
    socket.on("get_online_user_res",(data:any)=>{
      console.log("monve")
      setOnlineFriend(data.data)
      console.log(data.data)
      setLoadDoneFlg(true)
    })
    socket.on("disconnect_user",(data:{userId:String})=>{
      console.log("hello")
      console.log(data.userId)
      setOnlineFriend(friendList=>{
        let friendIndex = onlienFriend.findIndex((i)=>i.userId === data.userId)
        if (friendIndex !== -1){
          let newList = [...friendList.slice(0,friendIndex),...friendList.slice(friendIndex+1)]
          return newList
        }
        return friendList
      })
        // socket.emit("discon_friend",{friendId:data.userId})
        // setOnlineFriend(friend=>friend.splice(friendIndex,1))
      
    })  
    return () => {
      socket.off('change_friend_status');
      socket.off('get_online_user_res');
    };
  },[onlienFriend])

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
        </div>
    </div>
  )
}

export default OnlineListSpace