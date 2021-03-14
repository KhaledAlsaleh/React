// import React from 'react';
import {useState} from 'react';
import Button from './Button';
import Count from './Count';

const Counter = () => {

    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's Higher Than 10!" : "Keep Counting...";
    const countStatus = () => {
        setCount(count+1);
    }
    return (
        <div className='exerciseBlock'>
            <h2>Exercise 3</h2>
            <div className="counter">
                <Button onClickEvent={countStatus}/>
                <Count value={count}/>
                <p>{feedback}</p>
            </div>
        </div>
    )
}

export default Counter
