// third-party
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector, TypedUseSelectorHook } from 'react-redux';

// project import
import reducer from './reducer';

// types
import { RootStateProps } from 'types/root';

// ------------------------| REDUX TOOLKIT - MAIN STORE  |------------------------ //

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

const persister = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootStateProps> = useAppSelector;

export { store, dispatch, persister, useSelector, useDispatch };
