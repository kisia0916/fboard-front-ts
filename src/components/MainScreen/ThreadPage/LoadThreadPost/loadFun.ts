import axios from "axios"

export const loadThreadPost = (loadDone:any,loadState:boolean,postList:any,setPostList:any,page:number,setPage:any,threadId:string)=>{
    axios.post("http://localhost:5000/threadpost/data/getthreadpost",{
        page:page,
        threadId:threadId,
        threadPrivateToken:"0a5de211-065e-43d0-b1ea-10ec0f3f7f17"
    }).then((res)=>{
        const getList = res.data.map((i:any)=>{
            return i
        })
        setPage(page+1)
        if(!loadState){
            loadDone(true)
        }
        setPostList(getList.reverse().concat(postList))
    })
}