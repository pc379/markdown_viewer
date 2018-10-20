import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/editor';
import Previewer from './components/previewer';
import marked from 'marked';
import initialText from './initialText';

import {connect} from 'react-redux';

import expandViewer from './actions/expandViewer';
import contractViewer from './actions/contractViewer';

const regex = /\\r/g;
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
    this.expandViewer = this.expandViewer.bind(this);
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
    this.setState({text: text});
    document.getElementById('preview').innerHTML = marked(text, {renderer: myRenderer});
    let links = document.getElementsByTagName('a');
    for (let i = 0; i<links.length; i++){
      links[i].setAttribute('target', '_blank');
    }
  }

  expandViewer(e){
    if(e.target.parentNode.parentNode.parentNode.nextSibling){
      e.target.parentNode.parentNode.parentNode.nextSibling.style.display = 'none';
      
    }    
    if(e.target.parentNode.parentNode.parentNode.previousSibling){
      e.target.parentNode.parentNode.parentNode.previousSibling.style.display = 'none';
      
    }
    e.target.parentNode.parentNode.parentNode.style.width='100%';
    console.log(e.target.parentNode.parentNode.parentNode.scrollHeight);
    e.target.parentNode.parentNode.parentNode.height=e.target.parentNode.parentNode.parentNode.scrollHeight;
    

  }
  

  render() {
    return (
      <div className="App">
       <Editor text = {this.state.text} updateText = {this.updateText} expandViewer = {this.expandViewer}/>
       <Previewer text = {this.state.text} expandViewer = {this.expandViewer}/>
      </div>
    );
  }
}



export default App;
