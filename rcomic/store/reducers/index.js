import {combineReducers} from 'redux'
import auth from './userReducer'
export default combineReducers({
    post:auth
})