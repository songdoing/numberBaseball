import React, { Component } from 'react';

class Test extends Component {
    state = {
        counter: 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter) {
            return true;
        }
        return false; // 값이 같으면 렌더링 되지 않도록,,
    }

    onClick = () => {
        this.setState({});
    };

    render() {
        console.log('rendering', this.state);
        return(
            <div>
                <button onClick={this.onClick}>CLICK</button>
            </div>
        );
    }
}

export default Test;