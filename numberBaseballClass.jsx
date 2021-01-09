import React, { Component } from 'react';
import Try from './try';

// get 4 digit numbers without duplication
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const homerunArray = [];
    for (let i =0 ; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        homerunArray.push(chosen);
    }
    return homerunArray;
};

class NumberBaseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries :[]
    };

    onSubmitForm = (e) => {
        const {value, tries, answer} = this.state;
        e.preventDefault();
        if( value === answer.join('')) { //right answer
            this.setState((prevState) => { //밑에 setState랑 연달아 있고, prevState는 함수형으로 쓸것
                return {
                    result : 'Home Run!',
                    tries : [...prevState.tries, { try : value, result: 'Home Run!'}],
                }
            }); //옛날 setState로 현재setState하는 경우에는 함수형으로..
            alert('Start again.');
            this.setState({
                value : '',
                answer : getNumbers(),
                tries : [],
            });
            
        } else { //wrong answer
            const answerArray =value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { //over 10 times
                this.setState({
                    result : `Sorry. Game over. The answer was ${answer.join(',')}.`,
                });
                alert('Start again.');
                this.setState({
                    value : '',
                    answer : getNumbers(),
                    tries : [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries : [...prevState.tries, { try : value, result : `${strike} Strike, ${ball} Ball`}],
                        value : '',
                    };
                });
            }

        }
    };
    
    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value : e.target.value,
        });
    };
    
    input;
    
    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        const { result, value, tries } = this.state;
        return (
            <>
            <h1>Guess 4 digit numbers.</h1>
            <h2>{result}</h2>
            <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} ref={this.onRefInput} value={value} onChange={this.onChangeInput} />
                <button>ENTER</button>
            </form>
            <div>TRY : {tries.length}</div>
            <ul>
                {tries.map((v , i)=>(
                    <Try key={`TRY ${i + 1}. `} tryInfo = {v} />
                ))}               
            </ul>
            </>
        );
    }
}

export default NumberBaseball;