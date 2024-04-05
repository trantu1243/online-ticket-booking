import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:'auth',
    initialState:{
        username: '',
        token: ''
    },
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            state.username = '';
            state.token = '';
        },
        signIn: (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
        },
    }
})


export const {
    logOut,
    signIn
} = authSlice.actions;

export default authSlice.reducer;