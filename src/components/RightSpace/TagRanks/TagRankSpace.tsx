import React, { useEffect, useState } from 'react'
import "./TagRankSpace.css"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Tags from './Tag/Tags';
import { getTag } from '../../../interface/getTagInterface';
import axios from 'axios';
import LoadAni from '../../amimations/Load/LoadAni';
function TagRankSpace() {
  const [randomTags,setRandomTags] = useState<getTag[]>([])
  const [loadDoneFlg,setLoadDoneFlg] = useState<boolean>(false)
  useEffect(()=>{
    axios.get("http://localhost:5000/tags/data/getrandomtag",{}).then((res)=>{
        setRandomTags(res.data)
        setLoadDoneFlg(true)
    }).catch((error)=>{})
  },[])
  return (
    <div className='TagRankSpace'>
        <div className='TagRankTitle'>
            <LocalOfferIcon className='TagRankIcon' style={{fontSize:"140%"}}/>
            <span className='TagRankText'>Radom Tag</span>
        </div>
          <div className='TagRankMainSpace'>

              {loadDoneFlg?randomTags.map((i)=>{
                return <Tags Tagtext={i.title} postNum={i.postNum}/>
              }):<LoadAni size='30px' top="30px"/>}
          </div>
    </div>
  )
}

export default TagRankSpace