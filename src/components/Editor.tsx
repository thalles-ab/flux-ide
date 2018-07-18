import * as React from "react"
import MyEditor from 'react-monaco-editor'
import AnalyserStore from '../store/AnalyserStore'
import TreeParser from "../model/TreeParser";

interface MyProps{
    callBackChangeEditor: (tree: TreeParser) => void
};
interface MyState{
    code: string
};

var editorMyScope;
export class Editor extends React.Component<MyProps, MyState> {
    
    constructor(props : MyProps) {
        super(props);
        this.state = {
            code : ""
        };

        AnalyserStore.on("analyserLex", (erros) => { this.handleInfo(erros); })
    }

    handleInfo(errosLex: Array<string>){
        console.log(errosLex);
        console.log(editorMyScope);
    }

    editorDidMount(editor: monaco.editor.ICodeEditor, master : typeof monaco) {
        editorMyScope = editor;
        editor.focus();
    }

    onchange(val : string, ev: monaco.editor.IModelContentChangedEvent){
        AnalyserStore.analyser(val, ev);
//        this.props.callBackChangeEditor(AnalyserStore.analyser(val, ev)); 
  //      this.setState({code: val});
    }

    render() {
        let code = this.state.code;
        let options = {
            selectOnLineNumbers: true,
            automaticLayout: true
        };
        return (
            <MyEditor
                defaultValue="c"
                language="c, css"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={this.onchange.bind(this)}
                editorDidMount={this.editorDidMount.bind(this)}
            />
        );
    }
}