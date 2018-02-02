import * as React from "react"
import MyEditor from 'react-monaco-editor'
import AnalyserStore from '../store/analyserStore'

interface MyProps{
    callBackChangeEditor: (val: string) => void
};
interface MyState{
    code: string
};

var editorMyScope;
export class Editor extends React.Component<MyProps, MyState> {
    
    constructor(props : MyProps) {
        super(props);
        this.state = {
            code : "asdasdasda"
        };

        AnalyserStore.on("analyserLex", (data) => { this.handleInfo(data); })
    }

    handleInfo(data: any){
        console.log(data);
        // if(data.event.changes){
        //     editorMyScope.setModelMarkers(data.value, 'c', data.mark);
        // }
        console.log(editorMyScope);
    }

    editorDidMount(editor: monaco.editor.ICodeEditor, master : typeof monaco) {
        editorMyScope = monaco.editor;
        editor.focus();
        console.log(editor);
        window["editorMy"] = editorMyScope;
    }

    onchange(val : string, ev: monaco.editor.IModelContentChangedEvent){
        AnalyserStore.analyser(val, ev);
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
                language="c"
                //theme="vs-dark"
                value={code}
                options={options}
                onChange={this.onchange}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}