import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './rootReducer'
import { rootSaga } from './rootSaga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)

// Run the saga
sagaMiddleware.run(rootSaga)

export default store
