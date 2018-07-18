import * as React from "react"; 
import {v4 as uuid} from "uuid";
import TreeParser from "../model/TreeParser";
import VarNode from "../model/VarNode";

interface MyProps{
    tree: TreeParser
}
export class Diagram extends React.Component<MyProps>{
    count : any
    lastCount: any

    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.createSctipt();
    }

    componentDidUpdate(){
        this.createSctipt();
    }

    createSctipt(){
        if(document.getElementById("script_graph")){
            document.getElementById("script_graph").remove();
            document.getElementById("graph_content").innerHTML = "";
        }

        const script = document.createElement("script");
        script.setAttribute("id", "script_graph");
        script.type = "text/javascript";
        script.text = "d3.select('#graph_content').graphviz()"
        +".attributer("
        +"  function(d) {" 
        +"      if(d.tag == 'svg')" 
        +"      {"
        +"          d.attributes.width = '100%'; d.attributes.height = '100%';"
        +"      }"
        +"      if(d.attributes.fill && d.tag !== 'text'){"
        +"          if(d.attributes.fill == 'none')"
        +"              d.attributes.fill='#FFF';"
        +"      }"
        +"})"
        +".renderDot('"+this.generateDot()+"')";
        script.async = true;
        document.body.appendChild(script);  
    }

    
    generateDot(){
        if(this.props.tree === null){
            return "";
        }

        this.count = 0;
        var dot = "digraph nomeGrafo { ";
        this.props.tree.functions[0].nodes.forEach(element => {
            if(element instanceof VarNode){
                dot = this.addVar(dot, element);
            }
        });
        dot += "}";

        return dot;
    }

    addVar(dot, varNode){
        this.count++;
        dot += this.count + " [label=\"" + varNode.name + " = " + varNode.expression + "\"];";

        if(this.count > 1){
            dot += (this.count-1) + " -> " + this.count + ";";
        }
        return dot;
    }

    callbackChangeEditor(conteudo){
        console.log("foi -- " + conteudo);
    }

    render(){
        let title = this.props.tree === null ? "" :  this.props.tree.functions[0].name;
        return(
            <div id="graph" className="full-parent">
                <div id="appBar">
                    <p>{title}</p>
                </div>
                <div id="graph_content"></div>
            </div>
        );
    }
}