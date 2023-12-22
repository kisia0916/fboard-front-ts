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
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["プログラミング","卒論","開発テスト"]} titleIcon='http://localhost:5000/public/img/thread/c4c24eae-8088-4bc2-a707-bdc6fa420b83.png' userIcon=''/>
          <ThreadMain threadTitle='SNSを個人で開発してみた' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["Node.js","React","プログラミング"]} titleIcon='http://localhost:3000/photos/zbnU2dcD_400x400.jpg' userIcon=''/>
          <ThreadMain threadTitle='アドベントカレンダーを描いてみたい' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["卒論","プログラミング","雑談"]} titleIcon='http://localhost:5000/public/img/f9a0a103-9421-473b-8de3-1bdddb676f3a.jpg' userIcon=''/>
          <ThreadMain threadTitle='自作PCにつけられるグラボを探そう' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={["自作PC","GPU","雑談"]} titleIcon='http://localhost:5000/public/img/b379be33-d3d1-4c9b-afd4-4513a5d88720.jpg' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon=''/>
          <ThreadMain threadTitle='fboradスレッド読み込みテスト' threadId='test' likeNum={10} userNum={30} postNum={30} createUserName='kisia' createdDate='2-2-2t' tagList={[]} titleIcon='' userIcon=''/>




          </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default ProfileSeMain