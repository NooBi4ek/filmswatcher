import { configureStore } from '@reduxjs/toolkit'
import titlesReducer from './reducers/titlesSlice'
import titleReducer from './reducers/titleSlice'
import searchReducer from './reducers/searchSlice'
import genresReducer from './reducers/genresSlice'

export const store = configureStore({
  reducer: {
    titles: titlesReducer,
    title: titleReducer,
    search: searchReducer,
    genres: genresReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
