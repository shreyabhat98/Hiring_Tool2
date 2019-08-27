import React from 'react';
import ReactDOM from 'react-dom';
import '/home/vcap/app/src/index.css';
import App from '/home/vcap/app/src/App';
import * as serviceWorker from '/home/vcap/app/src/serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RequestListView from '/home/vcap/app/src/RequestListView';
import Download from '/home/vcap/app/src/myComponents/Download';
import Form from '/home/vcap/app/src/myComponents/Form';
import Container from '/home/vcap/app/src/Container';
import Signup from '/home/vcap/app/src/Signup';
import ForgotPassword from '/home/vcap/app/src/ForgotPassword';
import AdminPage from '/home/vcap/app/src/AdminPage';
import Login from '/home/vcap/app/src/Login';
import App2 from '/home/vcap/app/src/App2';


const routing = (
    <BrowserRouter>
        <Route exact path="/home" component={ RequestListView } />
        <Route path="/track" component={ App }/>
        <Route path="/newRequest" component={ Download }/>
        <Route path="/form" component={ Form }/>
         <Route exact path="/" component={App2} />
        <Route path="/Signup" component={Signup} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/AdminPage" component={AdminPage} />
        <Route path="/Login" component={Login} />
        <Route path="/Dashboard" component={Container} />
        {/* <Route path="/download_form" component={  } */}
    </BrowserRouter>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
