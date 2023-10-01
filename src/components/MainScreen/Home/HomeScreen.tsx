import React from 'react'
import "./HomeScreen.css"
import HomeIcon from '@mui/icons-material/Home';
import ThreadMain from '../../Thread/ThreadMain';
import HomeScreenCreateMain from './HomeScreenCreate/HomeScreenCreateMain';

function HomeScreen() {
  return (
    <div className='MainScreen'>
      <div className='MainScreenTop'>
        <div className='MainScreenTopTexts'>
          <HomeIcon style={{fontSize:"208%"}} className='MainScreenIcon'/>
          <span className='MainScreenTitle'>Home</span>
        </div>
      </div>
      <div className='MainScreenMainWarpp'>
        <HomeScreenCreateMain/>
        <div className='MainScreenMainSpace'>
            <ThreadMain topFlg={true}/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>
            <ThreadMain/>


        </div>
      </div>
    </div>
  )
}

export default HomeScreen