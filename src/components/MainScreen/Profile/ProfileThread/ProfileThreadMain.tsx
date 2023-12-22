import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import TagIcon from '@mui/icons-material/Tag';
import "./ProfileThreadMain.css"
function ProfileThreadMain(props:{titlePhoto:string,tagList:string[],}) {
  return (
    <div className='ProfileThreadMain'>
        <div className='ProfileThreadLeft'>
            <img src={props.titlePhoto} alt='' className='ProfileThreadIcon'/>
        </div>
        <div className='ProfileThreadRight'>
            <div className='ProfileThreadLeftTop'>
                <span className='ProfileThreadTitleText'>fboardUIテスト</span>
                <div className='ProfileThreadTag'>
                    <TagIcon style={{fontSize:"110%"}} className='ProfileThreadTagIcon'/>
                    <span className='ProfileThreadTagText'>プログラミング</span>
                </div>
            </div>
            <div className='ProfileThreadBottom'>
                <img src='/photos/zbnU2dcD_400x400.jpg'  alt='logo' className='ProfileThreadCreateIcon'/>
                <span className='ProfileThreadCreateName'>fumi</span>
                <span className='ProfileThreadCreateDate'>- 2023/10/6</span>
                <div className='ProfileThreadLikeButton'>
                    <FavoriteIcon className='ProfileThreadButtonIcon' style={{fontSize:"125%"}}/>
                    <span className='ProfileThreadButtonText'>10</span>
                </div>
                <div className='ProfileThreadMessNum'>
                    <ChatBubbleIcon className='ProfileThreadMessNumIcon' style={{fontSize:"140%"}}/>
                    <span className='ProfileThreadMessNumText'>10</span>
                </div>
                <div className='ProfileThreadPerson'>
                    <PersonIcon className='ProfileThreadPersonIcon' style={{fontSize:"170%"}}/>
                    <span className='ProfileThreadMessNumText'>10</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileThreadMain