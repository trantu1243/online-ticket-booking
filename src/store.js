import { configureStore } from '@reduxjs/toolkit';

import authSlice from './views/auth/auth.slice';
import adminAuthSlice from './views/auth/admin.auth.slice';
import theatreAuthSlice from './views/auth/theatre.auth.slice';

export default configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminAuthSlice,
    theatreAuth: theatreAuthSlice
  },
})