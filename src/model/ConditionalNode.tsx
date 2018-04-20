import NodeTree from './NodeTree'

enum ConditionalType { IF, ELSE, ELSE_IF};
export default class ConditionalNode extends NodeTree{
    type: ConditionalType;
    negationNode: ConditionalNode;

    constructor(type, condition){
        super();
        this.type = type;
        this.value = condition;
    }

}