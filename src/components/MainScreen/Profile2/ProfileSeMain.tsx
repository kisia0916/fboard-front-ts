import React from 'react'
import "./ProfileSeMain.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextsmsIcon from '@mui/icons-material/Textsms';
import EmailIcon from '@mui/icons-material/Email';
import ThreadUserPostMain from '../ThreadPage/ThreadUserPost/ThreadUserPostMain';
import ThreadMain from '../../Thread/ThreadMain';

function ProfileSeMain() {
  return (
    <div className='ProfileSeMain'>
        <div className='ProfileSeTopBar'>
          <div className='ProfileSeTopBarLeft'>
              <ArrowBackIosNewIcon className='ProfileSeBackIcon' style={{fontSize:"150%"}}/>
              <span className='ProfileSeTopBarUserName'>fumi</span>
              <div className='ProfileUserState'>
                  <div className='ProfileUserStateIcon'></div>
                  <span className='ProfileUserStateText'>オンライン</span>
              </div>
          </div>
          <div className='ProfileSeTopBarRight'>
            <TextsmsIcon className='ProfileUserNumIcon' style={{fontSize:"160%"}}/>
            <span className='ProfileUserNumText'>12</span>
          </div>
        </div>
        <div className='ProfileSeTopSpace'>
            <img src='/photos/header.jpg' alt='' className='ProfileSeTopHeaderImg'/>
            <div className='ProfileSeTopIconWarpp'></div>
            <div className='ProfileSeTopUserText'>
              <span className='ProfileSeTopUserName'>fumi@admin</span>
              <div className='ProfileSeTopUserFollowButton'>
                <span className='ProfileSeTopUserFollowButtonText'>Follow</span>
              </div>
            </div>
            <img src='/photos/zbnU2dcD_400x400.jpg' alt='' className='ProfileSeTopIconImg'/>

        </div>
        <div className='ProfileSeMainSpace'>
          <div className='ProfileSeMainProfileSpace'>
            <div className='ProfileSeMainProfileSpaceWarpp'>
              <span className='ProfileSeMainProfileSpaceText'>fumi_fumi_0916です
                よろしく
              </span>
            </div>
            <div className='ProfileSeMainProfileSpaceSendMessIconWarpp'>
              <EmailIcon className='ProfileSeMainProfileSpaceSendMessIcon' style={{fontSize:"180%"}}/>
            </div>
          </div>
          <div className='ProfileSeMainSelectContentBar'>
              <div className='ProfileSeMainSelectContentBarWarpp'>
                <span className='ProfileSeMainSelectContentBarTitle'>Thread</span>
                <div className='ProfileSeMainSelectContentBarSelected'></div>
              </div>
              <div className='ProfileSeMainSelectContentBarWarpp'>
                <span className='ProfileSeMainSelectContentBarTitle'>Blog</span>
              </div>
              <div className='ProfileSeMainSelectContentBarWarpp'>
                <span className='ProfileSeMainSelectContentBarTitle'>MiniMess</span>
              </div>
              <div className='ProfileSeMainSelectContentBarWarpp'>
                <span className='ProfileSeMainSelectContentBarTitle'>MyThread</span>
              </div>
          </div>
          <div className='ProfileSeMainCons'>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' likeNum={10} userNum={30} postNum={30} createUserName='fumi' createdDate='' tagList={[]} titleIcon='' userIcon=''/>


          </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default ProfileSeMain