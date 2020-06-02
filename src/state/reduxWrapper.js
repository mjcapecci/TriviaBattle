import React from "react"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import rootReducer from "."

const middleware = [thunk]

const gatsbyCreateStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default ({ element }) => (
  <Provider store={gatsbyCreateStore()}>{element}</Provider>
)
