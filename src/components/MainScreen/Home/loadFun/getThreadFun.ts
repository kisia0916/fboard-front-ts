import axios, { AxiosResponse } from "axios"

interface getThreadInterface{
    permissionUser: string,
    _id: string,
    title: string,
    userId: string,
    userName: string,
    theradId: string,
    messNum: number,
    state: string,
    postId: string,
    createdAt: string,
    updatedAt: string,
    threadPhoto:string,
    tags:string[]
    __v: number,
    likeNum: number,
    joinNum:number
  }
const maxGetThread:number = 15
export const getThreadList = (timeStamp:string,nowData:any,updateFun:any,setThreadDone:any,setNextTimeStampDone?:any,setLoadStart?:any,setThreadTimeStamp?:any,setRastFlg?:any)=>{
    axios.post("http://localhost:5000/thread/data/getthreadtimeline",{timeStamp:timeStamp}).then((res:AxiosResponse<getThreadInterface[]>)=>{
        const getList:getThreadInterface[] = res.data.map((i)=>{
          return i
        })
        updateFun(nowData.concat(getList))
        setThreadDone(true)
        if(setNextTimeStampDone){
            setNextTimeStampDone(false)
        }
        if(setLoadStart){
            setLoadStart(false)
        }
        console.log(res.data)
        setThreadTimeStamp(res.data[res.data.length-1].createdAt)
        console.log(nowData.concat(getList))
        if(res.data.length<15){
            setRastFlg(true)
        }

    }).catch((error)=>{})
}
export const checkJoined = (threadList:any[],userId:string,setJoinDone:any,setCheckJoinedList:any)=>{
    const threadIdList = threadList.map((i)=>{
        return i.theradId
    })
    axios.post("http://localhost:5000/thread/data/checkjoined",{
        userId:userId,
        threadList:threadIdList
    }).then((res:any)=>{
        console.log("☑実行")
        console.log(userId)
        console.log(threadIdList)
        setCheckJoinedList(res.data)
        console.log(res.data)
        setJoinDone(true)
    }).catch((error)=>{})
}