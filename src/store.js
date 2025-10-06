import { configureStore } from '@reduxjs/toolkit';

// Example reducer (replace with your actual reducers)
import counterReducer from './slice/counterSlice';


const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export default store; 