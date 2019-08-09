import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "./promise";
import array from "./array";
import whitelist from "./whitelist";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/AppReducer";

const logger = createLogger();
const persistConfig = {
  whitelist,
  key: "root",
  storage: storage
};

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(...middlewares, ...[thunk, promise, array, logger])
);
export const persistor = persistStore(store);
