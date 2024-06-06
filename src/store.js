import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from '/Users/modzivv/Desktop/likelion/React/shop/src/store/userSlice.js'


export let { changeName } = user.actions
export let { increase } = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
      reducers : {
        addCount(state, action) {
            let i = state.findIndex( (a) => {
                return a.id == action.payload
            } )
            state[i].count++
        },
        addCart(state, action) {
            state.push(action.payload)
        }
      }
})

export let {addCart, addCount} = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 
