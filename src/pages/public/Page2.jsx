import { useState, useRef } from 'react';
import {useDispatch} from 'react-redux';
import { counterActions } from '../../store/counterSlice';


function Page2() {

    const dispatch = useDispatch();

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <>
        <p>Page 2</p>
        <button onClick={decrementHandler}>Decrease Value to </button>
        </>
    )
}

export default Page2