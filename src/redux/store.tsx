import { createStore, combineReducers, applyMiddleware } from "redux";
import commonReducer from "./reducer/commonReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    common: commonReducer,
});

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}
