import React from 'react'
import "./Tags.css"
import TagIcon from '@mui/icons-material/Tag';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Tags(props:{bottomFlg?:boolean,Tagtext:string}) {
    let tagStyle:string = "0 0 0 0"
    let tagStyle2:string = ""
    if(props.bottomFlg){
        tagStyle = "0 0 10px 10px"
        tagStyle2 = "none"
    }
    return (
        <div className='TagsMain' style={{borderRadius:tagStyle,border:tagStyle2}}>
            <div className='TagSpaceLeft'>
                <TagIcon className='TagIcon'/>
                <span className='TagTitle'>{props.Tagtext}</span>
            </div>
            <div className='TagNumWarpp'>
                <ChatBubbleIcon className='TagNumIcon' style={{fontSize:"120%"}}/>
                <span className='TagNumText'>10</span>
            </div> 
        </div>
    )
}

export default Tags