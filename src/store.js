import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name: 'kim', age: 20},
  reducers: {
    changeName(state){
      state.name = 'likelion'
    },
    increase(state, a){
        state.age += a.payload
    }
  }
})
export let {changeName, increase} = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Gray Yordan', count : 1}],
  reducers : {
    addCount(state, action){
      const cartId = state.findIndex((state)=>{
        return state.id === action.payload;
        });
      state[cartId].count++;
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})
export let {addCount, addItem} = cart.actions;

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
})
