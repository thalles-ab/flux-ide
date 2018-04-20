import NodeTree from './NodeTree';
import VarNode from './VarNode';
import ConditionalNode from './ConditionalNode';

export default class TreeParser{
    //nodes: Array<NodeTree>;
    nodeRadix: any; // nó raiz
    nodeAtual: any;

    constructor(){
        
    }

    init(node){
        if(this.nodeRadix){
            this.nodeRadix = node;
        }
        this.nodeAtual = node;
    }

    addVar(type, name, value?){
        //return this.nodes.push(new VarNode(type, name, value));

    }    

    //addIf(value)



    // addIf(term){
    //     return this.nodes.push(new IfTree(term));
    // }  

    // teste(){
    //     console.log(this.nodes);
    // }
}