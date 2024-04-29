import React from "react";
import { Navigate, useParams } from "react-router-dom";

function MoveProfile(){
    const profileUserId:string = useParams().id as string
    return(
        <div style={{width:"640px",height:"100vh"}}>
            <Navigate to={`/profile/${profileUserId}`}/>
        </div>
    )
}

export default MoveProfile
