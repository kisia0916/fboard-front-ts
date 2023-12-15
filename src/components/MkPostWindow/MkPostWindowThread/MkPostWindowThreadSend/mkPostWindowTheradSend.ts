import axios from "axios"

export const mkPostWindowThreadSend = (userId:string,title:string,pass:string,state:string,firstPost:string,tags:string[],threadPhoto:string)=>{
    axios.post("http://localhost:5000/thread/data/createthread",{
        userId:userId,
        title:title,
        pass:pass,
        hashFlg:false,
        state:state,
        firstPost:firstPost,
        tags:tags,
        threadPhoto:threadPhoto
    }).then((res)=>{
        console.log("done")
    }).catch((error)=>{
        console.log("error")
    })
}