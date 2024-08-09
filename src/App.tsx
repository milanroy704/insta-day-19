import './App.css';

function App() {
  return (
    <>
      <div className="main">
        <h2 className="head">Instagram</h2>
        <p className="head1">
          Sign up to see photos and videos from your friends
        </p>
        <button id="facebook-btn">Log in with Facebook</button>
        <div style={{display:"flex",alignItems:"center"}}><hr id="line"></hr>OR <hr id="line"></hr></div>
        
        <input
          className="input-box"
          type="text"
          placeholder="Mobile No or Email"
        ></input>
        <input
          className="input-box"
          type="text"
          placeholder="Full Name"
        ></input>
        <input className="input-box" type="text" placeholder="UserName"></input>
        <input className="input-box" type="text" placeholder="Password"></input>
        <p className="bottom-para">
          People who use our service may have uploaded your contact information
          to Instagram.{' '}
          <a>
            <i> Learn More</i>
          </a>
        </p>
        <p className="bottom-para">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
          <a>
            <i> Learn More</i>
          </a>
         
        </p>
        <button id="signup-btn">Sign Up</button>
      </div>
      <div id="login">
        <h4 id="have-account">Have an account?  <a>Log in</a></h4>
      </div>
    </>
  );
}

export default App;
