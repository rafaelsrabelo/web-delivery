import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

export const loginUser=createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await api.post('/auth/signin', userCredentials);
        const response = await request.data.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
);

const initialState = {
    loading: false,
    user: null,
    error: null
  };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401') {
                state.error = 'Acesso negado, cerdenciais inválidas'
            } else {
                state.error = action.error.message;
            }
        })
    }
});

export default userSlice.reducer;