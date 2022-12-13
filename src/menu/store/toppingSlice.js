import { createSlice } from '@reduxjs/toolkit'
import { fetchTopping } from './topping.action'

const fetchToppingExtraReducer = {

    [fetchTopping.pending]: (state, action) => {
       state.loading = true
    },

    [fetchTopping.fulfilled]: (state, action) => {
        state.toppings = action.payload;
        state.loading = false;
    },

    [fetchTopping.rejected]: (state, action) => {
        state.loading = false
    },
}

const ToppingSlice = createSlice({
    name: 'Topping',
    initialState: {
        toppings: [],
        loading: false,
    },

    reducer: {

        StoresAdded(state, action) {

            state.toppings.push(action.payload)

        },



    },

    extraReducers: {

        ...fetchToppingExtraReducer,

        // ...addRestaurantExtraReducer,

        // ...editDoctorExtraReducer,

        // ...deleteDoctorExtraReducer,

    },

})

export const { StoresAdded } = ToppingSlice.actions
export default ToppingSlice.reducer