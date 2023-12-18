import React from 'react'
import "./LoadAni.css"

function LoadAni(props:{size:string,top:string}) {
  return (
    <div className='LoadAniMain' style={{width:props.size,height:props.size,marginTop:props.top}}></div>
  )
}

export default LoadAni