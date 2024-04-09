import { createSlice } from '@reduxjs/toolkit';

const adminAuthSlice = createSlice({
    name:'auth',
    initialState:{
        adminUsername: '',
        adminToken: ''
    },
    reducers: {
        adminLogOut: (state) => {
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminUsername');
            state.adminToken = '';
            state.adminUsername = '';
        },
        adminSignIn: (state, action) => {
            state.adminToken = action.payload.token;
            state.adminUsername = action.payload.username;
            console.log(action.payload)
        },
    }
})


export const {
    adminLogOut,
    adminSignIn
} = adminAuthSlice.actions;

export default adminAuthSlice.reducer;