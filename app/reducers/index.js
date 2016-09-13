/**
 * Created by vison on 16/8/17.
 */
import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import commonReducer from './commonReducer'

export default rootReducer = combineReducers({
    account: loginReducer,
    common: commonReducer
});