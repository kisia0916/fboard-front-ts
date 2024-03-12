import React, { useEffect, useRef, useState } from "react"
import "./JoinedThreadPageMain.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ThreadMain from "../../Thread/ThreadMain";
import axios, { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import LoadAni from "../../amimations/Load/LoadAni";
import { getThreadInterface } from "../../../interface/getThreadInterface";

function JoinedThreadPageMain(){
    const [cookies,setCookie] = useCookies()
    const [joinThreads,setJoinThreads] = useState<any>([])
    const [loadDoneJoinFlg,setLoadDoneJoinFlg] = useState<boolean>(false)
    const [loadStartNextPage,setLoadStartNextPage] = useState<boolean>(false) 
    const [nowTimeStamp,setNowTimeStamp] = useState<string>("")
    const [allLoadDone,setAllLoadDone] = useState<boolean>(false)
    const scrollRef = useRef(null)
    const scrollFun = ()=>{
        const sc:any = scrollRef.current
        if((sc.scrollTop/(sc.scrollHeight - sc.clientHeight))*100>90 && !loadStartNextPage && !allLoadDone){
            setLoadStartNextPage(true)
            axios.post("http://localhost:5000/thread/data/getjointhread",{
                userId:cookies.userId,
                pass:cookies.pass.toString(),
                timeStamp:nowTimeStamp
            }).then((res:AxiosResponse<getThreadInterface[]>)=>{
                if (res.data.length === 0){
                    setAllLoadDone(true)
                    setLoadStartNextPage(false)
                }
                setJoinThreads([...joinThreads,...res.data])
                setNowTimeStamp(res.data[res.data.length-1].createdAt)
                setLoadStartNextPage(false)
            }).catch((error:any)=>{
                console.log(error)
            })
          }
    }
    useEffect(()=>{
        axios.post("http://localhost:5000/thread/data/getjointhread",{
            userId:cookies.userId,
            pass:cookies.pass.toString(),
            timeStamp:nowTimeStamp
        }).then((res:AxiosResponse<getThreadInterface[]>)=> {
            setJoinThreads(res.data)
            setNowTimeStamp(res.data[res.data.length-1].createdAt)
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
            <div className="JoinThreadPageScreen" ref={scrollRef} onScroll={scrollFun}>
                {loadDoneJoinFlg?joinThreads.map((i:any)=>{
                    return <ThreadMain threadTitle={i.title} threadId={i.theradId} joinNum={i.joinNum} userNum={10} postNum={i.messNum} createUserName={i.userName} createdDate={i.createdAt} tagList={i.tags} titleIcon={i.threadPhoto} userIcon='' isJoined={true}/>
                }):<LoadAni size='30px' top='10px'/>}
            {loadStartNextPage?<LoadAni size='30px' top='10px'/>:<></>}

            </div>
        </div>
    )
}
export default JoinedThreadPageMain