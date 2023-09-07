import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"

import { rootReducer } from "state/root/reducer"
import rootSaga from "state/root/saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

const isDevelopment = true
export const persistor = isDevelopment
  ? require("redux-persist").persistStore(store)
  : null

sagaMiddleware.run(rootSaga)

export default store
