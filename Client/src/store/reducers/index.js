import loginUser from './LoginStatus'
import registerUser from './UserRegister'
import fetchFavorite from './FetchFavorite'
import addFavorite from './AddFavorite'
import deleteFavorite from './DeleteFavorite'

import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    login: loginUser,
    register: registerUser,
    favorite: fetchFavorite,
    addFavorite,
    deleteFavorite
})

export default rootReducers
