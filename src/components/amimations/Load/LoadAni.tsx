import React from 'react'
import "./LoadAni.css"

function LoadAni(props:{size:string}) {
  return (
    <div className='LoadAniMain' style={{width:props.size,height:props.size}}></div>
  )
}

export default LoadAni