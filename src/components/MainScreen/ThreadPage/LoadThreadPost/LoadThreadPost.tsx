import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ThreadUserPostMain from '../ThreadUserPost/ThreadUserPostMain';

interface threadPostType{
  createdAt: String;
  mess: String;
  userName:String;
  postImg: String;
  reply: String;
  threadPostId: String;
  updatedAt: String;
  userIcon: String;
  userId: String;
  isFirst:boolean;
  __v: Number
  _id: String;
}
interface newPostType{
  createdAt: String;
  mess:any;
  userName:String;
  postImg: String;
  reply: String;
  threadPostId: String;
  updatedAt: String;
  userIcon: String;
  userId: String;
  __v: Number
  _id: String;
}
function LoadThreadPost(props:{loadDone:any,loadDoneData:boolean,scrollList:any,page:number,setPage:React.Dispatch<React.SetStateAction<number>>,setScrollList:React.Dispatch<React.SetStateAction<any>>,setnextLoad:React.Dispatch<React.SetStateAction<any>>,nextLoad:boolean}) {
  const thradId = useParams().id
  const [postList,setPostList] = useState<any>(props.scrollList)
  useEffect(()=>{
    if(props.nextLoad){
      axios.post("http://localhost:5000/threadpost/data/getthreadpost",{
        page:props.page,
        threadId:thradId,
        threadPrivateToken:"0a5de211-065e-43d0-b1ea-10ec0f3f7f17"
      }).then((res)=>{
        console.log(res.data)
        console.log(props.page)
        if(res.data.length>0){
            console.log("爆発")
            console.log(res.data[res.data.length-1].isFirst)
            if(res.data[res.data.length-1].isFirst){
              props.setnextLoad(false)
            }
          }
        setPostList([...res.data.reverse(),...postList])
        props.setScrollList([...res.data.reverse(),...postList])
        // postList[index].mess = ""
        if(!props.loadDoneData){
          props.loadDone(true)
        }

      })
    }
  },[props.page])
  return (
    <div>
      {
        postList.map((i:any)=>{
          return <ThreadUserPostMain userName={i.userName} date={i.createdAt} title={i.mess} imgPath={i.postImg} icon=''/>
        })
      }
    </div>
  )
}

export default LoadThreadPost