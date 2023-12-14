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
function LoadThreadPost(props:{loadDone:any}) {
  const thradId = useParams().id
  const [postList,setPostList] = useState<threadPostType[]>([])
  useEffect(()=>{
    axios.post("http://localhost:5000/threadpost/data/getthreadpost",{
      page:0,
      threadId:thradId,
      threadPrivateToken:"0a5de211-065e-43d0-b1ea-10ec0f3f7f17"
    }).then((res)=>{
      console.log(res.data)
      setPostList(res.data.reverse())
      // postList[index].mess = ""
      props.loadDone(true)
    })
  },[])
  return (
    <div>
      {
        postList.map((i)=>{
          return <ThreadUserPostMain userName={i.userName} date={i.createdAt} title={i.mess} icon=''/>
        })
      }
    </div>
  )
}

export default LoadThreadPost