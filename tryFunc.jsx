import React, {memo} from 'react';

const Try = memo( ({tryInfo}) => {  //(props)
    return (
        <li>
            <div>{tryInfo.try}</div>   {/*props.tryInfo.try */}
            <div>{tryInfo.result}</div> {/*props.tryInfo.result */}
        </li> 
    )
});

export default Try;