import React, { Component } from 'react';

//get numbers without duplication
function getNumbers() {

};

class NumberBaseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries :[]
    };

    onSubmitForm = (e) => {

    };
    
    onChangeInput = (e) => {
    
    };
    
    input;
    
    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (
            <>
            <h1>Guess 4 digit numbers.</h1>
            <h2>{this.state.result}</h2>
            <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                <button>ENTER</button>
            </form>
            <div>TRY : {this.state.tries.length}</div>
            <ul>
                {[
                    { fruit : 'apple', color : 'red'},
                    { fruit : 'banana', color : 'yellow'},
                    { fruit : 'grape', color : 'purple'},
                    { fruit : 'watermelon', color : 'green'},
                    { fruit : 'mango', color : 'orange'},
                    { fruit : 'tomato', color : 'redish'},
                ].map((v)=>{
                    return (
                        <li key={v.fruit + v.color}><b>{v.fruit}</b> : {v.color}</li>
                    );
                })}               
            </ul>
            </>
        );
    }
}

export default NumberBaseball;