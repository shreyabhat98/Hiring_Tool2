import React, { Component } from 'react';
// import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="App"><br/><br/>
      <div className="t"><h3> Sign Up</h3></div>
      <form>
      <div>
      <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
      </div>
      <br/>
      <div>
      <input type="email" placeholder="Email ID (xyz@abcd.com)" name="email"size ="30" required></input>
      </div><br/>
      <div>      
    <input type="password" placeholder="Password" name="psw" size ="30" required></input>
    </div><br/>
      <div>
      <input type="email" placeholder="Verifier Email ID (xyz@abcd.com)" name="email" size ="30" required></input>
      </div><br/>

      <button class="button1">Sign Up</button>
      <Link to="/Login"><button className="button2 btn btn-primary"> Back to Login</button></Link>
      </form>

      </div>
    );
  }
}

export default Signup;