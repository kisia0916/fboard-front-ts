import React from "react"
import "./JoinedThreadPageMain.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ThreadMain from "../../Thread/ThreadMain";

function JoinedThreadPageMain(){
    return(
        <div className="JoinThreadPageMain">
            <div className="JoinThreadPageTop">
                <ArrowBackIosNewIcon className="JoinThreadTopArrowIcon" style={{fontSize:"150%"}}/>
                <span className='firstListTitle'>Join Thread</span>
            </div>
            <div className="JoinThreadPageScreen">
            <ThreadMain threadTitle='自作PCにつけられるグラボを探そう' threadId='test' joinNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["自作PC","GPU","雑談"]} titleIcon='http://localhost:5000/public/img/b379be33-d3d1-4c9b-afd4-4513a5d88720.jpg' userIcon='' isJoined={false}/>

            </div>
        </div>
    )
}
export default JoinedThreadPageMain