import { useState, useRef } from 'react';
import {useDispatch} from 'react-redux';
import { counterActions } from '../../store/counterSlice';

function Page1() {

    const dispatch = useDispatch();

    const incremnetHandler = () => {
        dispatch(counterActions.increment())
    }

    const incrementByValueHandler = () => {
        dispatch(counterActions.increase(5))
    }

    return (
        <>
            <p>Page 1</p>
            <button onClick={incremnetHandler}>Increase Value</button>
            <button onClick={incrementByValueHandler}>Increase By 5</button>
        </>
    )
}

export default Page1