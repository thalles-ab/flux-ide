import NodeTree from './NodeTree';
import VarNode from './VarNode';
import ConditionalNode from './ConditionalNode';
import FunctionNode from './FunctionNode';

export default class TreeParser{
    nodes: Array<NodeTree>;
    functions: Array<FunctionNode>;

    constructor(){
        this.nodes = Array();
        this.functions = Array();
    }

    addVar(type, name, matched?){
        this.nodes.push(new VarNode(type, name, matched));
    }    

    addFunc(type, name, matched?){
        var func = new FunctionNode(type, name, matched);
        func.nodes = this.nodes;

        this.nodes = Array();
        this.functions.push(func);
    }

    //addIf(value)



    // addIf(term){
    //     return this.nodes.push(new IfTree(term));
    // }  

    // teste(){
    //     console.log(this.nodes);
    // }
}