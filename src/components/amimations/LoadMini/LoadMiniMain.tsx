import React from 'react'
import "./LoadMiniMain.css"
function LoadMiniMain(props:{color:string}) {
  return (
    <div className='LoadAniMain2' style={{borderTop:`2px solid ${props.color}`}}></div>
  )
}

export default LoadMiniMain