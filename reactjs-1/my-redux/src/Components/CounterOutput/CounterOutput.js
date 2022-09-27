import React from 'react';
import { useSelector } from 'react-redux';
import './CounterOutput.css';


const CounterOutput = (props) => {

    const counter = useSelector(state => state.myCounter.counter);

    return (
        <div className="CounterOutput">
            Current Counter: {counter}
        </div>
    )
}

export default CounterOutput;