import NodeTree from './NodeTree'

export default class VarNode extends NodeTree{
    type : string; 
    name: string;

    constructor(type, name, matched?){
        super();
        this.type = type;
        this.name = name;

        if(matched)
        {
            var atrib = String(matched).indexOf("=");
            this.expression = String(matched).substr(atrib+1, matched.length).replace(";", "").trim();
        }

    }
}