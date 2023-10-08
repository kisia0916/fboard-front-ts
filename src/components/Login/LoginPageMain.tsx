import React from 'react'
import "./LoginPageMain.css"
function LoginPageMain() {
  return (
    <div className='LoginPageMain'>
      <div className='LoginPageTop'>
        <span className='LoginPageTitle'>FBoard</span>
      </div>
      <div className='LoginPageCenter'>
        <span className='LoginPageName'>UserName</span><br/>
        <input type='text' className='LoginPageNameBox'/>
        <span className='LoginPagePass'>PassWold</span>
        <input type='text' className='LoginPageNameBox'/>
        <button className='LoginPageEnterButton'><span className='LoginPageEnterButtonText'>Login</span></button>
      </div>
      <div className='LoginPageLine'>
        <div className='LoginPageLineLeft'></div>
        <span className='LoginPageLineText'>or create accoutnt</span>
        <div className='LoginPageLineRight'></div>
      </div>
      <button className='LoginPageCreateButton'><span className='LoginPageEnterButtonText'>Create Account</span></button>
      <div className='LoginPageCreWarpp'>
        <span className='LoginPageCreText'>©Fboard 2023 Created by fumi</span>
      </div>
    </div>
  )
}

export default LoginPageMain