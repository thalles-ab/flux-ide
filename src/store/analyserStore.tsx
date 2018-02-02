import * as jison from 'jison'
import * as CONSTANT from './constants'
import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'

var fileJison = require('!!raw-loader!../resources/c.jison');

enum Severity {
    Ignore = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
}

let Parser = null;

class AnalyserStore extends EventEmitter{
    todo : Array<object>;

    constructor(){
        super();
        this.todo = [
            { id: 12313213213, nome : 'teste' },
            { id: 46546546546, nome : 'teste 2' }
        ];
    }

    handleActions(action){
        console.log('jéssuisss', action)
    }

    analyser(value, event){
        var mark = event.changes[0].range;
        mark.serverity = Severity.Error;
        mark.message = 'puta que o pariu';
        mark.code = null;
        mark.source = null;

        if(Parser == null){
            Parser = new jison.Parser(fileJison);
        }
        console.log(Parser);
        this.emit("analyserLex", { erros: [], value : value, event: event, mark: [mark] });
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