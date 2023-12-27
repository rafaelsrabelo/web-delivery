import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../services/api';

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
  filterStatus: '',
};

export const fetchOrders = createAsyncThunk('order/fetchOrders', async (status, thunkAPI) => {
  const user = localStorage.getItem('user');
  const parsedUser = JSON.parse(user);

  if (parsedUser && parsedUser.acess_token) {
    const token = parsedUser.acess_token;
    const url = status ? `/orders?status=${status}` : '/orders';
    const response = await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  }
});

export const updateOrderStatus = createAsyncThunk('order/updateOrderStatus', async ({ orderId, status }, thunkAPI) => {
  const user = localStorage.getItem('user');
  const parsedUser = JSON.parse(user);

  if (parsedUser && parsedUser.acess_token) {
    const token = parsedUser.acess_token;
    const url = `/orders/${orderId}`;
    const response = await api.put(
      url,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
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
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Atualize os dados do pedido com os novos dados recebidos após a atualização
        // Esteja ciente de como os dados são retornados pela sua API
        const updatedOrder = action.payload;
        const index = state.orders.findIndex(order => order.id === updatedOrder.id);
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilterStatus } = orderSlice.actions;

export default orderSlice.reducer;
