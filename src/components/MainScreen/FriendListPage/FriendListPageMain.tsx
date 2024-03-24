import React, { useContext, useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./FriendListPageMain.css"
import FriendUserMain from './FriendUser/FriendUserMain';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import LoadAni from '../../amimations/Load/LoadAni';
import { nowJoinPageSetFn, socket } from '../../../App';

function FriendListPageMain() {
    const [cookies,setCookie] = useCookies()
    const [friendLoadDone,setFriendLoadDone] = useState<boolean>(false)
    const [friendList,setFriendList] = useState<any>()
    const setNowPageId:any = useContext(nowJoinPageSetFn)
    useEffect(()=>{
    socket.emit("change_status",{userId:cookies.userId,status:"Fboardを探索中"})
    axios.post("http://localhost:5000/user/profile/getfriend",{
        userId:cookies.userId
    }).then((res)=>{
        setFriendList(res.data)
        setFriendLoadDone(true) 
    }).catch(()=>{

    })
  },[])
  return (
    <div className='friendListMain'>
        <div className='friendListPageTop'>
            <ArrowBackIosNewIcon className="friendListTopBackIcon" style={{fontSize:"150%"}}/>
            <span className='firstListTitle'>Friend List</span>
        </div>
        <div className='friendListPageInfo'>
            <div className='friendListSelectBarWarpp'>
                <span className='friendListSelectBarTitle'>Online(10)</span>
                <div className='friendListSelectBarLine'></div>
            </div>
            <div className='friendListSelectBarWarpp'>
                <span className='friendListSelectBarTitle'>Offline(3)</span>
            </div>
            <div className='friendListSelectBarWarpp'>
                <span className='friendListSelectBarTitle'>All(13)</span>
            </div>
        </div>
        <div className='friendListUserWarpp'>
            {friendLoadDone?friendList.map((i:any)=>{
            return <FriendUserMain userName={i.userName} profile={i.profile} status='Homeを閲覧中'/>
            }):<LoadAni size='30px' top='10px'/>}
        </div>
    </div>
  )
}

export default FriendListPageMain