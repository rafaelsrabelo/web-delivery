import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import userReducer from '../features/userSlice';
import orderReducer from '../features/orderSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    order: orderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store };
