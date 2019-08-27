import React, {Component} from "react";
import "./App.css";
import RequestView from './RequestView';
import RequestListView from './RequestListView';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div id="root">
                {/* <Header/> */}
                <RequestView/>
                {/* <RequestListView/> */}
                {/* <Footer/> */}
            </div>
        )
    }
}

export default App;
