import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count > 1) {
        state.count--;
      }
    },
    incrementWithAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementWithAmount } = counterSlice.actions;

export default counterSlice.reducer;
