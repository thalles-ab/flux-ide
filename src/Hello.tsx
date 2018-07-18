import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory } from 'react-router'; 
import { Editor } from "./components/Editor"; 
import { Diagram } from './components/Diagram'
import TreeParser from "./model/TreeParser";

interface MyState{
    tree: TreeParser
}
export default class App extends React.Component<any, MyState>{

    constructor(props){
        super(props);
        this.state = {
            tree : null
        };
    }

    changeEditor(tree : TreeParser){
        this.setState({tree:tree});
    }

    render(){
        return (
            <div className="container">
                <div className="grid-50"><Editor callBackChangeEditor={this.changeEditor.bind(this)} /></div>
                <div className="grid-50">
                    <Diagram tree={this.state.tree} />
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