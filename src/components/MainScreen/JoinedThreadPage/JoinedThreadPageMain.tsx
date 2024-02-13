import React, { useEffect, useState } from "react"
import "./JoinedThreadPageMain.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ThreadMain from "../../Thread/ThreadMain";
import axios from "axios";
import { useCookies } from "react-cookie";

function JoinedThreadPageMain(){
    const [cookies,setCookie] = useCookies()
    const [joinThreads,setJoinThreads] = useState<any>([])
    const [loadDoneJoinFlg,setLoadDoneJoinFlg] = useState<boolean>(false)
    useEffect(()=>{
        axios.post("http://localhost:5000/thread/data/getjointhread",{
            userId:cookies.userId,
            pass:cookies.pass.toString(),
            page:0
        }).then((res)=>{
            setJoinThreads(res.data)
            setLoadDoneJoinFlg(true)
        }).catch((error:any)=>{
            console.log(error)
        })
    },[])
    return(
        <div className="JoinThreadPageMain">
            <div className="JoinThreadPageTop">
                <ArrowBackIosNewIcon className="JoinThreadTopArrowIcon" style={{fontSize:"150%"}}/>
                <span className='firstListTitle'>Join Thread</span>
            </div>
            <div className="JoinThreadPageScreen">
                {loadDoneJoinFlg?joinThreads.map((i:any)=>{
                    return <ThreadMain threadTitle={i.title} threadId={i.theradId} joinNum={i.joinNum} userNum={10} postNum={i.messNum} createUserName={i.userName} createdDate={i.createdAt} tagList={i.tags} titleIcon={i.threadPhoto} userIcon='' isJoined={true}/>
                }):<span>loading</span>}
            </div>
        </div>
    )
}
export default JoinedThreadPageMain