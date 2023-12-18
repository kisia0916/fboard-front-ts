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
    likeNum: number
  }
const maxGetThread:number = 15
export const getThreadList = (page:number,nowData:any,updateFun:any,setThreadDone:any,setNextPageDone?:any,setLoadStart?:any,setThreadPage?:any,setRastFlg?:any)=>{
    axios.post("http://localhost:5000/thread/data/getthreadtimeline",{page:page}).then((res:AxiosResponse<getThreadInterface[]>)=>{
        const getList:getThreadInterface[] = res.data.map((i)=>{
          return i
        })
        updateFun(nowData.concat(getList))
        setThreadDone(true)
        if(setNextPageDone){
            setNextPageDone(false)
        }
        if(setLoadStart){
            setLoadStart(false)
        }
        setThreadPage(page+1)
        console.log(nowData.concat(getList))
        if(res.data.length<15){
            setRastFlg(true)
        }
    })
}