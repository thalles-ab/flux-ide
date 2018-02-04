import * as React from "react"; 

interface MyProps{
    callbackChangeEditor: () => void
}
interface MyState{
    dot: string
}
export class Diagram extends React.Component<MyProps, MyState>{
    constructor(props){
        super(props);
        this.state = {
            dot : "digraph nomeGrafo { a [URL=\"#asdasd\"]; a -> b}"
        }
    }

    componentDidMount () {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.text = "d3.select('#graph').graphviz()"
        +".attributer("
        +"  function(d) {" 
        +"      if(d.tag == 'svg')" 
        +"      {"
        +"          d.attributes.width = '100%'; d.attributes.height = '100%';"
        +"      }"
        +"      if(d.attributes.fill && d.tag !== 'text'){"
        +"          if(d.attributes.fill == 'none')"
        +"              d.attributes.fill='#FFF';"
        +"      }"
        +"})"
        +".renderDot('"+this.state.dot+"')";
        script.async = true;
        document.body.appendChild(script);  
    }

    callbackChangeEditor(conteudo){
        console.log("foi -- " + conteudo);
    }


    render(){
        return(
            <div id="graph" className="full-parent"></div>
        );
    }
}