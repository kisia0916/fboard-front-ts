import React, { useContext, useEffect, useRef, useState } from 'react'
import "./MkPostWindowThreadMain.css"
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@mui/icons-material';
import { mkPostWindowContext } from '../../../App';
import MkPostWindowThreadTagMain from './MkPostWindowThreadTag/MkPostWindowThreadTagMain';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { mkPostWindowThreadSend } from './MkPostWindowThreadSend/mkPostWindowTheradSend';
import LoadAni from '../../amimations/Load/LoadAni';
import LoadMiniMain from '../../amimations/LoadMini/LoadMiniMain';
function MkPostWindowThreadMain() {
  const mkPostContext:any = useContext(mkPostWindowContext)
  const [threadTitle,setThreadTitle] = useState(mkPostContext.mkPostTitle)
  const [threadFirstPost,setThreadFirstPost] = useState("")
  const [cookies,setCookie] = useCookies()
  const [bariErrorText1,setBariErrorText1] = useState("")
  const [bariErrorText2,setBariErrorText2] = useState("")
  const [bariErrorText3,setBariErrorText3] = useState("")
  const [bariErrorStyle1,setBariErrorStyle1] = useState<any>({})
  const [bariErrorStyle2,setBariErrorStyle2] = useState<any>({})
  const [bariErrorStyle3,setBariErrorStyle3] = useState<any>({})
  const [tagNameBox,setTagNameBox] = useState("")
  const [uploadLoading,setUploadLoading] = useState<boolean>(false)
  const selectFileRef:any = useRef(null)
  const userIcon:string = cookies.icon
  const [selectThreadImg,setSelectThreadImg] = useState<any>(null)
  const [tagList,setTagList] = useState<string[]>([])
  const addTag = ()=>{
    if(tagNameBox){
      setTagList([tagNameBox,...tagList])
      setTagNameBox("")
      setBariErrorStyle3({})
    }
  }
  const openFileSelector = ()=>{
    if(selectFileRef){
      selectFileRef.current.click()
    }
  }
  const changeFile = (e:any)=>{
    setSelectThreadImg(e.target.files[0])
  }
  const addTagKeyDown = (e:any)=>{
    if(e.keyCode === 13){
      addTag()
    }
  }
  const uploadThreadImg = ()=>{
    if(threadTitle && threadFirstPost && !uploadLoading){
      const formData = new FormData()
      if(selectThreadImg){
        formData.append("postimg",selectThreadImg)
        axios.post("http://localhost:5000/thread/data/uploadthreadimg",formData).then((res)=>{
          console.log("done")
          console.log(res.data)
          mkPostWindowThreadSend(cookies.userId,threadTitle,cookies.pass,"public",threadFirstPost,tagList,true,res.data,setUploadLoading,mkPostContext.setMkPostWindowState)
        }).catch((e)=>{
          console.log(e)
          console.log("error")
        })
      }else{
          mkPostWindowThreadSend(cookies.userId,threadTitle,cookies.pass,"public",threadFirstPost,tagList,false,cookies.icon,setUploadLoading,mkPostContext.setMkPostWindowState)
      }
    }else{
      //バリデーション
      if(!threadTitle){
        setBariErrorText1("Not enough")
        setBariErrorStyle1({border:"solid 1px rgba(255, 105, 127, 1)"})
      }else{
        setBariErrorText1("")
        setBariErrorStyle1({})
      }
      if(!threadFirstPost){
        setBariErrorText2("Not enough")
        setBariErrorStyle2({border:"solid 1px rgba(255, 105, 127, 1)"})
      }else{
        setBariErrorText2("")
        setBariErrorStyle2({})
      }
      if(tagList.length<=0){
        setBariErrorText3("Not enough")
        setBariErrorStyle3({border:"solid 1px rgba(255, 105, 127, 1)"})
      }else{
        setBariErrorText3("")
        setBariErrorStyle3({})
      }
    }
  }
  
  return (
    <div className='MkPostWindowThreadMain'>
        <div className='MkPostWindowThreadTitle'><span className='MkPostWindowThreadTitleText'>Create Thread</span></div>
        <div className='MkPostWindowThreadScreen'>
          <div className='MkPostWindowThreadTitleInputWarpp'>
            <div className='MkPostWindowThreadTitleInputWarppWarpp' style={bariErrorStyle1}>
              <input type='text' className='MkPostWindowThreadTitleInput' placeholder={bariErrorText1?bariErrorText1:'Thread title'} value={threadTitle} onChange={(e)=>{setThreadTitle(e.target.value)}} ></input>
            </div>
          </div>
          <div className='MkPostWindowThradFirstPostInputWarppWarpp'>
            <div className='MkPostWindowThradFirstPostInputWarpp' style={bariErrorStyle2}>
              <textarea placeholder={bariErrorText2?bariErrorText2:"First post"} className='MkPostWindowThradFirstPostInput' value={threadFirstPost} onChange={(e)=>setThreadFirstPost(e.target.value)} />
            </div>
          </div>
          <div className='MkPostWindowThreadTagListWarpp'>
            {tagList.map((i)=>
              <MkPostWindowThreadTagMain title={i}/>
            )}
          </div>
           <div className='MkPostWindowThreadTagWarpp'>
              <div className='MkPostWindowThreadTagInputWarpp' style={bariErrorStyle3}>
                <input type='text' className='MkPostWindowThreadTagInput' placeholder={bariErrorText3?bariErrorText3:'Tag title'} value={tagNameBox} onKeyDown={addTagKeyDown} onChange={(e)=>{setTagNameBox(e.target.value)}}  ></input>
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
              {uploadLoading?<LoadMiniMain/>:<span className='MkPostWindowThreadEnterButtonText'>Create</span>}
          </button>
        </div>
    </div>

  )
}

export default MkPostWindowThreadMain