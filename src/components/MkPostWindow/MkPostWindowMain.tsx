import React, { useContext, useState } from 'react'
import "./MkPostWindowMain.css"
import MkPostWindowThreadMain from './MkPostWindowThread/MkPostWindowThreadMain'
import MkPostWindowSelect from './MkPostWindowSelect/MkPostWindowSelect'
import { mkPostWindowContext } from '../../App'
function MkPostWindowMain(props:{mkstate:string}) {
  let mkwindow:React.ReactNode|undefined = undefined
  const postWindowContext:any = useContext(mkPostWindowContext)
  if (props.mkstate === "select"){
    mkwindow = <MkPostWindowSelect/>
  }else if(props.mkstate === "Thread"){
    mkwindow = <MkPostWindowThreadMain/>
  }else{
    mkwindow = <></>
  }
  const [mouseState,setMouseState] = useState<boolean>(false)
  const deleteWindow = ()=>{
    if(!mouseState){
      postWindowContext.setMkPostWindowState("")
    }
  }
  return (

    <>
      {props.mkstate?<div className='MkPostWindowMain' onClick={deleteWindow}><div style={{margin:"auto"}} onMouseEnter={()=>{setMouseState(true)}} onMouseLeave={()=>{setMouseState(false)}}>{mkwindow}</div></div>:<></>}
    </>
  )
}

export default MkPostWindowMain