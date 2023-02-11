import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, useDispatch, useSelector };
