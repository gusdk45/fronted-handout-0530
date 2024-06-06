import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name : 'kim', age : 20},
    reducers : {
        changeName(state){
            state.name = 'likelion' 
        },
        increase(state) {
            state.age += 1
        }
    }
 })

 export let { changeName, increase } =  user.actions;
 
 let stock = createSlice({
     name:'stock',
     initialState:[10, 11, 12]
 })

 let carts = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        // { id: 1, name: 'Red Knit', count: 1 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        changeCount(state, action) {
            state.forEach(item => {
                if (item.id === action.payload) {
                    item.count += 1;
                }
            });
        }, 
        addItem(state, action) {
            state.push(action.payload);
        }
    }
});

    export let {changeCount, addItem} = carts.actions

  export default configureStore({
    reducer: {
      user: user.reducer,
      stock: stock.reducer,
      cart: carts.reducer
    }
  })