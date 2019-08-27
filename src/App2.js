import React, { Component } from 'react';
 import AdminPage from './AdminPage';
 import Signup from './Signup';
  import Login from './Login';
 import Footer from './Footer';
 import ForgotPassword from './ForgotPassword';
   import Header from './Header';

class App2 extends Component {
 
  render() {
    return (
      <div>      
      
      <div >
        {/* <AdminPage /> */}
      
       <Login />
       {/* <Signup /> */}
      {/* <ForgotPassword />  */}
      </div>
      {/* <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div> */}
      
      
     {/* <div class="container-fluid footer navbar-fixed-bottom">
                <div class="col" id="footer"><Footer /></div>
                </div> */}
      

      </div> 
    );
  }
}

export default App2;