import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { estadoTareas } from "./reducers/tareasReducer";

const reducers = combineReducers({
  estadoTareas: estadoTareas,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware());

export const store = createStore(reducers, enhancer);
