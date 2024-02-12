import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./FriendListPageMain.css"
import FriendUserMain from './FriendUser/FriendUserMain';

function FriendListPageMain() {
  return (
    <div className='friendListMain'>
        <div className='friendListPageTop'>
            <ArrowBackIosNewIcon className="friendListTopBackIcon" style={{fontSize:"150%"}}/>
            <span className='firstListTitle'>Friend List</span>
        </div>
        <div className='friendListPageInfo'>
            <div className='friendListSelectBarWarpp'>
                <span className='friendListSelectBarTitle'>Online(10)</span>
                <div className='friendListSelectBarLine'></div>
            </div>
            <div className='friendListSelectBarWarpp'>
                <span className='friendListSelectBarTitle'>Offline(3)</span>
            </div>
            <div className='friendListSelectBarWarpp'>
                <span className='friendListSelectBarTitle'>All(13)</span>
            </div>
        </div>
        <div className='friendListUser'>
            <FriendUserMain userName='fumi0916' profile='このSNSの開発者です' status='Homeを閲覧中'/>
            <FriendUserMain userName='ikento' profile='ikentoです。valorantがうまいです' status='自作PC創る会を閲覧中'/>
            <FriendUserMain userName='chsato' profile='かわいいです。リコリコで働いてます' status='Blogを執筆中'/>
            <FriendUserMain userName='takina' profile='DAに戻るためにリコリコで働いています。頑張ります' status='掲示板開発を閲覧中'/>

        </div>
    </div>
  )
}

export default FriendListPageMain