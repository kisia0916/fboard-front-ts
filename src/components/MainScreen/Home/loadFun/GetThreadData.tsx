import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import ThreadMain from '../../../Thread/ThreadMain'
import { threadId } from 'worker_threads'
import { socket } from '../../../../App'

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

interface joinCheckFlg{
  threadId:string,
  flg:boolean
}
function GetThreadData(props:{threadList:getThreadInterface[],setThreadList:any,checkJoinedList:any}) {

  const threadList = props.threadList.slice(props.threadList.length-15,props.threadList.length)
  useEffect(()=>{
    socket.on("add_new_thread",(data:any)=>{
      props.setThreadList([data.threadData.data,...props.threadList])
    })
    socket.on("get_new_thread_post2",(data:any)=>{
      let mainThread = [...props.threadList]
      const targetIndex = mainThread.findIndex((i)=>i.theradId === data.threadId)
      if (targetIndex !== -1){
        mainThread[targetIndex] = {...mainThread[targetIndex],messNum:mainThread[targetIndex].messNum+1}
        props.setThreadList(mainThread)
      }
    })
    socket.on("add_join_num",(data)=>{
      let mainThread = [...props.threadList]
      const targetIndex = mainThread.findIndex((i)=>i.theradId === data.threadId)
      if (targetIndex !== -1){
        mainThread[targetIndex] = {...mainThread[targetIndex],joinNum:mainThread[targetIndex].joinNum+1}
        console.log(mainThread[targetIndex])
        props.setThreadList(mainThread)
      }

    })
    socket.on("delete_join_num",(data)=>{
      let mainThread = [...props.threadList]
      const targetIndex = mainThread.findIndex((i)=>i.theradId === data.threadId)
      if (targetIndex !== -1){
        mainThread[targetIndex] = {...mainThread[targetIndex],joinNum:mainThread[targetIndex].joinNum-1}
        console.log(mainThread[targetIndex])
        props.setThreadList(mainThread)
      }

    })
  },[props.threadList])
  return (
    <div>
      {
        props.threadList.map((i,index)=>{
          let testtirtle:string = ""
          const threadFlg:number = props.checkJoinedList.findIndex((item:any)=>item.threadId === i.theradId)
          console.log(props.checkJoinedList[threadFlg])
          console.log(threadFlg)
          console.log(props.checkJoinedList)
          let resultFlg:boolean = true
          if(threadFlg === -1){
            resultFlg = false
          }else if(!props.checkJoinedList[threadFlg].flg){
            resultFlg = false
          }
          console.log(i.tags)
          return <ThreadMain threadTitle={i.title} threadId={i.theradId} joinNum={i.joinNum} userNum={30} postNum={i.messNum} createUserName={i.userName} createdDate={i.createdAt} tagList={i.tags} titleIcon={i.threadPhoto} userIcon='' isJoined={resultFlg}/>
        })
      }
    </div>
  )
}

export default GetThreadData