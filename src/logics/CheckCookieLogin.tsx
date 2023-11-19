import axios from 'axios'
import React,{useEffect} from 'react'
import {useCookies} from "react-cookie"
function CheckCookieLogin(props:{setStateFun:any,setLoadStateFun:any}) {
  const [cookies,setCookie,removeCookie] = useCookies()

  const checkFun = ()=>{
    if(cookies.name && cookies.pass){
      const name:string = cookies.name
      const pass:string = cookies.pass
      const hashFlg:boolean = false
      
      axios.post("http://localhost:5000/user/certification/login",{
        userName:name,
        pass:pass,
        hashFlg:hashFlg
      }).then((response)=>{
        props.setStateFun(true)
        props.setLoadStateFun(true)
      }).catch((error)=>{
        props.setStateFun(false)
        props.setLoadStateFun(true)
      })
    }else{
      props.setLoadStateFun(true)
    }

  }

  useEffect(()=>{
    checkFun()
  },[])
  return (
    <></>
  )
}

export default CheckCookieLogin