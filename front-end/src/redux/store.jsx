import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
//pour connecter le sotre à dev tools
//const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



export const store = createStore(rootReducer, applyMiddleware(thunk) )