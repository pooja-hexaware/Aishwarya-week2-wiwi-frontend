import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import RestaurantReducer from 'restuarant/store/restaurantSlice'
import MenuReducer from 'menu/store/MenuSlice'
import ToppingReducer from 'menu/store/toppingSlice'
import CartReducer from 'menu/store/cartSlice'
export default configureStore({
    reducer: {
        Restaurant: RestaurantReducer,
        Menu: MenuReducer,
        Topping:ToppingReducer,
        Cart:CartReducer  
    },
   
})
