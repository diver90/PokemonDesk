import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './store';

const enhancers: [] = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENCION_COMPOSE__) || compose;

    if (typeof devToolsExtension === 'function') {
        // @ts-ignore
        enhancers.push(devToolsExtension());
    }
}

function configStore(preloadedState = {}) {
    // @ts-ignore
    const store = createStore(
        createRootReducer(),
        preloadedState,
        compose(
            applyMiddleware(thunk),
            ...enhancers
        )
    );
    return store;
}

export default configStore;