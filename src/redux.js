import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import rootReducer from 'store/reducers/rootReducer';
import thunk from 'redux-thunk';

// Thunk: Async Await
// Middleware <-> API
const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
};
export default reduxConfig;
