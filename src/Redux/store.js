import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import filterSlice from './filter/filterSlice';
import favoriteSlice from './favorites/favoriteSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage: storage,
  whitelist: ['favorites'],
}

const rootReducer = combineReducers({
  filter: filterSlice,
  favorites: persistReducer(favoritesPersistConfig, favoriteSlice),
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
