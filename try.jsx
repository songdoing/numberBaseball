import React, { PureComponent } from 'react';

class Try extends PureComponent {    
    render() {
        console.log('rendering');
        const { tryInfo } = this.props;
        return(
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )        
    }
}
export default Try;