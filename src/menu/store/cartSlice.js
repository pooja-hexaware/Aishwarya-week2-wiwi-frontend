import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: {},
        totalPrice: 0,
    },
    reducers: { 
        addCartItem: (state, action) => {
            const item = action.payload;    
            Object.assign(state.cartItems, {      
                
                [item.name]: {
                    price: item.price,   
                    quantity: item.quantity
                }
            })
        }
    }
})

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
   