import { act } from 'react';
import { configureStore } from '@reduxjs/toolkit'

import authReducer from './authSlice';
import counterReducer from './counterSlice';



const store = configureStore({
    reducer: {
        counterData: counterReducer,
        authData: authReducer
    }
})


export default store;