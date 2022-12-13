import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const endPoint = 'Menu'
export const fetchMenu = createAsyncThunk('Menu/fetchMenu', async () => {

    const response = await axios.get('http://localhost:8000/menu');

    const Menu = await response.data

    return Menu;

})