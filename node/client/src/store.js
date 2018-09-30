import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rootReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createEncryptor from 'redux-persist-transform-encrypt';

const initialState = {};
const middleWare = [thunk];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(...middleWare),
//   )
// );

// const persistor = persistStore(store)
// export default {store, persistor};

const encryptor = createEncryptor({
  secretKey: 'superd00p3rk3y',
  onError: function(error) {
    // Handle the error.
  }
})
const persistConfig = {
  transforms: [encryptor],
  key: 'root',
  storage,
}

export default function configureStore() {
  const persistedReducer = persistReducer(persistConfig,rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );

  // @NOTE not sure what this does, assuming listeners is defined outside of this method?
  const persistor = persistStore(store);
  return { store, persistor };
}
