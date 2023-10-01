import React from 'react'
import "./PageButtons.css"
import HomeIcon from '@mui/icons-material/Home';

function PageButtons(props:{buttonText:string,icon:JSX.Element}) {
  return (
    <div className='PageButton'>
        <>{props.icon}</>
        <span className='PageButtonText'>{props.buttonText}</span>
    </div>
  )
}

export default PageButtons