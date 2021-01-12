import React, {useRef, useState} from 'react';
import Try from './tryFunc';

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

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const inputEl = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if( value === answer.join('')) { //right answer
            setResult('Home Run!');
            setTries((prevTries) => {
                return [...prevTries, { try : value, result: 'Home Run!'}]
            });
                       
            alert('Start again.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            inputEl.current.focus();
        } else { //wrong answer
            const answerArray =value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { //over 10 times
                setResult(`Sorry. Game over. The answer was ${answer.join(',')}.`)
                
                alert('Start again.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                inputEl.current.focus();
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, { try : value, result : `${strike} Strike, ${ball} Ball`}] );
                setValue('');
                inputEl.current.focus();
            }
        }
    };
    
    const onChangeInput = (e) => {
        setValue(e.target.value);        
    };

    return(
        <>
            <h1>Guess 4 digit numbers.</h1>
            <h2>{result}</h2>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput} />
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
};

export default NumberBaseball;