import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const endPoint = 'Restaurant'

export const fetchRestaurant = createAsyncThunk('Restaurant/fetchRestaurant', async () => {

    const response = await axios.get('http://localhost:8000/restaurant');
    const Restaurant = await response.data
    return Restaurant;

})



