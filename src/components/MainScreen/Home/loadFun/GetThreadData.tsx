import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import ThreadMain from '../../../Thread/ThreadMain'

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
  __v: number,
  likeNum: number
}

function GetThreadData(props:{pageNum:number,loadDone:any}) {
  const [threadList,setThreadList] = useState<getThreadInterface[]>([])
  useEffect(()=>{
    axios.post("http://localhost:5000/thread/data/getthreadtimeline",{page:0}).then((res:AxiosResponse<getThreadInterface[]>)=>{
        const getList:getThreadInterface[] = res.data.map((i)=>{
          return i
        })
        setThreadList(getList)
        props.loadDone(true)
    })
  },[])
  return (
    <div>
      {
        threadList.map((i)=>{
          return <ThreadMain threadTitle={i.title} likeNum={i.likeNum} userNum={30} postNum={i.messNum} createUserName={i.userName} createdDate='' tagList={[]} titleIcon='' userIcon=''/>
        })
      }
    </div>
  )
}

export default GetThreadData