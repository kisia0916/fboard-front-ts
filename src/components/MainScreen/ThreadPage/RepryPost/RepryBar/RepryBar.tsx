import React, { useEffect, useState } from 'react'
import "./RepryBar.css"
import CloseIcon from '@mui/icons-material/Close';


function RepryBar(props:{isTopFlg:boolean,userName:string,closeReplyBar:any}) {

    const [borderRadi,setBorderRadi] = useState<string>(props.isTopFlg === false?"10px 10px 0 0":"")
    console.log(borderRadi)
    useEffect(()=>{
        console.log("バーが再描画されました")
        if(props.isTopFlg){
            setBorderRadi("")

        }else{
            setBorderRadi("10px 10px 0 0")

        }
    },[props.isTopFlg])
  return (
    <div className='RepryBar' style={{borderRadius:borderRadi}}>
        <span className='RepryBarText'>Replying to {props.userName}</span>
        <CloseIcon className='ThreadPageSendBoxFileCloseIcon' style={{fontSize:"140%"}} onClick={props.closeReplyBar}/>

    </div>
  )
}

export default RepryBar