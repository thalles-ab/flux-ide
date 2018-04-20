import NodeTree from './NodeTree'

export default class VarNode extends NodeTree{
    typeVar : string; 
    name: string;

    constructor(typeVar, name, value?){
        super();
        this.typeVar = typeVar;
        this.name = name;

        if(value){
            this.value = value;
        }

    }
}