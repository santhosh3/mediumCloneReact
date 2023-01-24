import {createSlice} from '@reduxjs/toolkit'

const contentSlice = createSlice({
    name: 'content',
    initialState: {contentShow:true},
    reducers:{
        contentOn(state){
            state.contentShow = true
        },
        contentOff(state){
            state.contentShow = false
        }
    }
})

export const contentActions = contentSlice.actions
export default contentSlice