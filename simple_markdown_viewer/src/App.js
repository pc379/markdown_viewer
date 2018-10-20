import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/editor';
import Previewer from './components/previewer';
import marked from 'marked';
import initialText from './initialText';

const regex = /\\r/g;
// marked.setOptions({
//   gfm:true
// })
const myRenderer = new marked.Renderer();

myRenderer.text = function(text, level){
  var newText = text.replace(regex, '<br>');
  console.log(newText);
  return newText;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialText,
      editorNode: null,
      previewerNode: null
    };
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount(){
    this.setState({
      editorNode: document.getElementById('editor'),
      previewerNode: document.getElementById('preview')
    });
    // console.log(this.state.text);
    document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value, {renderer: myRenderer});

    
  }
  updateText(e){
    let text = e.target.value;
    // console.log(text.replace(regex, '$@$#nsbp'));
    this.setState({text: text});
    document.getElementById('preview').innerHTML = marked(text, {renderer: myRenderer});
      // ).replace(regex, '<br>');
    let links = document.getElementsByTagName('a');
    for (let i = 0; i<links.length; i++){
      links[i].setAttribute('target', '_blank');
    }
  }

  render() {
    return (
      <div className="App">
       <Editor text = {this.state.text} updateText = {this.updateText}/>
       <Previewer text = {this.state.text}/>
      </div>
    );
  }
}

export default App;
