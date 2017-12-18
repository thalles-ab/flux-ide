import * as React from "react";
import MyEditor from 'react-monaco-editor';

interface MyProps{
    callBackChangeEditor: (val: string) => void
};
interface MyState{
    code: string
};

export class Editor extends React.Component<MyProps, MyState> {
    constructor(props : MyProps) {
        super(props);
        this.state = {
            code : ""
        };
    }

    editorDidMount(editor: monaco.editor.ICodeEditor, master : typeof monaco) {
        editor.focus();
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
                onChange={this.props.callBackChangeEditor}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}