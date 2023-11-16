import axios from "axios"
import { responseType } from "../LoginPageMain"

const loginLogi = (name:string,pass:string,setRespomseData:any)=>{
    // if(name && pass){
    //     axios.post("http://localhost:5000/user/certification/login",{
    //         userName:name,
    //         pass:pass,
    //         hashFlg:false
    //     }).then((res)=>{
    //         const setData:responseType = {
    //             messType:"done login",
    //             userName:res.data.userName,
    //             icon:res.data.icon
    //         }
    //         setRespomseData(setData)
    //     }).catch((error)=>{
    //         let setData:responseType ={
    //             messType:"",
    //             userName:name,
    //             icon:""
    //         }
    //         if(error.response.status === 400){
    //             setData.messType = "miss pass"
    //         }else if(error.response.status === 404){
    //             setData.messType = "no user"
    //         }else if(error.response.status === 500){
    //             setData.messType = "server error"
    //         }
    //         setRespomseData(setData)
    //     })
    // }
    setRespomseData({
        messType:"done login",
        userName:"fumi",
        icon:""

    })
}
export default loginLogi