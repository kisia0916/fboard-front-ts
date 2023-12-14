import React, { useContext, useRef, useState } from 'react'
import "./MkPostWindowSelect.css"
import { mkPostWindowContext } from '../../../App'
function MkPostWindowSelect() {
  const mkWindowFun:any = useContext(mkPostWindowContext)
  console.log(mkWindowFun)
  const [selectType,setSelectType] = useState("Thread")
  return (
    <div className='MkPostWindowSelectMain'>
        <div className='MkPostWindowSelectWarpp'>
            <div className='MkPostWindowSelectTop'>
                <span className='MkPostWindowSelectTopText'>select post type</span>
            </div>
            <div className='MkPostWindowSelectBottom'>
                <select className='MkPostWindowSelectSelect' value={selectType} onChange={(e)=>{setSelectType(e.target.value);console.log(selectType)}}>
                    <option className='MkPostWindowSelectSelectText'>Thread</option>
                    <option className='MkPostWindowSelectSelectText'>Blog</option>
                    <option className='MkPostWindowSelectSelectText'>MiniMess</option>
                </select>
            </div>
            <div style={{width:"100%",display:"flex"}}>
                <button className='MkPostWindowSelectEnterButton' onClick={()=>{mkWindowFun.setMkPostWindowState(selectType)}}><span className='MkPostWindowSelectEnterButtonText'>Enter</span></button>
            </div>
        </div>
    </div>
  )
}

export default MkPostWindowSelect