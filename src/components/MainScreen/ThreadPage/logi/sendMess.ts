
import axios from "axios"
import { socket } from "../../../../App"

const sendMess = (mess:string,userId:string,pass:string,threadId:string,changeLatest:any,imgPath:string,reply:string,postImgInfo:object|boolean)=>{
    axios.post("http://localhost:5000/threadpost/data/createthreadpost",{
        userId:userId,
        userPass:pass,
        threadId:threadId,
        posttitle:mess,
        hashFlg:false,
        reply:reply,
        postImg:imgPath,
        postImgInfo:postImgInfo
    }).then((res)=>{
        console.log(res.data)
        changeLatest(res.data)
        socket.emit("send_thread_mess",{threadId:threadId,postData:res.data})
        socket.emit("changeThreadInfo",{id:threadId,type:"addmess",data:{}})
    }).catch((error)=>{
        if(error.response.status !== 200){
            console.log("send error")
        }
    })
}
export default sendMess