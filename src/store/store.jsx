import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productReducer, productDetailsReducer } from "../reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers/userReducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const middleware = [thunk];

const preloadedState = {};

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  userAuth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(...middleware),
  devTools: { trace: true, traceLimit: 25 },
  preloadedState,
});

export const persistor = persistStore(store);
