import React, { Component } from 'react';

class Try extends Component {
    render() {
        return(
            <li key={this.props.value.fruit + this.props.index}>
                <b>{this.props.index+1}.{this.props.value.fruit}</b> : {this.props.value.color}
                <div>aaa</div>
                <div>bbb</div>
                <div>ccc</div>
                <div>ddd</div>
            </li>
        )        
    }
}
export default Try;