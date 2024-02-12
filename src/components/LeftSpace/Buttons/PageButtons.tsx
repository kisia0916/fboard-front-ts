import React from 'react'
import "./PageButtons.css"
import {BrowserRouter,Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

function PageButtons(props:{buttonText:string,icon:JSX.Element,link:string}) {
  return (
    // <BrowserRouter>
      <Link to={props.link} style={{textDecoration:"none"}}>
        <div className='PageButton'>
            <>{props.icon}</>
            <span className='PageButtonText'>{props.buttonText}</span>
        </div>
      </Link>
    // </BrowserRouter>
  )
}

export default PageButtons