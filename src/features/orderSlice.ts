import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
};

export const fetchOrders = createAsyncThunk('order/fetchOrders', async (_, thunkAPI) => {
    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    
    if (parsedUser && parsedUser.acess_token) {
      const token = parsedUser.acess_token;
      const response = await api.get('/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return response.data.data;
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
