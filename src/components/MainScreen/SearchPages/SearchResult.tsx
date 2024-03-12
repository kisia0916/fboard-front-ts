import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./SearchResult.css"
import SearchIcon from '@mui/icons-material/Search';
import FriendUserMain from "../FriendListPage/FriendUser/FriendUserMain";
import ThreadTagMain from "../../Thread/ThreadTag/ThreadTagMain";
import SearchResultTagMain from "./SearchResultTag/SearchResultTagMain";
import ThreadMain from "../../Thread/ThreadMain";
import axios from "axios";
import LoadAni from "../../amimations/Load/LoadAni";


function SearchResult(){
    const searchWord = useParams().word
    let [searchResultUserList,setSearchResultUserList] = useState<any[]>([])
    let [searchResultThreadList,setSearchResultThreadList] = useState<any[]>([])
    let [loadDoneFlg,setLoadDoneFlg] = useState<boolean>(false)
    useEffect(()=>{    
        setLoadDoneFlg(false)
        axios.post("http://localhost:5000/thread/datainfo/findthread",{
            searchWord:searchWord?.toString()
        }).then((res:any)=>{
            setSearchResultUserList(res.data.user)
            setSearchResultThreadList(res.data.thread)
            setLoadDoneFlg(true)
        })
    },[searchWord])
    return(
        <div className="searchResultMain">
            <div className="searchResultTop">
                <ArrowBackIosNewIcon className="SearchTopArrowIcon" style={{fontSize:"150%"}}/>
                <div style={{display:"flex",margin:"auto"}}>
                    <SearchIcon className='searchResultTitleIcon' style={{fontSize:"170%"}}/>
                    <span className='SearchTitle'>{searchWord}</span>
                </div>
            </div>
            <div className="searchResultContentMain">
                {loadDoneFlg?
                    <>
                        {searchResultUserList.length !== 0?<div className="searchResultCon">
                            <div className="searchResultConTop">
                                <span className="searchResultConTitle">Users</span>
                            </div>
                            <div className="searchResultConMain">
                                {searchResultUserList.map((i)=>
                                <FriendUserMain userName={i.userName} profile={i.profile} status="Homeを閲覧中"/>
                                )}
                            </div>
                        </div>:<></>}
                        {searchResultThreadList.length !== 0?<div className="searchResultCon">
                            <div className="searchResultConTop">
                                <span className="searchResultConTitle">Threads</span>
                            </div>
                            <div className="searchResultConMain">
                                {searchResultThreadList.map((i)=>
                                <ThreadMain threadId={i.theradId} threadTitle={i.title} joinNum={i.joinNum} userNum={10} postNum={i.messNum} createUserName={i.userName} createdDate={i.createdAt} tagList={i.tags} titleIcon={i.threadPhoto} userIcon="/photos/unnamed.jpg" isJoined={false}/>
                                )}

                            </div>
                        </div>:<></>}
                    </>
                :<LoadAni size="30px" top="30px"/>}
            </div>
        </div>
    )
}

export default SearchResult