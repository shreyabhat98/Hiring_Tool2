import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div id="login">
        <br />
        <br />
      <div className="Login"> 
      <div className="t"><h2> Login </h2></div>
      <form>
      <div>
      &nbsp;&nbsp;Rackf Id :&nbsp; 
      <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
      </div>
      <br/>
       <div>
         Password :&nbsp;
       <input type="password" placeholder="Password" name="psw" size ="30" required></input>
       </div>
       <br />
       <br />
       <Link to="/SignUp"><button class="button2">Sign Up</button></Link>
       <Link to="/home"><button class="button1"> Login</button></Link>
      <div>

          
      <Link to="/ForgotPassword"><button class ="button3">Forgot Password</button></Link>
        </div>
      </form>
      </div>
      </div>
    );

    }
  }
      export default Login