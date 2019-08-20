import { createStore, combineReducers } from 'redux';
//import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {feedbackReducer} from './feedback/reducers';

const rootReducer = combineReducers({
    feedback: feedbackReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
//    const middlewares = [thunkMiddleware];
//    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        rootReducer,
//        composeWithDevTools(middleWareEnhancer)
        composeWithDevTools()
    );
    return store;
}
