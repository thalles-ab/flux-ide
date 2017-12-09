import * as React from "react";
import MyEditor from 'react-monaco-editor';

interface MyProps{};
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
        console.log('editorDidMount', editor);
        master.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            allowComments: true
        });
        editor.focus();
    }

    onChange(newValue: string, e: monaco.editor.IModelContentChangedEvent) {
        console.log('onChange', newValue, e);
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
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}