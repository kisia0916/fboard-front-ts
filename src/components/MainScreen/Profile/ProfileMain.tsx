import React from 'react'
import "./ProfileMain.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import ThreadMain from '../../Thread/ThreadMain';
import ProfileThreadMain from './ProfileThread/ProfileThreadMain';
function ProfileMain() {
  return (
    <div className='MainScreen'>
     <div className='MainScreenTop'>
      <div className='MainScreenTopWarpp'>
        <div className='MainScreenTopTexts'>
          <ArrowBackIosIcon className='ProfilePageMainBack' style={{fontSize:"145%"}}/>
          <span className='ProfilePageMainTitle'>fumi</span>
          <div className='profileTopUserState'>
            <div className='profileTopUserStateIcon'></div>
            <span className="profileTopUserStateText">オンライン</span>
          </div>
        </div>
      </div>
     </div>
     <div className='ProfileMainConTents'>
        <div className='ProfilePageLeft'>
          <div className='ProfilePageLeftTop'>
              <img src='/photos/a_winding_mountain_road-Mountain_scenery_wallpaper_1366x768.jpg' alt='' className='ProfilePageLeftHeaderImg'/>
              <div className='ProfilePageIconMain'>
                <div className='ProfilePageIconWarpp'>
                  <img src='/photos/zbnU2dcD_400x400.jpg' alt='' className='ProfilePageLeftIconImg'/>
                </div>
              </div>
              <div className='ProfileLeftUserNameWarpp'>
                <span className='ProfileLeftUserName'>fumi0916</span>
              </div>
          </div>
          <div className='ProfilePageLeftAddFriendButtonWarpp'>
            <div className='ProfilePageLeftAddFriendButton'>
              <div style={{display:"flex",margin:"auto"}}>
                  <AddIcon className='ProfilePageLeftAddFriendButtonIcon' style={{fontSize:"190%"}}/>
                  <span className='ProfilePageLeftAddFriendButtonText'>Add Friend</span>
              </div>
            </div>
          </div>
          <div className='ProfilePageLeftProfileMess'>
            <div className='ProfilePageLeftProfileMessWarpp'>
                  <div className='ProfilePageLeftProfileMessWarppTitleWarpp'>
                    <span className='ProfilePageLeftProfileMessWarppTitle'>Profile Mess</span><SettingsIcon className='ProfilePageLeftProfileMessEditIcon' style={{fontSize:"125%"}}/>
                  </div>
                  <div className=''>
                    <p className='ProfilePageLeftProfileMessText'>このサイトのadminです。中三です。よろしくお願いします<br/>uiをイケイケにしたい</p>
                  </div>
            </div>
          </div>


        </div>
        <div className='ProfilePageRight'>
            <div className='ProfilePageRightTop'>
                <div className='ProfilePageRightTabs'>
                    <div className='ProfileRightTabWarpp'>
                        <span className='ProfileRightTabText'>Thread</span>
                        <div className="ProfileRightBottomLine"></div>
                    </div>
                    <div className='ProfileRightTabWarpp'>
                        <span className='ProfileRightTabText'>Blog</span>
                    </div>
                    <div className='ProfileRightTabWarpp'>
                        <span className='ProfileRightTabText'>Minimess</span>
                    </div>
                </div>
            </div>
            <div className='ProfileRightMainSpace'>
              <ProfileThreadMain/>
              <ProfileThreadMain/>
              <ProfileThreadMain/>
              <ProfileThreadMain/>
              <ProfileThreadMain/>
              <ProfileThreadMain/>
              <ProfileThreadMain/>
              <ProfileThreadMain/>

 


            </div>
        </div>

        </div>
    </div>
  )
}

export default ProfileMain