import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productReducer, productDetailsReducer } from "../reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers/userReducers";

const middleware = [thunk];

// Load state from localStorage if available
const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators, and other options if needed
});

const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  userAuth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
  devTools: { trace: true, traceLimit: 25 },
  preloadedState,
});

// Save state to localStorage whenever the state changes
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
