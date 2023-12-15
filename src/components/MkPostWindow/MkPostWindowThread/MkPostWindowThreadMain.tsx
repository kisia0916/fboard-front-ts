import React, { useContext, useRef, useState } from 'react'
import "./MkPostWindowThreadMain.css"
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@mui/icons-material';
import { mkPostWindowContext } from '../../../App';
import MkPostWindowThreadTagMain from './MkPostWindowThreadTag/MkPostWindowThreadTagMain';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { mkPostWindowThreadSend } from './MkPostWindowThreadSend/mkPostWindowTheradSend';
function MkPostWindowThreadMain() {
  const mkPostContext:any = useContext(mkPostWindowContext)
  const [threadTitle,setThreadTitle] = useState(mkPostContext.mkPostTitle)
  const [threadFirstPost,setThreadFirstPost] = useState("")
  const [cookies,setCookie] = useCookies()
  const [tagNameBox,setTagNameBox] = useState("")
  const selectFileRef:any = useRef(null)
  const userIcon:string = cookies.icon
  const [selectThreadImg,setSelectThreadImg] = useState<any>(null)
  const [tagList,setTagList] = useState<string[]>([])
  const addTag = ()=>{
    setTagList([tagNameBox,...tagList])
    setTagNameBox("")
  }
  const openFileSelector = ()=>{
    if(selectFileRef){
      selectFileRef.current.click()
    }
  }
  const changeFile = (e:any)=>{
    setSelectThreadImg(e.target.files[0])
  }
  const uploadThreadImg = ()=>{
    if(threadTitle && threadFirstPost){
      const formData = new FormData()
      if(selectThreadImg){
        formData.append("postimg",selectThreadImg)
        axios.post("http://localhost:5000/thread/data/uploadthreadimg",formData).then((res)=>{
          console.log("done")
          console.log(res.data)
          mkPostWindowThreadSend(cookies.userId,threadTitle,cookies.pass,"public",threadFirstPost,tagList,res.data)
        }).catch((e)=>{
          console.log(e)
          console.log("error")
        })
      }
    }else{

    }
  }
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
              <textarea placeholder='First post' className='MkPostWindowThradFirstPostInput' value={threadFirstPost} onChange={(e)=>setThreadFirstPost(e.target.value)}/>
            </div>
          </div>
          <div className='MkPostWindowThreadTagListWarpp'>
            {tagList.map((i)=>
              <MkPostWindowThreadTagMain title={i}/>
            )}
          </div>
           <div className='MkPostWindowThreadTagWarpp'>
              <div className='MkPostWindowThreadTagInputWarpp'>
                <input type='text' className='MkPostWindowThreadTagInput' placeholder='Tag title' value={tagNameBox} onChange={(e)=>{setTagNameBox(e.target.value)}}></input>
                <button className='MkPostWindowThreadTagAddButton' onClick={addTag}>
                  <AddIcon style={{margin:"auto"}}/>
                </button>
              </div>
            </div>
          <div className='MkPostWindowThreadSelectImageWarpp'>
            <div className='MkPostWindowThreadSelectImagePreview'>
              <img src={selectThreadImg?URL.createObjectURL(selectThreadImg):userIcon} alt='' className='MkPostWindowThreadSelectImagePreviewImg'/>
            </div>
            <div className='MkPostWindowThreadSelectImagePreviewRight'>
                <p className='MkPostWindowThreadSelectImagePreviewTitle'>default img</p>
                <input type='file' ref={selectFileRef} onChange={changeFile} style={{display:"none"}}/>
                <button className='MkPostWindowThreadSelectImagePreviewAddButton' onClick={openFileSelector}><span className='MkPostWindowThreadSelectImagePreviewAddButtonText'>Change</span></button>
            </div>
          </div>
          <button className='MkPostWindowThreadEnterButton'onClick={uploadThreadImg}>
              <span className='MkPostWindowThreadEnterButtonText'>Create</span>
          </button>
        </div>
    </div>

  )
}

export default MkPostWindowThreadMain