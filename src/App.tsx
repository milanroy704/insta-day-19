import { useState } from 'react';
import './App.css';
import Login from "./Login"
function App() {
  const [fullName,setFullname]=useState("")
  const [response, setResponse] = useState(0);
  const handlePostRequest = async () => {
    try {
      const result = await fetch('https://reqres.in/api/users', {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json', // Indicate the content type
        },
        body: JSON.stringify({
          fullName: fullName,
          usename: "milan",
          email: "cool@gmail.com",
          password: "pasdfdl123"
        }), // Convert your data to JSON
      });

      // Check if the response is successful
      if (result.ok) {
        const data = await result.json();
        setResponse(data); // Store the response in the state
      } else {
        console.error('Error:', result.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };


  return (

    <>

      <div className="main">
        <h2 className="head">Instagram</h2>
        <p className="head1">
          Sign up to see photos and videos from your friends
        </p>
        <button id="facebook-btn">Log in with Facebook</button>
        <div style={{ display: "flex", alignItems: "center" }}><hr id="line"></hr>OR <hr id="line"></hr></div>

        <input
          className="input-box"
          type="text"
          placeholder="Mobile No or Email"
        ></input>
        <input
          className="input-box"
          type="text"
          value={fullName}
          onChange={(e)=>{setFullname(e.target.value)}}
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
      <Login />
    </>
  );
}

export default App;
