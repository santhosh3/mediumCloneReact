import {configureStore} from '@reduxjs/toolkit';
import contentSlice from './ShowContent';

const store = configureStore({
    reducer: {
       content : contentSlice.reducer
    },
})

export default store