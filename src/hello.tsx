import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory } from 'react-router'; 
import { Editor } from "./components/Editor"; 
import { Diagram } from './components/Diagram'

export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="grid-50"><Editor /></div>
                <div className="grid-50"><Diagram /></div>
            </div>
        );
      } 
}

ReactDOM.render( 
    <App />,
    document.getElementById("root")
); 

window.onbeforeunload = function() {
    return "Dude, are you sure you want to refresh? Think of the kittens!";
}