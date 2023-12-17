import axios from "axios"
import { useContext } from "react"
import { mkPostWindowContext } from "../../../../App"

export const mkPostWindowThreadSend = (userId:string,title:string,pass:string,state:string,firstPost:string,tags:string[],isImgFlg:boolean,threadPhoto:string,loadFlg:any,windowFun:any)=>{
    let threadPhotoMain:string = threadPhoto
    loadFlg(true)
    axios.post("http://localhost:5000/thread/data/createthread",{
        userId:userId,
        title:title,
        pass:pass,
        hashFlg:false,
        state:state,
        firstPost:firstPost,
        tags:tags,
        threadPhoto:threadPhotoMain
    }).then((res)=>{
        console.log("done")
        loadFlg(false)
        windowFun("")
    }).catch((error)=>{
        console.log("error")
    })
}