import React from 'react'
import "./TagRankSpace.css"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Tags from './Tag/Tags';
function TagRankSpace() {
  return (
    <div className='TagRankSpace'>
        <div className='TagRankTitle'>
            <LocalOfferIcon className='TagRankIcon' style={{fontSize:"140%"}}/>
            <span className='TagRankText'>Tag Rank</span>
        </div>
        <div className='TagRankMainSpace'>
            <Tags Tagtext={"プログラミング"}/>
            <Tags Tagtext={"音楽"}/>
            <Tags Tagtext={"ロボコン"}/>
            <Tags Tagtext={"輝玉祭"}/>
            <Tags Tagtext={"yube"} bottomFlg={true}/>


        </div>
    </div>
  )
}

export default TagRankSpace