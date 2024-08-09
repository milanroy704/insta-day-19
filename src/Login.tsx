import React from 'react'

const Login = () => {
  return (
    <div>
    <div className="login-main">
        <h2 className="head">Instagram</h2>
       
        <input className="input-box" type="text" placeholder="Phone Number,UserName, "></input>
        <input className="input-box" type="text" placeholder="Password"></input>
        <div id="login-line" style={{display:"flex",alignItems:"center"}}><hr id="line"></hr>OR <hr id="line"></hr></div>

        <button id="signup-btn">Log in</button>
        <p id="login-para"><a> Log in With FaceBook</a></p>
        <p id="login-para">Forgat Password?</p>
      </div>
      <div id="login">
        <h4 id="have-account"> Don't Have an account?  <a>Sign Up</a></h4>
      </div>
         <h4 id="footer1">Get The App</h4>
         <button className='footer-get'>GET IT ON <span>Microsoft</span></button>
         <button className='footer-get'>GET IT ON  <span>Google Play</span></button>
        </div>
  )
}
export default Login;