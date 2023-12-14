import React from 'react'
import "./MkPostWindowMain.css"
import MkPostWindowThreadMain from './MkPostWindowThread/MkPostWindowThreadMain'
import MkPostWindowSelect from './MkPostWindowSelect/MkPostWindowSelect'
function MkPostWindowMain(props:{mkstate:string}) {
  let mkwindow:React.ReactNode|undefined = undefined
  if (props.mkstate === "select"){
    mkwindow = <MkPostWindowSelect/>
  }else if(props.mkstate === "Thread"){
    mkwindow = <MkPostWindowThreadMain/>
  }else{
    mkwindow = <></>
  }
  return (

    <>
      {props.mkstate?<div className='MkPostWindowMain'>{mkwindow}</div>:<></>}
    </>
  )
}

export default MkPostWindowMain