import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./SearchResult.css"
import SearchIcon from '@mui/icons-material/Search';


function SearchResult(){
    const [searchWorld,setSearchWorld] = useState<string>(useParams().word as string)
    useEffect(()=>{
        
    },[])
    return(
        <div className="searchResultMain">
            <div className="searchResultTop">
                <ArrowBackIosNewIcon className="SearchTopArrowIcon" style={{fontSize:"150%"}}/>
                <div style={{display:"flex",margin:"auto"}}>
                    <SearchIcon className='searchResultTitleIcon' style={{fontSize:"170%"}}/>
                    <span className='SearchTitle'>Krunker.io</span>
                </div>
            </div>
        </div>
    )
}

export default SearchResult