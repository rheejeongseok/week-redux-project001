import rootReducer from "../reducers/rootReducer";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";

// logger 생성
const logger = createLogger();
// thunk 생성 (비동기 프로그램)
const initState = {}
const middleware=[thunk,logger];

const store = createStore(
    rootReducer,
    initState,
    compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store