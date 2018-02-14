import NodeTree from './NodeTree';
import VarTree from './VarTree';
import IfTree from './IfTree';

export default class TreeParser{
    nodes: Array<NodeTree>;

    constructor(){
        this.nodes = [];
    }

    addVar(type, name, value?){
        console.log(type);
        console.log(name);
        return this.nodes.push(new VarTree(type, name, value));
    }    

    // addIf(term){
    //     return this.nodes.push(new IfTree(term));
    // }  

    teste(){
        console.log(this.nodes);
    }
}