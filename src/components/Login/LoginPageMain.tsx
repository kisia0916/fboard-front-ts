import React, { useEffect, useState } from 'react'
import "./LoginPageMain.css"
import { useCookies } from 'react-cookie'
import loginLogi from './loginLogics/loginLogiMain'
import { Navigate } from 'react-router-dom'

export interface responseType{
  messType:string,
  userName:string,
  icon:string,
  userId:string,
}
function LoginPageMain(props:{setLoginState:any}) {
  const [responseData,setRespomseData] = useState<responseType|undefined>(undefined)
  const [cookies,setCookie] = useCookies()
  const [isLogin,setIsLogin] = useState(false)
  const [userNameValue,setUserNameValue] = useState("")
  const [passValue,setPassValue] = useState("")
  useEffect(()=>{
    if(responseData?.messType === "done login"){
      setCookie("name",responseData?.userName)
      setCookie("pass",passValue)
      setCookie("icon",responseData?.icon)
      setCookie("userId",responseData?.userId)
      setIsLogin(true)
      props.setLoginState(true)
    }else{
      console.log(responseData?.messType)
    }
  },[responseData])
  return (
    <div className='LoginPageMain'>
      <div className='LoginPageTop'>
        <span className='LoginPageTitle'>FBoard</span>
      </div>
      <div className='LoginPageCenter'>
        <span className='LoginPageName'>UserName</span><br/>
        <input type='text' className='LoginPageNameBox' onChange={(event)=>{setUserNameValue(event.target.value)}}/>
        <span className='LoginPagePass'>PassWold</span>
        <input type='text' className='LoginPageNameBox' onChange={(event)=>{setPassValue(event.target.value)}}/>
        <button className='LoginPageEnterButton' onClick={()=>{loginLogi(userNameValue,passValue,setRespomseData)}}><span className='LoginPageEnterButtonText' >Login</span></button>
      </div>
      <div className='LoginPageLine'>
        <div className='LoginPageLineLeft'></div>
        <span className='LoginPageLineText'>or create accoutnt</span>
        <div className='LoginPageLineRight'></div>
      </div>
      <button className='LoginPageCreateButton'><span className='LoginPageEnterButtonText' >Create Account</span></button>
      <div className='LoginPageCreWarpp'>
        <span className='LoginPageCreText'>©Fboard 2023 Created by fumi</span>
      </div>
      {isLogin?<Navigate replace to="/home"/>:<></>}
    </div>
  )
}

export default LoginPageMain