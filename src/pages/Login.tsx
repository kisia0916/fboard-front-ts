import React from 'react'
import LoginPageMain from '../components/Login/LoginPageMain'

function Login(props:{setLoginState:any}) {
  return (
    <>
      <LoginPageMain setLoginState={props.setLoginState}/>
    </>
  )
}

export default Login