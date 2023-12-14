import React, { useContext, useState } from 'react'
import "./MkPostWindowThreadMain.css"
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@mui/icons-material';
import { mkPostWindowContext } from '../../../App';
function MkPostWindowThreadMain() {
  const mkPostContext:any = useContext(mkPostWindowContext)
  const [threadTitle,setThreadTitle] = useState(mkPostContext.mkPostTitle)
  return (
    <div className='MkPostWindowThreadMain'>
        <div className='MkPostWindowThreadTitle'><span className='MkPostWindowThreadTitleText'>Create Thread</span></div>
        <div className='MkPostWindowThreadScreen'>
          <div className='MkPostWindowThreadTitleInputWarpp'>
            <div className='MkPostWindowThreadTitleInputWarppWarpp'>
              <input type='text' className='MkPostWindowThreadTitleInput' placeholder='Thread title' value={threadTitle} onChange={(e)=>{setThreadTitle(e.target.value)}}></input>
            </div>
          </div>
          <div className='MkPostWindowThradFirstPostInputWarppWarpp'>
            <div className='MkPostWindowThradFirstPostInputWarpp'>
              <textarea placeholder='First post' className='MkPostWindowThradFirstPostInput'/>
            </div>
          </div>
          <div className='MkPostWindowThreadTagWarpp'>
              <div className='MkPostWindowThreadTagInputWarpp'>
                <input type='text' className='MkPostWindowThreadTagInput' placeholder='Tag title'></input>
                <button className='MkPostWindowThreadTagAddButton'>
                  <AddIcon style={{margin:"auto"}}/>
                </button>
              </div>
            </div>
          <div className='MkPostWindowThreadSelectImageWarpp'>
            <div className='MkPostWindowThreadSelectImagePreview'>
              <img src='/photos/zbnU2dcD_400x400.jpg' alt='' className='MkPostWindowThreadSelectImagePreviewImg'/>
            </div>
            <div className='MkPostWindowThreadSelectImagePreviewRight'>
                <p className='MkPostWindowThreadSelectImagePreviewTitle'>default img</p>
                <button className='MkPostWindowThreadSelectImagePreviewAddButton'><span className='MkPostWindowThreadSelectImagePreviewAddButtonText'>Change</span></button>
            </div>
          </div>
          <button className='MkPostWindowThreadEnterButton'>
              <span className='MkPostWindowThreadEnterButtonText'>Create</span>
          </button>
        </div>
    </div>

  )
}

export default MkPostWindowThreadMain