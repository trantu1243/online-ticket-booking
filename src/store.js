import { configureStore } from '@reduxjs/toolkit';

import authSlice from './views/auth/auth.slice';

export default configureStore({
  reducer: {
    auth: authSlice
  },
})