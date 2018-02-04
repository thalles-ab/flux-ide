import NodeTree from './NodeTree';

export default class TreeParser{
    nodes: Array<NodeTree>;

    constructor(){
        this.nodes = [];
    }

    addNode(term){
        this.nodes.push(new NodeTree(term));
    }

    teste(){
        console.log(this.nodes);
    }
}