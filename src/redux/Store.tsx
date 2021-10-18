import { combineReducers, createStore } from 'redux';
import { createSelectorHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { systemReducer } from "./SystemReducer";

export type IRootState = ReturnType<typeof rootReducer>
export const useSelector = createSelectorHook<IRootState>();

const rootReducer = combineReducers({
    system: systemReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store;
