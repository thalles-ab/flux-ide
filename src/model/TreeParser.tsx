import NodeTree from './NodeTree';
import VarNode from './VarNode';
import ConditionalNode from './ConditionalNode';
import FunctionNode from './FunctionNode';

export default class TreeParser{
    atual : NodeTree;
    expression : string;
    nodes: Array<NodeTree>;
    functions: Array<FunctionNode>;

    type: string
    name: string
    value: string

    constructor(){
        this.nodes = Array();
        this.functions = Array();
    }

    

    // addVar(type, name, matched?){
    //     this.expression = "";
    //     this.atual = new VarNode(type, name);
    //     this.nodes.push(new VarNode(type, name, matched));
    // }    

    // addExpression(str){
    //     console.log(str);
    //     this.expression += str;
    // }

    // addFunc(type, name, matched?){
    //     var func = new FunctionNode(type, name, matched);
    //     func.nodes = this.nodes;

    //     this.nodes = Array();
    //     this.functions = this.functions.filter(item => item.name !== name);
    //     this.functions.push(func);
    // }
    

    //addIf(value)



    // addIf(term){
    //     return this.nodes.push(new IfTree(term));
    // }  

    // teste(){
    //     console.log(this.nodes);
    // }
}