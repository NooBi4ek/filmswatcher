import { configureStore } from '@reduxjs/toolkit'
import titlesReducer from './reducers/titlesSlice'
import titleReducer from './reducers/titleSlice'
import searchReducer from './reducers/searchSlice'

export const store = configureStore({
  reducer: {
    titles: titlesReducer,
    title: titleReducer,
    search: searchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
