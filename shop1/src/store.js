import {configureStore, createSlice} from '@reduxjs/toolkit'


let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        changeName(state){
            state.name = 'likelion';
        },

        increase(state){
            state.age += 1;
        }
    }
})

export let {changeName, increase} = user.actions;

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Red Knit', count :1},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],

    reducers: {
        addCount(state, action){
            let index = state.findIndex((item) => item.id == action.payload)
            state[index].count += 1;
        }
    }
})

export let {addCount} = cart.actions;

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})
