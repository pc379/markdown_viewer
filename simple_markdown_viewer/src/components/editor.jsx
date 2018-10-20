import React from 'react';

export default class Editor extends React.Component {

    render() {
        return (
        <div className="container">
            <div className="header editor-header">
                <span>
                    <img className = 'header-icon' src="fire.svg"/>  Editor
                </span>
                <span>
                    <img className = "header-icon" src="expand-square.svg" onClick={this.props.expandViewer}/>
                    <img className = "header-icon" src="compress.svg" />
                </span>
            </div>
            <div id="editor-container">
                <textarea id="editor" className="main-content" value={this.props.text} onChange={this.props.updateText}></textarea>
            </div>
        </div>

        )
    }
}