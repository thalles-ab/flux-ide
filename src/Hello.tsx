import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory } from 'react-router'; 
import { Editor } from "./components/Editor"; 
import { Diagram } from './components/Diagram'

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    changeEditor(val : string){
        console.log('foi thalles ' + val);
    }

    updateDiagram(){
        console.log('diagrama');
    }

    render(){
        return (
            <div className="container">
                <div className="grid-50"><Editor callBackChangeEditor={this.changeEditor} /></div>
                <div className="grid-50">
                    <div id="appBar"></div>
                    <Diagram callbackChangeEditor={this.updateDiagram} />
                </div>
            </div>
        );
      } 
}

ReactDOM.render( 
    <App />,
    document.getElementById("root")
); 

// UTILIZAR ANCORAS PARA ENCONTRAR MUDANÇA DE NÓ
window.onhashchange = function() {
    console.log('mudou');
}