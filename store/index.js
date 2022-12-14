import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import reducer from './modules';
import logger from 'redux-logger';

const makeStore = () => configureStore({ 
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});