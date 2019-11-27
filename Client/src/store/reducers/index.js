import loginUser from './LoginStatus'
import registerUser from './UserRegister'
import fetchFavorite from './FetchFavorite'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    login: loginUser,
    register: registerUser,
    favorite: fetchFavorite
})

export default rootReducers
