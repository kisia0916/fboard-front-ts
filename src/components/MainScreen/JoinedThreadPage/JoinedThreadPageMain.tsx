import React, { useEffect, useRef, useState } from "react"
import "./JoinedThreadPageMain.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ThreadMain from "../../Thread/ThreadMain";
import axios from "axios";
import { useCookies } from "react-cookie";
import LoadAni from "../../amimations/Load/LoadAni";

function JoinedThreadPageMain(){
    const [cookies,setCookie] = useCookies()
    const [joinThreads,setJoinThreads] = useState<any>([])
    const [loadDoneJoinFlg,setLoadDoneJoinFlg] = useState<boolean>(false)
    const [loadStartNextPage,setLoadStartNextPage] = useState<boolean>(false) 
    const [nowPage,setNowPage] = useState<number>(0)
    const [allLoadDone,setAllLoadDone] = useState<boolean>(false)
    const scrollRef = useRef(null)
    const scrollFun = ()=>{
        const sc:any = scrollRef.current
        if((sc.scrollTop/(sc.scrollHeight - sc.clientHeight))*100>90 && !loadStartNextPage && !allLoadDone){
            setLoadStartNextPage(true)
            axios.post("http://localhost:5000/thread/data/getjointhread",{
                userId:cookies.userId,
                pass:cookies.pass.toString(),
                page:nowPage+1
            }).then((res)=>{
                if (res.data.length === 0){
                    setAllLoadDone(true)
                }
                setJoinThreads([...joinThreads,...res.data])
                setNowPage(nowPage+1)
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