import NodeTree from './NodeTree';
import VarNode from './VarNode';
import ConditionalNode from './ConditionalNode';
import FunctionNode from './FunctionNode';

export default class TreeParser{
    nodes: Array<NodeTree>;
    //nodeRadix: any; // nó raiz
    //nodeAtual: any;

    constructor(){
        this.nodes = Array();
    }

    // init(node){
    //     if(this.nodeRadix){
    //         this.nodeRadix = node;
    //     }
    //     this.nodeAtual = node;
    // }

    addVar(type, name, matched?){
        this.nodes.push(new VarNode(type, name, matched));
    }    

    addFunc(type, name, matched?){
        this.nodes.push(new FunctionNode(type, name, matched));
    }

    //addIf(value)



    // addIf(term){
    //     return this.nodes.push(new IfTree(term));
    // }  

    // teste(){
    //     console.log(this.nodes);
    // }
}