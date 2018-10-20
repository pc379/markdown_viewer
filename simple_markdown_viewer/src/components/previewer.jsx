import React from 'react';
import marked from 'marked';

export default class Previewer extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="header previewer-header">
                <span>
                    <img className = 'header-icon' src="fire.svg"/>  Previewer
                </span>
                <span>
                    <img className = "header-icon" src="expand-square.svg" onClick = {this.props.expandViewer}/>
                    <img className = "header-icon" src="compress.svg" />
                </span>
            </div>
            <div id="preview">
                
            </div>
        </div>

        )
    }
}