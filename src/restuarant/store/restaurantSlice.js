import { createSlice } from '@reduxjs/toolkit'
import { fetchRestaurant } from './restaurant.action'

const fetchRestaurantExtraReducer = {

    [fetchRestaurant.pending]: (state, action) => {

        state.loading = true

    },

    [fetchRestaurant.fulfilled]: (state, action) => {

        state.restaurants = action.payload;
        state.loading = false;

    },

    [fetchRestaurant.rejected]: (state, action) => {

        state.loading = false

    },

}

const RestaurantSlice = createSlice({

    name: 'Restaurant',
    initialState: {

        restaurants: [],
        loading: false,

    },

    reducer: {

        StoresAdded(state, action) {
            state.restaurants.push(action.payload)
        },
    },

    extraReducers: {
        ...fetchRestaurantExtraReducer,
    },
})

export const { StoresAdded } = RestaurantSlice.actions
export default RestaurantSlice.reducer