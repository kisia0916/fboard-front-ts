import axios from "axios"

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
    }).catch((error)=>{
        if(error.response.status !== 200){
            console.log("send error")
        }
    })
}
export default sendMess