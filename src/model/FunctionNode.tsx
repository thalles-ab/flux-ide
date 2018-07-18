import NodeTree from "./NodeTree"

export default class FunctionNode extends NodeTree{
    nodes: Array<NodeTree>;
    type : string; 

    constructor(type, name, matched?){
        super();
        this.nodes = Array();
        this.type = type;
        this.name = name;

        if(matched){
            var matchedS = String(matched);
            var frist = matchedS.indexOf('(');
            var last = matchedS.indexOf(')');
            this.expression = matchedS.substr(frist+1, last-frist-1);
        }

    }

}