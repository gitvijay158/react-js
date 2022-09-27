import React from 'react';
import { useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux';
import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';

//class Counter extends Component {

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.myCounter.counter);
    
    const counterChangedHandler = (action, value) => {
        switch (action) {

            case 'inc':
                console.log('clicked')
                dispatch({ type: 'INCREMENT' })
                break;
            case 'dec':

                dispatch({ type: 'DECREMENT' , payload: counter - 1})
                //this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                dispatch({ type: 'INCREMENT' })
                //this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                dispatch({ type: 'INCREMENT' })
                //this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;

        }


    }


    return (
        <div>
            <CounterOutput />
            <CounterControl label="Increment" clicked={() => counterChangedHandler('inc')} />
            <CounterControl label="Decrement" clicked={() => counterChangedHandler('dec')} />
            <CounterControl label="Add 5" clicked={() => counterChangedHandler('add', 5)} />
            <CounterControl label="Subtract 5" clicked={() => counterChangedHandler('sub', 5)} />

        </div>
    )


}

export default Counter;