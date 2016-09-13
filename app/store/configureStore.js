/**
 * Created by vison on 16/8/17.
 */
import { createStore,applyMiddleware } from 'redux'
import loginReducer from '../reducers'
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        loginReducer,
        initialState,
        applyMiddleware(thunk)
    )
}