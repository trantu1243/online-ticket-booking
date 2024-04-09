import { createSlice } from '@reduxjs/toolkit';

const theatreAuthSlice = createSlice({
    name:'auth',
    initialState:{
        theatreUsername: '',
        theatreToken: ''
    },
    reducers: {
        theatreLogOut: (state) => {
            localStorage.removeItem('theatreToken');
            localStorage.removeItem('theatreUsername');
            state.theatreToken = '';
            state.theatreUsername = '';
        },
        theaterSignIn: (state, action) => {
            state.theatreToken = action.payload.token;
            state.theatreUsername = action.payload.username;
        },
    }
})


export const {
    theatreLogOut,
    theaterSignIn
} = theatreAuthSlice.actions;

export default theatreAuthSlice.reducer;