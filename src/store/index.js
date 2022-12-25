import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../slice/auth'
import AuthorReducer from '../slice/author'
export default configureStore({
  reducer: {
    auth: AuthReducer,
    author: AuthorReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})