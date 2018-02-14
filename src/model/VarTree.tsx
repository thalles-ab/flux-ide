import NodeTree from './NodeTree'

export default class VarTree extends NodeTree{
    typeVar : string; 
    name: string;
    value: string;

    constructor(typeVar, name, value?){
        super();
        this.typeVar = typeVar;
        this.name = name;

        if(value){
            this.value = value;
        }

    }
}