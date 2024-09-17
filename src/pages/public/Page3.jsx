import { useState, useRef } from 'react';
import {useSelector, connect, useDispatch} from 'react-redux';
import { counterActions } from '../../store/counterSlice';



function Page3() {

    const dispatch = useDispatch();
    const counterData = useSelector(state => state.counterData);

    const handleIncreaseValue = () => {
        dispatch(counterActions.increment())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    }

    return (
        <>
            <p>Page 3</p>
            <h3>{counterData.counter}</h3>
            <button onClick={handleIncreaseValue}>Increase Value</button>

            <button onClick={toggleCounterHandler}>Toggle</button>
        </>
    )
}

export default Page3