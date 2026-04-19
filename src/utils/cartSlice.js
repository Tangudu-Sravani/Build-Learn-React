import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            // Vanilla redux => Dont Mutate State , and returning was madatory
            //Muting a state in older version
            /**
             const newState = [..state];
             newState.items.push(action.payload)
             return newState
             */



            //Reduc ToolKit => We HAVE TO MUTATE THE STATE
            //Now we can modifies state based on the action  
            console.log(" i ",action.payload);
            state.items.push(action.payload);
            //Immer takes care of the convertion of react toolkit to vanilla redux in backend => which manages by Immer ?
       
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //OriginalState = {items: ["pizza"] } // this is the internal one 
        clearCart: (state) => {
            // state.items.length = 0;
            // state = [] // creates a local variable assinging the [] to it, doesnt change the originalState to []
            return {items: []} //this new [] will be replaced inside originalState = []
        },
    }
})

export const {addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
