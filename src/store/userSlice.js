import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        changeName(state) {
            state.name = 'likelion'
        },
        increase(state) {
            state.age += 1
        },
    }
})


export default user