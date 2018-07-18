import * as jison from 'jison'
import * as CONSTANT from './Constants'
import dispatcher from '../Dispatcher'
import { EventEmitter } from 'events'
import TreeParser from '../model/TreeParser'
import * as S from 'string';

enum Severity { Ignore = 0, Info = 1, Warning = 2, Error = 3 }; // ENUNS FOR INFO MARKS MONACO-EDITOR

// CONSTANTES
var fileJison = require('!!raw-loader!../resources/c.jison');
let Parser = null;

class AnalyserStore extends EventEmitter{
    todo : Array<object>;

    constructor(){
        super();
        this.todo = [
            { id: 12313213213, nome : 'teste' },
            { id: 46546546546, nome : 'teste 2' }
        ];
        Parser = new jison.Parser(fileJison);
        Parser.yy.myTree = new TreeParser();
        window["ParserThalles"] = Parser;
    }

    handleActions(action){
        console.log('jéssuisss', action)
    }

    analyser(value, event){
        // var mark = event.changes[0].range;
        // mark.serverity = Severity.Error;
        // mark.message = 'puta que o pariu, se funcionar vou no convento';
        // mark.code = null;
        // mark.source = null;

        // this.emit("analyserLex", { erros: ['ainda não tem'], value : value, event: event, mark: mark });
        try{
            Parser.parse(S(value).replaceAll(/\r?\n|\r/g, "").s);
            return Parser.yy.myTree;
        }catch(e){
            return null;
        }
    }

    create(text){
        const id = Date.now();
        this.todo.push({
            id, text
        });

        this.emit("change");
    }

}


const analyserStore = new AnalyserStore;
dispatcher.register(analyserStore.handleActions.bind(analyserStore))
window["dispatcher"] = dispatcher;
export default analyserStore;